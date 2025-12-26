import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Bedrock Perfected Wiki",
    description: "A Wiki for Bedrock Perfected Addon",

    head: [["link", { rel: "icon", href: "/favicon.ico" }]],

    cleanUrls: true,

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: "local",
        },

        logo: "/logo.svg",

        nav: [{ text: "Home", link: "/" }],

        sidebar: [
            {
                text: "Getting Started",
                collapsed: false,
                items: [
                    { text: "How To Navigate the Wiki", link: "/getting-started/how-to-navigate-the-wiki" }
                ],
            },
            {
                text: "Quality of Life",
                collapsed: false,
                items: [
                    { text: "Craftables", link: "/qol/craftables" },
                    { text: "Smeltables", link: "/qol/smeltables" },
                    { text: "Stonecutterables", link: "/qol/stonecutterables" },
                    { text: "Unpackables", link: "/qol/unpackables" },
                    { text: "Just More", link: "/qol/just-more" }
                ],
            },
            {
                text: "Texture Improvement",
                collapsed: false,
                items: [
                    { text: "Dark UI", link: "/texture-improvement/dark-ui" },
                    { text: "Villager Skin Tones", link: "/texture-improvement/villager-skin-tones" }
                ],
            },
            {
                text: "Updates",
                collapsed: false,
                items: [{ text: "v26.1", link: "/updates/26-1-0" }],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/daniswastaken/bedrock-perfected" },
            { icon: "discord", link: "https://discord.gg/R6b8HzYKtg" }
        ],
    },
});
