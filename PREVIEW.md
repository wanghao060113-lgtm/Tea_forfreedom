# 如何预览网站

## 方法一：使用 Next.js 开发服务器（推荐）

1. **安装依赖**（如果还没安装）：
   ```bash
   npm install
   ```

2. **启动开发服务器**：
   ```bash
   npm run dev
   ```

3. **在浏览器中打开**：
   - 访问：http://localhost:3000
   - 网站会自动重定向到默认语言（英语）：http://localhost:3000/en

4. **测试多语言**：
   - 英语：http://localhost:3000/en
   - 法语：http://localhost:3000/fr
   - 西班牙语：http://localhost:3000/es

5. **测试页面**：
   - 首页：http://localhost:3000/en
   - 产品列表：http://localhost:3000/en/products
   - 产品详情：http://localhost:3000/en/products/premium-tongcheng-xiaohua

## 方法二：构建并预览生产版本

1. **构建项目**：
   ```bash
   npm run build
   ```

2. **启动生产服务器**：
   ```bash
   npm start
   ```

3. **访问**：http://localhost:3000

## 注意事项

- 产品图片目前是占位符路径，实际部署时需要替换为真实图片
- 购物车和支付功能尚未实现（将在后续步骤中添加）
- AI 客服功能尚未实现（将在后续步骤中添加）

## 当前可用的功能

✅ 多语言支持（英语、法语、西班牙语）
✅ 响应式设计（移动端、平板、桌面）
✅ 产品列表页面
✅ 产品详情页面
✅ 导航栏和页脚
✅ 语言切换器

## 下一步

完成 UI 预览后，可以继续：
- 第三步：添加购物车和结账功能
- 第四步：集成支付系统
- 第五步：实现用户系统和 AI 功能
- 第六步：优化和部署

