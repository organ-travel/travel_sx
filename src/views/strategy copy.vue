<template>
  <com-wrap class="m-strategy-page">
    <com-tab :act-index="actIndex" :nav-arr="strategyNav" @changeNav="changeNav"></com-tab>
    <!-- 美食 -->
    <com-transition>
      <div v-if="strategyNav[actIndex].name == 'eat'" class="m-eat m-common">
        <com-list :list-arr="eatArr"></com-list>
      </div>
    </com-transition>
    <!-- 住宿 -->
    <com-transition>
      <div v-if="strategyNav[actIndex].name == 'live'" class="m-live m-common">
        <div v-for="(item, index) in liveArr" :key="index" class="m-strategy-list">
          <com-desc :title="item.title" :brief="item.brief" class="m-article"></com-desc>
          <div class="m-strategy-img clearfix">
            <div v-for="(item, index) in item.images" :key="index" class="m-wrap-img">
              <img :src="item" class="img"/>
            </div>
          </div>
        </div>
      </div>
    </com-transition>
    <!-- 路线 -->
    <com-transition>
      <div v-if="strategyNav[actIndex].name == 'xing'" class="m-xing m-common">
        <!-- 壶口攻略.psd上的路线 -->
        <!-- <com-list :list-arr="xingArr" :has-title="false" :has-mask="true" :is-article="true"></com-list> -->
        <com-desc v-for="(item, index) in lineArr" :key="index" :title="item.title" :brief="item.brief" class="m-article m-other-article"></com-desc>
        <span class="u-more">查看更多 -></span>
        <div v-if="serviceArr.length" class="m-strategy-list">
          <h3 class="title">游客服务中心</h3>
          <com-list :list-arr="serviceArr"></com-list>
        </div>
        <div v-if="carArr.length" class="m-strategy-list">
          <h3 class="title">观光车</h3>
          <com-list :list-arr="carArr"></com-list>
        </div>
      </div>
    </com-transition>
    <!-- 游记 -->
    <com-transition>
      <div v-if="strategyNav[actIndex].name == 'you'" class="m-you">
        游记
      </div>
    </com-transition>
    <!-- 购物 -->
    <com-transition>
      <div v-if="strategyNav[actIndex].name == 'buy'" class="m-buy m-common">
        <com-list :list-arr="buyArr" :has-title="false" :has-mask="true" :is-code="true"></com-list>
      </div>
    </com-transition>
    <!-- 娱乐 -->
    <com-transition>
      <div v-if="strategyNav[actIndex].name == 'play'" class="m-play">
        娱乐
      </div>
    </com-transition>
  </com-wrap>
