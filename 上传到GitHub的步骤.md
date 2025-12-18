# 上传所有文件到GitHub的步骤

## 问题
GitHub上只有根目录的文件，缺少 `app/`、`components/`、`public/` 等文件夹，导致Vercel构建失败。

## 解决方案：使用Git命令行上传

### 步骤1：初始化Git仓库（如果还没做）

在PowerShell中，进入项目文件夹，运行：

```powershell
cd "C:\Users\wangh\Desktop\茶韵千年 网站"
git init
```

### 步骤2：添加所有文件（包括文件夹）

```powershell
git add .
```

这会添加所有文件，包括：
- ✅ `app/` 文件夹及其所有内容
- ✅ `components/` 文件夹
- ✅ `public/` 文件夹（包含图片）
- ✅ `data/`、`i18n/`、`lib/`、`messages/` 等所有文件夹
- ✅ 所有配置文件

### 步骤3：提交更改

```powershell
git commit -m "添加所有文件夹和文件"
```

### 步骤4：连接到GitHub仓库

```powershell
git remote add origin https://github.com/你的用户名/你的仓库名.git
```

（替换成你的实际GitHub仓库地址）

### 步骤5：推送到GitHub

```powershell
git branch -M main
git push -u origin main
```

如果GitHub上已经有文件，可能需要强制推送：

```powershell
git push -u origin main --force
```

⚠️ **注意**：`--force` 会覆盖GitHub上的现有文件，确保你已经备份了重要内容。

## 验证

上传完成后，在GitHub仓库页面应该能看到：
- ✅ `app/` 文件夹
- ✅ `components/` 文件夹
- ✅ `public/` 文件夹
- ✅ 其他所有文件夹

然后Vercel会自动重新部署，应该就能成功了！

