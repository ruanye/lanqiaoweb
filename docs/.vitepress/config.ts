import { defineConfig } from 'vitepress';
// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'zh-cn',
  title: '第十五届蓝桥杯省赛 Web 师资培训',
  description: '蓝桥杯',
  lastUpdated: true,
  markdown: {
    lineNumbers: true //开始 mark 代码行号显示
  },
  themeConfig: {
    nav: [
      { text: '第十五届蓝桥杯省赛 Web 师资培训', link: '/01' },
      // ...
    ],

    sidebar: [
      {
        text: '第十五届蓝桥杯省赛 Web 师资培训',
        items: [
          { text: '第十五届蓝桥杯省赛 Web 师资培训', link: '/01' },
          { text: '历届题目', link: '/02' },
        
        ],
      },
      {
        text: '师资培训课件',
        items: [
          { text: '师资培训课件 （1）', link: '/03' },
          { text: 'TS 快速入门', link: '/ts' },
        ]
      },
      {
        text: '蓝桥杯',
        items: [
          { text: '蓝桥杯 WEB 赛项', link: '/02' },
          { text: '蓝桥杯 WEB 赛项真题解析', link: '/06' },
        ]
      },
      {
        text: '',
        items: [
          { text: '鸿蒙开发介绍', link: '/05' }
        ]
      },
      
    ],
  },
});
