<template>
  <div class="tabs-content_town">
    <com-wonder-intro :intro="intro"></com-wonder-intro>
    <com-list :list-arr="list" :show-page="showPage"></com-list>
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
    showPage: {
      type: String,
      default: ''
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
