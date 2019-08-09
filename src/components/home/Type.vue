<template>
  <wrap class="m-type">
    <list class="m-content" :type-arr="typeArr"></list>
    <a href="#/" class="m-follow"></a>
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
    typeArr: {
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
.m-type {
  background url('~@/assets/img/home/type.jpg') no-repeat center
  background-size cover
  >>> .m-com {
    padding 78px 0 80px
    .m-wrap-content {
      box-shadow: -10px 10px 20px rgba(51, 51, 51, .1)
      .m-content {
        float left
        width 948px
        height 324px
        text-align left
        .m-module {
          display inline-flex
          padding 40px 0 32px
          width 237px
          height 90px
          background-color #fff
          vertical-align top
          color #ec5a02
          .m-com-column {
            width 100%
            justify-content space-between
          }
          &:hover span {
            transform scale(1.2)
          }
          span {
            transition all .2s ease
          }
          &.m-orange {
            color #fff
            background-color #ec5a02
          }
          .u-notice, .u-price {
            width 44px
            height 44px
          }
          .u-notice{
            background url('~@/assets/img/home/notice.png') no-repeat center
          }
          .u-price {
            background url('~@/assets/img/home/price.png') no-repeat center
          }
          .u-perchase {
            width 48px
            height 44px
            background url('~@/assets/img/home/perchase.png') no-repeat center
          }
          .u-scenery {
            width 51px
            height 42px
            background url('~@/assets/img/home/scenery.png') no-repeat center
          }
          .u-film {
            width 45px
            height 45px
            background url('~@/assets/img/home/film.png') no-repeat center
          }
          .u-gudukou {
            width 40px
            height 44px
            background url('~@/assets/img/home/gudukou.png') no-repeat center
          }
          .u-sing {
            width 39px
            height 45px
            background url('~@/assets/img/home/sing.png') no-repeat center
          }
          .u-wlt {
            width 46px
            height 41px
            background url('~@/assets/img/home/wlt.png') no-repeat center
          }
        }
      }
      .m-follow {
        float right
        width 244px
        height 324px
        background url('~@/assets/img/home/follow.jpg') no-repeat center
      }
    }
  }
}
</style>
