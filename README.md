# Academic Homepage

这是一个基于 Eleventy 的个人学术主页模板，适合部署到 GitHub Pages。

## 维护说明

当前网站主要通过两份数据维护：

- `data/site.json`：主页基础信息
- `data/publications.json`：论文列表

也就是说：

- 想改首页中英文内容、联系方式、栏目顺序、项目介绍、教学和荣誉，优先改 `data/site.json`
- 想改论文列表，改 `data/publications.json`
- `src/_data/site.js` 只是读取 `data/site.json` 的入口，一般不用直接改
- `src/_data/publications.js` 只是读取 `data/publications.json` 的入口，一般也不用直接改

## 推荐修改位置

### 1. 主页内容

编辑 [data/site.json](./data/site.json)：

- 个人简介
- 中英文首页文案
- 联系方式
- 教育经历
- 工作经历
- 研究方向
- 研究项目
- 专利与著述
- 教学经历
- 学术荣誉与服务

### 2. 论文列表

编辑 [data/publications.json](./data/publications.json)：

- 新增论文
- 删除论文
- 修改论文标题、作者、期刊、年份、DOI、PDF 链接

### 3. 页面模板

如果你要调整首页排版、栏目结构或模块显示逻辑，请编辑：

- [src/_includes/partials/home-page.njk](./src/_includes/partials/home-page.njk)
- [src/_includes/layouts/base.njk](./src/_includes/layouts/base.njk)

### 4. 样式

如果你要调整颜色、间距、字体、按钮样式，请编辑 [styles.css](./styles.css)。

## 本地运行

安装依赖：

```bash
npm install
```

启动本地预览：

```bash
npm run dev
```

构建静态站点：

```bash
npm run build
```

## 数据结构

### `data/site.json`

建议保留以下结构：

- `brand`
- `publicationsUrl`
- `defaultLang`
- `locales.zh`
- `locales.en`

其中：

- `locales.zh` 对应中文首页
- `locales.en` 对应英文首页

如果你想新增字段，建议在中英文两份内容里同步补齐，避免两个页面显示不一致。

### `data/publications.json`

每条论文建议包含这些字段：

- `year`
- `title`
- `journal`
- `volume`
- `pages`
- `kind`
- `authors`
- `doi`
- `pdf`

如果 `pdf` 指向站内文件，比如 `papers/` 目录，主页会自动生成 PDF 链接。

## 当前实现方式

- 主页数据统一从 `data/site.json` 读取
- 论文数据统一从 `data/publications.json` 读取
- `script.js` 也会优先使用这两份数据渲染前端页面

如果以后要继续精简维护流程，可以再考虑把某些栏目拆成更细的 JSON 模块。
