import { defineConfig } from "vitepress";

const isGitHubPages = process.env.VITE_GITHUB_PAGES === 'true'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: isGitHubPages ? '/wiki/' : '/',

    title: "Bedrock Perfected Wiki",
    description: "A Wiki for Bedrock Perfected Addon",

    head: [["link", { rel: "icon", href: isGitHubPages ? '/wiki/favicon.ico' : '/favicon.ico' }]],

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
                    { text: "How To Navigate the Wiki", link: "/getting-started/how-to-navigate-the-wiki" },
                    // { text: "New Updates!", link: "/getting-started/new-updates" }
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
                text: "New Mechanics",
                collapsed: false,
                items: [
                    { text: "Damage Indicator", link: "/new-mechanics/damage-indicator" },
                    { text: "Biome Notifier", link: "/new-mechanics/biome-notifier" },
                    { text: "Random Villager Names", link: "/new-mechanics/random-villager-names" },
                    { text: "Random Iron Golem Names", link: "/new-mechanics/random-iron-golem-names" },
                    { text: "Coordinates Compass", link: "/new-mechanics/coordinates-compass" }
                ],
            },
            {
                text: "New Items",
                collapsed: false,
                items: [
                    { text: "Addon Configuration", link: "/new-items/addon-configuration" },
                    { text: "Scroll of the Hearth", link: "/new-items/scroll-of-the-hearth" },
                ],
            },
            {
                text: "Texture Improvement",
                collapsed: false,
                items: [
                    { text: "Clear Glass", link: "/texture-improvement/clear-glass" },
                    { text: "Texture Variation", link: "/texture-improvement/texture-variation" },
                    { text: "Fancier Sunflower", link: "/texture-improvement/fancier-sunflower" },
                    { text: "Different Stems", link: "/texture-improvement/different-stems" },
                    { text: "Villager Skin Tones", link: "/texture-improvement/villager-skin-tones" },
                    { text: "Golden Savanna", link: "/texture-improvement/golden-savanna" },
                    { text: "Pink End Rods", link: "/texture-improvement/pink-end-rods" },
                    { text: "Sticky Piston Sides", link: "/texture-improvement/sticky-piston-sides" },
                ],
            },
            {
                text: "Better UI",
                collapsed: false,
                items: [
                    { text: "Dark UI", link: "/better-ui/dark-ui" },
                    { text: "Brewing Guide UI", link: "/better-ui/brewing-guide-ui" },
                    { text: "Show All Trades", link: "/better-ui/show-all-trades" },
                    { text: "Quick Crafting", link: "/better-ui/quick-crafting" },
                    { text: "Lower Shield", link: "/better-ui/lower-shield" },
                    { text: "Clearer Wither Hearts", link: "/better-ui/clearer-wither-hearts" },
                    { text: "No Vignette", link: "/better-ui/no-vignette" },
                    { text: "No How To Play", link: "/better-ui/no-how-to-play" },
                ],
            },
            {
                text: "Updates",
                collapsed: false,
                items: [
                    { text: "v26.2.1", link: "/updates/26-2-1" },
                    { text: "v26.2", link: "/updates/26-2-0" },
                    { text: "v26.1", link: "/updates/26-1-0" }
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/daniswastaken/bedrock-perfected" },
            { icon: "discord", link: "https://discord.gg/R6b8HzYKtg" }
        ],
    },
});
