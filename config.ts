export default {
  title: "yun yu yuan", // 网站标题
  nickName: "云与原", // 昵称
  githubName: "yunyuyuan", // 必须修改，github账户名
  githubRepo: "nuxt3-blog", // 勿修改
  githubBranch: "master", // 勿修改
  domain: "https://blog.yunyuyuan.net", // rss域名
  SEO_title: " - yunyuyuan blog", // 搜索引擎显示的标题
  SEO_description: "云与原的博客，书写值得书写的东西", // description meta header
  SEO_keywords: "yunyuyuan,yunyuyuan's blog,云与原,云与原的博客", // keywords meta header

  themeColor: "#2aa0bb", // 主题色
  CommentRepoId: "R_kgDOGRGGfg", // https://giscus.app/zh-CN
  CommentDiscussionCategoryId: "DIC_kwDOGRGGfs4CQ5Jp", // https://giscus.app/zh-CN
  Comment: {
    articles: true,
    records: false,
    knowledges: false
  }, // 是否开启评论
  MongoDb: {
    enabled: true, // 是否开启mongodb(浏览量统计)
    initialVisitors: 0 // 如果设置成10000，那么发一篇文章立马就有10000个浏览量！
  },
  CloudflareAnalyze: "89460884e1e44e02a7320077f16d620f" // cloudflare的webanalyze
};
