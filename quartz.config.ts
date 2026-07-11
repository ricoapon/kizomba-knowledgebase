import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Kizomba",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "kizomba.ricoapon.nl",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7fbfa",
          lightgray: "#e3f0ee",
          gray: "#a7c7c0",
          darkgray: "#2f4f4f",
          dark: "#102a2a",
          secondary: "#0f766e",      // deep teal
          tertiary: "#d4a373",       // soft gold accent
          highlight: "rgba(15, 118, 110, 0.12)",
          textHighlight: "#ffe06688",
        },
        darkMode: {
          light: "#081414",
          lightgray: "#163232",
          gray: "#5e8b8b",
          darkgray: "#d1fae5",
          dark: "#ecfeff",
          secondary: "#14b8a6",
          tertiary: "#e6b980",
          highlight: "rgba(20, 184, 166, 0.18)",
          textHighlight: "#ffe06688",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      // Dates are irrelevant for my sites.
      // Plugin.CreatedModifiedDate({
      //   priority: ["frontmatter", "git", "filesystem"],
      // }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
