<template>
  <com-wrap class="m-custom-page">
    <com-list :list-arr="listArr"></com-list>
  </com-wrap>
</template>
<script>
// import dataset from '@/config/dataset'
import { mapGetters } from 'vuex'
export default {
  name: 'Custom',
  components: {
  },
  data () {
    return {
      listArr: [{
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
    }
  },
  computed: {
    ...mapGetters(['getHeaderHeight'])
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.m-custom-page {
  background url("~@/assets/img/custom_hk/bg-custom.jpg") center -118px no-repeat
  >>> .m-com-container {
    width 1260px
    .m-com-center {
      .u-com-title {
        display block
        margin 0 auto 110px
        width 426px
        height 146px
        background url("~@/assets/img/custom_hk/title-custom.png") no-repeat center
      }
      .m-com-content {
        padding 44px 16px 31px
        background rgba(255, 255, 255, .8)
        border-radius 16px
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
    }
  }
}
</style>
