<template>
  <div class="m-anchor-list">
    <!-- <a v-for="item in surveyAnchor" :key="item.id" :href="`#${item.id}`" :class="['m-anchor', item.id === activeId ? 'active' : '']" @click="handleClick(item.id)"> -->
    <a v-for="item in surveyAnchor" :key="item.id" href="javascript:void(0)" :class="['m-anchor', item.id === activeId ? 'active' : '']" @click="handleClick(item.id)">
      <span class="u-anchor"></span>
      <span class="text">{{ item.text }}</span>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    surveyAnchor: {
      type: Array,
      default () {
        return []
      }
    },
    activeId: {
      type: String,
      default: ''
    }
  },
  mounted () {
  },
  methods: {
    handleClick (id) {
      this.$emit('changeAnchor', id)
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
