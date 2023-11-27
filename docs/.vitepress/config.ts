import { defineConfig } from 'vitepress'
// import { mdPlugin } from './config/plugins'
export default defineConfig({
  title: 'Element Plus Learn',
  description: '基于Element Plus组件的学习',
  lang: 'cn-ZH',
  base: '/',
  lastUpdated: true,
  markdown: {
    headers: {
      level: [0, 0],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },
    // config: (md) => mdPlugin(md),
  },
})
