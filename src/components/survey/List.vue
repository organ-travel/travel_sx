<template>
  <div>
    <div v-for="(item, index) in surveyContent" :id="item.id" :key="index" :ref="item.id" :class="['m-com', 'm-list-survey', `m-${ item.id }`]">
      <div class="m-wrap">
        <div v-if="index === 0" style="height: 90px;"></div>
        <div class="m-wrap-content">
          <div class="m-content">
            <div class="icon"></div>
            <div class="content" v-html="item.content">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    surveyContent: {
      type: Array,
      default () {
        return []
      }
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
