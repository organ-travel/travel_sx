<template>
  <div class="perchase-wrapper">
    <ul>
      <li v-for="(perchase, index) in arr" :key="index" :data-before="perchase.origin">
        <div class="img-wrapper">
          <a href="javascript:;">
            <img :src="perchase.picture_url" alt="">
          </a>
        </div>
        <div class="txt-wrapper">
          <div class="title-group">
            <span class="txt-title">{{ perchase.title }}</span>
            <span class="txt-subtitle">{{ perchase.description }}</span>
          </div>
          <p class="txt-summary">{{ perchase.stars }}</p>
          <p class="txt-address" data-before="景区地址：">{{ perchase.address }}</p>
          <p class="txt-time" data-before="营业时间：">{{ perchase.business_hours }}</p>
          <div class="btn-group">
            <a :href="perchase.url" class="btn-enter" target="_blank">立即预定</a>
            <!--<a href="javascript:;" class="btn-safe">入园保障</a>-->
          </div>
        </div>
        <div class="buy-wrapper">
          <img :src="perchase.qrcode_url" alt="">
          <a :href="perchase.url" target="_blank" class="btn-buy">预定</a>
        </div>
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
