<template>
  <div>
    <div v-for="(item, index) in surveyContent" :id="item.type" :key="index" :ref="item.type" :class="['m-com', 'm-list-survey', `m-${ item.type }`]" @click="articleClick(item.article)">
      <div class="m-wrap">
        <div v-if="index === 0" style="height: 90px;"></div>
        <div class="m-wrap-content">
          <div class="m-content">
            <div class="icon"></div>
            <div class="content" v-html="item.article.description.replace('\n', '<br>')">
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
    articleClick (item) {
      window.location.href = '#/infoDetail?id=' + item.id
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
