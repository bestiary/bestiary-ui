import {defineConfig, type UserConfig, type DefaultTheme} from "vitepress";
import {resolve} from "path";

import pkgComponents from "../../packages/components/package.json";
import pkgIcons from "../../packages/icons/package.json";
import pkgStyle from "../../packages/style/package.json";
import pkgUtils from "../../packages/utils/package.json";

interface CustomThemeConfig extends DefaultTheme.Config {
    publicVersions?: {
        style: string;
        icons: string;
        components: string;
        utils: string;
    };
}

const config: UserConfig<CustomThemeConfig> = {
    title: "Bestiary UI",
    description: "Modular ecosystem for high-performance web applications",
    base: "/bestiary-ui/",
    head: [
        ['link', { rel: 'icon', href: '/bestiary-ui/favicon.ico' }]
    ],

    locales: {
        root: {
            label: "English",
            lang: "en-US",
            themeConfig: {
                nav: [
                    {text: "Home", link: "/"},
                    {text: "Guide", link: "/guide/installation"},
                    {
                        text: "Modules",
                        items: [
                            {text: `Components (v${pkgComponents.version})`, link: "/components/"},
                            {text: `Icons (v${pkgIcons.version})`, link: "/icons/"},
                            {text: `Style (v${pkgStyle.version})`, link: "/style/"},
                            {text: `Utils (v${pkgUtils.version})`, link: "/utils/"}
                        ]
                    }
                ],
                sidebar: {
                    "/guide/": [
                        {
                            text: "Introduction", items: [
                                {text: "Installation", link: "/guide/installation"}
                            ]
                        }
                    ],
                    "/components/": [
                        {
                            text: "Getting Started",
                            collapsed: false,
                            items: [
                                {text: "Introduction", link: "/components/"}
                            ]
                        },
                        {
                            text: "General",
                            collapsed: false,
                            items: [
                                {text: "Button", link: "/components/general/button"}
                            ]
                        },
                        {
                            text: "Data Display",
                            collapsed: false,
                            items: [
                                {text: "Avatar", link: "/components/data-display/avatar"}
                            ]
                        },
                    ],
                    "/style/": [
                        {
                            text: "Getting Started", collapsed: true, items: [
                                {text: "Introduction", link: "/style/"},
                                {text: "Installation", link: "/style/installation"},
                                {text: "CSS Layers", link: "/style/css-layers"}
                            ]
                        },
                        {
                            text: "Design Tokens",
                            collapsed: true,
                            items: [
                                {text: "The Token Pipeline", link: "/style/tokens/token-pipeline"},
                                {text: "Semantic Contract", link: "/style/tokens/semantic-contract"},
                                {text: "Palettes", link: "/style/tokens/palettes"},
                                {text: "Layout", link: "/style/tokens/layout"},
                                {text: "Typography", link: "/style/tokens/typography"},
                                {text: "Effects", link: "/style/tokens/effects"},
                                {text: "Borders", link: "/style/tokens/borders"},
                                {text: "Behavior", link: "/style/tokens/behavior"}
                            ]
                        },
                        {
                            text: "Atomic Utilities",
                            collapsed: true,
                            items: [
                                {text: "Overview", link: "/style/utilities/"},
                                {text: "Spacing", link: "/style/utilities/spacing"},
                                {text: "Sizing", link: "/style/utilities/sizing"},
                                {text: "Layout", link: "/style/utilities/layout"},
                                {text: "Composition", link: "/style/utilities/composition"},
                                {text: "Typography", link: "/style/utilities/typography"},
                                {text: "Interactivity", link: "/style/utilities/interactivity"},
                                {text: "Effects", link: "/style/utilities/effects"},
                                {text: "Borders", link: "/style/utilities/borders"}
                            ]
                        },
                        {
                            text: "Component API",
                            collapsed: false,
                            items: [
                                {
                                    text: "General",
                                    items: [
                                        {text: "Button", link: "/style/components/general/button"}
                                    ]
                                },
                                {
                                    text: "Layout",
                                    items: [
                                        {text: "Divider", link: "/style/components/layout/divider"}
                                    ]
                                },
                                {
                                    text: "Navigation",
                                    items: [

                                    ]
                                },
                                {
                                    text: "Data Entry",
                                    items: [

                                    ]
                                },
                                {
                                    text: "Data Display",
                                    items: [
                                        {text: "Avatar", link: "/style/components/data-display/avatar"},
                                    ]
                                },
                                {
                                    text: "Feedback",
                                    items: [

                                    ]
                                }
                            ]
                        },
                    ],
                    "/icons/": [
                        {
                            text: `Icons v${pkgIcons.version}`, items: [
                                {text: "Icons", link: "/icons/"}
                            ]
                        }
                    ]
                },
                footer: {
                    message: "Released under the MIT License.",
                    copyright: "Copyright © 2026 Bestiary UI"
                }
            }
        },
        ua: {
            label: "Українська",
            lang: "uk-UA",
            link: "/ua/",
            themeConfig: {
                nav: [
                    {text: "Головна", link: "/ua/"},
                    {text: "Документація", link: "/ua/guide/installation"},
                    {
                        text: "Модулі",
                        items: [
                            {text: `Компоненти (v${pkgComponents.version})`, link: "/ua/components/"},
                            {text: `Іконки (v${pkgIcons.version})`, link: "/ua/icons/"},
                            {text: `Стилі (v${pkgStyle.version})`, link: "/ua/style/"},
                            {text: `Утиліти (v${pkgUtils.version})`, link: "/ua/utils/"}
                        ]
                    }
                ],
                sidebar: {
                    "/ua/guide/": [
                        {
                            text: "Вступ", items: [
                                {text: "Встановлення", link: "/ua/guide/installation"}
                            ]
                        }
                    ],
                    "/ua/components/": [
                        {
                            text: "Початок роботи",
                            items: [
                                {text: "Вступ", link: "/components/"}
                            ]
                        },
                        {
                            text: "Основне",
                            items: [

                            ]
                        },
                        {
                            text: "Макет",
                            items: [

                            ]
                        },
                        {
                            text: "Навігація",
                            items: [

                            ]
                        },
                        {
                            text: "Введення даних",
                            items: [

                            ]
                        },
                        {
                            text: "Відображення даних",
                            items: [
                                {text: "Avatar", link: "/ua/components/data-display/avatar"},
                            ]
                        },
                        {
                            text: "Відгуки",
                            items: [

                            ]
                        }
                    ],
                    "/ua/style/": [
                        {
                            text: "Початок роботи",
                            collapsed: true,
                            items: [
                                {text: "Вступ", link: "/ua/style/"},
                                {text: "Встановлення", link: "/ua/style/installation"},
                                {text: "CSS Шари", link: "/ua/style/css-layers"}
                            ]
                        },
                        {
                            text: "Дизайн-токени",
                            collapsed: true,
                            items: [
                                {text: "Token Pipeline", link: "/ua/style/tokens/token-pipeline"},
                                {text: "Семантичний контракт", link: "/ua/style/tokens/semantic-contract"},
                                {text: "Палітри", link: "/ua/style/tokens/palettes"},
                                {text: "Layout", link: "/ua/style/tokens/layout"},
                                {text: "Типографіка", link: "/ua/style/tokens/typography"},
                                {text: "Ефекти", link: "/ua/style/tokens/effects"},
                                {text: "Бордери", link: "/ua/style/tokens/borders"},
                                {text: "Behavior", link: "/ua/style/tokens/behavior"}
                            ]
                        },
                        {
                            text: "Утиліти",
                            collapsed: true,
                            items: [
                                {text: "Огляд", link: "/ua/style/utilities/"},
                                {text: "Відступи (Spacing)", link: "/ua/style/utilities/spacing"},
                                {text: "Розміри (Sizing)", link: "/ua/style/utilities/sizing"},
                                {text: "Layout", link: "/ua/style/utilities/layout"},
                                {text: "Композиція", link: "/ua/style/utilities/composition"},
                                {text: "Типографіка", link: "/ua/style/utilities/typography"},
                                {text: "Інтерактивність", link: "/ua/style/utilities/interactivity"},
                                {text: "Ефекти", link: "/ua/style/utilities/effects"},
                                {text: "Бордери", link: "/ua/style/utilities/borders"}
                            ]
                        },
                        {
                            text: "API Компонентів",
                            collapsed: false,
                            items: [
                                {
                                    text: "Основне",
                                    items: [

                                    ]
                                },
                                {
                                    text: "Макет",
                                    items: [

                                    ]
                                },
                                {
                                    text: "Навігація",
                                    items: [

                                    ]
                                },
                                {
                                    text: "Введення даних",
                                    items: [

                                    ]
                                },
                                {
                                    text: "Відображення даних",
                                    items: [
                                        {text: "Avatar", link: "/ua/style/components/data-display/avatar"},
                                    ]
                                },
                                {
                                    text: "Відгуки",
                                    items: [

                                    ]
                                }
                            ]
                        },
                    ],
                },
                outline: {label: 'На цій сторінці'},
                docFooter: {prev: 'Попередня сторінка', next: 'Наступна сторінка'},
                footer: {
                    message: "Випущено за ліцензією MIT.",
                    copyright: "Авторські права © 2026 Bestiary UI"
                }
            }
        }
    },

    themeConfig: {
        publicVersions: {
            style: pkgStyle.version,
            icons: pkgIcons.version,
            components: pkgComponents.version,
            utils: pkgUtils.version
        },
        socialLinks: [
            {icon: "github", link: "https://github.com/bestiary/bestiary-ui"}
        ]
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
};

export default defineConfig(config);