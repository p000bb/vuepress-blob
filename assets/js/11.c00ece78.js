(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{413:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"快速构建vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速构建vuepress"}},[t._v("#")]),t._v(" 快速构建vuepress")]),t._v(" "),s("ul",[s("li",[t._v("首先打开"),s("a",{attrs:{href:"https://www.vuepress.cn/",title:"vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress"),s("OutboundLink")],1),t._v("官网")]),t._v(" "),s("li",[t._v("按照指南先快速搭建一个vuepress项目")]),t._v(" "),s("li",[t._v("如下图所示：\n"),s("img",{attrs:{src:"http://img.p000bb.work/image-20220801142335551.png",alt:"image-20220801142335551"}})])]),t._v(" "),s("h2",{attrs:{id:"配置主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置主题"}},[t._v("#")]),t._v(" 配置主题")]),t._v(" "),s("ul",[s("li",[t._v("如下图所示：\n"),s("img",{attrs:{src:"http://img.p000bb.work/image-20220801142619748.png",alt:"image-20220801142619748"}})])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[t._v("说明")]),s("p",[t._v("主题可自行开发也可使用第三方主题，本博客系统使用的是"),s("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",title:"reco",target:"_blank",rel:"noopener noreferrer"}},[t._v("reco"),s("OutboundLink")],1),t._v("主题")])]),s("h2",{attrs:{id:"配置config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置config-js"}},[t._v("#")]),t._v(" 配置config.js")]),t._v(" "),s("ul",[s("li",[t._v("目录结构")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n├── docs\n│   ├── .vuepress (可选的)\n│   │   ├── components (可选的)\n│   │   ├── theme (可选的)\n│   │   │   └── Layout.vue\n│   │   ├── public (可选的)\n│   │   ├── styles (可选的)\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── templates (可选的, 谨慎配置)\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── config.js (可选的)\n│   │   └── enhanceApp.js (可选的)\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"熊猫宝宝"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"欢迎来到90后快乐肥宅熊猫宝宝的个人博客😄😄😄"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("theme")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reco"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("subSidebar")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blog"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t主题类别")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("author")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"熊猫宝宝"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("repo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p000bb/xmbb_blog"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导航栏右侧生成Github链接")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("editLinkText")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"编辑一下！"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sidebarDepth")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("smoothScroll")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面滚动")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("blogConfig")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("category")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在导航栏菜单中所占的位置，默认2")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"分类"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认文案 “分类”")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在导航栏菜单中所占的位置，默认3")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"标签"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认文案 “标签”")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("nav")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"首页"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[t._v("说明")]),s("p",[t._v("具体配置项可查看"),s("a",{attrs:{href:"https://www.vuepress.cn/config/",title:"vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress"),s("OutboundLink")],1),t._v("官网以及"),s("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/blog.html",title:"reco",target:"_blank",rel:"noopener noreferrer"}},[t._v("reco"),s("OutboundLink")],1)])]),s("h2",{attrs:{id:"编写第一篇个人博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写第一篇个人博客"}},[t._v("#")]),t._v(" 编写第一篇个人博客")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[t._v("说明")]),s("p",[t._v("reco主题会自动获取文件下的md文件，所以只要在你想要的文件下新建md文件编写第一篇博客(本项目是在blob文件夹下进行创建)")])]),s("p",[s("img",{attrs:{src:"http://img.p000bb.work/image-20220801143710698.png",alt:"image-20220801143710698"}})]),t._v(" "),s("h2",{attrs:{id:"启动服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[t._v("#")]),t._v(" 启动服务")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" docs:dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm run docs:dev")]),t._v("\n")])])]),s("ul",[s("li",[t._v("如下图所示\n"),s("img",{attrs:{src:"http://img.p000bb.work/image-20220801144314996.png",alt:"image-20220801144314996"}})])]),t._v(" "),s("h2",{attrs:{id:"下载typora以及picgo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载typora以及picgo"}},[t._v("#")]),t._v(" 下载"),s("a",{attrs:{href:"https://typoraio.cn/",title:"Typora",target:"_blank",rel:"noopener noreferrer"}},[t._v("Typora"),s("OutboundLink")],1),t._v("以及"),s("a",{attrs:{href:"https://github.com/Molunerfinn/PicGo/releases/tag/v2.3.0",title:"PicGo",target:"_blank",rel:"noopener noreferrer"}},[t._v("PicGo"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("配置Typora")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[t._v("说明")]),s("p",[t._v("PicGo路径选择你PicGo安装的路径即可")])]),s("p",[s("img",{attrs:{src:"http://img.p000bb.work/image-20220801145159693.png",alt:"image-20220801145159693"}})]),t._v(" "),s("ul",[s("li",[t._v("配置PicGo")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[t._v("说明")]),s("p",[t._v("我是用的是七牛图床(购买的腾讯域名使用CDN 加速域名)(请自行查找如何配置七牛云cdn)")])]),s("p",[s("img",{attrs:{src:"http://img.p000bb.work/image-20220801145418550.png",alt:"image-20220801145418550"}})]),t._v(" "),s("ul",[s("li",[t._v("在Typora编写博客并上传图片")]),t._v(" "),s("li",[t._v("成功后返回如下结果\n"),s("img",{attrs:{src:"http://img.p000bb.work/image-20220801150953838.png",alt:"image-20220801150953838"}})]),t._v(" "),s("li",[t._v("七牛云后台查看相应文件")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[t._v("说明")]),s("p",[t._v("至此之后在Typora上写的博客图片均被存放至七牛云")])]),s("p",[s("img",{attrs:{src:"http://img.p000bb.work/image-20220801151117695.png",alt:"image-20220801151117695"}})]),t._v(" "),s("h2",{attrs:{id:"github自动化部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github自动化部署"}},[t._v("#")]),t._v(" github自动化部署")]),t._v(" "),s("ol",[s("li",[t._v("设置 Secrets\n生成教程可以看 GitHub 官方的帮助文档："),s("a",{attrs:{href:"https://docs.github.com/cn/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token",title:"创建个人令牌",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建个人令牌"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"title"},[t._v("警告")]),s("p",[t._v("切记：令牌名字一定要叫："),s("code",[t._v("ACCESS_TOKEN")]),t._v("，这是后面的 Action 需要用的\n"),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("编写 workflow 文件")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("持续集成一次运行的过程，就是一个 workflow（工作流程）。")])]),s("p",[t._v("目录结构如图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.p000bb.work/image-20220801151627098.png",alt:"image-20220801151627098"}})]),t._v(" "),s("p",[s("code",[t._v("main.yml")]),t._v("的代码如下：")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy GitHub Pages\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 触发条件：在 push 到 master 分支后")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务器环境：最新版 Ubuntu")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取代码")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persist-credentials")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" npm run build\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到 GitHub Pages")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@releases/v3\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ACCESS_TOKEN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("BRANCH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("FOLDER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("自动化部署")])]),t._v(" "),s("p",[t._v("配置好上面所有的东西之后，每当你提交代码到你的github master分支之后，github就会自动帮你自动构建")]),t._v(" "),s("h2",{attrs:{id:"上传至github并修改cname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传至github并修改cname"}},[t._v("#")]),t._v(" 上传至github并修改CNAME")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.p000bb.work/image-20220801181014967.png",alt:"image-20220801181014967"}}),t._v(" "),s("img",{attrs:{src:"http://img.p000bb.work/image-20220801181036725.png",alt:"image-20220801181036725"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[t._v("说明")]),s("p",[t._v("CNAME指向自己的域名")])]),s("h2",{attrs:{id:"域名配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名配置"}},[t._v("#")]),t._v(" 域名配置")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.p000bb.work/image-20220801181306499.png",alt:"image-20220801181306499"}})]),t._v(" "),s("h2",{attrs:{id:"访问网页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问网页"}},[t._v("#")]),t._v(" 访问网页")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.p000bb.work/image-20220801181343985.png",alt:"image-20220801181343985"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);