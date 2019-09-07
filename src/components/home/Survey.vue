<template>
  <wrap v-if="surveyArr && surveyArr.length" class="m-survey" title-text="壶口概况">
    <div v-for="(item, index) in surveyArr" :key="index">
      <a :href="'#/infoDetail?id=' + item.id" class="m-img">
        <img :src="item.picture_url" class="u-img"/>
      </a>
      <div class="m-content">
        <a href="javascript:;" class="m-brief">
          <span class="text">{{ item.description }} </span>
          <a :href="'#/infoDetail?id=' + item.id" class="detail">&nbsp;[详情]</a>
        </a>
      </div>
    </div>
    <list class="m-columns" :type-arr="surveyNav" @changeShow="changeSurvey"></list>
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
    },
    surveyNav: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    changeSurvey (type) {
      this.$emit('changeSurvey', type)
    }
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
    .m-wrap-content {
      position relative
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
      }
      .m-columns {
        position absolute
        right 0
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
