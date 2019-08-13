<template>
  <com-wrap class="m-notice-page">
    <com-tab :act-index="actIndex" :nav-arr="noticeNav" @changeNav="changeNav"></com-tab>
    <com-transition>
      <notice-item></notice-item>
    </com-transition>
    <com-transition>
      <price-item></price-item>
    </com-transition>
    <com-transition>
      <ticket-item></ticket-item>
    </com-transition>
  </com-wrap>
</template>

<script>
import dataset from '@/config/dataset'
import NoticeItem from '@/components/notice/notice.vue'
import PriceItem from '@/components/notice/price.vue'
import TicketItem from '@/components/notice/ticket.vue'
export default {
  name: 'Notice',
  components: {
    NoticeItem,
    PriceItem,
    TicketItem
  },
  data() {
    return {
      actIndex: 0,
      noticeNav: dataset.noticeNav,
    }
  },
  methods: {
    changeNav (index) {
      this.actIndex = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.m-notice-page {
  padding:100px 0
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
    .notice-wrapper {
      width 1200px
      margin 0 auto
      display: none
      ul {
        li {
          position: relative
          border-bottom:1px dashed #999
          padding:25px 0
          overflow: hidden
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
      width 1200px
      margin 0 auto
      display: none
      .txt-wrapper {
        margin-bottom:40px
        &:before {
          content attr(data-before)
          display: block
          font-size 18px
          color: #ec5a02
        }
        .txt {
          font-size 14px
          color: #333
          line-height:30px
        }
      }
    }
    .ticket-wrapper {
      width 1200px
      margin 0 auto
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
            flex 0 0 100px
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
            flex 100px 0 0
            img {
              width:100px
              height:100px
              margin:0 auto
            }
            .btn-buy {
              border 1px solid #ec5a02
              background-color: #ec5a02
              color: #fff
              font-size 18px
              display: inline-block
              vertical-align: middle
              padding:6px 20px
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
