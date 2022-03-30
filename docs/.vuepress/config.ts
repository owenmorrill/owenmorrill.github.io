import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    lang: 'en-US',
    title: 'Snyk VueDocs',
    description: 'Much like Highlander, there can be only one.',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/snyk-api.svg',
        favicon: '/favicon.ico',
    },
})