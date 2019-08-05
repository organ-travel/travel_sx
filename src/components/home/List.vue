<template>
  <div>
    <a v-for="(item, index) in typeArr" :key="index" :href="item.route" :class="item.className" >
      <span :class="item.iconClass"></span>
      <span :class="textClass">{{ item.text }}</span>
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
    console.log(this.typeArr)
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
</style>
