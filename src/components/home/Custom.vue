<template>
  <wrap class="m-style" title-text="壶口风情">
    <div class="m-content">
      <div v-if="customArr && customArr.length" class="swiper-container custom-swiper">
        <div class="swiper-wrapper">
          <div v-for='(el, index) in customArr' :key="index" class="swiper-slide">
            <img class="img" :src="el.imgUrl">
            <span class="text">{{ el.text }}</span>
          </div>
        </div>
        <!-- <div class="swiper-pagination"></div> -->
      </div>
      <nav class="m-list">
        <span v-for="item in customNav" :key="item.name" :class="['u-list', activeLabel === item.type ? 'active' : '']" @click="handleClick(item.type)">{{ item.name }}</span>
      </nav>
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
    customArr: {
      type: Array,
      default () {
        return []
      }
    },
    customNav: {
      type: Array,
      default () {
        return []
      }
    },
    activeLabel: {
      type: String,
      default: ''
    }
  },
  mounted () {
  },
  methods: {
    handleClick (type) {
      this.$emit('changeCustom', type)
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-style {
  background url('~@/assets/img/home/style.jpg') no-repeat center
  background-size cover
  >>> .m-com {
    padding 60px 0 47px
    & > .u-title {
      margin 0 auto 50px
    }
    .m-content {
      position relative
      width 100%
      height 478px
      .swiper-container {
        width 100%
        height 100%
        .img {
          width 100%
          height 100%
        }
        .text {
          position absolute
          left 0
          bottom 0
          width 100%
          height 40px
          line-height 40px
          background rgba(0, 0, 0, .3)
          color #ffffff
          text-align center
          font-size 14px
        }
      }
      .m-list {
        position absolute
        top 40px
        left 0
        z-index 999
        .u-list {
          display block
          width 200px
          height 54px
          line-height 54px
          background #333333
          font-size 20px
          color #ffffff
          text-align center
          cursor pointer
          &.active {
            transform translateX(-20px)
            // margin-left -20px
            background #ec5a02
          }
          transition all .5s
        }
        .u-list + .u-list {
          margin-top 10px
        }
      }
    }
  }
}
</style>
