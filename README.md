# 桐城小花茶叶电商独立站

面向海外市场的DTC茶叶电商独立站，主打"桐城小花"地方特色茶。

## 技术栈

- **前端框架**: Next.js 14 (App Router)
- **样式方案**: Tailwind CSS + Shadcn/UI
- **UI组件库**: Radix UI + Shadcn/UI
- **图标库**: Lucide React
- **多语言**: next-intl
- **支付集成**: Stripe + PayPal Checkout
- **状态管理**: Zustand
- **表单处理**: React Hook Form + Zod
- **数据获取**: React Query (TanStack Query)
- **AI集成**: Vercel AI SDK（对接OpenAI/GPT）
- **数据库**: PostgreSQL（使用Vercel Postgres）
- **ORM**: Prisma

## 设计系统

### 配色方案
- 主色：茶绿色 #2E7D32
- 辅助色：浅米色 #F5F0E6
- 强调色：金色 #D4AF37
- 文字色：深灰 #333333
- 背景色：白色 #FFFFFF / 浅灰 #F9F9F9

### 字体
- 英文主字体：Inter (Google Fonts)
- 英文标题字体：Playfair Display（优雅衬线）
- 中文字体后备：system-ui, -apple-system

## 开发步骤

1. ✅ 创建项目基础结构和设计系统
2. ⏳ 实现核心页面（首页、产品页、详情页）
3. ⏳ 添加购物车和结账功能
4. ⏳ 集成支付系统
5. ⏳ 实现用户系统和AI功能
6. ⏳ 优化和部署

## 开始开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 启动生产服务器
npm start
```

## 部署

### 快速部署到 Vercel

1. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "准备部署"
   git push origin main
   ```

2. **在 Vercel 导入项目**
   - 访问 https://vercel.com
   - 使用 GitHub 登录
   - 点击 "Add New Project"
   - 选择你的仓库
   - Vercel 会自动检测 Next.js 配置

3. **访问网站**
   - Next.js 应用：`https://your-domain.vercel.app/zh`
   - 静态预览页：`https://your-domain.vercel.app/preview.html`

详细部署说明请查看 [DEPLOY.md](./DEPLOY.md)

## 环境变量

创建 `.env.local` 文件：

```
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=your_database_url
```

