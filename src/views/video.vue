<template>
  <section class="m-video-page">
    <div class="m-video-banner"></div>
    <div class="m-video-content">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '#/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>魅力壶口</el-breadcrumb-item>
        <el-breadcrumb-item>壶口视频</el-breadcrumb-item>
      </el-breadcrumb>
      <com-list :list-arr="videoArr" :is-video="true"></com-list>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Video',
  components: {
  },
  data () {
    return {
      videoArr: []
    }
  },
  computed: {
  },
  mounted () {
    this.getVideo()
  },
  methods: {
    getVideo() {
      this.videoArr = [{
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
.m-video-page {
  position relative
  .m-video-banner {
    width 100%
    height 648px
    background url('~@/assets/img/contact_hk/banner-contact.jpg') no-repeat center
  }
  >>> .m-video-content {
    margin 40px auto 102px
    width 1199px
    overflow hidden
    .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link, .el-breadcrumb__inner, .el-breadcrumb__separator {
      // line-height 28px
      font-size 14px
      font-weight normal
      color #050505
    }
    .m-com-list {
      padding 12px 0 80px
      width 1231px
      margin-left -16px
      .m-com-img {
        margin 18px 16px
        width 378px
        height 284px
        .u-com-img {
        }
      }
    }
  }
}
</style>
