<template>
  <div>
    <div class="swiperhi" :class="{'show':!showHome}">
      <section class="videoShow-wrapper">
        <!-- <div v-if="videoSrc !== ''" class="video-wrapper">
          <video src="">您的浏览器不支持video标签</video>
        </div>
        <div v-else class="video-wrapper" @click="openVideoSound()">
          <img v-if="!videoItem.id" src="../assets/img/home/bg-video.jpg" alt="">
          <video v-else :id="videoItem.id +'video'"  muted autoplay @canplaythrough="oncanplaythrough">
            <source :src="videoItem.video_url" type="video/mp4">
          </video>
        </div> -->
        <div v-if="videoItem.video_url" class="video-wrapper" @click="openVideoSound()">
          <video :id="videoItem.id +'video'"  muted autoplay @canplaythrough="oncanplaythrough">
            <source :src="videoItem.video_url" type="video/mp4">
          </video>
        </div>
        <a href="javascript:;" class="btn-enter" @click="handleEnter">点击进入官网</a>
      </section>
    </div>
    <div class="m-home-page swiperhi" :class="{'show':showHome}">
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
        <wonder :wonder-obj="wonderObj"></wonder>
        <strategy :strategy-obj="strategyObj"></strategy>
      </div>
      <custom :custom-arr="customArr"  :custom-obj="customObj" :active-label="activeLabel" :custom-nav="customNav" @changeCustom="changeCustom"></custom>
      <div class="m-map m-wrap">
        <video :id="bottomVideoItem.id +'video'" controls poster="../assets/img/home/map.jpg" width="100%" height="100%">
          <source :src="bottomVideoItem.video_url" type="video/mp4">
        </video>
      </div>
    </div>
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
import Config from '@/config'
import Swiper from 'swiper'

export default {
  pageName: 'Home',
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
      showHome: Config.showHome,
      videoSrc: '',
      typeArr: [],
      is_pary_video: true,
      // surveyNav: dataset.surveyNav,
      surveyNav: [],
      infoNav: dataset.infoNav,
      wonderObj: {},
      // wonderArr: dataset.wonderArr,
      // strategyArr: dataset.strategyArr,
      strategyObj: {},
      arrItem: [],
      videoItem: {},
      bottomVideoItem: {},
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
      customObj: {},
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
    // 获取视频url
    await this.getVideo()
    if (!this.showHome) {
      const vdo = document.getElementById(this.videoItem.id + 'video')
      // if (vdo) {

      if (this.is_pary_video && vdo) {
        const userAgent = navigator.userAgent
        vdo.play()
        console.log(userAgent.indexOf('Safari'))
        if (userAgent.indexOf('Safari') === -1) {
          vdo.muted = false
        }
      }
      // } else {
      //   this.SET_SHOW_MAIN(true)
      // }
    } else {
      this.SET_SHOW_MAIN(true)
      this.SET_SHOW_APP(true)
    }
    await this.setMenu()
    this.typeArr = await this.getHomeTopCategoryList()

    // 头图swiper
    await this.getSwiper()

    /* eslint-disable */
    new Swiper ('.m-swiper', {
      loop: true,
      autoplay: 2000,
      speed:2000,
      observer:true,
      observeParents:true,
      pagination:'.swiper-pagination',
      paginationClickable: true
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
    oncanplaythrough () {
      // console.log(111111111)
      this.SET_SHOW_MAIN(true)
    },
    openVideoSound(){
      let vdo = document.getElementById(this.videoItem.id + 'video')
      vdo.play()
      vdo.muted = vdo.muted ? false: true
    },
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
      // await this.customSwiper.destroy()
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

    //获取视频url
    async getVideo () {
      // if (!document.getElementById(this.videoItem.id + 'video')) {
      //   this.SET_SHOW_MAIN(true)
      //   return
      // }
      try {
        const videos = (await this.getVideoUrl()) || []
        if(videos.length > 0)  this.videoItem = videos[0]
        if(videos.length > 1)  this.bottomVideoItem = videos[1]
      } catch (e) {
        this.SET_SHOW_MAIN(true)
      }
    },
    // 获取壶口概况的数据
    getSurvey () {
      const menuData = [].concat(this.getMenuData) || []
      this.surveyNav = menuData[1].children || []
      this.surveyNav.forEach(item => {
        this.surveyDatas[item.type] = []
        // this.$set(this.surveyDatas, item.type, [item])
        this.surveyDatas[item.type].push(item)
      })
      this.surveyLabel = this.surveyNav[0].type
      this.surveyArr = this.surveyDatas[this.surveyLabel]
    },
    // 壶口资讯的数据
    getInfo () {
      const menuData = [].concat(this.getMenuData) || []
      const arr = menuData[2].children || []
      arr.forEach(async (item, index) => {
        this.queryOption[index] = Object.assign({}, JSON.parse(JSON.stringify(dataset.queryOption)), { limit:8, cat_id: item.id })
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
      this.wonderObj = menuData[3] || []
    },
    // 壶口攻略的数据
    getStrategy () {
      const menuData = [].concat(this.getMenuData) || []
      this.strategyObj = menuData[4] || []
    },
    // 获取壶口风情的数据
    getCustom () {
      const menuData = [].concat(this.getMenuData) || []
      this.customNav = menuData[5].children || []
      this.customObj = menuData[5] || {}
      this.customNav.forEach(item => {
        this.customDatas[item.type] = []
        this.customDatas[item.type].push(item)
      })
      this.activeLabel = this.customNav[0].type
      console.log(this.surveyLabel)
      this.customArr = this.customNav
    },
    handleEnter() {
      Config.showHome = true
      this.showHome =  Config.showHome
      this.SET_SHOW_MAIN(true)
      this.SET_SHOW_APP(true)
      const array =  this.arrItem
      this.arrItem = []
      this.arrItem = array
      const vdo = document.getElementById(this.videoItem.id + 'video')
      vdo && vdo.pause()
      this.is_pary_video = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .swiperhi{
    display:none;
  }
  .swiperhi.show{
    display:block;
  }
.m-home-page {
  .m-map {
    width 100%
    height 622px
  }
  .m-merge {
    background url('~@/assets/img/home/wonder.jpg') no-repeat center
    background-size cover
  }
  .swiper-container {
    width 100%
    height 680px
    .img {
      width 100%
      height 680px
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
.videoShow-wrapper {
  position: fixed
  width:100%
  height: 100%
  top:0
  left:0
  z-index 10000
  .video-wrapper {
    position: absolute
    width:100%
    height: 100%
    left:0
    top:0
    img, video {
      max-width 100%
    }
  }
  .btn-enter {
    position: absolute
    left: 50%
    margin-left: -100px
    top: 50%
    margin-top: -22px
    font-size 20px
    color: #ec5a02
    border 2px solid #ec5a02
    padding:11px 36px
    border-radius 2px
    &:hover {
      background-color: #ec5a02
      color: #fff
    }
  }
}
</style>
