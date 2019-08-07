<template>
  <div class="m-com-list">
    <a v-for="(item, index) in listArr" :key="index" :href="item.route" class="m-com-img">
      <img v-if="isImg" :src="item.addr" :class="['u-com-img', imgClass]" alt="" title=""/>
      <span v-else :class="['u-com-img', item.iconClass]"></span>
      <span class="title">{{ item.text }}</span>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    listArr: {
      type: Array,
      default () {
        return []
      }
    },
    imgClass: {
      type: String,
      default: ''
    },
    isImg: {
      type: Boolean,
      default: true
    },
    iconClass: {
      type: String,
      default: ''
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.m-com-list {
  display flex
  flex-wrap wrap
  .m-com-img {
    position relative
    overflow hidden
    font-size 14px
    color #ffffff
    text-align center
    .u-com-img {
      width 100%
      height 100%
      vertical-align top
      transition all .2s ease
      &:hover {
        transform scale(1.1)
      }
    }
    .title {
      position absolute
      left 0
      right 0
      bottom 0
      height 30px
      line-height 30px
      background rgba(0, 0, 0, .5)
    }
  }
}
</style>
