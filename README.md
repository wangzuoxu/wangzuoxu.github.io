# Academic Homepage Template

这是一个基于 Eleventy 的中文学术主页模板，适合长期维护个人主页、论文列表和项目详情页。

## 现在的结构

- `src/index.njk`：首页模板
- `src/projects/project.njk`：项目详情页模板
- `src/_data/site.js`：主页基础信息
- `src/_data/publications.js`：论文数据
- `styles.css`：站点样式
- `papers/`：论文 PDF
- `.eleventy.js`：Eleventy 构建配置
- `.github/workflows/pages.yml`：GitHub Pages 自动部署

## 你以后主要改哪里

- 主页栏目、联系信息、项目入口：`data/site.json`
- 论文列表：`data/publications.json`
- 页面样式：`styles.css`
- 首页和项目页的 HTML 结构：`src/` 下面的模板

## 本地开发

先安装依赖：

```bash
npm install
```

启动本地预览：

```bash
npm run dev
```

构建静态站：

```bash
npm run build
```

## GitHub Pages 发布方式

这个模板默认使用 GitHub Actions 部署到 GitHub Pages。

发布流程：

1. 把仓库推送到 GitHub。
2. 到仓库 `Settings` > `Pages`。
3. 将 `Source` 设为 `GitHub Actions`。
4. 提交代码后，Action 会自动构建并部署到 Pages。

工作流会自动设置 `ELEVENTY_PATH_PREFIX`，以适配 GitHub Pages 的仓库子路径。

## 如果你要接入真实后端

当前模板是纯静态站，最适合 GitHub Pages。

如果后期要接真实 API，可以继续保留以下接口约定：

- `GET /api/site`
- `GET /api/publications`

前端模板不用大改，只需要把数据来源改成接口即可。
