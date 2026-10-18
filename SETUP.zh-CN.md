# 个人网站使用说明

项目基于 [PRISM](https://github.com/xyjoey/PRISM)，保留 MIT 许可证与页脚署名。已准备中文默认页面、英文切换、浅色／深色主题，以及 GitHub Pages 自动部署。

姓名、头像与 GitHub 链接使用账号 `Weihang-Jiang` 的公开资料。项目与简历仍为明确占位内容，论文列表为空。

## 本地查看

在 PowerShell 中运行：

```powershell
cd 'F:\个人主页\website'
npm install
npm run dev
```

打开终端显示的本地地址，通常为 http://localhost:3000 。

查看正式构建的静态页面：

```powershell
npm run build
npm run preview
```

预览地址为 http://localhost:4173 。按 Ctrl+C 停止服务。`out` 是生成结果，日常修改应编辑源文件。

## 修改个人资料

| 内容 | 中文文件 | 英文／共享文件 |
| --- | --- | --- |
| 姓名、身份、机构、导航 | `content_zh/config.toml` | `content/config.toml` |
| 邮箱、GitHub、Scholar 等链接 | 两种语言共享右侧文件 | `content/config.toml` 的 `[social]` |
| 简介 | `content_zh/bio.md` | `content/bio.md` |
| 研究兴趣与首页栏目 | `content_zh/about.toml` | `content/about.toml` |
| 动态 | `content_zh/news.toml` | `content/news.toml` |
| 论文 | 共享右侧 BibTeX | `content/publications.bib` |
| 项目 | `content_zh/projects.toml` | `content/projects.toml` |
| 简历 | `content_zh/cv.md` | `content/cv.md` |
| 头像 | 共享 `public/` 中的文件 | `content/config.toml` 的 `author.avatar` |

例如，把照片放到 `public/avatar.jpg`，再设置 `avatar = "/avatar.jpg"`。空的社交链接会自动隐藏。修改资料时也更新两个配置文件中的 `last_updated`。

论文使用真实 BibTeX 记录，增加 `selected = {true}` 可显示在首页。论文预览图放在 `public/papers/`，`preview` 字段只写文件名。教学、奖项和服务的原始示例文件仍保留，当前导航不会发布这些页面；如需使用，先改成真实内容再添加到导航。

## 发布到 GitHub Pages

1. 在自己的 GitHub 账号下创建一个**空的公开仓库**，推荐名称为 `你的用户名.github.io`。为使现有 Git 历史可直接推送，创建时先不要勾选 README、许可证或 `.gitignore`。
2. 将下方地址中的 `YOUR_USERNAME` 换成你的用户名，在本项目目录运行：

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git add .
git commit -m "Set up personal homepage"
git push -u origin main
```

3. 在仓库打开 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
4. 打开 **Actions**，如果首次推送时尚未开启 Pages，选中部署工作流，点击 **Run workflow** 重试。
5. 部署成功后，访问 `https://YOUR_USERNAME.github.io/`。部署任务中的链接是最终地址。

此后修改源文件并推送到 `main`，网站就会自动更新。原模板远程地址已命名为 `upstream`，`origin` 留给你的仓库；如果已经配置了自己的 `origin`，无需再次添加。

普通项目仓库也可以使用。工作流通过 GitHub Pages 的 `base_path` 自动设置页面和静态资源前缀，无需手动修改源码。若使用自定义域名，还需要在 GitHub Pages 设置域名和 DNS。

## 检查与来源

```powershell
npm run typecheck
npm run build
```

部署使用 Node.js 22 和 `npm ci`，应一并提交 `package-lock.json`。模板的 Next.js 与对应 ESLint 配置已更新至 15.5.28；字体使用系统字体。

- [PRISM 项目与许可证](https://github.com/xyjoey/PRISM)
- [GitHub Pages 官方说明](https://docs.github.com/en/pages/quickstart)
- [GitHub Pages 自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Next.js 静态导出](https://nextjs.org/docs/app/guides/static-exports)
