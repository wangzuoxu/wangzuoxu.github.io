# 学术主页

这是一个前后端分离的个人学术主页项目。

## 结构

- `index.html`：前端入口，只保留页面壳子
- `script.js`：前端渲染逻辑，从接口或本地 JSON 读取数据
- `styles.css`：样式
- `data/site.json`：主页基础信息、栏目结构、项目入口
- `data/publications.json`：论文列表
- `backend/server.js`：最小 API 后端骨架

## 数据维护

后期你主要维护 `data/site.json` 和 `data/publications.json` 就可以了。

如果接入真实后端，只要保持下面两个接口即可：

- `GET /api/site`
- `GET /api/publications`

如果前端和后端分开部署，可以在页面里先设置 `window.__API_BASE__`，例如：

```html
<script>
  window.__API_BASE__ = "https://api.example.com";
</script>
```

## 本地预览

### 纯静态预览

直接用任意静态服务器打开 `academicpage-githubio` 目录。

### 带 API 的预览

```bash
node backend/server.js
```

然后访问 `http://localhost:8787`

## GitHub Pages

GitHub Pages 适合部署前端静态页。如果你要启用真实后端接口，需要把 API 单独部署到别的服务上，再让前端去请求那个地址。

## 推荐发布方案

我建议采用下面这个组合：

- 前端：GitHub Pages
- 后端：单独部署一个 Node API 服务
- 数据：优先放在 `data/`，以后再接数据库

这样做的好处是：

- 首页可以继续免费托管
- 后端可以独立扩展
- 你只需要维护 JSON 数据就能更新主页

## 可执行步骤

### 1. 准备仓库

1. 确认 `academicpage-githubio` 目录里的前端文件都已提交。
2. 确认 `data/site.json` 和 `data/publications.json` 内容正确。
3. 本地先用静态方式打开页面，确认首页、论文、项目页都能正常显示。

### 2. 发布前端到 GitHub Pages

1. 把这个站点所在仓库推送到 GitHub。
2. 进入仓库 `Settings` > `Pages`。
3. 选择 Pages 来源为 `Deploy from a branch`。
4. 选择 `main` 分支和站点目录。
5. 保存后等待 GitHub 生成页面地址。
6. 如果你计划前后端分离，前端页面里保留 `window.__API_BASE__` 入口，后面好切换 API 地址。

### 3. 发布后端 API

1. 把 `academicpage-githubio/backend/server.js` 单独作为一个 Node 服务部署。
2. 部署后确认能访问：
   - `/api/site`
   - `/api/publications`
   - `/health`
3. 把后端的公开地址写成 `window.__API_BASE__`。

示例：

```html
<script>
  window.__API_BASE__ = "https://api.your-domain.com";
</script>
```

### 4. 连接前后端

1. 打开 GitHub Pages 的前端页面。
2. 确认页面能从后端拿到数据。
3. 如果接口跨域，确认后端允许 `Access-Control-Allow-Origin`。
4. 检查论文 PDF、项目详情页和 demo 页是否都能正常跳转。

### 5. 后续维护

以后你只要改这些地方：

- 修改首页栏目和项目入口：`data/site.json`
- 修改论文列表：`data/publications.json`
- 修改样式：`styles.css`
- 修改页面渲染逻辑：`script.js`

如果未来接数据库，就把 API 的实现从 JSON 读取改成数据库查询，前端通常不用重写。
