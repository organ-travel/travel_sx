<template>
  <wrap class="m-strategy" title-text="壶口攻略">
    <div class="m-content">
      <a v-for="(item, index) in strategyObj.children" :key="index" :href="strategyObj.type + '?actIndex=' + index" :class="item.icon_class_new">
        <com-column :content="item.nickname"></com-column>
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
    strategyObj: {
      type: Object,
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
        &:hover .m-com-column {
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
        .m-com-column {
          position absolute
          bottom 74px
          width 100%
          transition all .2s ease
          text-align left
          .icon {
            width 102px
            height 102px
            margin-bottom 32px
          }
          .text {
            font-size 30px
            color #ffffff
          }
        }
      }
    }
  }
}
</style>
