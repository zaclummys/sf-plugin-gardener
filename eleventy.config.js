import { readFileSync } from "node:fs"
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

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

    eleventyConfig.amendLibrary("md", (md) => {
        md.core.ruler.push("markdownLinks", rewriteMarkdownLinks)

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
