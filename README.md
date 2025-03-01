This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 个人主页项目

这是一个使用 Next.js 构建的个人主页项目，包含个人简介、科研成果和健身记录等内容。

## 开发环境设置

1. 确保已安装 Node.js (推荐版本 18.x 或更高)
2. 克隆项目后，安装依赖：
```bash
npm install
```
3. 启动开发服务器：
```bash
npm run dev
```
4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 目录结构

```
personal-portfolio/
├── public/
│   └── images/          # 存放图片文件
├── src/
│   ├── app/
│   │   ├── page.tsx    # 首页
│   │   ├── education/  # 教育背景
│   │   ├── expertise/  # 专业领域
│   │   ├── research-areas/  # 研究方向
│   │   ├── interests/  # 个人兴趣
│   │   └── contact/    # 联系方式
│   └── components/     # 可重用组件
```

## 如何更新内容

### 1. 添加/更新图片

1. 将图片文件放在 `public/images/` 目录下
2. 图片命名建议使用英文，例如：`profile.jpg`
3. 在代码中引用图片时使用以下格式：
```jsx
<Image
  src="/images/your-image.jpg"
  alt="图片描述"
  width={400}
  height={500}
  className="w-full h-auto"
/>
```

### 2. 修改个人信息页面

每个信息页面都位于对应的目录中，例如：

- 教育背景：`src/app/education/page.tsx`
- 专业领域：`src/app/expertise/page.tsx`
- 研究方向：`src/app/research-areas/page.tsx`
- 个人兴趣：`src/app/interests/page.tsx`
- 联系方式：`src/app/contact/page.tsx`

要添加新的页面：

1. 在 `src/app` 下创建新目录和 `page.tsx` 文件
2. 使用 DetailPage 组件作为模板：
```tsx
import DetailPage from '@/components/DetailPage';

export default function YourPage() {
  return (
    <DetailPage
      title="页面标题"
      description="页面描述"
      color="bg-blue-500"  // 选择颜色：blue, green, purple, orange, red
    >
      <div className="space-y-8">
        {/* 在这里添加具体内容 */}
      </div>
    </DetailPage>
  );
}
```

### 3. 添加新的导航按钮

在 `src/components/ProfileButtons.tsx` 中的 `profileItems` 数组中添加新项：

```tsx
const profileItems = [
  // ... 现有项目
  {
    title: '新按钮标题',
    href: '/your-path',
    description: '按钮描述',
    color: 'bg-blue-500',  // 选择合适的颜色
  },
];
```

## 部署到 GitHub 和 Vercel

### 1. 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击 "New repository"
3. 填写仓库名称（例如：personal-portfolio）
4. 选择 "Public" 仓库
5. 点击 "Create repository"

### 2. 推送代码到 GitHub

```bash
# 初始化 Git 仓库（如果还没有初始化）
git init

# 添加远程仓库
git remote add origin https://github.com/你的用户名/personal-portfolio.git

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 推送到 GitHub
git push -u origin main
```

### 3. 部署到 Vercel

