import { defineConfig } from "vitepress";
import { resolve } from "path";

import pkgComponents from "../../packages/components/package.json";
import pkgIcons from "../../packages/icons/package.json";
import pkgStyle from "../../packages/style/package.json";
import pkgUtils from "../../packages/utils/package.json";

export default defineConfig({
    title: "Bestiary UI",
    description: "Modular ecosystem for high-performance web applications",
    base: "/bestiary-ui/",

    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Guide", link: "/guide/installation" },
            {
                text: "Modules",
                items: [
                    { text: `Components (v${pkgComponents.version})`, link: "/components/" },
                    { text: `Icons (v${pkgIcons.version})`, link: "/icons/" },
                    { text: `Style (v${pkgStyle.version})`, link: "/style/" },
                    { text: `Utils (v${pkgUtils.version})`, link: "/utils/" }
                ]
            }
        ],

        sidebar: {
            "/guide/": [
                {
                    text: "Introduction",
                    items: [
                        { text: "Installation", link: "/guide/installation" }
                    ]
                }
            ],
            "/components/": [
                {
                    text: "Getting Started",
                    items: [
                        { text: "Introduction", link: "/components/" },
                        { text: `Changelog ${pkgComponents.version}`, link: "/components/changelog" }
                    ]
                },
                {
                    text: "General",
                    collapsed: false,
                    items: [
                        { text: "Button", link: "/components/general/button" },
                    ]
                },
                {
                    text: "Layout",
                    collapsed: false,
                    items: [

                    ]
                },
                {
                    text: "Navigation",
                    collapsed: false,
                    items: [

                    ]
                },
                {
                    text: "Data Entry",
                    collapsed: false,
                    items: [

                    ]
                },
                {
                    text: "Data Display",
                    collapsed: false,
                    items: [
                        { text: "Badge", link: "/components/data-display/badge" },
                    ]
                },
                {
                    text: "Feedback",
                    collapsed: false,
                    items: [

                    ]
                },
            ],

            "/style/": [
                {
                    text: "Getting Started",
                    collapsed: false,
                    items:[
                        { text: "Introduction", link: "/style/" },
                        { text: "Installation", link: "/style/installation" },
                        { text: "CSS Layers", link: "/style/css-layers" },
                    ]
                },
                {
                    text: "Design Tokens",
                    collapsed: false,
                    items: [
                        { text: "The Token Pipeline", link: "/style/token-pipeline" },
                        { text: "Semantic Contract", link: "/style/design-tokens/semantic-contract" },
                        { text: "Palettes", link: "/style/design-tokens/palettes" },
                        { text: "Layout", link: "/style/design-tokens/layout" },
                        { text: "Typography", link: "/style/design-tokens/typography" },
                        { text: "Effects", link: "/style/design-tokens/effects" },
                        { text: "Borders", link: "/style/design-tokens/borders" },
                        { text: "Behavior", link: "/style/design-tokens/behavior" },
                    ]
                },
                {
                    text: "Component API",
                    collapsed: false,
                    items:[
                        { text: "Button", link: "/style/components/button" },
                        // Інші компоненти будуть тут...
                    ]
                },
                {
                    text: "Advanced & DX",
                    items:[
                        { text: "IDE Integration", link: "/style/ide-integration" },
                        { text: "Performance & Exports", link: "/style/performance" },
                    ]
                }
            ],

            "/icons/": [
                {
                    text: `Icons v${pkgIcons.version}`,
                    items: [
                        { text: "Icons", link: "/icons/" },
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/bestiary/bestiary-ui" }
        ],

        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2026-present Bestiary UI"
        }
    },

    vite: {
        resolve: {
            alias: {
                "@bestiary-ui/components": resolve(__dirname, "../../packages/components/src"),
                "@bestiary-ui/style": resolve(__dirname, "../../packages/style/src/index.css"),
                "@bestiary-ui/icons": resolve(__dirname, "../../packages/icons/generated"),
                "@bestiary-ui/icons/metadata.json": resolve(__dirname, "../../packages/icons/generated/metadata.json")
            }
        }
    }
});