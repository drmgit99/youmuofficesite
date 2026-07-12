# 柚木信息化管理系统官网 - 安装部署操作手册

## 目录

1. [项目概述](#1-项目概述)
2. [技术栈](#2-技术栈)
3. [环境要求](#3-环境要求)
4. [本地开发环境搭建](#4-本地开发环境搭建)
5. [代码版本控制](#5-代码版本控制)
6. [Vercel 部署](#6-vercel-部署)
7. [常见问题排查](#7-常见问题排查)

---

## 1. 项目概述

本项目为柚木信息化管理系统的官方网站，采用现代化的单页应用（SPA）架构，集成 AI 智能运维主题设计，包含核心功能展示、价格体系、合作分销等模块。

**项目地址**：
- GitHub: `https://github.com/yourusername/yminfosystem-official-website`
- 线上演示: `https://yminfosystem-official-website.vercel.app`

---

## 2. 技术栈

| 分类 | 技术 | 版本 |
|------|------|------|
| 框架 | React | 18+ |
| 语言 | TypeScript | 5+ |
| 构建工具 | Vite | 5+ |
| 样式 | Tailwind CSS | 3+ |
| 动画 | Framer Motion | 11+ |
| 图标 | Lucide React | 0.363+ |
| 部署 | Vercel | - |

---

## 3. 环境要求

| 工具 | 最低版本 | 推荐版本 |
|------|----------|----------|
| Node.js | 18.0.0 | 20.x LTS |
| npm | 9.0.0 | 10.x |
| Git | 2.0.0 | 2.x |

---

## 4. 本地开发环境搭建

### 4.1 克隆项目

```bash
# 使用 SSH（推荐）
git clone git@github.com:yourusername/yminfosystem-official-website.git

# 或使用 HTTPS
git clone https://github.com/yourusername/yminfosystem-official-website.git

# 进入项目目录
cd yminfosystem-official-website
```

### 4.2 安装依赖

```bash
# 安装项目依赖
npm install

# 验证安装
npm ls
```

### 4.3 启动开发服务器

```bash
# 启动开发服务器
npm run dev

# 开发服务器默认运行在
# http://localhost:5173
```

**开发服务器配置说明**：
- 端口：5173（可通过 `--port` 参数修改）
- HMR（热模块替换）：自动启用，修改代码即时更新
- 自动打开浏览器：可通过 `--host` 参数绑定到 0.0.0.0

### 4.4 构建生产版本

```bash
# 构建生产版本
npm run build

# 构建产物位于 dist/ 目录

# 验证构建结果（可选）
npm run preview
```

### 4.5 代码检查

```bash
# TypeScript 类型检查
npx tsc --noEmit

# 代码格式化（如配置了 Prettier）
npx prettier --write .
```

---

## 5. 代码版本控制

### 5.1 Git 配置

```bash
# 配置全局用户名和邮箱（首次使用）
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 配置 SSH key（推荐）
# 1. 生成 SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# 2. 添加到 ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# 3. 在 GitHub 上添加公钥
cat ~/.ssh/id_ed25519.pub
# 复制输出到 GitHub Settings > SSH and GPG keys
```

### 5.2 分支管理策略

| 分支 | 用途 | 说明 |
|------|------|------|
| `main` | 主分支 | 生产环境代码，受保护 |
| `develop` | 开发分支 | 日常开发，合并到 main |
| `feature/*` | 功能分支 | 新功能开发，合并到 develop |
| `hotfix/*` | 修复分支 | 紧急修复，合并到 main 和 develop |

### 5.3 提交规范

遵循 Conventional Commits 规范：

```bash
# 示例提交信息
git commit -m "feat: 添加价格展示板块"
git commit -m "fix: 修复首页文字重叠问题"
git commit -m "docs: 更新部署操作手册"
git commit -m "style: 优化 Logo 设计"
git commit -m "refactor: 重构 Hero 组件"
```

### 5.4 推送代码

```bash
# 添加所有变更
git add .

# 提交变更
git commit -m "描述变更内容"

# 推送到远程仓库
git push origin main
```

---

## 6. Vercel 部署

### 6.1 前置条件

1. 拥有 GitHub 账号
2. 代码已推送至 GitHub 仓库
3. 拥有 Vercel 账号（可使用 GitHub 账号登录）

### 6.2 部署步骤

#### 方法一：通过 Vercel Dashboard 部署

1. **登录 Vercel**：https://vercel.com/login
2. **点击 "Add New" > "Project"**
3. **选择 GitHub 仓库**：搜索 `yminfosystem-official-website`
4. **配置项目**：
   - Project Name: `yminfosystem-official-website`
   - Framework: React
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **点击 "Deploy"**：等待部署完成

#### 方法二：使用 Vercel CLI 部署

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录 Vercel
vercel login

# 初始化项目（首次部署）
vercel

# 后续部署
vercel --prod
```

### 6.3 部署配置

Vercel 会自动读取项目根目录的 `vercel.json` 文件：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install"
}
```

### 6.4 自定义域名

1. 在 Vercel Dashboard 中进入项目设置
2. 选择 "Domains" > "Add Domain"
3. 输入域名：`infosys.youmu75.com`
4. 在域名服务商处添加 DNS 记录：
   - 类型: CNAME
   - 记录值: `cname.vercel-dns.com`
5. 等待 DNS 解析生效（通常 5-30 分钟）

### 6.5 部署环境变量

如需配置环境变量（如 API 密钥等）：

1. 在 Vercel Dashboard 中进入项目设置
2. 选择 "Environment Variables"
3. 添加环境变量：

| 变量名 | 示例值 | 说明 |
|--------|--------|------|
| `NODE_ENV` | `production` | 运行环境 |
| `VITE_APP_API_URL` | `https://api.example.com` | API 地址（如有） |

### 6.6 自动部署

Vercel 默认启用自动部署：
- 每次推送到 `main` 分支会自动触发部署
- 可在 GitHub Pull Request 中预览部署结果

---

## 7. 常见问题排查

### 7.1 依赖安装失败

**问题**：`npm install` 失败

**解决方案**：
```bash
# 清除缓存
npm cache clean --force

# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### 7.2 开发服务器启动失败

**问题**：端口被占用

**解决方案**：
```bash
# 查找占用端口的进程
lsof -ti:5173

# 杀死进程
kill -9 <PID>

# 使用其他端口启动
npm run dev -- --port 5174
```

### 7.3 TypeScript 类型错误

**问题**：`npm run build` 时出现类型错误

**解决方案**：
```bash
# 运行类型检查查看详细错误
npx tsc --noEmit

# 根据错误信息修复代码
```

### 7.4 Vercel 部署失败

**问题**：构建失败或部署超时

**解决方案**：
1. 检查 `package.json` 中的脚本配置
2. 确保 `vercel.json` 配置正确
3. 在本地运行 `npm run build` 验证构建是否成功
4. 检查 Vercel 构建日志

### 7.5 域名解析问题

**问题**：自定义域名无法访问

**解决方案**：
1. 检查 DNS 记录是否正确配置
2. 等待 DNS 解析生效（可能需要几小时）
3. 使用 `dig` 命令验证解析：
   ```bash
   dig infosys.youmu75.com
   ```

---

## 附录

### A. 项目文件结构

```
yminfosystem-official-website/
├── src/
│   ├── components/           # 组件目录
│   │   ├── layout/          # 布局组件（Navbar, Footer, ScrollNavigator）
│   │   ├── sections/        # 页面区块（Hero, Features, Pricing, etc.）
│   │   └── ui/             # UI 组件（Logo, AIRobot, FeatureCard）
│   ├── hooks/               # 自定义 Hooks
│   ├── pages/              # 页面组件
│   ├── data/               # 数据文件
│   ├── App.tsx             # 应用入口
│   ├── main.tsx            # React 入口
│   └── index.css           # 全局样式
├── public/                 # 静态资源
├── index.html              # HTML 模板
├── vite.config.ts          # Vite 配置
├── tailwind.config.js      # Tailwind 配置
├── tsconfig.json           # TypeScript 配置
├── package.json            # 项目依赖
├── vercel.json             # Vercel 配置
└── .gitignore              # Git 忽略文件
```

### B. 常用命令速查

| 命令 | 用途 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产构建 |
| `npx tsc --noEmit` | 类型检查 |
| `vercel` | Vercel 部署（开发环境） |
| `vercel --prod` | Vercel 部署（生产环境） |

---

**文档版本**: v1.0  
**最后更新**: 2026-07-12  
**项目状态**: 开发中
