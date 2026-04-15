import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Claude Code 与 Codex 实践手册',
  description: '面向真实工程任务的 Claude Code 与 Codex 工作流、提示词模板与使用笔记。',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '工作流', link: '/05-daily-workflows' },
      { text: '提示词模板', link: '/prompts' },
    ],
    sidebar: [
      {
        text: '导览',
        items: [
          { text: '首页', link: '/' },
          { text: '概览：Claude Code 与 Codex', link: '/01-overview' },
          { text: 'Claude Code 实践', link: '/02-claude-code-practices' },
          { text: 'Codex 实践', link: '/03-codex-practices' },
          { text: '通用操作手册', link: '/04-shared-playbook' },
          { text: '日常工作流', link: '/05-daily-workflows' },
          { text: '提示词模板', link: '/prompts' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KM10101/claude-codex-practice' },
    ],
  },
})
