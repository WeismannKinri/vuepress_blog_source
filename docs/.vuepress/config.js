module.exports = {
  "title": "Asahina Blog",
  "description": "For Tech Blog",
  "base": "/",
  "plugins": [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        "theme":['shizuku'],
        clean:true,
        width:200,
        height:320
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
        {
        autoplay:true,  
        "audios":[
          {
          name: '紅蓮華',
          artist: 'Lisa',
          url: '/bgm/紅蓮華.mp3',
          cover: '/bgm/紅蓮華.jpg'
        }]
      }
    ],
    [
      "cursor-effects",
      {
        size: 2,             
        shape: ['star'],  
        zIndex: 999999999 
      }
    ],
    [
      "dynamic-title",
      {
        showIcon: "/ok_favicon.ico",
        showText: "(/≧▽≦/)Hello! You are back!",
        hideIcon: "/no_favicon.ico",
        hideText: "(●—●)Oh! you are leaving!",
        recoverTime: 2000
      }
    ],
    ['go-top']
  ],
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/ok_favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco", 
  "themeConfig": {
    "noFoundPageByTencent": false,
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "My Github",
        "link": "https://github.com/kincolle",
        "icon": "reco-github"                
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": 'Tags'     
      }
    },
    "friendLink": [
      {
        "title": "Kincolle's bilibili",
        "desc": "bilibili kanppai!!",
        "logo": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://space.bilibili.com/33982414"
      },
      {
        "title": "Kincolle's leetcode",
        "desc": "leetcode",
        "logo": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://leetcode-cn.com/u/asahina/"
      }
    ],
    "logo": "/logo.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "Kincolle",
    "authorAvatar": "/avatar.jpg",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}