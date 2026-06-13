# Academic Homepage Template

这是一个面向个人主页仓库的 Eleventy 静态站模板，适合发布到 `https://wangzuoxu.github.io/` 这种 GitHub Pages 根站点。

## 仓库类型

你的仓库是个人主页仓库，也就是：

- 仓库名通常是 `wangzuoxu.github.io`
- 站点地址是 `https://wangzuoxu.github.io/`
- 不是项目页子路径形式，所以不需要 `/repo-name/` 前缀

## 站点结构

- `src/index.njk`：首页模板
- `src/projects/project.njk`：项目详情页模板
- `src/_data/site.js`：主页基础信息
- `src/_data/publications.js`：论文数据
- `styles.css`：站点样式
- `.eleventy.js`：Eleventy 构建配置
- `.github/workflows/pages.yml`：GitHub Pages 自动部署

## 本地开发

安装依赖：

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

## GitHub Pages 发布

对于个人主页仓库，推荐使用 GitHub Actions 发布到 Pages。

### 需要做的设置

1. 打开 GitHub 仓库。
2. 进入 `Settings` > `Pages`。
3. 将 `Source` 设置为 `GitHub Actions`。
4. 推送到 `main` 分支后，Actions 会自动构建并部署。

### 个人主页的路径说明

因为这是根站点，页面资源应该直接从站点根路径加载，例如：

- `/styles.css`
- `/papers/...`

不应该再拼接 `/<repo-name>/` 这种项目页前缀。

## 如果你之后还想接真实后端

静态站模板已经适合当前的 GitHub Pages 发布方式。  
如果未来需要接 API，可以继续沿用下面的接口约定：

- `GET /api/site`
- `GET /api/publications`

前端模板只要改数据来源即可，不必重写页面结构。
