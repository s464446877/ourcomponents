import { defineConfig } from 'dumi';
import { join } from 'path';

const alias = {
  '@src': join(__dirname, 'src'),
};

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
      'antd',
    ],
  ],
  menus: {
    '/components': [
      {
        title: '组件',
        children: ['Foo/index', 'SMButton/index', 'SMButton_Antd/index'],
      },
    ],
  },
  alias: process.env.MYENV === 'dev' ? alias : {},
  apiParser: {
    shouldExtractLiteralValuesFromEnum: true,
    // 自定义属性过滤配置，也可以是一个函数
    propFilter: (prop) => {
      if (prop.parent) {
        return !prop.parent.fileName.includes('node_modules');
      }
      return true;
    },
  },
  mfsu: {},
});
