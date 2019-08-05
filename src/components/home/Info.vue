<template>
  <wrap class="m-info" title-text="壶口资讯">
    <slot name="tab"></slot>
  </wrap>
</template>
<script>
import Wrap from '@/components/home/Wrap.vue'
export default {
  components: {
    Wrap
  },
  props: {
    infoArr: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-info {
  background url('~@/assets/img/type.jpg') no-repeat center
  background-size cover
  >>> .m-com {
    padding 61px 0 13px
    & > .u-title {
      margin 0 auto 37px
    }
  }
}
</style>
