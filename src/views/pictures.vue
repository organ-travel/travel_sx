<template>
  <section class="m-pictures-page">
    <div class="m-pictures-banner"></div>
    <div class="m-pictures-list">
      <com-list :list-arr="imgList"></com-list>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Pictures',
  components: {
  },
  data () {
    return {
      imgList: [],
      queryOption: {}
    }
  },
  computed: {
  },
  async mounted () {
    await this.setMenu()
    const catId = this.$router.history.current.query.id
    this.queryOption = Object.assign({}, { cat_id: catId })
    this.imgList = (await this.queryArticleList(this.queryOption)).data.articleList
    this.queryOption.total = 0
    this.queryOption.start++
  },
  methods: {
    getImg () {
    }
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
