<template>
  <section class="m-content">
    <com-menu>
      <com-menu-item :menu-data="menuData" :active-index="activeIndex" :is-show="isShow" @enter="handleMouseEnter" @leave="handleMouseLeave" @clickSub="handleClick" @clickMenu="clickMenu"></com-menu-item>
    </com-menu>
    <slot></slot>
  </section>
</template>
<script>
import dataset from '@/config/dataset'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      oldIndex: -1,
      isShow: false,
      menuData: JSON.parse(JSON.stringify(dataset.menuData))
    }
  },
  computed: {
    ...mapGetters({ activeIndex: 'getActiveIndex' })
  },
  methods: {
    handleMouseEnter (index) {
      this.isShow = true
      this.oldIndex = this.activeIndex
      if (this.activeIndex === index) {
        return
      }
      this.SET_ACTIVE_INDEX(index)
    },
    handleMouseLeave () {
      this.isShow = false
      if (this.activeIndex === this.oldIndex) {
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
