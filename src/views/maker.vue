<template>
  <com-wrap class="m-maker-page">
    <ul class="m-pic-lists clearfix">
      <li v-for="(item, index) in arr" :key="index" class="m-pic-list">
        <a href="" class="pic-list">
          <img :src="item.addr" class="u-img"/>
          <p class="u-title">{{ item.name }}</p>
        </a>
        <!-- 二维码 -->
        <img v-if="item.codeUrl" :src="item.codeUrl" class="u-com-code"/>
      </li>
    </ul>
  </com-wrap>
</template>
<script>
// import dataset from '@/config/dataset'
export default {
  name: 'Info',
  components: {
  },
  data () {
    return {
      arr: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.arr = [{
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
        .m-pic-lists {
          .m-pic-list {
            position relative
            padding-bottom 76px
            float left
            width 450px
            &:nth-child(2n+1) {
              margin-right 216px
            }
            &:hover {
              .u-com-code {
                display block
              }
            }
            .u-com-code {
              display none
              position absolute
              top 0
              left 0
              width 450px
              height 336px
              vertical-align top
            }
            .pic-list {
              display block
              font-size 18px
              color #000000
              .u-img {
                width 100%
                height 336px
                vertical-align top
              }
              .u-title {
                padding-top 23px
                text-align center
              }
            }
          }
        }
      }
    }
  }
}
</style>
