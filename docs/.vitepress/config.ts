import { defineConfig } from "vitepress";
import { resolve } from "path";

import pkgComponents from "../../packages/components/package.json";
import pkgIcons from "../../packages/icons/package.json";
import pkgStyle from "../../packages/style/package.json";
import pkgUtils from "../../packages/utils/package.json";

export default defineConfig({
    title: "Bestiary UI",
    description: "Modular ecosystem for high-performance Vue 3 applications",
    base: "/bestiary-ui/",

    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Guide", link: "/guide/installation" },
            {
                text: "Modules",
                items: [
                    { text: `Components (v${pkgComponents.version})`, link: "/collection/components/" },
                    { text: `Icons (v${pkgIcons.version})`, link: "/collection/icons/" },
                    { text: `Style (v${pkgStyle.version})`, link: "/collection/style/" },
                    { text: `Utils (v${pkgUtils.version})`, link: "/collection/utils/" }
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
            "/collection/components/": [
                {
                    text: "Getting Started",
                    items: [
                        { text: "Introduction", link: "/collection/components/" },
                        { text: `Changelog ${pkgComponents.version}`, link: "/collection/components/changelog" }
                    ]
                },
                {
                    text: "General",
                    collapsed: false,
                    items: [
                        { text: "Button", link: "/collection/components/general/button" },
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
                        { text: "Badge", link: "/collection/components/data-display/badge" },
                    ]
                },
                {
                    text: "Feedback",
                    collapsed: false,
                    items: [

                    ]
                },
            ],
            "/collection/style/": [
                {
                    text: `Style v${pkgStyle.version}`,
                    items: [
                        { text: "Introduction", link: "/collection/style/" },
                    ]
                }
            ],
            "/collection/icons/": [
                {
                    text: `Icons v${pkgIcons.version}`,
                    items: [
                        { text: "Icons", link: "/collection/icons/" },
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