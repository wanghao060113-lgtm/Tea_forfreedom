# 部署前检查清单

## ✅ 文件结构检查

- [x] `public/` 文件夹已创建
- [x] `public/images/` 文件夹包含所有产品图片
- [x] `public/preview.html` 已创建
- [x] `public/impression-tongcheng.html` 已创建
- [x] `public/tea-culture.html` 已创建

## ✅ 图片路径检查

- [x] 所有图片路径使用 `/images/xxx.png` 格式（以 `/` 开头）
- [x] 产品卡片中的图片路径已更新
- [x] 产品详情页中的图片路径已更新

## ✅ 配置文件检查

- [x] `package.json` 包含所有必要依赖
- [x] `next.config.js` 配置正确
- [x] `vercel.json` 配置正确
- [x] `.gitignore` 不忽略 `public/` 文件夹
- [x] `tsconfig.json` 配置正确

## ✅ Git 提交检查

在推送到 GitHub 前，确保：

```bash
# 1. 检查文件状态
git status

# 2. 确认以下文件被添加：
# - public/ 文件夹（包括所有图片和HTML文件）
# - 所有配置文件
# - 源代码文件

# 3. 提交更改
git add .
git commit -m "准备部署：添加静态文件和优化配置"

# 4. 推送到 GitHub
git push origin main
```

## ✅ 构建测试

在部署前，建议本地测试构建：

```bash
# 安装依赖
npm install

# 运行构建
npm run build

# 如果构建成功，说明可以部署
```

## ✅ Vercel 部署检查

1. **项目设置**
   - Framework: Next.js（自动检测）
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

2. **环境变量**（如果需要）
   - 在 Vercel 项目设置中添加环境变量
   - 不要提交 `.env` 文件到 Git

3. **部署后验证**
   - 访问 Next.js 应用：`https://your-domain.vercel.app/zh`
   - 访问静态预览页：`https://your-domain.vercel.app/preview.html`
   - 检查图片是否正常显示
   - 检查所有链接是否正常工作

## 常见问题

### 图片不显示
- 检查图片路径是否以 `/images/` 开头
- 确认图片文件在 `public/images/` 文件夹中
- 检查文件大小（Vercel 有 50MB 限制）

### 构建失败
- 检查 `package.json` 中的依赖
- 运行 `npm install` 确保依赖已安装
- 检查 TypeScript 错误

### 路由404
- 确认 `middleware.ts` 配置正确
- 检查 `i18n/routing.ts` 中的语言配置

