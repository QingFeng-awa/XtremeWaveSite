import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "XtremeWave",
  description: "Among Us Mod出色贡献者",
  cleanUrls: true,
  head: [['link', { rel: 'shortcut icon', href: '/XtremeWave.ico', type: 'image/x-icon' }]],
  themeConfig: {
    logo: '/XtremeWave.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      { 
        text: '下载中心',
        items: [
          { text: 'TownOfNewEpic_Xtreme', link: '/download/TONEX/' },
          { text: 'FinalSuspect_Xtreme', link: '/download/FSX/' },
          { text: 'Undertale:StarfallFaded', link: '/download/USF' }
        ]
      },
      { 
        text: '极致项目',
        items: [
          { text: 'TownOfNewEpic_Xtreme', link: '/project/TONEX/' },
          { text: 'FinalSuspect_Xtreme', link: '/project/FSX/' },
          { text: 'Undertale:StarfallFaded', link: '/project/USF/' }
        ]
      },
      { text: '赞助', link: '/donate' }
    ],
    sidebar: [
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XtremeWave' }
    ],
    footer: {
      copyright: 'Copyright © 2023-2024 上海极致狂澜信息科技有限公司'
    }
  }
})
