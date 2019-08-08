<template>
  <wrap class="m-strategy" title-text="壶口攻略">
    <div class="m-content">
      <a v-for="(item, index) in strategyArr" :key="index" :href="item.route" :class="item.iconClass">
        <div class="icon-com">
          <span class="icon"></span>
          <span class="title">{{ item.text }}</span>
        </div>
      </a>
    </div>
  </wrap>
</template>
<script>
import Wrap from '@/components/home/Wrap.vue'
export default {
  components: {
    Wrap
  },
  props: {
    strategyArr: {
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
.m-strategy {
  >>> .m-com {
    padding 54px 0 70px
    & > .u-title {
      margin 0 auto 53px
    }
    .m-content {
      display flex
      justify-content space-between
      .pic-com {
        position relative
        width 187px
        height 477px
        overflow hidden
        &:hover .icon-com {
          transform scale(1.2)
        }
        .u-img {
          vertical-align top
        }
        &.u-eat {
          background url('~@/assets/img/home/eat.jpg') no-repeat center
          .icon {
            background url('~@/assets/img/home/icon-eat.png') no-repeat center
          }
        }
        &.u-live {
          background url('~@/assets/img/home/live.jpg') no-repeat center
          .icon {
            background url('~@/assets/img/home/icon-live.png') no-repeat center
          }
        }
        &.u-xing {
          background url('~@/assets/img/home/xing.jpg') no-repeat center
          .icon {
            background url('~@/assets/img/home/icon-x.png') no-repeat center
          }
        }
        &.u-you {
          background url('~@/assets/img/home/you.jpg') no-repeat center
          .icon {
            background url('~@/assets/img/home/icon-you.png') no-repeat center
          }
        }
        &.u-play {
          background url('~@/assets/img/home/play.jpg') no-repeat center
          .icon {
            background url('~@/assets/img/home/icon-play.png') no-repeat center
          }
        }
        &.u-buy {
          background url('~@/assets/img/home/buy.jpg') no-repeat center
          .icon {
            background url('~@/assets/img/home/icon-buy.png') no-repeat center
          }
        }
        .icon-com {
          position absolute
          bottom 74px
          display flex
          flex-direction column
          align-items center
          justify-content space-between
          width 100%
          transition all .2s ease
          text-align left
          .icon {
            width 102px
            height 102px
            margin-bottom 32px
          }
          .title {
            font-size 30px
            color #ffffff
          }
        }
      }
    }
  }
}
</style>
