---
layout: page
title: 关于我们
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const code = [
  {
    avatar: 'about/Slok7565.jpg',
    name: 'Slok7565',
    title: '模组开发',
    links: [
      { icon: 'github', link: 'https://github.com/Slok7565' }
    ]
  },
  {
    avatar: 'about/xi.jpg',
    name: '是喜诶',
    title: '模组开发',
    links: [
      { icon: 'github', link: 'https://github.com/Xieiawa' }
    ]
  },
  {
    avatar: 'about/ZEYAN.jpg',
    name: 'ZEYAN',
    title: '模组开发'
  },
  {
    avatar: 'about/JiuMi.jpg',
    name: '玖咪',
    title: '模组开发',
    links: [
      { icon: 'github', link: 'https://github.com/ksduye' }
    ]
  },
  {
    avatar: 'about/farewell.jpg',
    name: 'farewell',
    title: '模组开发',
    links: [
      { icon: 'github', link: 'https://github.com/ksduye' }
    ]
  },
  {
    avatar: 'about/QingFeng.jpg',
    name: 'QingFeng',
    title: '网站开发',
    links: [
      { icon: 'github', link: 'https://github.com/QingFeng-awa' },
      { icon: 'x', link: 'https://x.com/@QingFeng-awa' }
    ]
  },
]
const creativity = [
  {
    avatar: 'about/pz.jpg',
    name: '崩pz杉',
    title: '编剧'
  },
  {
    avatar: 'about/Yellow117.jpg',
    name: '小黄117',
    title: '美术'
  },
  {
    avatar: 'about/TvT.jpg',
    name: '核聚变砂糖橘TvT',
    title: '美术'
  },
  {
    avatar: 'about/CEIE.jpg',
    name: 'Crewmate Ender&Impostor Ender',
    title: '美术'
  },
  {
    avatar: 'about/ZLXBX.jpg',
    name: '照路行不行',
    title: '美术'
  },
  {
    avatar: 'about/KpCam.jpg',
    name: 'KpCam',
    title: '美术'
  },
  {
    avatar: 'about/Hartex.jpg',
    name: 'Hartex',
    title: '推广'
  },
  {
    avatar: 'about/JMS.jpg',
    name: 'JMS',
    title: '推广'
  },
  {
    avatar: 'about/KB.jpg',
    name: '刻刻刻刻刻薄',
    title: '推广'
  },
  {
    avatar: 'about/ynjq.jpg',
    name: '一念旧情',
    title: '文案设计'
  },
  {
    avatar: 'about/Co.,Ltd..jpg',
    name: '㍿',
    title: '角色设计'
  },
  {
    avatar: 'about/SC.jpg',
    name: '白糖咖啡',
    title: '翻译'
  },
]
</script>

<div align="center">
<br>
<img src="/XtremeWave-BG.png" alt="XtremeWave背景图" width="85%" />
</div>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>关于我们</template>
    <template #lead>XtremeWave是一个以<strong>热爱为动力的非盈利性组织</strong>。<br>XtremeWave维护的<b>开源项目</b>包括:<br><strong>Among Us HostOnly模组TownOfNewEpic_Xtreme</strong>;<br><strong>Among Us原版辅助插件FinalSuspect_Xtreme</strong>。<br>正如我们的口号<strong>“波澜不惊,极致狂澜”</strong>,我们一路上攻坚克难,不断挑战自我,努力成为更好的团队。</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>开发组成员</template>
    <template #lead></template>
    <template #members>
      <VPTeamMembers size="medium" :members="code" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>文创组成员</template>
    <template #lead></template>
    <template #members>
      <VPTeamMembers size="small" :members="creativity" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

