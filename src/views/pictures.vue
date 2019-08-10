<template>
  <section class="m-pictures-page">
    <div class="m-pictures-banner"></div>
    <div class="m-pictures-list">
      <com-list :list-arr="imgs"></com-list>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Pictures',
  components: {
  },
  data () {
    return {
      imgs: []
    }
  },
  computed: {
  },
  mounted () {
    this.getImg()
  },
  methods: {
    getImg () {
      this.imgs = [{
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
.m-pictures-page {
  position relative
  .m-pictures-banner {
    width 100%
    height 648px
    background url('~@/assets/img/contact_hk/banner-contact.jpg') no-repeat center
  }
  >>> .m-pictures-list {
    margin 0 auto 102px
    width 1199px
    overflow hidden
    .m-com-list {
      padding 62px 0 78px
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
  // .m-contact-wrap {
  //   margin 0 auto
  //   width 1199px
  //   &.m-contact-list {
  //     padding 55px 0
  //     display flex
  //     justify-content center
  //     .m-com-column + .m-com-column {
  //       margin-left 155px
  //     }
  //     >>> .m-com-column {
  //       padding 0 13px
  //       width 138px
  //       height 164px
  //       border-radius 50%
  //       border 1px solid #cccccc
  //       text-align center
  //       .icon-tel {
  //         margin-bottom 30px
  //         width 24px
  //         height 29px
  //         background url('~@/assets/img/contact_hk/icon-tel.png') no-repeat
  //       }
  //       .icon-addr {
  //         margin-bottom 15px
  //         width 18px
  //         height 28px
  //         background url('~@/assets/img/contact_hk/icon-addr.png') no-repeat
  //       }
  //       .icon-email {
  //         margin-bottom 23px
  //         width 25px
  //         height 18px
  //         background url('~@/assets/img/contact_hk/icon-email.png') no-repeat
  //       }
  //       .text {
  //         width 100%
  //         word-wrap break-word
  //       }
  //     }
  //   }
  //   &.m-contact-map {
  //     height 540px
  //   }
  // }
  // .m-contact-code {
  //   display flex
  //   justify-content center
  //   width 100%
  //   height 215px
  //   background #f2f2f2
  //   >>> .m-com-column {
  //     width 270px
  //     text-align center
  //     .img {
  //       width 110px
  //       height 110px
  //     }
  //     .text {
  //       margin-top 15px
  //       width 100%
  //       word-wrap break-word
  //     }
  //   }
  // }
}
</style>
