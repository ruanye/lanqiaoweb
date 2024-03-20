import { defineConfig } from 'vitepress';
// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'zh-cn',
  title: '寒假师资培训',
  description: 'Vite & Vue powered static site generator.',
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
        text: '课程、项目技术讲解',
        items: [
          { text: '课程项目技术讲解', link: '/03' },
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
