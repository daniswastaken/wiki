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
                items: [
                    { text: "How To Navigate the Wiki", link: "/getting-started/how-to-navigate-the-wiki" },
                ],
            },
            {
                text: "Updates",
                items: [{ text: "v26.1", link: "/updates/26-1-0" }],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
    },
});
