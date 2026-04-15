# Claude Code 与 Codex 实践手册

这个仓库现在使用 **VitePress** 渲染，方便你拉到本地后直接在浏览器里阅读。

## 本地开发

```bash
npm install
npm run docs:dev
```

运行后，打开终端里显示的本地 VitePress 地址即可。

## 构建

```bash
npm run docs:build
```

## 主要内容

文档站点内容位于 `docs/` 目录下。

- `docs/index.md` —— 站点首页
- `docs/.vitepress/config.mts` —— VitePress 配置
- `docs/01-overview.md` 到 `docs/05-daily-workflows.md` —— 核心文档内容
- `docs/prompts.md` —— 提示词模板
