/** Website 分类配置 https://lsyyyy-timer.pages.dev
*/
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "我的账号",
    sites: [
      {
        // 🟢🟡🟠🔴
        title: "🟢 服务状态监测",
        description: " Status",
        url: "https://stats.uptimerobot.com/X4GaKypqAn",
        icon: "https://lsyyyy-imagebed.pages.dev/file/4949b2252c08cea091e69.png", 
      },
      {
        title: "我的Github",
        description: "我的Github主页",
        url: "https://github.com/lsyyyy11",
        icon: "https://lsyyyy-imagebed.pages.dev/file/4949b2252c08cea091e69.png", 
      },
    ],  
  },
  {
    title: "我的项目",
    sites: [
      {
        /** 网站标题 */
        title: "暂无",
        /** 网站 url */
        description: "暂无",
        url: "https://example.com/",
        /** 网站 icon 图标，非必填，留空默认展示网站标题的第一个字符 */
        icon: "https://lsyyyy-imagebed.pages.dev/file/6b3c710557a1b5fd9d2d3.png",
      },
    ],
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "sm.ms图床",
        description: "为本站提供图床服务",
        url: "https://sm.ms",
        icon: "https://s2.loli.net/2024/06/02/jXWN9YZ54QLtO6g.png",
      },
    ],
  }
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "博客",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://lsyyyy11.github.io",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/lsyyyy11",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "萌ICP备20255554号",
  ICP_URL: "https://icp.gov.moe/?keyword=20255554",



  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "lsyyyy的主页",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
