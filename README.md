# TarotWave

挥手塔罗。一个可部署为静态网页的「手势抽取塔罗牌 + 牌意解读」小程序。

## 功能

- 摄像头手势触发抽牌：手掌扫过画面中心圆环即可抽牌。
- 按钮 / 牌堆点击兜底：桌面、移动端、无摄像头环境都能使用。
- 单张牌与三张牌阵：三张牌按「过去、现在、建议」解读。
- 22 张大阿卡那牌库：包含正位、逆位、建议语。
- 本地历史记录：最近 8 次解读保存在浏览器 `localStorage`。
- 纯静态实现：可直接部署到 GitHub Pages、Netlify、Vercel、Cloudflare Pages。

## 本地运行

直接打开 `index.html` 即可预览。若需要测试摄像头，建议用本地 HTTP 服务：

```bash
python3 -m http.server 5173
```

然后访问：

```text
http://localhost:5173
```

## 公网部署

最省事的方式是 GitHub Pages：

1. 新建一个公开仓库。
2. 把本目录内容推送到仓库根目录。
3. 在仓库 Settings -> Pages 里选择 `main` 分支和 `/root`。
4. 保存后等待部署，公网地址通常是 `https://你的用户名.github.io/仓库名/`。

摄像头能力需要 HTTPS；GitHub Pages、Netlify、Vercel、Cloudflare Pages 都会默认提供 HTTPS。
