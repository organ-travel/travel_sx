<template>
  <div class="notice-wrapper">
    <ul>
      <li v-for="(notice, index) in noticeList" :key="index"
          :data-before="notice.label"
          :data-after="notice.time">
        <a href="javascript:;" class="txt-title">{{ notice.title }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noticeList: [{
        label: '【文旅动态】',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！',
        time: '2019-08-20'
      }, {
        label: '【文旅动态】',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！',
        time: '2019-08-20'
      }, {
        label: '【文旅动态】',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！',
        time: '2019-08-20'
      }, {
        label: '【文旅动态】',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！',
        time: '2019-08-20'
      }, {
        label: '【文旅动态】',
        title: '壶口瀑布惊现彩虹美景！如鹊桥横跨秦晋两省，网友：这景绝了！',
        time: '2019-08-20'
      }]
    }
  }
}
</script>

<style scoped>

</style>
