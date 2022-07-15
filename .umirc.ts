import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'sm-components',
  favicon: '/favicon.ico',
  logo: '/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  hash: true,
  exportStatic: {},
  webpack5: {},
  fastRefresh: {},
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd'
    ],
  ],
  menus: {
    "/components": [
      {
        title: "组件",
        children: [
          "Foo/index",
          "SMButton/index"
        ]
      }
    ]
  }
});
