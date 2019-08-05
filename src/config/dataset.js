export default {
  menuData: [{
    name: '网站首页',
    route: '#/'
  }, {
    name: '壶口概况',
    route: '#/',
    sub: [{
      name: '简介',
      route: '#/introduction'
    }, {
      name: '历史',
      route: '#/'
    }, {
      name: '文化',
      route: '#/'
    }, {
      name: '地理',
      route: '#/'
    }, {
      name: '资源',
      route: '#/'
    }, {
      name: '美文',
      route: '#/'
    }]
  }, {
    name: '壶口资讯',
    route: '#/test',
    sub: [{
      name: '景区活动',
      route: '#/'
    }, {
      name: '景区新闻',
      route: '#/'
    }, {
      name: '文件下载',
      route: '#/'
    }, {
      name: '文旅动态',
      route: '#/'
    }, {
      name: '招贤纳士',
      route: '#/'
    }]
  }, {
    name: '壶口奇观',
    route: '#/',
    sub: [{
      name: '古渡口小镇',
      route: '#/'
    }, {
      name: '观龙台',
      route: '#/'
    }, {
      name: '壶口八景',
      route: '#/'
    }, {
      name: '黄河大合唱',
      route: '#/'
    }, {
      name: '望龙台',
      route: '#/'
    }]
  }, {
    name: '壶口攻略',
    route: '#/',
    sub: [{
      name: '购物',
      route: '#/'
    }, {
      name: '路线',
      route: '#/'
    }, {
      name: '美食',
      route: '#/'
    }, {
      name: '游记',
      route: '#/'
    }, {
      name: '娱乐',
      route: '#/'
    }, {
      name: '住宿',
      route: '#/'
    }]
  }, {
    name: '壶口风情',
    route: '#/',
    sub: [{
      name: '斗鼓',
      route: '#/'
    }, {
      name: '壶口影集',
      route: '#/'
    }]
  }, {
    name: '壶口创客',
    route: '#/'
  }, {
    name: '联系我们',
    route: '#/'
  }],
  menuRelations: {
    'home': 0,
    'introduction': 1,
    'test': 2
  },
  // 首页
  typeArr: [{
    className: 'm-module',
    iconClass: 'u-notice',
    route: '#/',
    text: '重要通知'
  }, {
    className: 'm-module m-orange',
    iconClass: 'u-price',
    route: '#/',
    text: '票价信息'
  }, {
    className: 'm-module',
    iconClass: 'u-perchase',
    route: '#/',
    text: '在线购票'
  }, {
    className: 'm-module m-orange',
    iconClass: 'u-scenery',
    route: '#/',
    text: '壶口八景'
  }, {
    className: 'm-module m-orange',
    iconClass: 'u-film',
    route: '#/',
    text: '4D影院'
  }, {
    className: 'm-module',
    iconClass: 'u-gudukou',
    route: '#/',
    text: '古渡口小镇'
  }, {
    className: 'm-module m-orange',
    iconClass: 'u-sing',
    route: '#/',
    text: '黄河大合唱'
  }, {
    className: 'm-module',
    iconClass: 'u-wlt',
    route: '#/',
    text: '望龙台'
  }],
  surveyArr: [{
    className: 'm-column',
    iconClass: 'icon u-history',
    route: '#/',
    text: '历史'
  }, {
    className: 'm-column',
    iconClass: 'icon u-culture',
    route: '#/',
    text: '文化'
  }, {
    className: 'm-column',
    iconClass: 'icon u-geo',
    route: '#/',
    text: '地理'
  }, {
    className: 'm-column',
    iconClass: 'icon u-source',
    route: '#/',
    text: '资源'
  }, {
    className: 'm-column',
    iconClass: 'icon u-letters',
    route: '#/',
    text: '美文'
  }],
  infoNav: [{
    text: '景区动态'
  }, {
    text: '文旅动态'
  }, {
    text: '景区活动'
  }],
  wonderArr: [{
    img: './static/gdk.jpg',
    iconClass: 'u-img u-gdk',
    route: '#/',
    text: '古渡口小镇'
  }, {
    img: '../../assets/img/4d.jpg',
    iconClass: 'u-img u-4d',
    route: '#/',
    text: '4D影院'
  }, {
    img: '../../assets/img/hh.jpg',
    iconClass: 'u-img u-hh',
    route: '#/',
    text: '黄河大合唱'
  }, {
    img: '../../assets/img/glt.jpg',
    iconClass: 'u-img u-glt',
    route: '#/',
    text: '观龙台'
  }, {
    img: '../../assets/img/hkbj.jpg',
    iconClass: 'u-img u-hkbj',
    route: '#/',
    text: '壶口八景'
  }],
  strategyArr: [{
    iconClass: 'pic-com u-eat',
    route: '#/',
    text: '吃'
  }, {
    iconClass: 'pic-com u-live',
    route: '#/',
    text: '住'
  }, {
    iconClass: 'pic-com u-xing',
    route: '#/',
    text: '行'
  }, {
    iconClass: 'pic-com u-you',
    route: '#/',
    text: '游'
  }, {
    iconClass: 'pic-com u-play',
    route: '#/',
    text: '娱'
  }, {
    iconClass: 'pic-com u-buy',
    route: '#/',
    text: '购'
  }]
}
