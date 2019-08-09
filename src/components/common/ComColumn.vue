<template>
  <div class="m-com-column">
    <span v-if="!imgUrl" :class="['icon', iconClass]"></span>
    <img v-else :src="imgUrl" :class="['img', imgClass]"/>
    <span :class="['text', textClass]">{{ content }}</span>
  </div>
</template>
<script>
export default {
  props: {
    iconClass: {
      type: String,
      default: ''
    },
    imgClass: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    textClass: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-com-column {
  display flex
  flex-direction column
  justify-content center
  align-items center
}
</style>
