import { readFileSync } from "node:fs"
import markdownItAnchor from "markdown-it-anchor"

export default function (eleventyConfig) {
    eleventyConfig.addTransform("markdownLinks", function (content) {
        if (!this.page.outputPath?.endsWith(".html")) {
            return content
        }

        return content.replace(
            /href="([^":#/]+)\.md(#[^"]*)?"/g,
            (_match, name, anchor = "") => `href="${name === "README" ? "/rules/" : `/rules/${name}/`}${anchor}"`,
        )
    })

    eleventyConfig.amendLibrary("md", (md) =>
        md.use(markdownItAnchor, {
            slugify: (title) =>
                title
                    .trim()
                    .toLowerCase()
                    .replace(/\//g, "-")
                    .replace(/[^\p{L}\p{N}\s_-]/gu, "")
                    .replace(/\s/g, "-"),
        }),
    )

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
        dir: {
            input: "docs",
            includes: "layouts",
            output: "site",
        },
    }
}
