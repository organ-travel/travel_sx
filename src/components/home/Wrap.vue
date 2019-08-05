<template>
  <section class="m-wrap">
    <div class="m-com">
      <h3 v-if="titleText" class="u-title">{{ titleText }}</h3>
      <div class="m-wrap-content clearfix">
        <slot></slot>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    titleText: {
      type: String,
      default: ''
    }
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.m-wrap {
  width 100%
  margin 0 auto
  .m-com {
    margin 0 auto
    width 1199px
    .u-title {
      font-weight normal
      font-size 48px
      color #ec5a02
      text-align center
      &::before, &::after {
        content: ''
        display inline-block
        width 108px
        height 48px
        vertical-align top
      }
      &::before {
        background url('~@/assets/img/left.png') no-repeat left center
      }
      &::after {
        background url('~@/assets/img/right.png') no-repeat right center
      }
    }
  }
}
</style>
