<template>
  <wrap class="m-wonder" title-text="壶口奇观">
    <div class="m-content clearfix">
      <a v-for="(item, index) in wonderArr" :key="index" :href="item.route" class="pic-com">
        <span :class="item.iconClass"></span>
        <!-- <img :src="item.img" :class="item.iconClass"/> -->
        <span class="title">{{ item.text }}</span>
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
    wonderArr: {
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
.m-wonder {
  >>> .m-com {
    padding 66px 0 70px
    & > .u-title {
      margin 0 auto 59px
    }
    .m-content {
      .pic-com {
        position relative
        float left
        overflow hidden
        .u-img {
          display inline-block
          vertical-align top
          transition all .2s ease
          &:hover {
            transform scale(1.1)
          }
        }
        .u-gdk {
          width 455px
          height 573px
          background url('~@/assets/img/home/gdk.jpg') no-repeat center
        }
        .u-4d, .u-hh, .u-glt, .u-hkbj {
          width 353px
          height 277px
        }
        .u-4d {
          background url('~@/assets/img/home/4d.jpg') no-repeat center
        }
        .u-hh {
          background url('~@/assets/img/home/hh.jpg') no-repeat center
        }
        .u-glt {
          background url('~@/assets/img/home/glt.jpg') no-repeat center
        }
        .u-hkbj {
          background url('~@/assets/img/home/hkbj.jpg') no-repeat center
        }
        .title {
          position absolute
          width 100%
          height 40px
          line-height 40px
          left 0
          bottom 0
          background rgba(0, 0, 0, .3)
          color #ffffff
          font-size 14px
          text-align center
          font-weight normal
        }
      }
      .pic-com + .pic-com {
        margin 0 0 19px 18px
      }
    }
  }
}
</style>
