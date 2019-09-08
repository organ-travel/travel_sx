<template>
  <div class="m-home-page">
    <div v-if="arrItem && arrItem.length" class="m-swiper m-wrap swiper-container">
      <div class="swiper-wrapper">
        <div v-for='(el, index) in arrItem' :key="index" class="swiper-slide">
          <img class="img" :src="el.picture_url">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <type :type-arr="typeArr"></type>
    <survey :survey-arr="surveyArr" :survey-nav="surveyNav" @changeSurvey="changeSurvey"></survey>
    <info :act-index="actIndex" :info-arr="datas">
      <com-tab slot="nav" :act-index="actIndex" :nav-arr="infoNav" fun-name="changeInfos" :is-border="true" @changeInfos="changeInfos"></com-tab>
      <!-- <tab slot="tab" :nav="infoNav" :arr="infoArr" :act-index="actIndex" @changeInfo="changeInfo"></tab> -->
    </info>
    <div class="m-merge">
      <wonder :wonder-arr="wonderArr"></wonder>
      <strategy :strategy-arr="strategyArr"></strategy>
    </div>
    <custom :custom-arr="customArr" :active-label="activeLabel" :custom-nav="customNav" @changeCustom="changeCustom"></custom>
    <div class="m-map m-wrap"></div>
  </div>
</template>

<script>
import Type from '@/components/home/Type.vue'
import Survey from '@/components/home/Survey.vue'
import Info from '@/components/home/Info.vue'
// import Tab from '@/components/home/Tab.vue'
import Wonder from '@/components/home/Wonder.vue'
import Strategy from '@/components/home/Strategy.vue'
import Custom from '@/components/home/Custom.vue'
import dataset from '@/config/dataset'
import Swiper from 'swiper'

