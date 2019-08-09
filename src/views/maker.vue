<template>
  <com-wrap class="m-maker-page">
    <com-sep-list :list-arr="makerArr"></com-sep-list>
  </com-wrap>
</template>
<script>
// import dataset from '@/config/dataset'
export default {
  name: 'Maker',
  components: {
  },
  data () {
    return {
      makerArr: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.makerArr = [{
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        name: '壶口斗鼓',
        codeUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        name: '壶口斗鼓',
        codeUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        name: '壶口斗鼓',
        codeUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        name: '产品名称',
        codeUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-maker-page {
  background url("~@/assets/img/info_hk/bg-info.jpg") no-repeat
  background-size cover
  >>> .m-com-container {
    width 1320px
    .m-com-center {
      padding 230px 0 95px
      .u-com-title {
        margin 0 0 110px 110px
        width 426px
        height 146px
        background url("~@/assets/img/maker_hk/title-maker.png") no-repeat center
      }
      .m-com-content {
        padding 109px 99px 10px
      }
    }
  }
}
</style>
