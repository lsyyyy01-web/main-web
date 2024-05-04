[测试网站已上线](https://lsyyyy2-test.pages.dev/)


# 1. 使用方法

## 1.2 部署到Cloudflare Pages (可提供自动更新，在Github的编辑会自动同步)


## 1.2. 修改
### 打开`/src/config.ts`，使用编辑：

```ts
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "示例分类1",
    sites: [
      {
        /** 网站标题 */
        title: "主标题",
        /** 网站 url */
        url: "http://www.your-web-page.com/",
        /** 网站 icon 图标，非必填，留空默认展示网站标题的第一个字符 */
        icon: "",
        /** 指定网站 icon 背景色 */
        color: "#0171CD",
      },
    ],
  },
  // ... ...
];
```