<template>
  <section class="m-detail-page">
    <div class="m-detail-banner"></div>
    <div class="m-detail-content">
      <com-bread :list-arr="breadArr"></com-bread>
      <div class="detail-content">
        <h3 class="u-title">{{ detailObj.title }}</h3>
        <!--<div v-if="detailObj.pcitures && detailObj.pcitures.length" class="picture-wrapper">-->
          <!--<img v-for="(picture, index) in detailObj.pcitures" :key="index" :src="picture" alt=""  >-->
        <!--</div>-->
        <p v-if="detailObj.body" class="u-param" v-html="detailObj.body"></p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  pageName: 'InfoDetail',
  components: {
  },
  data () {
    return {
      detailObj: {},
      breadArr: []
    }
  },
  computed: {
  },
  async mounted () {
    await this.setMenu()
    window.scrollTo(0, 0)
    const id = this.$router.history.current.query.id
    this.detailObj = await this.getArticleDetail(id)
    this.breadArr = this.detailObj.categorys
  },
  methods: {
    getBread () {
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-detail-page {
  position relative
  .m-detail-banner {
    width 100%
    height 648px
    background url('~@/assets/img/contact_hk/banner-contact.jpg') no-repeat center
  }
  >>> .m-detail-content {
    margin 40px auto 160px
    width 1199px
    overflow hidden
    .detail-content {
      padding-top 76px
      text-align center
      color #333333
      width 800px
      margin 0 auto
      overflow: hidden
      img {
        max-width 100%
      }
      .u-title {
        text-align center
        font-weight bold
        font-size 18px
      }
      .u-img {
        margin 44px 0
        width 800px
        height 600px
      }
    }
  }
}
</style>
