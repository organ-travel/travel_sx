// 备份文件
<template>
  <com-wrap class="m-info-page">
    <com-tab :act-index="actIndex" :nav-arr="infoPageNav" @changeNav="changeNav"></com-tab>
    <com-transition>
      <com-article v-if="infoPageNav[actIndex].name == 'news'" :arr="newsArr" class="m-news"></com-article>
    </com-transition>
    <com-transition>
      <com-article v-if="infoPageNav[actIndex].name == 'dynamic'" :arr="dynamicArr" class="m-dynamic"></com-article>
    </com-transition>
    <com-transition>
      <com-article v-if="infoPageNav[actIndex].name == 'activity'" :arr="activityArr" class="m-activity"></com-article>
    </com-transition>
    <com-transition>
      <com-article v-if="infoPageNav[actIndex].name == 'recuit'" :arr="recuitArr" :has-detail="false" class="m-recuit"></com-article>
    </com-transition>
    <com-transition>
      <com-article v-if="infoPageNav[actIndex].name == 'download'" :arr="downloadArr" :has-detail="false" :has-download="true" class="m-download" @handleDownload="handleDownload"></com-article>
    </com-transition>
  </com-wrap>
</template>
<script>
import dataset from '@/config/dataset'
export default {
  name: 'Info',
  components: {
  },
  data () {
    return {
      actIndex: 0,
      infoPageNav: dataset.infoPageNav,
      newsArr: [],
      dynamicArr: [],
      activityArr: [],
      recuitArr: [],
      downloadArr: []
    }
  },
  async mounted () {
    await this.setMenu()
    this.setActiveIndex()
    console.log('info mounted', this.getCurCategory)
    this.getNews()
    this.getDynamic()
    this.getActivity()
    this.getRecuit()
    this.getDownload()
  },
  methods: {
    changeNav (index) {
      this.actIndex = index
    },
    handleDownload () {
    },
    getNews () {
      this.newsArr = [{
        id: '',
        date: '2019-08-07',
        text: '壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一。壶口河段上下落差大，因而形成气势磅礴的瀑布。壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布的瀑布壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        text: '壶口斗鼓',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        text: '壶口斗鼓',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        text: '壶口斗鼓',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }]
    },
    getDynamic () {
      this.dynamicArr = [{
        id: '',
        date: '2019-08-07',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }]
    },
    getActivity () {
      this.activityArr = [{
        imgUrl: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        id: '',
        date: '2019-08-07',
        text: '壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一。壶口河段上下落差大，因而形成气势磅礴的瀑布。壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布的瀑布壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        imgUrl: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        id: '',
        date: '2019-08-07',
        text: '壶口斗鼓',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        imgUrl: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        id: '',
        date: '2019-08-07',
        text: '壶口斗鼓',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        imgUrl: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        id: '',
        date: '2019-08-07',
        text: '壶口斗鼓',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }]
    },
    getRecuit () {
      this.recuitArr = [{
        id: '',
        date: '2019-08-07',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        date: '2019-08-07',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }]
    },
    getDownload () {
      this.downloadArr = [{
        id: '',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }, {
        id: '',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-info-page {
  background url("~@/assets/img/info_hk/bg-info.jpg") center no-repeat
  background-size cover
  >>> .m-com-container {
    width 1320px
    .m-com-center {
      padding 265px 0 65px
      .u-com-title {
        margin 0 auto 85px
        width 424px
        height 144px
        background url("~@/assets/img/info_hk/title-info.png") no-repeat center
      }
      .m-com-content {
        padding 60px 69px 45px 51px
      }
    }
  }
  >>> .m-com-tab {
    margin-bottom 10px
    height 40px
    .m-com-nav {
      padding 10px 20px
      background-color transparent
      border-radius 20px
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
      margin-left 10px
    }
  }
  >>> .m-com-transition {
    > .m-com-article {
      .m-article-list {
        padding 40px 0
        min-height 84px
        border-bottom 1px dashed #999999
        .u-img {
          width 146px
          height 108px
        }
      }
    }
  }
}
</style>
