<template>
  <div class="notice-wrapper">
    <ul>
      <li v-for="(notice, index) in arr" :key="index"
          :data-before="notice.label"
          :data-after="notice.time">
        <a :href="'#/infoDetail?id=' + notice.id"  class="txt-title">{{ notice.title }} </a>
      </li>
    </ul>
    <el-pagination
      ref="hkPage"
      :page-size="10"
      layout="prev, pager, next"
      :total="articleTotal"
      @current-change="handleCurrentChange">
    </el-pagination>
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
    },
    articleTotal: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped>

</style>
