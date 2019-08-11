<template>
  <section class="m-showpic-page">
    <div class="m-showpic-banner"></div>
    <div class="m-showpic-content">
      <com-bread :list-arr="breadArr"></com-bread>
      <div class="showpic-content">
        <p>壶口斗鼓是陕西陕北地区传统民间传统鼓舞艺术中独特的一种艺术形式，源于气势磅礴的壶口瀑布旁，流传于陕西省宜川县黄河沿岸的壶口乡、高柏乡一带。"涌来万岛排空势，卷作千雷震地声"，这是对壶口瀑布的描写，也正是壶口斗鼓的写照。壶口斗鼓融舞蹈、武术、打击乐为一体，具有高亢昂扬，粗犷豪放，剽悍威武，威猛刚烈等特点。表现了黄河儿女征服困难的豪情，融合了黄土高原人乐观奔放、坚韧不拔的性格。</p>
      </div>
      <com-list :list-arr="imgArr"></com-list>
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
      imgArr: [],
      breadArr: []
    }
  },
  computed: {
  },
  mounted () {
    this.getBread()
    this.getImg()
  },
  methods: {
    getBread () {
      this.breadArr = [{
        path: '/',
        text: '首页'
      }, {
        path: '/',
        text: '魅力壶口'
      }, {
        path: '',
        text: '斗鼓'
      }]
    },
    getImg() {
      this.imgArr = [{
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
.m-showpic-page {
  position relative
  .m-showpic-banner {
    width 100%
    height 648px
    background url('~@/assets/img/contact_hk/banner-contact.jpg') no-repeat center
  }
  >>> .m-showpic-content {
    margin 40px auto 102px
    width 1199px
    overflow hidden
    .showpic-content {
      padding-top 65px
      line-height 28px
      font-size 14px
      color #333333
      text-align center
      text-indent 2em
    }
    .m-com-list {
      display block
      padding-top 10px
      .m-com-img {
        display block
        margin-top 20px
        &:hover .u-com-img {
          transform none
        }
        .u-com-img {
          width 800px
          height 600px
        }
        .title {
          position relative
          margin-top 10px
          display block
          height 34px
          line-height 34px
          background none
          font-weight bold
          color #333333
        }
      }
    }
  }
}
</style>
