<template>
  <section class="m-detail-page">
    <div class="m-detail-banner"></div>
    <div class="m-detail-content">
      <com-bread :list-arr="breadArr"></com-bread>
      <div class="detail-content">
        <h3 class="u-title">壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！</h3>
        <img src="https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg" class="u-img"/>
        <p class="u-param">    壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一。壶口河段上下落差大，因而形成气势磅礴的瀑布。近日壶口瀑布惊现彩虹美景，那七彩之虹就像是一座横跨秦晋两省的鹊桥。许多游客驻足观看，拍下了这难得的美景。壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一。壶口河段上下落差大，因而形成气势磅礴的瀑布。近日壶口瀑布惊现彩虹美景，那七彩之虹就像是一座横跨秦晋两省的鹊桥。许多游客驻足观看，拍下了这难得的美景。壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一。壶口河段上下落差大，因而形成气势磅礴的瀑布。近日壶口瀑布惊现彩虹美景，那七彩之虹就像是一座横跨秦晋两省的鹊桥。许多游客驻足观看，拍下了这难得的美景。壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一。壶口河段上下落差大，因而形成气势磅礴的瀑布。近日壶口瀑布惊现彩虹美景，那七彩之虹就像是一座横跨秦晋两省的鹊桥。许多游客驻足观看，拍下了这难得的美景。壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一。壶口河段上下落差大，因而形成气势磅礴的瀑布。近日壶口瀑布惊现彩虹美景，那七彩之虹就像是一座横跨秦晋两省的鹊桥。许多游客驻足观看，拍下了这难得的美景。壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ShowPic',
  components: {
  },
  data () {
    return {
      detailArr: [],
      breadArr: []
    }
  },
  computed: {
  },
  mounted () {
    this.getBread()
    this.getDetail()
  },
  methods: {
    getBread () {
      this.breadArr = [{
        path: '/',
        text: '首页'
      }, {
        path: '/',
        text: '魅力咨询'
      }, {
        path: '',
        text: '景区活动'
      }]
    },
    getDetail() {
      this.detailArr = [{
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        text: '西安-延安壶口瀑布景区线路',
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        text: '西安-延安壶口瀑布景区线路',
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        text: '西安-延安壶口瀑布景区线路',
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        text: '西安-延安壶口瀑布景区线路',
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        text: '西安-延安壶口瀑布景区线路',
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        text: '西安-延安壶口瀑布景区线路',
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        text: '西安-延安壶口瀑布景区线路',
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        text: '西安-延安壶口瀑布景区线路',
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        text: '西安-延安壶口瀑布景区线路',
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-detail-page {
  position relative
  .m-detail-banner {
    width 100%
    height 648px
    background url('~@/assets/img/contact_hk/banner-contact.jpg') no-repeat center
  }
  >>> .m-detail-content {
    margin 40px auto 160px
    width 1199px
    overflow hidden
    .detail-content {
      padding-top 76px
      text-align center
      color #333333
      .u-title {
        text-align center
        font-weight bold
        font-size 18px
      }
      .u-img {
        margin 44px 0
        width 800px
        height 600px
      }
      .u-param {
        line-height 28px
        text-align left
        font-size 14px
        text-indent 2em
      }
    }
  }
}
</style>
