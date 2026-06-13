# 后端 API

这个目录放的是学术主页的最小后端骨架。

## 提供的接口

- `GET /api/site`
- `GET /api/publications`
- `GET /health`

## 本地启动

```bash
node backend/server.js
```

默认监听 `http://localhost:8787`。

## 数据维护方式

- 前端只负责渲染页面。
- `data/site.json` 管理主页基础信息、栏目结构和项目入口。
- `data/publications.json` 管理论文列表。
- 如果后期你要接数据库，只需要把这些接口替换成真实服务即可，前端代码基本不用动。
