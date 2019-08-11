<template>
  <nav class="m-com-tab">
    <a v-for="(item, index) in navArr" :key="index" href="javascript:void(0)" :class="{'m-com-nav': true, 'active': actIndex === index}" @click="handleClick(index)">
      <span class="u-com-text">{{ item.text }}</span>
      <span v-if="isBorder" :class="['u-com-border', borderClass]"></span>
    </a>
  </nav>
</template>
<script>
export default {
  props: {
    navArr: {
      type: Array,
      default () {
        return []
      }
    },
    isBorder: {
      type: Boolean,
      default: false
    },
    borderClass: {
      type: String,
      default: ''
    },
    actIndex: {
      type: Number,
      default: 0
    },
    funName: {
      type: String,
      default: 'changeNav'
    }
  },
  mounted () {
  },
  methods: {
    handleClick (index) {
      this.$emit(this.funName, index)
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-com-tab {
  display flex
  justify-content center
  .m-com-nav {
  }
}
</style>
