---
title: 快速开始
# order: 2
group:
  path: /
nav:
  title: 文档
  path: /docs
---

## SM-Components
SM-Components是很优秀的一个前端组件库，由具有丰富经验的前端工程师***笨笨洋***打造，在使用之前可以查看一下典型的 Demo 来判断组件是否适合你们的业务。

## 安装
```shell
$ pnpm add smcomponents
```
>现在还没有发布到npm，当然下载不了啦

## 🖥 浏览器兼容性

- 现代浏览器和 Internet Explorer 11 (需要 [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))
- [Electron](https://www.electronjs.org/)

对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 @babel/preset-env 来解决浏览器兼容问题。如果你在使用 umi，可以直接使用 targets 配置。

>本组件库基于antd4.0开发，不支持React15和IE9/10。

| [![edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![electron_48x48](https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png)](http://godban.github.io/browsers-support-badges/) |
| --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |