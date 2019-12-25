<template>
  <com-wrap class="m-strategy-page">
    <com-tab :act-index="actIndex" :nav-arr="strategyNav" @changeNav="changeNav"></com-tab>
    <com-transition v-for="(item, index) in strategyNav" :key="item.id">
      <div v-if="actIndex == index" :class="[`m-${strategyNav[actIndex].type}`, 'm-common']">
        <!-- 美食 -->
        <com-list v-if="strategyNav[actIndex] && strategyNav[actIndex].type == 'eat'" :article-total="queryOption[index].total" :list-arr="articleObj.eat"  @handleCurrentChange="handleCurrentChange"></com-list>
        <!-- 住宿 -->
        <div v-if="strategyNav[actIndex] && strategyNav[actIndex].type == 'live'">
          <div v-for="(item, index) in articleObj.live" :key="index" class="m-strategy-list">
            <com-desc :title="item.title" :brief="item.description" class="m-article"></com-desc>
            <div class="m-strategy-img clearfix">
              <div v-for="(item1, index) in item.pcitures" :key="index" class="m-wrap-img">
                <a :href="'#/infoDetail?id=' + item.id">
                  <img :src="item1" class="img">
                </a>
                <!--<img v-else :src="item1" class="img"/>-->
              </div>
            </div>
          </div>
        </div>
        <!-- 路线 -->
        <div v-if="strategyNav[actIndex] && strategyNav[actIndex].type == 'xing'">
          <com-desc v-for="(item, index) in articleObj.xing" :id="item.id" :key="index" :title="item.title" :brief="item.description" class="m-article m-other-article"></com-desc>
          <span class="u-more"></span>
          <div v-if="serviceArr.length" class="m-strategy-list">
            <h3 class="title">游客服务中心</h3>
            <com-list :article-total="queryTagOption[0].total" :list-arr="serviceArr"  @handleCurrentChange="handleCurrentChange"></com-list>
          </div>
          <div v-if="carArr.length" class="m-strategy-list">
            <h3 class="title">观光车</h3>
            <com-list :list-arr="carArr" :article-total="queryTagOption[1].total" @handleCurrentChange="handleCurrentChange"></com-list>
          </div>
        </div>
        <!-- 游记 -->
        <div v-if="strategyNav[actIndex] && strategyNav[actIndex].type == 'you'">
          <com-list v-if="strategyNav[actIndex] && strategyNav[actIndex].type == 'you'" :article-total="queryOption[index].total" :list-arr="articleObj.you"  @handleCurrentChange="handleCurrentChange"></com-list>
        </div>
        <!-- 购物 -->
        <com-list v-if="strategyNav[actIndex] && strategyNav[actIndex].type == 'buy'" :article-total="queryOption[index].total" :list-arr="articleObj.buy" :has-title="false" :has-mask="true" :is-code="true"  @handleCurrentChange="handleCurrentChange"></com-list>
        <!-- 娱乐 -->
        <div v-if="strategyNav[actIndex] && strategyNav[actIndex].type == 'play'">
          <com-list v-if="strategyNav[actIndex] && strategyNav[actIndex].type == 'play'" :article-total="queryOption[index].total" :list-arr="articleObj.play"  @handleCurrentChange="handleCurrentChange"></com-list>
        </div>
      </div>
    </com-transition>
    <!-- 美食 -->
    <!-- <com-transition>
      <div v-if="strategyNav[actIndex] && strategyNav[actIndex].name == 'eat'" class="m-eat m-common">
        <com-list :list-arr="eatArr"></com-list>
      </div>
    </com-transition> -->
    <!-- 住宿 -->
    <!-- <com-transition>
      <div v-if="strategyNav[actIndex] && strategyNav[actIndex].name == 'live'" class="m-live m-common">
        <div v-for="(item, index) in liveArr" :key="index" class="m-strategy-list">
          <com-desc :title="item.title" :brief="item.brief" class="m-article"></com-desc>
          <div class="m-strategy-img clearfix">
            <div v-for="(item, index) in item.images" :key="index" class="m-wrap-img">
              <img :src="item" class="img"/>
            </div>
          </div>
        </div>
      </div>
    </com-transition> -->
    <!-- 路线 -->
    <!-- <com-transition>
      <div v-if="strategyNav[actIndex] && strategyNav[actIndex].name == 'xing'" class="m-xing m-common"> -->
        <!-- 壶口攻略.psd上的路线 -->
        <!-- <com-list :list-arr="xingArr" :has-title="false" :has-mask="true" :is-article="true"></com-list> -->
        <!-- <com-desc v-for="(item, index) in lineArr" :key="index" :title="item.title" :brief="item.brief" class="m-article m-other-article"></com-desc>
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
    </com-transition> -->
    <!-- 游记 -->
    <!-- <com-transition>
      <div v-if="strategyNav[actIndex] && strategyNav[actIndex].name == 'you'" class="m-you">
        游记
      </div>
    </com-transition> -->
    <!-- 购物 -->
    <!-- <com-transition>
      <div v-if="strategyNav[actIndex] && strategyNav[actIndex].name == 'buy'" class="m-buy m-common">
        <com-list :list-arr="buyArr" :has-title="false" :has-mask="true" :is-code="true"></com-list>
      </div>
    </com-transition> -->
    <!-- 娱乐 -->
    <!-- <com-transition>
      <div v-if="strategyNav[actIndex] && strategyNav[actIndex].name == 'play'" class="m-play">
        娱乐
      </div>
    </com-transition> -->
  </com-wrap>
