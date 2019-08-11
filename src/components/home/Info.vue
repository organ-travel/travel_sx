<template>
  <wrap class="m-info" title-text="壶口资讯">
    <slot name="nav"></slot>
    <com-transition v-for="(arr, idx) in infoArr" :key="idx">
      <ul v-if="actIndex == idx" class="m-content">
        <li v-for="(item, index) in arr" :key="index" class="m-list">
          <div class="m-date">
            <span>{{ item.date }}</span>
            <span class="year">{{ item.year }}</span>
          </div>
          <com-desc :title="item.title" :brief="item.brief" class="m-article"></com-desc>
        </li>
      </ul>
    </com-transition>
    <!-- <slot name="tab"></slot> -->
  </wrap>
</template>
<script>
import Wrap from '@/components/home/Wrap.vue'
export default {
  components: {
    Wrap
  },
  props: {
    infoArr: {
      type: Array,
      default () {
        return []
      }
    },
    actIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-info {
  background url('~@/assets/img/home/type.jpg') no-repeat center
  background-size cover
  >>> .m-com {
    padding 61px 0 13px
    & > .u-title {
      margin 0 auto 37px
    }
    .m-com-transition {
      .m-content {
        display flex
        justify-content space-between
        flex-wrap wrap
        padding-top 48px
        .m-list {
          margin-bottom 35px
          display flex
          justify-content space-between
          .m-date {
            width 66px
            height 78px
            padding-right 18px
            margin-right 15px
            border-right 1px solid #999999
            font-size 24px
            color #ec5a02
            span {
              display inline-block
            }
            .year {
              margin-top 21px
              font-size 20px
              color #999999
            }
          }
          .m-article {
            width 440px
            >>> .u-title {
              color #333333
            }
            >>> .m-con {
              .brief {
                color #99999
              }
              .detail {
                color #ec5a02
              }
            }
          }
        }
      }
    }
  }
}
</style>
