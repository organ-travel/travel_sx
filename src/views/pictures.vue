<template>
  <section class="m-pictures-page">
    <div class="m-pictures-banner"></div>
    <div class="m-pictures-list">
      <com-list :list-arr="imgList" :article-total="queryOption.total" @handleCurrentChange="handleCurrentChange"></com-list>
    </div>
  </section>
</template>
<script>
export default {
  pageName: 'Pictures',
  components: {
  },
  data () {
    return {
      imgList: [],
      queryOption: {},
      limit: 9
    }
  },
  computed: {
  },
  async mounted () {
    await this.setMenu()
    window.scrollTo(0,0)
    const catId = this.$router.history.current.query.id
    this.queryOption = Object.assign({}, { cat_id: catId, limit: this.limit })
    const res = (await this.queryArticleList(this.queryOption)).data
    this.imgList = res.articleList || []
    this.queryOption.total = res.articleCount || 0
    this.queryOption.start++
  },
  methods: {
    getImg () {
    },
    async handleCurrentChange(page) {
      const start = (page - 1) * this.limit
      const index = this.actIndex
      this.queryOption[index].start = start
      const res = (await this.queryArticleList(this.queryOption[index])).data
      this.imgList = res.articleList || []
      this.queryOption.total = res.articleCount || 0
      this.queryOption.start++
    },
  }
}
</script>
<style lang="stylus" scoped>
.m-pictures-page {
  position relative
  .m-pictures-banner {
    width 100%
    height 648px
    background url('~@/assets/img/contact_hk/banner-contact.jpg') no-repeat center
  }
  >>> .m-pictures-list {
    margin 0 auto 102px
    width 1199px
    overflow hidden
    .m-com-list {
      padding 62px 0 78px
      width 1231px
      margin-left -16px
      .m-com-img {
        margin 18px 16px
        width 378px
        height 284px
        .u-com-img {
        }
      }
    }
  }
}
</style>
