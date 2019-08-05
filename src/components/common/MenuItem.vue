<template>
  <section>
    <a
      v-for="(item, index) in menuData"
      :key="index" :href="item.route"
      :class="{'m-com': true, 'active': activeIndex === index, 'm-has-sub': item.sub}"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave"
      @click="handleMenu(index, item.sub)">
      <span>{{ item.name }}</span>
      <div
        v-show=" item.sub && activeIndex === index && isShow"
        class="m-drop-list">
        <a
          v-for="(arr, ind) in item.sub"
          :key="ind"
          :href="arr.route"
          class="u-drop-list"
          @click="handleClick(index, ind)">
          {{ arr.name }}
        </a>
      </div>
    </a>
  </section>
</template>
<script>
export default {
  props: {
    menuData: Array,
    activeIndex: Number,
    isShow: Boolean
  },
  methods: {
    handleMouseEnter (index) {
      this.$emit('enter', index)
    },
    handleMouseLeave () {
      this.$emit('leave')
    },
    handleMenu (index, hasSub) {
      this.$emit('clickMenu', index, hasSub)
    },
    handleClick (index, ind) {
      this.$emit('clickSub', index, ind)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .m-com {
    position relative
    display inline-block
    padding-left 11px
    padding-right 76px
    color #ffffff
    font-size 18px
    vertical-align top
    &:last-child {
      padding-right 0
    }
    &:hover, &.active {
      color #ec5a02
    }
    &.m-has-sub {
      &:after {
        position absolute
        top 50%
        right 46px
        transform translateY(-50%)
        content ''
        width 0
        height 0
        border-top 6px solid transparent
        border-bottom 6px solid transparent
        border-left 6px solid #ffffff
      }
      &:hover {
        &:after {
          top 53%
          border-right 6px solid transparent
          border-left 6px solid transparent
          border-top 6px solid #ffffff
        }
      }
    }
    .m-drop-list {
      position absolute
      left -14px
      width 154px
      background rgba(0, 0, 0, .4)
      .u-drop-list {
        padding-left 34px
        display block
        height 45px
        line-height 45px
        text-align left
        color #ffffff
        &:hover {
          color #ec5a02
        }
      }
      .u-drop-list + .u-drop-list {
        border-top 1px solid #999999
      }
    }
  }
</style>