</template>
<script>
import dataset from '@/config/dataset'
import nav from '@/mixin/nav'
export default {
  pageName: 'Strategy',
  components: {
  },
  mixins: [nav],
  data () {
    return {
      actIndex: 0,
      // strategyNav: dataset.strategyNav,
      strategyNav: [],
      articleObj: {},
      queryOption: [],
      queryTagOption: [],
      eatArr: [],
      // xingArr: [],
      lineArr: [],
      serviceArr: [],
      carArr: [],
      youArr: [],
      playArr: [],
      itemType: [],
      limit: 9,
    }
  },
  // watch: {
  //   '$route.query.actIndex' (n, o) {
  //     this.changeNav(n || 0)
  //   }
  // },
  async mounted () {
    await this.setMenu()
    window.scrollTo(0, 0)
    // this.setActiveIndex()
    // this.setCurCategory()
    this.actIndex = parseInt(this.$route.query.actIndex) || this.actIndex
    this.strategyNav = this.getCurCategory.children || []
    this.strategyNav.forEach(async (item, index) => {
      this.itemType[index] = item
      this.queryOption[index] = Object.assign({}, JSON.parse(JSON.stringify(dataset.queryOption)), { cat_id: item.id, limit: this.limit })
      const res = (await this.queryArticleList(this.queryOption[index])).data
      this.$set(this.articleObj, item.type, res.articleList || [])
      if (item.type === 'xing') {
        this.queryTagOption[0] = Object.assign({}, JSON.parse(JSON.stringify(dataset.queryOption)), { tag: 'service', cat_id: item.id, limit: this.limit })
        const resTag = (await this.queryArticleList(this.queryTagOption[0])).data
        this.serviceArr = resTag.articleList || []

        this.queryTagOption[1] = Object.assign({}, JSON.parse(JSON.stringify(dataset.queryOption)), { tag: 'bus', cat_id: item.id, limit: this.limit })
        const resTag1 = (await this.queryArticleList(this.queryTagOption[1])).data
        this.carArr = resTag1.articleList || []
      }
      this.queryOption[index].total = res.articleCount || 0
      this.queryOption[index].start++
    })
  },
  methods: {
    // changeNav (index) {
    //   this.actIndex = index
    // },
    async handleCurrentChange(page) {
      const start = (page - 1) * this.limit
      const index = this.actIndex
      const item = this.itemType[index]
      if (item.type === 'xing') {
        this.queryTagOption[0].start = start
        const resTag = (await this.queryArticleList(this.queryTagOption[0])).data
        this.serviceArr = resTag.articleList || []

        this.queryTagOption[1].start = start
        const resTag1 = (await this.queryArticleList(this.queryTagOption[1])).data
        this.carArr = resTag1.articleList || []
      } else {
        this.queryOption[index].start = start
        const res = (await this.queryArticleList(this.queryOption[index])).data
        this.$set(this.articleObj, item.type, res.articleList || [])
        this.queryOption[index].total = res.articleCount || 0
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.query.name) {
        const routerName = to.query.name
        switch (routerName) {
        case 'eat':
          vm.actIndex = 0
          break
        case 'live':
          vm.actIndex = 1
          break
        case 'xing':
          vm.actIndex = 2
          break
        case 'you':
          vm.actIndex = 3
          break
        case 'play':
          vm.actIndex = 4
          break
        case 'buy':
          vm.actIndex = 5
          break
        }
      }
    })
  },
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
        > div {
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
                  color #ec5a02
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
      }
      &.m-xing {
        width 1170px
        margin 50px auto 0
        text-align center
        > div {
          .m-com-desc {
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
            /*border 1px solid #ec5a02*/
            font-size 20px
            color #ec5a02
          }
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
}
</style>
