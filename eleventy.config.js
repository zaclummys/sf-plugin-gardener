import { existsSync, readFileSync } from "node:fs"
import { EleventyHtmlBasePlugin } from "@11ty/eleventy"
import markdownItAnchor from "markdown-it-anchor"

const markdownLink = /^([^":#/]+)\.md(#.*)?$/

/** Point a link to another rule page at its URL. The base plugin then adds the path prefix. */
function rewriteMarkdownLinks(state) {
    for (const token of state.tokens) {
        for (const child of token.children ?? []) {
            const match = child.type === "link_open" ? markdownLink.exec(child.attrGet("href")) : null

            if (match != null) {
                const [
                    , name,
                    anchor = "",
                ] = match
                const path = name === "README" ? "/rules/" : `/rules/${name}/`

                child.attrSet("href", path + anchor)
            }
        }
    }
}

const ruleName = /^([a-z0-9-]+\/)?[a-z0-9-]+$/

/** Where the code of a rule lives. A rule without a prefix is cross-cutting. */
function ruleFile(name) {
    const [
        namespace,
        rule = null,
    ] = name.split("/")

    return rule == null ? `packages/rules-cross-cutting/src/rules/${name}.ts` : `packages/rules-${namespace}/src/rules/${rule}.ts`
}

/** The status of a rule: implemented when its file exists, planned otherwise. */
function statusToken(state, name) {
    const implemented = existsSync(ruleFile(name))
    const token = new state.Token("html_inline", "", 0)

    token.content = implemented
        ? '<span class="status status-implemented">Implemented</span>'
        : '<span class="status status-planned">Planned</span>'

    return token
}

/** Put the status beside the name in each rule heading. */
function addRuleStatus(state) {
    state.tokens.forEach((token, index) => {
        const inline = token.type === "heading_open" && token.tag === "h2" ? state.tokens[index + 1] : null
        const code = inline?.children?.[0]

        if (code?.type === "code_inline" && ruleName.test(code.content)) {
            inline.children.push(statusToken(state, code.content))
        }
    })
}

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
    eleventyConfig.addPassthroughCopy({
        "assets/logo.svg": "logo.svg",
    })
    eleventyConfig.addPassthroughCopy({
        "node_modules/@fontsource/fredoka/files/fredoka-latin-500-normal.woff2": "fonts/fredoka-500.woff2",
        "node_modules/@fontsource/fredoka/files/fredoka-latin-600-normal.woff2": "fonts/fredoka-600.woff2",
    })

    eleventyConfig.amendLibrary("md", (md) => {
        md.core.ruler.push("markdownLinks", rewriteMarkdownLinks)
        md.core.ruler.push("ruleStatus", addRuleStatus)

        return md.use(markdownItAnchor, {
            slugify: (title) =>
                title
                    .trim()
                    .toLowerCase()
                    .replace(/\//g, "-")
                    .replace(/[^\p{L}\p{N}\s_-]/gu, "")
                    .replace(/\s/g, "-"),
        })
    })

    eleventyConfig.addCollection("catalog", (collection) => {
        const summary = readFileSync("docs/rules/README.md", "utf8")
        const order = [...summary.matchAll(/\]\(([^):#]+)\.md[#)]/g)].map((match) => match[1])
        const position = (page) => order.indexOf(page.fileSlug)

        return collection
            .getAll()
            .filter((page) => page.fileSlug === "README" || position(page) !== -1)
            .sort((first, second) => position(first) - position(second))
    })

    return {
        pathPrefix: process.env.PATH_PREFIX ?? "/",
        dir: {
            input: "docs",
            includes: "layouts",
            output: "site",
        },
    }
}
