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
          <p class="txt-summary">{{ perchase.summary }}</p>
          <p class="txt-address" data-before="景区地址：">{{ perchase.address }}</p>
          <p class="txt-time" data-before="营业时间：">{{ perchase.business_hours }}</p>
          <div class="btn-group">
            <a href="javascript:;" class="btn-enter">快速入园</a>
            <a href="javascript:;" class="btn-safe">入园保障</a>
          </div>
        </div>
        <div class="buy-wrapper">
          <img :src="perchase.qrcode_url" alt="">
          <a :href="perchase.url" target="_blank" class="btn-buy">预定</a>
        </div>
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
