import { defineConfig } from "vitepress";
import { resolve } from "path";

import pkgComponents from "../../components/package.json";
import pkgIcons from "../../icons/package.json";
import pkgStyle from "../../style/package.json";
import pkgUtils from "../../utils/package.json";

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
                    { text: `Components (v${pkgComponents.version})`, link: "/components/button" },
                    { text: `Icons (v${pkgIcons.version})`, link: "/collection/icons" },
                    { text: `Style (v${pkgStyle.version})`, link: "/style/tokens" },
                    { text: `Utils (v${pkgUtils.version})`, link: "/utils/introduction" }
                ]
            }
        ],


        sidebar: {
            "/guide/": [
                {
                    text: "Introduction",
                    items: [
                        { text: "Installation", link: "/guide/installation" },
                        // { text: "Architecture", link: "/guide/architecture" }
                    ]
                }
            ],
            "/components/": [
                {
                    text: `Components v${pkgComponents.version}`,
                    items: [
                        { text: "Button", link: "/components/button" },
                        { text: "Badge", link: "/components/badge" },
                        { text: "Splitter", link: "/components/splitter" },
                        { text: "Card", link: "/components/card" }
                    ]
                }
            ],
            "/style/": [
                {
                    text: `Style v${pkgStyle.version}`,
                    items: [
                        { text: "Design Tokens", link: "/style/tokens" },
                        { text: "Utility Classes", link: "/style/utilities" }
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/bestiary-ui/bestiary-ui" }
        ],

        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2026-present Bestiary UI"
        }
    },

    vite: {
        resolve: {
            alias: {
                "@bestiary-ui/components": resolve(__dirname, "../../components/src"),
                "@bestiary-ui/style": resolve(__dirname, "../../style/src/index.css"),
                "@bestiary-ui/icons": resolve(__dirname, "../../icons/generated"),
                "@bestiary-ui/icons/metadata.json": resolve(__dirname, "../../icons/generated/metadata.json")
            }
        }
    }
});