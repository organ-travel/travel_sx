<template>
  <com-wrap class="m-notice-page">
    <div class="banner-wrapper">
      <img :src="banner" alt="">
    </div>
    <com-tab :act-index="actIndex" :nav-arr="noticeNav" @changeNav="changeNav"></com-tab>
    <com-transition>
      <notice-item v-if="noticeNav[actIndex].type == 'notice'" :arr="noticeList"></notice-item>
    </com-transition>
    <com-transition>
      <price-item v-if="noticeNav[actIndex].type == 'price'" :item="priceItem"></price-item>
    </com-transition>
    <com-transition>
      <perchase-item v-if="noticeNav[actIndex].type == 'perchase'" :arr="perchaseList"></perchase-item>
    </com-transition>
  </com-wrap>
</template>

<script>
import dataset from '@/config/dataset'
import NoticeItem from '@/components/notice/Notice.vue'
import PriceItem from '@/components/notice/Price.vue'
import PerchaseItem from '@/components/notice/Perchase.vue'
import imgBanner from '@/assets/img/notice_hk/banner.jpg'
import imgSight from '@/assets/img/notice_hk/img-sight.jpg'
import imgQrcode from '@/assets/img/notice_hk/img-qrcode.jpg'
export default {
  name: 'Notice',
  components: {
    NoticeItem,
    PriceItem,
    PerchaseItem
  },
  data() {
    return {
      actIndex: 0,
      noticeNav: dataset.noticeNav,
      banner: imgBanner,
      noticeList: [],
      priceList: [],
      priceItem: {},
      perchaseList: [],
      queryOption: [],
      queryOption1: []
    }
  },
  async mounted () {
    await this.setMenu()
    this.noticeNav.forEach(async (item, index) => {
      if (item.type !== 'perchase') {
        this.queryOption[index] = Object.assign({}, JSON.parse(JSON.stringify(dataset.queryOption)), { cat_id: item.id })
        const res = (await this.queryArticleList(this.queryOption[index])).data
        this.queryOption[index].total = res.articleCount || 0
        this.queryOption[index].start++
        if (item.type === 'notice') {
          for (let m = 0; m < res.articleList.length; m++) {
            res.articleList[m].label = '【重要通知】'
          }
          this.noticeList = res.articleList || []
        }
        if (item.type === 'price') {
          if (res.articleList.length > 0) {
            const itemArticle = res.articleList[0]
            this.priceItem = await this.getArticleDetail(itemArticle.id)
          }
        }
        // if (item.type === 'notice') this.noticeList = this.articleObj.notice
      } else {
        this.queryOption1 = Object.assign({}, { start: 0, limit: 10 })
        this.perchaseList = (await this.getTicketsList(this.queryOption1)).data
      }
    })
  },
  // mounted() {
  //   // getTicketsList
  //   this.getNoticeList()
  //   this.getPriceInfo()
  //   this.getPerchaseList()
  // },
  methods: {
    changeNav (index) {
      this.actIndex = index
    },
    getNoticeList() {
      this.noticeList = [{
        label: '【文旅动态】',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！',
        time: '2019-08-20'
      }, {
        label: '【文旅动态】',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！',
        time: '2019-08-20'
      }, {
        label: '【文旅动态】',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！',
        time: '2019-08-20'
      }, {
        label: '【文旅动态】',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！',
        time: '2019-08-20'
      }, {
        label: '【文旅动态】',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！',
        time: '2019-08-20'
      }]
    },
    getPriceInfo() {
      this.priceList = []
    },
    getPerchaseList() {
      this.perchaseList = [{
        site: '美团预定',
        picUrl: imgSight,
        title: '宜川壶口瀑布',
        subTitle: 'AAAAA景区',
        summary: '黄河上唯一的大瀑布，世界罕见金黄色大瀑布',
        address: '陕西省延安市宜川县',
        time: '8:00-19:00',
        qrcodeUrl: imgQrcode
      }, {
        site: '携程网预定',
        picUrl: imgSight,
        title: '宜川壶口瀑布',
        subTitle: 'AAAAA景区',
        summary: '黄河上唯一的大瀑布，世界罕见金黄色大瀑布',
        address: '陕西省延安市宜川县',
        time: '8:00-19:00',
        qrcodeUrl: imgQrcode
      }]
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.query.name) {
        const routerName = to.query.name
        switch (routerName) {
        case 'notice':
          vm.actIndex = 0
          break
        case 'price':
          vm.actIndex = 1
          break
        case 'perchase':
          vm.actIndex = 2
          break
        }
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
  .m-notice-page {
    .banner-wrapper {
      img {
        max-width 100%
      }
    }
    >>> .m-com-tab {
      margin: 25px 0
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
      .notice-wrapper, .price-wrapper, .perchase-wrapper {
        width 1200px
        margin 0 auto
        min-height 400px
      }
      .notice-wrapper {
        ul {
          li {
            position: relative
            border-top:1px dashed #999
            padding:25px 0
            overflow: hidden
            &:first-child {
              border-top:none
            }
            &:before {
              content attr(data-before)
              color: #ec5a02
            }
            &:after {
              content attr(data-after)
              color: #999
              float: right
            }
            .txt-title {
              display: inline-block
              color: #333
            }
          }
        }
      }
      .price-wrapper {
        .txt-wrapper {
          margin-bottom:40px
          &:before {
            content attr(data-before)
            display: block
            font-size 18px
            color: #ec5a02
          }
          .txt, p {
            font-size 14px
            color: #333
            line-height:30px
          }
        }
      }
      .perchase-wrapper {
        ul {
          li {
            display: flex
            margin-bottom:50px
            position: relative
            padding-top:50px
            &:before {
              content attr(data-before)
              display: block
              position: absolute
              color: #ec5a02
              font-size 18px
              top:20px
            }
            .img-wrapper {
              flex 0 0 227px
              padding-right: 30px
              overflow: hidden
              img {
                max-width 100%
              }
            }
            .txt-wrapper {
              flex 1
              .title-group {
                line-height:26px
                .txt-title {
                  font-size 18px
                  color: #000
                  margin-right:15px
                }
                .txt-subtitle {
                  font-size 14px
                  color: #666
                }
              }
              .txt-summary {
                font-size 14px
                color: #666
                line-height:26px
              }
              .txt-address, .txt-time {
                font-size 14px
                color: #000
                line-height:26px
                &:before {
                  content attr(data-before)
                }
              }
              .btn-group {
                .btn-enter, .btn-safe {
                  display: inline-block
                  vertical-align: middle
                  font-size 14px
                  padding:7px 10px
                  border-radius 4px
                  margin-right:10px
                }
                .btn-enter {
                  color: #5cb85c
                  border 1px solid #5cb85c
                  &:hover {
                    background-color: #5cb85c
                    color: #fff
                  }
                }
                .btn-safe {
                  color: #5bc0de
                  border 1px solid #5bc0de
                  &:hover {
                    background-color: #5bc0de
                    color: #fff
                  }
                }
              }
            }
            .buy-wrapper {
              flex 104px 0 0
              img {
                max-width 100%
                padding:3px
                border 1px solid #ec5a02
                margin-bottom:18px
              }
              .btn-buy {
                border 1px solid #ec5a02
                background-color: #ec5a02
                color: #fff
                font-size 18px
                display: inline-block
                vertical-align: middle
                padding:6px 20px
                width: 73px
                text-align: center
                border-radius 4px
                -webkit-transition: all .2 ease .1s
                -moz-transition: all .2 ease .1s
                -ms-transition: all .2 ease .1s
                -o-transition: all .2 ease .1s
                transition: all .2 ease .1s
                &:hover {
                  background-color: #fff
                  color: #ec5a02
                }
              }
            }
          }
        }
      }
    }
  }
</style>
