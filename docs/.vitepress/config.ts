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
          { text: '师资培训课件 （1）', link: '/03' },
          { text: '备赛专项练习题', link: '/04' },
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
