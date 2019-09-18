<template>
  <div  class="tabs-content_single">
    <com-wonder-intro :intro="intro"></com-wonder-intro>
    <sing-list :list-arr="list" :show-page="showPage"></sing-list>
  </div>
</template>

<script>
import ComWonderIntro from '@/components/common/ComWonderIntro.vue'
import SingList from '@/components/wonder/SingList.vue'
export default {
  components: {
    ComWonderIntro,
    SingList
  },
  props: {
    intro: {
      type: Object,
      default () {
        return []
      }
    },
    showPage: {
      type: String
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
