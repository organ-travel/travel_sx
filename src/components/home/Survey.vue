<template>
  <wrap v-if="surveyArr && surveyArr.length" class="m-survey" title-text="壶口概况">
    <div v-for="(item, index) in surveyArr" :key="index">
      <a :href="'#/infoDetail?id=' + item.article.id" class="m-img">
        <img :src="item.article.picture_url" class="u-img"/>
        <span v-if="item.is_video === 1" class="icon-video-play"></span>
      </a>
      <div class="m-content">
        <a href="javascript:;" class="m-brief">
          <span class="text">{{ item.article.description }} </span>
          <a :href="'#/infoDetail?id=' + item.article.id" class="detail" target="_blank">&nbsp;[详情]</a>
        </a>
      </div>
    </div>
    <ListSurvey class="m-columns" :type-arr="surveyNav" @changeShow="changeSurvey"></ListSurvey>
  </wrap>
</template>
<script>
import ListSurvey from '@/components/home/ListSurvey.vue'
import Wrap from '@/components/home/Wrap.vue'
export default {
  components: {
    ListSurvey,
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
        position: relative
        .icon-video-play {
          position absolute
          top 50%
          left 50%
          transform translate(-50%, -50%)
          width 46px
          height 46px
          background url('~@/assets/img/common/icon-video.png') no-repeat center
        }
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
            &.u-history {
              &:after {
                width 36px
                height 42px
                background url('~@/assets/img/home/icon-history.png') no-repeat center
              }
              &:hover, &.active {
                &:after {
                  background url('~@/assets/img/home/icon-history-active.png') no-repeat center
                }
              }
            }
            &.u-culture {
              &:after {
                width 30px
                height 34px
                background url('~@/assets/img/home/icon-culture.png') no-repeat center
              }
              &:hover, &.active {
                &:after {
                  background url('~@/assets/img/home/icon-culture-active.png') no-repeat center
                }
              }
            }
            &.u-geo {
              &:after {
                width 29px
                height 36px
                background url('~@/assets/img/home/icon-geo.png') no-repeat center
              }
              &:hover, &.active {
                &:after {
                  background url('~@/assets/img/home/icon-geo-active.png') no-repeat center
                }
              }
            }
            &.u-source {
              &:after {
                width 38px
                height 32px
                background url('~@/assets/img/home/icon-source.png') no-repeat center
              }
              &:hover, &.active {
                &:after {
                  background url('~@/assets/img/home/icon-source-active.png') no-repeat center
                }
              }
            }
            &.u-letters {
              &:after {
                width 27px
                height 34px
                background url('~@/assets/img/home/icon-letters.png') no-repeat center
              }
              &:hover {
                &:after, &.active {
                  background url('~@/assets/img/home/icon-letters-active.png') no-repeat center
                }
              }
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