1. 访问 [Vercel](https://vercel.com) 并使用 GitHub 账号登录
2. 点击 "New Project"
3. 从列表中选择你的 personal-portfolio 仓库
4. 保持默认设置，点击 "Deploy"

部署完成后，Vercel 会提供一个域名（例如：`your-project.vercel.app`）

### 4. 更新网站内容

1. 在本地修改代码
2. 提交并推送更改：
```bash
git add .
git commit -m "更新内容：xxx"
git push
```
3. Vercel 将自动检测更改并重新部署

### 自定义域名（可选）

1. 在 Vercel 项目设置中点击 "Domains"
2. 添加你的域名
3. 按照 Vercel 的说明配置 DNS 记录

## 常见问题解决

1. 图片不显示
   - 检查图片是否在 `public/images` 目录下
   - 确认图片路径和文件名大小写是否正确
   - 验证图片格式是否支持（jpg, png, gif, webp）

2. 页面样式问题
   - 确保保留了所有必要的 className
   - 检查 Tailwind CSS 类名是否正确

3. 部署问题
   - 确保所有文件都已提交到 Git
   - 检查 Vercel 部署日志中的错误信息

## 技术支持

- Next.js 文档：https://nextjs.org/docs
- Tailwind CSS 文档：https://tailwindcss.com/docs
- Vercel 部署文档：https://vercel.com/docs

# 个人主页修改指南

这个文档将帮助你了解如何修改个人主页的各个部分。网站使用 Next.js 构建，所有页面文件都在 `src/app` 目录下。

## 目录结构

```
src/
├── app/
│   ├── page.tsx            # 首页（个人简介）
│   ├── research/
│   │   └── page.tsx       # 科研成果页面
│   ├── fitness/
│   │   └── page.tsx       # 健身记录页面
│   └── layout.tsx         # 全局布局
└── components/
    └── Navbar.tsx         # 导航栏组件
```

## 如何修改内容

### 1. 修改个人简介 (src/app/page.tsx)

找到 `src/app/page.tsx` 文件，你可以修改：

```typescript
// 修改标题
<h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
  个人主页  // 修改这里
</h1>

// 修改副标题
<p className="text-xl text-gray-500">
  欢迎来到我的个人空间  // 修改这里
</p>

// 修改关于我的内容
<div className="prose prose-lg text-gray-500">
  <p className="mb-4">
    这里是您的个人简介区域。  // 修改这里
  </p>
  <ul className="list-disc list-inside space-y-2">
    // 修改或添加更多列表项
    <li>教育背景</li>
    <li>专业领域</li>
    // ...
  </ul>
</div>
```

### 2. 添加个人照片

1. 首先在 `public` 目录下创建 `images` 文件夹
2. 将你的照片放入该文件夹（比如 `profile.jpg`）
3. 在 `src/app/page.tsx` 中找到预留的头像位置，将其替换为：

```typescript
<div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
  <Image
    src="/images/profile.jpg"  // 使用你的图片路径
    alt="个人照片"
    fill
    className="object-cover"
  />
</div>
```

### 3. 添加科研成果 (src/app/research/page.tsx)

在 `src/app/research/page.tsx` 文件中：

1. 添加新的研究项目：
```typescript
{/* Research Projects */}
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {/* 复制这个模板来添加新项目 */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        你的项目标题  // 修改这里
      </h3>
      <p className="text-gray-600 mb-4">
        项目描述  // 修改这里
      </p>
      <div className="space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <span className="font-medium mr-2">发表时间:</span>
          <span>2024-03</span>  // 修改这里
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <span className="font-medium mr-2">发表期刊/会议:</span>
          <span>期刊名称</span>  // 修改这里
        </div>
      </div>
    </div>
  </div>
</div>
```

2. 添加新的论文：
```typescript
{/* Publications */}
<div className="space-y-6">
  {/* 复制这个模板来添加新论文 */}
  <div className="border-l-4 border-blue-500 pl-4 py-2">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      论文标题  // 修改这里
    </h3>
    <p className="text-gray-600 mb-2">
      作者列表  // 修改这里
    </p>
    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
      <span>期刊名称</span>  // 修改这里
      <span>•</span>
      <span>2024</span>  // 修改这里
      <span>•</span>
      <span>引用次数</span>  // 修改这里
    </div>
  </div>
</div>
```

### 4. 添加健身记录 (src/app/fitness/page.tsx)

在 `src/app/fitness/page.tsx` 文件中：

1. 更新统计数据：
```typescript
<div className="bg-white rounded-lg shadow p-6">
  <h3 className="text-lg font-medium text-gray-900 mb-2">运动时长</h3>
  <p className="text-3xl font-bold text-blue-600">
    10 小时  // 修改这里
  </p>
  // ...
</div>
```

2. 添加训练记录：
```typescript
{/* Workout Log */}
<div className="p-6">
  {/* 复制这个模板来添加新记录 */}
  <div className="border-b border-gray-200 pb-4 mb-4">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-lg font-medium text-gray-900">
        训练项目名称  // 修改这里
      </h3>
      <span className="text-sm text-gray-500">
        2024-03-01  // 修改这里
      </span>
    </div>
    // ...
  </div>
</div>
```

3. 添加进度照片：
```typescript
{/* Progress Photos */}
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* 复制这个模板来添加新照片 */}
  <div className="bg-gray-100 rounded-lg overflow-hidden aspect-w-4 aspect-h-3">
    <Image
      src="/images/progress-1.jpg"  // 使用你的图片路径
      alt="进度照片"
      fill
      className="object-cover"
    />
  </div>
</div>
```

## 图片处理说明

1. 所有图片都应该放在 `public/images` 目录下
2. 支持的图片格式：JPG、PNG、WebP、GIF
3. 建议图片尺寸：
   - 个人照片：建议 600x800 像素
   - 进度照片：建议 800x600 像素
4. 图片文件名建议使用英文，不要包含空格（可以使用连字符或下划线）

## 部署更新

1. 修改完成后，将更改提交到 GitHub：
```bash
git add .
git commit -m "更新网站内容"
git push
```

2. Vercel 将自动检测到更改并重新部署网站（通常需要 1-2 分钟）

## 注意事项

1. 修改代码时请保持原有的 className，这些类名控制着页面的样式
2. 添加新内容时可以复制现有的模板，然后修改内容
3. 所有图片都需要添加 alt 属性（图片描述）
4. 如果要修改导航栏，编辑 `src/components/Navbar.tsx`
5. 如果要修改网站标题和描述，编辑 `src/app/layout.tsx`

如果你在修改过程中遇到任何问题，可以参考：
- Next.js 文档：https://nextjs.org/docs
- Tailwind CSS 文档：https://tailwindcss.com/docs
