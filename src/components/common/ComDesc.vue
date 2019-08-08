<template>
  <div class="m-com-desc">
    <h3 class="u-title">{{ title }}</h3>
    <div class="m-con">
      <span class="brief">{{ brief }}</span>
      <span class="detail">【详情】 </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    brief: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-com-desc {
  text-align left
  .u-title {
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    font-size 18px
  }
  .m-con {
    padding-top 19px
    line-height 28px
    font-size 14px
    .brief {
    }
    .detail {
    }
  }
}
</style>