export default {
  name: 'Home',
  components: {
    Type,
    Survey,
    // Tab,
    Info,
    Wonder,
    Strategy,
    Custom
  },
  data () {
    return {
      typeArr: [],
      // surveyNav: dataset.surveyNav,
      surveyNav: [],
      infoNav: dataset.infoNav,
      wonderArr: [],
      // wonderArr: dataset.wonderArr,
      // strategyArr: dataset.strategyArr,
      strategyArr: [],
      arrItem: [],
      // 壶口资讯
      infoObj: {},
      datas: [],
      infoArr: [],
      actIndex: 0,
      dynamics: [],
      travel: [],
      activities: [],
      // 壶口风情
      customDatas: {},
      customArr: [],
      customNav: [],
      activeLabel: '',
      customSwiper: null,
      // 壶口概况
      surveyDatas: {},
      surveyArr: [],
      surveyLabel: '',
      queryOption: []
    }
  },
  computed: {
  },
  async mounted () {
    console.log('home mounted------>')
    await this.setMenu()
    this.typeArr = await this.getHomeTopCategoryList()

    // 头图swiper
    await this.getSwiper()

    /* eslint-disable */
    new Swiper ('.m-swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable :true
      }
    })
    // 壶口资讯
    await this.getInfo()
    // 壶口奇观
    await this.getWonder()
    // 壶口攻略
    await this.getStrategy()
    // 壶口风情
    await this.getCustom()
    this.customSwiper = new Swiper ('.custom-swiper', {
      loop: true
    })
    // 壶口概况
    await this.getSurvey()
  },
  methods: {
    changeInfo (index) {
      this.actIndex = index
      this.infoArr = this.datas[index]
    },
    changeInfos (index) {
      this.actIndex = index
    },
    async changeCustom (type) {
      this.activeLabel = type || '',
      this.customArr = this.customDatas[type] || []
      await this.customSwiper.destroy()
      this.customSwiper = new Swiper ('.custom-swiper', {
        loop: true
      })
    },
    changeSurvey (type) {
      this.surveyLabel = type || '',
      this.surveyArr = this.surveyDatas[type] || []
    },
    // 获取头图
    async getSwiper () {
      this.arrItem = (await this.getBannerList())
    },
    // 获取壶口概况的数据
    getSurvey () {
      const menuData = [].concat(this.getMenuData) || []
      const arr = menuData[6].children || []
      const history = [].concat(arr[0])
      if (history.length) {
        this.surveyDatas = Object.assign({}, this.surveyDatas, { history })
        this.surveyNav.push({class_name: 'm-column', icon_class: 'u-history', type: 'history', name: '历史'})
      }
      const culture = [].concat(arr[1])
      if (culture.length) {
        this.surveyDatas = Object.assign({}, this.surveyDatas, { culture })
        this.surveyNav.push({class_name: 'm-column', icon_class: 'u-culture', type: 'culture', name: '文化'})
      }
      const geo = [].concat(arr[2])
      if (geo.length) {
        this.surveyDatas = Object.assign({}, this.surveyDatas, { geo })
        this.surveyNav.push({class_name: 'm-column', icon_class: 'u-geo', type: 'geo', name: '地理'})
      }
      const source = [].concat(arr[3])
      if (source.length) {
        this.surveyDatas = Object.assign({}, this.surveyDatas, { source })
        this.surveyNav.push({class_name: 'm-column', icon_class: 'u-source', type: 'source', name: '资源'})
      }
      const letters = [].concat(arr[4])
      if (letters.length) {
        this.surveyDatas = Object.assign({}, this.surveyDatas, { letters })
        this.surveyNav.push({class_name: 'm-column', icon_class: 'u-letters', type: 'letters', name: '美文'})
      }
      this.surveyLabel = this.surveyNav[0].type
      this.surveyArr = this.surveyDatas[this.surveyLabel]
    },
    // 壶口资讯的数据
    getInfo () {
      const menuData = [].concat(this.getMenuData) || []
      const arr = menuData[1].children || []
      arr.forEach(async (item, index) => {
        this.queryOption[index] = Object.assign({}, JSON.parse(JSON.stringify(dataset.queryOption)), { cat_id: item.id })
        const res = (await this.queryArticleList(this.queryOption[index])).data
        res.articleList.forEach(item1 => {
          item1.description = item1.description.length > 60 ? item1.description.substr(0, 60) + '...' : item1.description.substr(0, 60)
        })
        this.$set(this.datas, index, res.articleList || [])
        if (this.actIndex === index) {
          this.infoArr = this.datas[index]
        }
      })
    },
    // 壶口奇观的数据
    getWonder () {
      const menuData = [].concat(this.getMenuData) || []
      this.wonderArr = menuData[2].children || []
    },
    // 壶口攻略的数据
    getStrategy () {
      const menuData = [].concat(this.getMenuData) || []
      this.strategyArr = menuData[3].children || []
    },
    // 获取壶口风情的数据
    getCustom () {
      const drum = [{
        text: '斗鼓是一种民俗文化',
        imgUrl: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg'
      }, {
        text: '斗鼓是一种民俗文化',
        imgUrl: 'http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg'
      }]
      if (drum.length) {
        this.customDatas = Object.assign({}, this.customDatas, { drum })
        this.customNav.push({type: 'drum', name: '斗鼓'})
      }
      const paperCut = [{
        text: '剪纸',
        imgUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg'
      }, {
        text: '剪纸',
        imgUrl: 'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'
      }]
      if (paperCut.length) {
        this.customDatas = Object.assign({}, this.customDatas, { paperCut })
        this.customNav.push({type: 'paperCut', name: '剪纸'})
      }
      const shoot = [{
        text: '摄影',
        imgUrl: 'https://c-ssl.duitang.com/uploads/item/201805/21/20180521133102_gnvii.jpg'
      }, {
        text: '摄影',
        imgUrl: 'http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg'
      }]
      if (shoot.length) {
        this.customDatas = Object.assign({}, this.customDatas, { shoot })
        this.customNav.push({type: 'shoot', name: '摄影'})
      }
      const picture = [{
        text: '壶口图集',
        imgUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605090433_snnuy.jpg'
      }, {
        text: '壶口图集',
        imgUrl: 'http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg'
      }]
      if (picture.length) {
        this.customDatas = Object.assign({}, this.customDatas, { picture })
        this.customNav.push({type: 'picture', name: '壶口图集'})
      }
      const film = [{
        text: '壶口影集',
        imgUrl: 'https://c-ssl.duitang.com/uploads/item/201808/09/20180809201018_R8Xfu.jpeg'
      }, {
        text: '壶口影集',
        imgUrl: 'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'
      }]
      if (film.length) {
        this.customDatas = Object.assign({}, this.customDatas, { film })
        this.customNav.push({type: 'film', name: '壶口影集'})
      }
      this.activeLabel = this.customNav[0].type
      this.customArr = this.customDatas[this.activeLabel]
      // const menuData = [].concat(this.getMenuData) || []
      // this.customArr = menuData[4].children || []
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-home-page {
  .m-map {
    width 100%
    height 622px
    background url('~@/assets/img/home/map.jpg') no-repeat center
    background-size cover
  }
  .m-merge {
    background url('~@/assets/img/home/wonder.jpg') no-repeat center
    background-size cover
  }
  .swiper-container {
    width 100%
    height 1015px
    .img {
      width 100%
      height 1015px
    }
    >>> .swiper-pagination-bullets {
      bottom 0
      height 63px
      line-height 63px
      background rgba(0, 0, 0, .3)
      .swiper-pagination-bullet {
        margin 0 8px
        width 12px
        height 12px
        background #ffffff
        opacity 1
        vertical-align middle
        &.swiper-pagination-bullet-active {
          width 20px
          height 20px
          background url('~@/assets/img/home/bullet.png') no-repeat center
        }
      }
    }
  }
  >>> .m-com-tab {
    .m-com-nav {
      padding 0 15px
      font-size 24px
      color #666666
      transition all .2s ease
      .u-com-text {
        display inline-block
        padding-bottom 10px
        // border-bottom-width 1px
        // border-bottom-style solid
        // border-bottom-color rgba(236, 90, 2, 0)
        // border-bottom 1px solid rgba(236, 90, 2, 0)
      }
      &.active, &:hover {
        .u-com-text {
          // border-bottom-color rgba(236, 90, 2, 1)
          border-bottom 1px solid rgba(236, 90, 2, 1)
        }
      }
    }
  }
}
</style>
