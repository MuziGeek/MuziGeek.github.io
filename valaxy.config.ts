import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'
import { addonComponents } from 'valaxy-addon-components'
import { addonAlgolia } from 'valaxy-addon-algolia'


// add icons what you will need

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  modules: {
    rss: {
      enable: true,
      fullText: false,
    },
  },

  unocss: {
    safelist: [
      'i-ri-home-line',
    ],
  },

 
    siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
  },
  // 设置 valaxy-addon-waline 配置项
  addons: [
    addonAlgolia({
      appId: '3MQ5WGVCUP',
      apiKey: '0493de45812d185d21c24c043254a5f9',
      indexName: 'my-valaxy-blog',
    }),
    addonComponents(),
    addonWaline({
      // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
      serverURL: 'https://waline.easymuzi.cn',
      comment: true,
    }),
  ],


})
