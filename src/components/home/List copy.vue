<template>
  <div>
    <a v-for="(item, index) in typeArr" :key="index" :href="item.route" :class="item.className" >
      <com-column :icon-class="item.iconClass" :content="item.text" :text-class="textClass"></com-column>
      <!-- <span :class="item.iconClass"></span>
      <span :class="textClass">{{ item.text }}</span> -->
    </a>
  </div>
</template>
<script>
export default {
  props: {
    typeArr: {
      type: Array,
      default () {
        return []
      }
    },
    textClass: {
      type: String,
      default: ''
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
</style>
