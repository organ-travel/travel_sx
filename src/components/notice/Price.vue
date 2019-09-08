<template>
  <div class="price-wrapper">
    <div v-if="item.body" class="txt-wrapper" v-html="item.body"></div>
    <div class="txt-wrapper" data-before="温馨提示:">
      <p class="txt">为了你的购票安全提示您都在购票的时候注意操作流程正确无误</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return []
      }
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>
