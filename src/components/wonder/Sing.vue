<template>
  <div  class="tabs-content_single">
    <div class="intro-wrapper">
      <div class="intro-left">
        <a href="javascript:;"><img :src=" wonder.intro.src " alt=""></a>
      </div>
      <div class="intro-right">
        <div class="content">
          <p class="txt">{{ wonder.intro.txt }}</p>
        </div>
      </div>
    </div>
    <com-list :list-arr="wonder.imgList"></com-list>
  </div>
</template>

<script>
import ComList from '@/components/common/ComList.vue'
export default {
  components: {
    ComList
  },
  props: {
    wonder: {
      type: Object,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
