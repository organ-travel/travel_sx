<template>
  <div  class="tabs-content_single">
    <com-wonder-intro :intro="intro"></com-wonder-intro>
    <com-list :list-arr="list"></com-list>
  </div>
</template>

<script>
import ComWonderIntro from '@/components/common/ComWonderIntro.vue'
import ComList from '@/components/common/ComList.vue'
export default {
  components: {
    ComWonderIntro,
    ComList
  },
  props: {
    intro: {
      type: Object,
      default () {
        return []
      }
    },
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
