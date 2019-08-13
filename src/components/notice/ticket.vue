<template>
  <div class="ticket-wrapper">
    <ul>
      <li v-for="(ticket, index) in ticketList" :key="index" :data-before="ticket.site">
        <div class="img-wrapper">
          <a href="javascript:;">
            <img :src="ticket.picUrl" alt="">
          </a>
        </div>
        <div class="txt-wrapper">
          <div class="title-group">
            <span class="txt-title">{{ ticket.title }}</span>
            <span class="txt-subtitle">{{ ticket.subTitle }}</span>
          </div>
          <p class="txt-summary">{{ ticket.summary }}</p>
          <p class="txt-address" data-before="景区地址：">{{ ticket.address }}</p>
          <p class="txt-time" data-before="营业时间：">{{ ticket.time }}</p>
          <div class="btn-group">
            <a href="javascript:;" class="btn-enter">快速入园</a>
            <a href="javascript:;" class="btn-safe">入园保障</a>
          </div>
        </div>
        <div class="buy-wrapper">
          <img src="" alt="">
          <a href="javascript:;" class="btn-buy">预定</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ticketList: [{
        site: '美团预定',
        picUrl: '',
        title: '宜川壶口瀑布',
        subTitle: 'AAAAA景区',
        summary: '黄河上唯一的大瀑布，世界罕见金黄色大瀑布',
        address: '陕西省延安市宜川县',
        time: '8:00-19:00',
        qrcodeUrl: ''
      }, {
        site: '携程网预定',
        picUrl: '',
        title: '宜川壶口瀑布',
        subTitle: 'AAAAA景区',
        summary: '黄河上唯一的大瀑布，世界罕见金黄色大瀑布',
        address: '陕西省延安市宜川县',
        time: '8:00-19:00',
        qrcodeUrl: ''
      }]
    }
  }
}
</script>

<style scoped>

</style>
