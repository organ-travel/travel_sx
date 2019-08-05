<template>
  <section class="m-menu">
    <nav class="m-nav">
      <slot></slot>
    </nav>
  </section>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
  .m-menu {
    position absolute
    width 100%
    height 90px
    background rgba(0, 0, 0, .6)
    .m-nav {
      margin 0 auto
      width 1199px
      height 100%
      line-height 90px
    }
  }
</style>
