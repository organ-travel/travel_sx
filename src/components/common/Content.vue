<template>
  <section class="m-content">
    <com-menu>
      <com-menu-item :menu-data="getMenuData" :is-show="isShow" @enter="handleMouseEnter" @leave="handleMouseLeave" @clickSub="handleClick" @clickMenu="clickMenu"></com-menu-item>
    </com-menu>
    <slot></slot>
  </section>
</template>
<script>
// import dataset from '@/config/dataset'
// import { mapGetters } from 'vuex'
export default {
  com: 'MenuItem',
  data() {
    return {
      oldIndex: -1,
      isShow: false,
    }
  },
  computed: {
  },
  mounted () {
    console.log('contenet组件---》 mounted')
  },
  methods: {
    handleMouseEnter (index) {
      this.isShow = true
      this.oldIndex = this.getActiveIndex
      if (this.getActiveIndex === index) {
        return
      }
      this.SET_ACTIVE_INDEX(index)
    },
    handleMouseLeave () {
      this.isShow = false
      if (this.getActiveIndex === this.oldIndex) {
        return
      }
      this.SET_ACTIVE_INDEX(this.oldIndex)
    },
    clickMenu (index, hasSub) {
      // if (hasSub) {
      //   return false
      // }
      this.oldIndex = index
      this.SET_ACTIVE_INDEX(index)
    },
    handleClick (index, ind) {
      this.isShow = false
      this.oldIndex = index
      this.SET_ACTIVE_INDEX(index)
      console.log('content设置活动index', this.getActiveIndex)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .m-content {
    position relative
    width 100%
    min-height calc(100vh - 605px)
  }
</style>
