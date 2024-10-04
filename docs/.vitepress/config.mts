import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "XtremeWave",
  titleTemplate: ":title - XtremeWave",
  description: "Among Us Mod出色贡献者",
  cleanUrls: true,
  head: [['link', { rel: 'shortcut icon', href: '/XtremeWave.ico', type: 'image/x-icon' }]],
  themeConfig: {
    logo: '/XtremeWave.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      { text: '下载中心', link: 'https://pan.xtreme.net.cn' },
      { 
        text: '极致项目',
        items: [
          { text: 'TownOfNewEpic_Xtreme', link: '/project/TONEX/' },
          { text: 'FinalSuspect_Xtreme', link: '/project/FSX/' }
        ]
      },
      //{ text: '赞助', link: '/donate' }
    ],
    darkModeSwitchLabel: "主题模式",
    lightModeSwitchTitle: "点击切换至深色模式",
    darkModeSwitchTitle: "点击切换至浅色模式",
    sidebar: [
    ],
    sidebarMenuLabel: "菜单",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XtremeWave' },
      { icon: {
          svg: '<svg t="1727838332899" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3084" width="256" height="256"><path d="M794.5 721.9c-9.7 56.1-35.7 106.6-73.3 146.4 40.8 18.9 77.6 47.7 77.6 90.3H225c0-42.6 36.9-71.3 77.6-90.3-37.6-39.8-63.7-90.3-73.3-146.4-43.1 63.2-106.8 94.5-106.8 94.5 0-164 102.5-386 102.5-386v-81.2c0-157.1 128.5-284.4 286.9-284.4 158.5 0 286.9 127.3 286.9 284.4v81.2s102.4 222 102.4 386c0.1 0-63.7-31.3-106.7-94.5z m0 0" p-id="3085"></path></svg>',
        },
        link: 'https://qm.qq.com/q/QMtSupoOga'
      },
      { icon: {
          svg: '<svg t="1727838402406" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6830" width="256" height="256"><path d="M896 640h-140.8l17.066667-256H896c34.133333 0 64-29.866667 64-64S930.133333 256 896 256h-115.2l8.533333-123.733333c4.266667-38.4-25.6-68.266667-64-68.266667-34.133333 0-59.733333 25.6-64 59.733333L652.8 256h-256l8.533333-123.733333c4.266667-38.4-25.6-68.266667-64-68.266667-34.133333 0-59.733333 25.6-64 59.733333L268.8 256H128c-34.133333 0-64 29.866667-64 64S93.866667 384 128 384h132.266667l-17.066667 256H128c-34.133333 0-64 29.866667-64 64S93.866667 768 128 768h106.666667l-8.533334 123.733333c-4.266667 38.4 25.6 68.266667 64 68.266667 34.133333 0 59.733333-25.6 64-59.733333l8.533334-132.266667h256l-8.533334 123.733333c-4.266667 38.4 25.6 68.266667 64 68.266667 34.133333 0 59.733333-25.6 64-59.733333l8.533334-132.266667H896c34.133333 0 64-29.866667 64-64S930.133333 640 896 640z m-268.8 0h-256l17.066667-256h256l-17.066667 256z" p-id="6831"></path></svg>',
        },
        link: 'https://pd.qq.com/s/cm8y03qr5'
      }
    ],
    returnToTopLabel: "返回顶部",
    editLink: false,
    lastUpdated: false,
    docFooter: {
      prev: false,
      next: false
    },
    footer: {
      copyright: "© 2023-2024 <a href='https://qingfengawa.me' target='_blank'>QingFeng</a>"
    }
  }
})
