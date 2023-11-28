import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
export default defineConfig({
  title: '基于Element-plus基础组件',
  description: '基于Element-plus基础组件',
  lang: 'cn-ZH',
  base: '/',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'element文档解析',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/whenTheMorningDark/element-learn' },
    ],
    nav: [
      { text: '基础组件', link: '/components/button.md' },
    ],
    sidebar: {
      '/components': [
        { text: '按钮', link: '/components/button.md' }
      ],
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => mdPlugin(md),
  },
})