</template>
<script>
import dataset from '@/config/dataset'
export default {
  name: 'Strategy',
  components: {
  },
  data () {
    return {
      actIndex: 0,
      strategyNav: dataset.strategyNav,
      eatArr: [],
      // xingArr: [],
      lineArr: [],
      serviceArr: [],
      carArr: []
    }
  },
  mounted () {
    this.getEat()
    this.getLive()
    this.getXing()
    this.getBuy()
  },
  methods: {
    changeNav (index) {
      this.actIndex = index
    },
    getEat () {
      this.eatArr = [{
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
    },
    getLive () {
      this.liveArr = [{
        title: '渡口客栈',
        brief: '古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇...',
        images: ['https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg', 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg', 'https://c-ssl.duitang.com/uploads/item/201805/21/20180521133102_gnvii.jpg', 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605090433_snnuy.jpg', 'https://c-ssl.duitang.com/uploads/item/201805/21/20180521133102_gnvii.jpg', 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605090433_snnuy.jpg']
      }, {
        title: '云尚 ● 观瀑舫酒店',
        brief: '古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇古渡口小镇...',
        images: ['https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg', 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg', 'https://c-ssl.duitang.com/uploads/item/201805/21/20180521133102_gnvii.jpg', 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605090433_snnuy.jpg', 'https://c-ssl.duitang.com/uploads/item/201805/21/20180521133102_gnvii.jpg', 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605090433_snnuy.jpg']
      }]
    },
    getXing () {
      this.lineArr = [{
        title: '路线一',
        brief: '从西安出发的游客可以在西安汽车站（火车站对面）乘坐至景区的直通车，发车时间为：9:00 11:00 12:30 14:00。到达陇县汽车站后，不用出站可直接换乘景区的旅游大巴从西安出发的游客可以在西安汽车站（火车站对面）乘坐至景区的直通车，发车时间为：9:00 11:00 12:30 14:00...'
      }, {
        title: '路线二',
        brief: '从西安出发的游客可以在西安汽车站（火车站对面）乘坐至景区的直通车，发车时间为：9:00 11:00 12:30 14:00。到达陇县汽车站后，不用出站可直接换乘景区的旅游大巴从西安出发的游客可以在西安汽车站（火车站对面）乘坐至景区的直通车，发车时间为：9:00 11:00 12:30 14:00...'
      }, {
        title: '路线三',
        brief: '从西安出发的游客可以在西安汽车站（火车站对面）乘坐至景区的直通车，发车时间为：9:00 11:00 12:30 14:00。到达陇县汽车站后，不用出站可直接换乘景区的旅游大巴从西安出发的游客可以在西安汽车站（火车站对面）乘坐至景区的直通车，发车时间为：9:00 11:00 12:30 14:00...'
      }]
      this.serviceArr = [{
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
      this.carArr = [{
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
      // this.xingArr = [{
      //   addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
      //   route: '#/',
      //   title: '西安-延安壶口瀑布景区线路',
      //   brief: '西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口...'
      // }, {
      //   addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
      //   route: '#/',
      //   title: '西安-延安壶口瀑布景区线路',
      //   brief: '西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口...'
      // }, {
      //   addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
      //   route: '#/',
      //   title: '西安-延安壶口瀑布景区线路',
      //   brief: '西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口...'
      // }, {
      //   addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
      //   route: '#/',
      //   title: '西安-延安壶口瀑布景区线路',
      //   brief: '西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口...'
      // }, {
      //   addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
      //   route: '#/',
      //   title: '西安-延安壶口瀑布景区线路',
      //   brief: '西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口...'
      // }, {
      //   addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
      //   route: '#/',
      //   title: '西安-延安壶口瀑布景区线路',
      //   brief: '西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口...'
      // }, {
      //   addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
      //   route: '#/',
      //   title: '西安-延安壶口瀑布景区线路',
      //   brief: '西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口...'
      // }, {
      //   addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
      //   route: '#/',
      //   title: '西安-延安壶口瀑布景区线路',
      //   brief: '西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口...'
      // }, {
      //   addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
      //   route: '#/',
      //   title: '西安-延安壶口瀑布景区线路',
      //   brief: '西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口瀑布景区线路西安-延安壶口...'
      // }]
    },
    getBuy () {
      this.buyArr = [{
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        codeUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg',
        name: '产品名称'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        codeUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg',
        name: '产品名称'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        codeUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg',
        name: '产品名称'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        codeUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg',
        name: '产品名称'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        codeUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg',
        name: '产品名称'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        codeUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg',
        name: '产品名称'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        codeUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg',
        name: '产品名称'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        codeUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg',
        name: '产品名称'
      }, {
        addr: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg',
        route: '#/',
        codeUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg',
        name: '产品名称'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-strategy-page {
  background url("~@/assets/img/strategy_hk/bg-strategy.jpg") center no-repeat
  background-size cover
  >>> .m-com-container {
    width 1320px
    .m-com-center {
      padding 270px 0 140px
      .u-com-title {
        margin 0 0 120px 110px
        width 426px
        height 146px
        background url("~@/assets/img/strategy_hk/title-strategy.png") no-repeat center
      }
      .m-com-content {
        padding 60px 40px 55px
      }
    }
  }
  >>> .m-com-tab {
    margin-bottom 25px
    height 50px
    .m-com-nav {
      padding 15px 26px
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
    .m-common {
      .m-com-list {
        .m-com-img {
          margin 20px
          width 373px
          height 280px
          .u-com-img {
          }
        }
      }
      &.m-live {
        width 1095px
        margin 0 auto 80px
        .m-strategy-list {
          margin-top 23px
          .m-article {
            padding 47px 10px 0
            color #000000
            .u-title {
              font-size 20px
            }
            .m-con {
              padding-top 25px
              line-height 28px
              font-size 16px
              .detail {
              }
            }
          }
          .m-strategy-img {
            padding-top 15px
            .m-wrap-img {
              float left
              margin 10px
              width 345px
              height 260px
              overflow hidden
              .img {
                width 100%
                height 100%
                transition all .2s ease
              }
              &:first-child {
                width 710px
                height 540px
              }
              &:hover .img {
                transform scale(1.1)
              }
            }
          }
        }
      }
      &.m-xing {
        // width 1230px
        width 1170px
        margin 50px auto 0
        text-align center
        .m-com-desc {
          // padding 0 55px
          // height 100%
          // display flex
          // flex-direction column
          // justify-content center
          // &.m-article {
          //   .u-title {
          //     font-size 18px
          //   }
          //   .m-con {
          //     padding-top 30px
          //     line-height 26px
          //     font-size 14px
          //   }
          // }
          &.m-other-article {
            .u-title {
              color #ec5a02
              font-size 20px
            }
            .m-con {
              padding-top 25px
              line-height 26px
              font-size 16px
              .detail {
                color #ec5a02
              }
            }
          }
        }
        .m-other-article + .m-other-article {
          margin-top 35px
        }
        > .u-more {
          padding 11px 23px
          margin 45px auto 30px
          display inline-block
          border 1px solid #ec5a02
          font-size 20px
          color #ec5a02
        }
        // .m-com-list {
        //   .m-com-img {
        //     margin 15px
        //     width 380px
        //     height 285px
        //   }
        // }
        .m-strategy-list {
          padding-top 35px
          > .title {
            padding 0 0 15px 15px
            font-size 20px
            text-align left
            color #ec5a02
          }
          .m-com-list {
            .m-com-img {
              margin 15px
              width 360px
              height 270px
              .u-com-img {
              }
            }
          }
        }
      }
    }
  }
}
</style>
