<template>
  <div class="intro-wrapper">
    <div class="intro-left">
      <a href="javascript:;"><img :src=" intro.picture_url " alt=""></a>
    </div>
    <div class="intro-right">
      <div class="content">
        <p class="txt">{{ intro.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    intro: {
      type: Object,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
