module.exports = {
  base: '/blog/',
  title: '一个记录日志的人',
  description: '一个喜欢技术的平凡人',
  themeConfig: {
    search: false,
    lastUpdated: true,
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/danny00lo',
    // 自定义仓库链接文字。
    repoLabel: 'GitHub',
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
    ],
    sidebar: {
      '/blog/': [
        {
          title: '首页',
          collapsable: false,
          children: [
            '/'
          ]
        },
        {
          title: '博客', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            '/blog/', // 你的md文件地址
            '/blog/FirstBlog', // 你的md文件地址
            '/blog/20190730', // 你的md文件地址
            '/blog/20190731', // 你的md文件地址
            '/blog/20190801', // 你的md文件地址
          ]
        },
      ]
    }
  }
}


