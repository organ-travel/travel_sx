<template>
  <div class="notice-wrapper">
    <ul>
      <li v-for="(notice, index) in arr" :key="index"
          :data-before="notice.label"
          :data-after="notice.time">
        <a :href="'#/infoDetail?id=' + notice.id" target="_blank" class="txt-title">{{ notice.title }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
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
