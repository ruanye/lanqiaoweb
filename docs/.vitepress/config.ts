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
    socialLinks:[
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    lastUpdatedText:'最后更新时间',
    nav: [
      { text: '第十五届蓝桥杯省赛 Web 师资培训', link: '/01' },
      // ...
    ],
    sidebar: [
      {
        text: '第十五届蓝桥杯省赛 Web 师资培训',
       
        items: [
          { text: '第十五届蓝桥杯省赛 Web 师资培训', link: '/01' },
          { text: '蓝桥杯 web 历届省赛国赛题目', link: '/02' },
        ],
      },
      {
        text: '师资培训课件',
        
        items: [
          { text: '师资培训课件（HTML+CSS）', link: '/03' },
          { text: '师资培训课件（函数封装）', link: '/04' },
          { text: '师资培训课件 （DOM 操作）', link: '/05' },
          { text: '师资培训课件 （ES6 题目）', link: '/06' },
          { text: '师资培训课件 （Element Plus 题目）', link: '/07' },
          { text: '师资培训课件 （Echarts 题目）', link: '/08' },
          { text: '师资培训课件 （Vue3 题目）', link: '/09' },
          { text: '师资培训课件 （node 题目）', link: '/10' },
          { text: '备赛专项练习题', link: '/11' },
          { text: '十五届模拟一', link: '/12' },
          { text: '十五届模拟二', link: '/13' },
          { text: '十五届模拟三', link: '/14' },
        ]
      }
    ],
    footer: {
      message: '蓝桥云课',
      copyright: 'Copyright © 2024-国信蓝桥'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline:{
      level: [2, 4],
      label:'目录导航' 
    },
  },
});
