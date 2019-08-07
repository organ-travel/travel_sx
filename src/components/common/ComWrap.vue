<template>
  <section class="m-com-wrap">
    <div class="m-com-container">
      <div class="m-com-center">
        <span v-if="hasTitle" class="u-com-title"></span>
        <div class="m-com-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    hasTitle: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
  .m-com-wrap {
    width 100%
    .m-com-container {
      margin 0 auto
      .m-com-center {
        position relative
        overflow hidden
        .u-com-title {
          display block
        }
        .m-com-content {
          background rgba(255, 255, 255, .8)
          border-radius 16px
        }
      }
    }
  }
</style>
