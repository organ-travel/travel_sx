<template>
  <com-wrap class="m-custom-page">
    <com-tab :act-index="actIndex" :nav-arr="customNav" @changeNav="changeNav"></com-tab>
    <com-transition v-for="(item, index) in customNav" :key="item.id">
      <div v-if="actIndex == index && customNav[actIndex] && customNav[actIndex].type == 'drum'" :class="`m-${customNav[actIndex].type}`">
        <div class="u-desc">我们现在看到的黄河古渡口小镇是壶口文旅公司2017年在原圪针滩古渡口基础上恢复修葺而成的，古镇以陕北特色窑洞建筑高低错落布局，总占地面积70亩，窑洞建筑面积1.4万平米。其中一期占地面积37亩，窑洞建筑面积6800平米，打造了156孔陕北台地窑洞群风格为主体的小镇物理商业文化体验打造了156孔陕北台地窑洞群风格为主体的小镇物理商业文化体验</div>
        <com-list :list-arr="drumArr"></com-list>
      </div>
      <div v-if="actIndex == index && customNav[actIndex] && customNav[actIndex].type == 'paperCut'" :class="`m-${customNav[actIndex].type}`">
        剪纸
      </div>
      <div v-if="actIndex == index && customNav[actIndex] && customNav[actIndex].type == 'shoot'" :class="`m-${customNav[actIndex].type}`">
        摄影
      </div>
      <div v-if="actIndex == index && customNav[actIndex] && customNav[actIndex].type == 'picture'" :class="`m-${customNav[actIndex].type}`">
        壶口图集
      </div>
      <div v-if="actIndex == index && customNav[actIndex] && customNav[actIndex].type == 'film'" :class="`m-${customNav[actIndex].type}`">
        <com-list :list-arr="filmArr" :is-img="false"></com-list>
        <p class="u-more">点击更多视频 >></p>
      </div>
    </com-transition>
  </com-wrap>
</template>
<script>
import dataset from '@/config/dataset'
export default {
  name: 'Custom',
  components: {
  },
  data () {
    return {
      actIndex: 0,
      // customNav: dataset.customNav,
      customNav: [],
      articleObj: {},
      queryOption: [],
      drumArr: [],
      filmArr: []
    }
  },
  // watch: {
  //   '$route.query.actIndex' (n, o) {
  //     this.changeNav(n || 0)
  //   }
  // },
  async mounted () {
    await this.setMenu()
    // this.setActiveIndex()
    // this.setCurCategory()
    this.actIndex = parseInt(this.$route.query.actIndex) || this.actIndex
    this.customNav = this.getCurCategory.children || []
    this.customNav.forEach(async (item, index) => {
      this.queryOption[index] = Object.assign({}, JSON.parse(JSON.stringify(dataset.queryOption)), { cat_id: item.id })
      const res = (await this.queryArticleList(this.queryOption[index])).data
      this.$set(this.articleObj, item.type, res.articleList || [])
      this.queryOption[index].total = res.articleCount || 0
      this.queryOption[index].start++
      console.log(item, item.id, item.type, this.queryOption[index], this.articleObj)
    })
    this.getDrum()
    this.getFilm()
  },
  methods: {
    changeNav (index) {
      this.actIndex = index
    },
    getDrum () {
      this.drumArr = [{
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        text: '壶口斗鼓'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        text: '壶口斗鼓'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        text: '壶口斗鼓'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        text: '壶口斗鼓'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        text: '壶口斗鼓'
      }]
    },
    getFilm () {
      // this.filmArr = [{
      //   addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
      //   route: '#/',
      //   text: '壶口视频'
      // }]
      this.filmArr = [{
        iconClass: 'u-film-bg',
        route: '#/',
        text: '壶口视频'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-custom-page {
  background url("~@/assets/img/custom_hk/bg-custom.jpg") center no-repeat
  background-size cover
  >>> .m-com-container {
    width 1260px
    .m-com-center {
      padding 230px 0 155px
      .u-com-title {
        margin 0 auto 110px
        width 426px
        height 146px
        background url("~@/assets/img/custom_hk/title-custom.png") no-repeat center
      }
      .m-com-content {
        padding 44px 16px 31px
      }
    }
  }
  >>> .m-com-tab {
    margin-bottom 27px
    height 50px
    .m-com-nav {
      padding 14px 35px
      background-color #ffffff
      border-radius 25px
      font-size 20px
      color #000000
      text-align center
      transition all .2s ease
      &.active, &:hover {
        background-color #ec5a02
        color #ffffff
      }
    }
    .m-com-nav + .m-com-nav {
      margin-left 20px
    }
  }
  >>> .m-com-transition {
    .m-drum {
      .u-desc {
        padding 0 169px 16px
        line-height 28px
        font-size 14px
        text-align center
        color #000000
      }
      .m-com-list {
        .m-com-img {
          margin 14px
          width 381px
          height 284px
          .u-com-img {
          }
        }
      }
    }
    .m-paperCut, .m-shoot, .m-picture {
      line-height 100px
      text-align center
    }
    .m-film {
      .m-com-list {
        padding 25px 0 28px
        .m-com-img {
          margin 0 auto
          width 1150px
          height 647px
          .u-film-bg {
            display inline-block
            background url('~@/assets/img/custom_hk/bg-film.jpg') no-repeat center
          }
        }
      }
      .u-more {
        line-height 42px
        text-align center
        font-size 18px
        color #000000
      }
    }
  }
}
</style>
