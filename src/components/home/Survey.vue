<template>
  <wrap class="m-survey" title-text="壶口概况">
    <a href="#/" class="m-img">
      <img src="../../assets/img/home/video.jpg" class="u-img"/>
    </a>
    <div class="m-content">
      <a href="#/" class="m-brief">
        <span class="text">壶口瀑布，国家级风景名胜区，国家AAAA级旅游景区，国家地质公园。 东濒山西省临汾市吉县壶口镇，西临陕西省延安市宜川县壶口乡，为两省共有旅游景区。北距山西太原387千米;南距陕西西安350千米。壶口瀑布是中国第二大瀑布，世界上最大的黄色瀑布。在水量大的夏季壶口瀑布是中国第二大瀑布，世界上最大的黄色瀑布。在水量大的夏季... </span>
        <span class="detail">&nbsp;[详情]</span>
      </a>
      <list class="m-columns" :type-arr="surveyArr" text-class="text"></list>
    </div>
  </wrap>
</template>
<script>
import List from '@/components/home/List.vue'
import Wrap from '@/components/home/Wrap.vue'
export default {
  components: {
    List,
    Wrap
  },
  props: {
    surveyArr: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.m-survey {
  background url('~@/assets/img/home/survey.jpg') no-repeat center
  background-size cover
  >>> .m-com {
    padding 55px 0 60px
    .u-title {
      margin 0 auto 42px
    }
    .m-img {
      float left
      padding-top 7px
      .u-img{
        width 585px
        height 329px
        vertical-align top
      }
    }
    .m-content {
      position relative
      float right
      width 564px
      height 336px
      .m-brief {
        display block
        margin-top -4px
        line-height 36px
        font-size 14px
        text-align left
        color #000
        .text {
          vertical-align top
        }
        .detail {
          vertical-align top
          color #ec5a02
        }
      }
      .m-columns {
        position absolute
        bottom 0
        display flex
        justify-content space-between
        .m-column {
          display flex
          flex-direction column
          width 81px
          .icon {
            position relative
            margin-bottom 19px
            width 81px
            height 81px
            background url('~@/assets/img/home/circle.png') no-repeat center
            &::after {
              content ''
              position absolute
              top 50%
              left 50%
              transform translate(-50%, -50%)
            }
            &.u-history::after {
              width 36px
              height 42px
              background url('~@/assets/img/home/history.png') no-repeat center
            }
            &.u-culture::after {
              width 30px
              height 34px
              background url('~@/assets/img/home/culture.png') no-repeat center
            }
            &.u-geo::after {
              width 29px
              height 36px
              background url('~@/assets/img/home/geo.png') no-repeat center
            }
            &.u-source::after {
              width 38px
              height 32px
              background url('~@/assets/img/home/source.png') no-repeat center
            }
            &.u-letters::after {
              width 27px
              height 34px
              background url('~@/assets/img/home/letters.png') no-repeat center
            }
          }
          .text {
            line-height 19px
            font-size 20px
            text-align center
            color #000
          }
        }
        .m-column + .m-column {
          margin-left 40px
        }
      }
    }
  }
}
</style>
