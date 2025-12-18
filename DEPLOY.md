# 部署指南

## 部署到 Vercel

### 准备工作

1. **确保所有文件已提交到 Git**
   ```bash
   git add .
   git commit -m "准备部署"
   ```

2. **推送到 GitHub**
   ```bash
   git push origin main
   ```

### Vercel 部署步骤

1. **登录 Vercel**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New Project"
   - 选择你的 GitHub 仓库
   - Vercel 会自动检测 Next.js 项目

3. **配置项目**
   - Framework Preset: Next.js（自动检测）
   - Root Directory: `./`（默认）
   - Build Command: `npm run build`（默认）
   - Output Directory: `.next`（默认）
   - Install Command: `npm install`（默认）

4. **环境变量**（如果需要）
   - 在项目设置中添加环境变量
   - 例如：数据库连接、API密钥等

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成
   - 部署成功后，Vercel 会提供一个 URL

### 访问静态 HTML 文件

部署后，可以通过以下 URL 访问静态 HTML 文件：
- 预览页面：`https://your-domain.vercel.app/preview.html`
- 印象桐城：`https://your-domain.vercel.app/impression-tongcheng.html`
- 茶事风物：`https://your-domain.vercel.app/tea-culture.html`

### Next.js 应用

Next.js 应用会自动处理多语言路由：
- 首页：`https://your-domain.vercel.app/zh`
- 产品列表：`https://your-domain.vercel.app/zh/products`
- 产品详情：`https://your-domain.vercel.app/zh/products/[slug]`

## 部署到 GitHub Pages（可选）

如果需要部署到 GitHub Pages，需要：

1. **安装 gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **添加部署脚本到 package.json**
   ```json
   "scripts": {
     "deploy": "gh-pages -d public"
   }
   ```

3. **运行部署**
   ```bash
   npm run deploy
   ```

## 注意事项

1. **图片路径**：所有图片路径使用 `/images/xxx.png` 格式（以 `/` 开头）
2. **静态文件**：所有静态 HTML 文件和图片都在 `public` 文件夹中
3. **环境变量**：敏感信息不要提交到 Git，使用 Vercel 环境变量
4. **构建检查**：部署前建议本地运行 `npm run build` 检查是否有错误

## 故障排查

### 构建失败
- 检查 `package.json` 中的依赖是否正确
- 运行 `npm install` 确保所有依赖已安装
- 检查 TypeScript 错误：`npm run lint`

### 图片不显示
- 确认图片在 `public/images/` 文件夹中
- 检查图片路径是否以 `/images/` 开头
- 检查文件大小（Vercel 有文件大小限制）

### 路由问题
- 确认 `middleware.ts` 配置正确
- 检查 `i18n/routing.ts` 中的语言配置

