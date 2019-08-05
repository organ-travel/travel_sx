<template>
  <wrap class="m-style" title-text="壶口风情">
    <div class="m-content">
    </div>
  </wrap>
</template>
<script>
import Wrap from '@/components/home/Wrap.vue'
export default {
  components: {
    Wrap
  },
  props: {
    strategyArr: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.m-style {
  background url('~@/assets/img/style.jpg') no-repeat center
  background-size cover
  >>> .m-com {
    padding 60px 0 47px
    & > .u-title {
      margin 0 auto 50px
    }
    .m-content {
      width 100%
      height 479px
    }
  }
}
</style>
