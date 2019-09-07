export default {
  // 获取文章信息的初始化分页参数
  queryOption: {
    cat_id: -1,
    start: 0,
    limit: 10,
    is_top: 0,
    tag: 'common',
    total: 0
  },
  initMenu: [{
    name: '网站首页',
    type: '#/',
    children: []
  }],
  initMenuRelations: {
    'home': 0,
    '': 0
  },
  // menuData: [{
  //   name: '网站首页',
  //   route: '#/'
  // }, {
  //   name: '壶口概况',
  //   route: '#/survey',
  //   sub: [{
  //     name: '简介',
  //     route: '#/introduction'
  //   }, {
  //     name: '历史',
  //     route: '#/'
  //   }, {
  //     name: '文化',
  //     route: '#/'
  //   }, {
  //     name: '地理',
  //     route: '#/'
  //   }, {
  //     name: '资源',
  //     route: '#/'
  //   }, {
  //     name: '美文',
  //     route: '#/letters'
  //   }]
  // }, {
  //   name: '壶口资讯',
  //   route: '#/info',
  //   sub: [{
  //     name: '景区新闻',
  //     route: '#/'
  //   }, {
  //     name: '文旅动态',
  //     route: '#/'
  //   }, {
  //     name: '景区活动',
  //     route: '#/'
  //   }, {
  //     name: '招贤纳士',
  //     route: '#/'
  //   }, {
  //     name: '文件下载',
  //     route: '#/'
  //   }]
  // }, {
  //   name: '壶口奇观',
  //   route: '#/wonder',
  //   sub: [{
  //     name: '古渡口小镇',
  //     route: '#/'
  //   }, {
  //     name: '4D影院',
  //     route: '#/'
  //   }, {
  //     name: '黄河大合唱',
  //     route: '#/'
  //   }, {
  //     name: '观龙台',
  //     route: '#/'
  //   }, {
  //     name: '壶口八景',
  //     route: '#/'
  //   }]
  // }, {
  //   name: '壶口攻略',
  //   route: '#/strategy',
  //   sub: [{
  //     name: '美食',
  //     route: '#/'
  //   }, {
  //     name: '住宿',
  //     route: '#/'
  //   }, {
  //     name: '线路',
  //     route: '#/'
  //   }, {
  //     name: '游记',
  //     route: '#/'
  //   }, {
  //     name: '购物',
  //     route: '#/'
  //   }, {
  //     name: '娱乐',
  //     route: '#/'
  //   }]
  // }, {
  //   name: '壶口风情',
  //   route: '#/custom',
  //   sub: [{
  //     name: '剪纸',
  //     route: '#/'
  //   }, {
  //     name: '斗鼓',
  //     route: '#/'
  //   }, {
  //     name: '摄影',
  //     route: '#/'
  //   }, {
  //     name: '壶口图集',
  //     route: '#/'
  //   }, {
  //     name: '壶口影集',
  //     route: '#/'
  //   }]
  // }, {
  //   name: '壶口创客',
  //   route: '#/maker'
  // }, {
  //   name: '联系我们',
  //   route: '#/contact'
  // }],
  // menuRelations: {
  //   'home': 0,
  //   'survey': 1,
  //   'introduction': 1,
  //   'info': 2,
  //   'wonder': 3,
  //   'strategy': 4,
  //   'custom': 5,
  //   'maker': 6,
  //   'contact': 7
  // },
  // 首页
  typeArr: [{
    className: 'm-module',
    iconClass: 'u-notice',
    type: 'notice',
    name: '重要通知'
  }, {
    className: 'm-module m-orange',
    iconClass: 'u-price',
    type: 'price',
    name: '票价信息'
  }, {
    className: 'm-module',
    iconClass: 'u-perchase',
    type: 'perchase',
    name: '在线购票'
  }, {
    className: 'm-module m-orange',
    iconClass: 'u-scenery',
    type: 'scenery',
    name: '壶口八景'
  }, {
    className: 'm-module m-orange',
    iconClass: 'u-film',
    type: 'film',
    name: '4D影院'
  }, {
    className: 'm-module',
    iconClass: 'u-gudukou',
    type: 'gudukou',
    name: '古渡口小镇'
  }, {
    className: 'm-module m-orange',
    iconClass: 'u-sing',
    type: 'sing',
    name: '黄河大合唱'
  }, {
    className: 'm-module',
    iconClass: 'u-wlt',
    type: 'wlt',
    name: '望龙台'
  }],
  // surveyNav: [{
  //   className: 'm-column',
  //   iconClass: 'icon u-history',
  //   route: '#/',
  //   text: '历史'
  // }, {
  //   className: 'm-column',
  //   iconClass: 'icon u-culture',
  //   route: '#/',
  //   text: '文化'
  // }, {
  //   className: 'm-column',
  //   iconClass: 'icon u-geo',
  //   route: '#/',
  //   text: '地理'
  // }, {
  //   className: 'm-column',
  //   iconClass: 'icon u-source',
  //   route: '#/',
  //   text: '资源'
  // }, {
  //   className: 'm-column',
  //   iconClass: 'icon u-letters',
  //   route: '#/',
  //   text: '美文'
  // }],
  infoNav: [{
    name: '景区动态'
  }, {
    name: '文旅动态'
  }, {
    name: '景区活动'
  }],
  wonderArr: [{
    img: './static/gdk.jpg',
    iconClass: 'u-img u-gdk',
    type: '#/',
    name: '古渡口小镇'
  }, {
    img: '../../assets/img/4d.jpg',
    iconClass: 'u-img u-4d',
    type: '#/',
    name: '4D影院'
  }, {
    img: '../../assets/img/hh.jpg',
    iconClass: 'u-img u-hh',
    type: '#/',
    name: '黄河大合唱'
  }, {
    img: '../../assets/img/glt.jpg',
    iconClass: 'u-img u-glt',
    type: '#/',
    name: '观龙台'
  }, {
    img: '../../assets/img/hkbj.jpg',
    iconClass: 'u-img u-hkbj',
    type: '#/',
    name: '壶口八景'
  }],
  strategyArr: [{
    iconClass: 'pic-com u-eat',
    type: 'eat',
    name: '吃'
  }, {
    iconClass: 'pic-com u-live',
    type: 'live',
    name: '住'
  }, {
    iconClass: 'pic-com u-xing',
    type: 'xing',
    name: '行'
  }, {
    iconClass: 'pic-com u-you',
    type: 'you',
    name: '游'
  }, {
    iconClass: 'pic-com u-play',
    type: 'play',
    name: '娱'
  }, {
    iconClass: 'pic-com u-buy',
    type: 'buy',
    name: '购'
  }],
  // 壶口风情导航
  // customNav: [{
  //   name: 'drum',
  //   text: '斗鼓'
  // }, {
  //   name: 'paperCut',
  //   text: '剪纸'
  // }, {
  //   name: 'shoot',
  //   text: '摄影'
  // }, {
  //   name: 'picture',
  //   text: '壶口图集'
  // }, {
  //   name: 'film',
  //   text: '壶口影集'
  // }],
  // 壶口奇观导航
  wonderNav: [{
    name: 'gudukou',
    text: '古渡口小镇'
  }, {
    name: 'film',
    text: '4D影院'
  }, {
    name: 'sing',
    text: '黄河大合唱'
  }, {
    name: 'wlt',
    text: '望龙台'
  }, {
    name: 'scenery',
    text: '壶口八景'
  }],
  //
  noticeNav: [{
    name: 'notice',
    text: '重要通知'
  }, {
    name: 'price',
    text: '票价信息'
  }, {
    name: 'perchase',
    text: '在线购票'
  }],
  // 壶口风情导航
  // infoPageNav: [{
  //   type: 'news',
  //   name: '景区新闻'
  // }, {
  //   type: 'dynamic',
  //   name: '文旅动态'
  // }, {
  //   type: 'activity',
  //   name: '景区活动'
  // }, {
  //   type: 'recuit',
  //   name: '招贤纳士'
  // }, {
  //   type: 'download',
  //   name: '文件下载'
  // }],
  // 壶口风情导航
  // infoPageNav: [{
  //   name: 'news',
  //   text: '景区新闻'
  // }, {
  //   name: 'dynamic',
  //   text: '文旅动态'
  // }, {
  //   name: 'activity',
  //   text: '景区活动'
  // }, {
  //   name: 'recuit',
  //   text: '招贤纳士'
  // }, {
  //   name: 'download',
  //   text: '文件下载'
  // }],
  // strategyNav: [{
  //   name: 'eat',
  //   text: '美食'
  // }, {
  //   name: 'live',
  //   text: '住宿'
  // }, {
  //   name: 'xing',
  //   text: '路线'
  // }, {
  //   name: 'you',
  //   text: '游记'
  // }, {
  //   name: 'buy',
  //   text: '购物'
  // }, {
  //   name: 'play',
  //   text: '娱乐'
  // }],
  surveyContent: [{
    id: 'history',
    content: '抗日战争时期诗人光未然在此创作出了《黄河大合唱》的歌词。主要景观有：水底冒烟、旱地行船、霓虹戏水、晴空洒雨、旱天鸣雷、冰峰倒挂、山飞海立、十里龙槽、石窝宝镜、孟门夜月、女娇望夫、明清码头等20多个。1988年黄河壶口被国务院确定为国家重点风景名胜区，1992年被评为“中国旅游胜地四十佳”之一，2002年被国土资源部评为国家地质公园及地质遗迹保护区，2008年被评为国家4A级旅游景区。1999年6月18日，江泽民同志视察黄河时，面对百丈飞瀑，挥笔写下“黄河壶口瀑布”六个大字。相继还有李鹏、朱镕基、李瑞环、吴邦国、温家宝等党和国家领导人亲临壶口瀑布，对壶口景区给予了高度的评价和赞誉！“源出昆仑衍大流，玉关九转一壶收”，雄伟壮观的壶口瀑布目前已成为“两黄两圣”和陕北红色旅游线路的重要组成部分，是亿万华夏儿女心之所归、梦之所盼的人文圣地，为世界所瞩目。'
  }, {
    id: 'culture',
    content: '<div class="para">景区游览活动主要包括黄河文化、人文历史、地理风貌、地质奇观游四个内容，整个景区黄河与黄土交相辉映，峡谷和高山相互衬托，在母亲黄河上壶口是最有代表性的旅游景点之一。所以，壶口景区被评为国家级重点风景名胜区，国家地质公园和地质遗迹保护区，国家4A级景区。</div><div class="para">1988年被国务院公布为国家重点风景名胜区；<br/>1992年被评为中国旅游胜地四十佳之一；<br/>1997年被国家旅游局选入推向世界的35张王牌景区之一；2008年被评为国家4Ａ级风景名胜区；<br/>2013年被国家水利部确定为国家水利风景区。<br/>景区红色文化氛围浓厚，2000年被陕西省委评定为爱国主义教育基地，是《黄河大合唱》创作灵感第一诞生地，2017年9月27日，公司打造了大型山河实景演出《黄河大合唱》，以壶口瀑布为背景，以冼星海创作《黄河大合唱》为故事主线，通过逼真的场景，穿越战火硝烟的年代，在独特的枪炮烟火特效和跌宕起伏的故事情节之中，感悟黄河儿女坚定而执着的家国情怀，让中小学生研学与教育实践充分结合，身临其境，深切感受到“天下奇观，中华之魂”不一样的文化内涵。景区每年接待学生约30万人次。</div>'
  }, {
    id: 'geo',
    content: '<div class="para">黄河壶口瀑布以黄河为轴心，位于陕西省延安市宜川县城东35公里处的秦晋大峡谷黄河河床中。地理位置为北纬36о03′36″-36о9′45″,东经110о26′23″-110о26′29″。河东有吕梁山，河西为黄龙山。这里山势雄峙，气势非凡，黄河河道舒展蜿蜒。宜川黄河壶口瀑布国家地质公园，其范围北起龙王辿，南至川口。河流西侧的界线即由河道中心线向西侧岸边扩展约1.5km的可见山头地带。从地质遗迹的分布及游览赏景的角度评价壶口瀑布，该公园实际上已经形成了一条沿山俯览黄河约10km的地质遗迹科学考察和旅游景观线路。</div><div class="para">黄河壶口瀑布为我国大型瀑布之一，是黄河河道上第一大瀑布，其水流落差有枯水期、平水期、洪水期多种变化。枯水期一般落差为十几米，洪水季节可达40m以上。长期以来，由于黄土、黄河、黄肤色引发的古老话题，使得人们对古老文明尤其是黄河古文化倍感亲切。地史时期在黄河河道及其两岸存留的人文历史遗迹以及流水冲蚀的独特的地貌景观，如今已成为人们观赏、考察、研究的旅游自然资源和人文旅游资源。</div><div class="para">陕西宜川黄河壶口瀑布国家地质公园属暖温带半干旱地区，具有明显的大陆性季风气候，年平均气温9.9оC,最高39℃，最低-22℃，其降雨量多在7、8、9月份，雨量分别为137.8mm，117.7mm,90.3mm。12月份由于天气干冷，降雨量仅3.4mm。受当地降雨量的影响以及黄河上游水文条件变化的制约，壶口一带平水期平均水流量在700m3/s左右。洪水期最大流量可达1000m3/s以上，主瀑宽约40余米。<br/>壶口瀑布，是世界上最大的黄色瀑布由于黄河流至壶口一带，两岸苍山夹峙，把黄河水约束在狭窄的黄河峡谷中，河水聚拢，收束为一股，奔腾呼啸，跃入深潭，溅起浪涛翻滚，形似巨壶内黄水沸腾。巨大的浪涛，在形成的落差注入谷底后，激起一团团水雾烟云，景色分外奇丽。站在河边观瀑，游人莫不唱起“风在吼，马在叫，黄河在咆哮”这威武雄壮的歌声。</div><div class="para">黄河水一路咆哮至秦晋峡谷时由400多米骤然收缩为50米，倾泻于落差30米的石槽中，因其形似茶壶注水，得名壶口瀑布。据《尚书•禹贡》记载“大禹治水，治梁及岐”，壶口被载入史册。壶口瀑布是在软硬相间、微向上游倾斜的岩层中形成，跌落的河水产生漩涡水流，掏蚀下部软岩层，使上部突出的硬岩层失去支撑而崩塌，导致瀑布向上游后退，壶口瀑布平均每年后退3-4厘米，形成了地质奇观--十里龙槽。其汹涌滂湃、怒吼咆哮之势令游人无不悸魂慑魄，叹谓“壮哉”!故被人们誉为“民族精神”、“黄河魂”和中华民族精神的象征。</div>'
  }, {
    id: 'source',
    content: '景区地质资源丰富，2002年被国家国土资源部确定为国家地质公园及地质遗迹保护区，公园以气势磅礴的壶口瀑布群为主要地质遗迹，包括主瀑布、侧瀑布、十里龙槽、孟门离堆岛、窝穴、侧蚀洞穴、漏斗、棋盘格式节理和河流侵蚀形成的河谷地貌等地质遗迹。这些地质研究对于研究秦晋峡谷的形成、黄河的发育、水动力特征等具有重要意义。黄河壶口瀑布为我国大型瀑布之一，是黄河河道上第一大瀑布，其水流落差有枯水期、平水期、洪水期多种变化。枯水期一般落差为十几米，洪水季节可达40m以上。长期以来，由于黄土、黄河、黄肤色引发的古老话题，使得人们对古老文明尤其C是黄河古文化倍感亲切。稀有的自然属性、较高的美学观赏价值，具有一定规模和分布范围的地质遗迹景观为主体，并融合其它自然景观与人文景观而构成的一种独特的自然区域，具有科研科普和观赏游览的双重功能，每年来景区进行研学、地质科普研究、观光旅游究人的学生、专家很多。'
  }, {
    id: 'letters',
    content: '景区地质资源丰富，2002年被国家国土资源部确定为国家地质公园及地质遗迹保护区，公园以气势磅礴的壶口瀑布群为主要地质遗迹，包括主瀑布、侧瀑布、十里龙槽、孟门离堆岛、窝穴、侧蚀洞穴、漏斗、棋盘格式节理和河流侵蚀形成的河谷地貌等地质遗迹。这些地质研究对于研究秦晋峡谷的形成、黄河的发育、水动力特征等具有重要意义。黄河壶口瀑布为我国大型瀑布之一，是黄河河道上第一大瀑布，其水流落差有枯水期、平水期、洪水期多种变化。枯水期一般落差为十几米，洪水季节可达40m以上。长期以来，由于黄土、黄河、黄肤色引发的古老话题，使得人们对古老文明尤其是黄河古文化倍感亲切。稀有的自然属性、较高的美学观赏价值，具有一定规模和分布范围的地质遗迹景观为主体，并融合其它自然景观与人文景观而构成的一种独特的自然区域，具有科研科普和观赏游览的双重功能，每年来景区进行研学、地质科普研究、观光旅游究人的学生、专家很多。'
  }],
  // surveyAnchor: [{
  //   id: 'history',
  //   text: '历史'
  // }, {
  //   id: 'culture',
  //   text: '文化'
  // }, {
  //   id: 'geo',
  //   text: '地理'
  // }, {
  //   id: 'source',
  //   text: '资源'
  // }, {
  //   id: 'letters',
  //   text: '美文'
  // }]
}
