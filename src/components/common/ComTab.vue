<template>
  <nav class="m-com-tab">
    <a v-for="(item, index) in navArr" :key="index" href="javascript:void(0)" :class="{'m-com-nav': true, 'active': actIndex === index}" @click="handleClick(index)">
      <span class="u-com-text">{{ item.text }}</span>
      <span v-if="borderClass" :class="['u-com-border', borderClass]"></span>
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
    borderClass: {
      type: String,
      default: ''
    },
    actIndex: {
      type: Number,
      default: 0
    }
  },
  mounted () {
  },
  methods: {
    handleClick (index) {
      this.$emit('changeNav', index)
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
