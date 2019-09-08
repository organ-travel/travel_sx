<template>
  <com-wrap class="m-maker-page">
    <com-sep-list :list-arr="makerArr"></com-sep-list>
  </com-wrap>
</template>
<script>
import dataset from '@/config/dataset'
export default {
  name: 'Maker',
  components: {
  },
  data () {
    return {
      makerArr: []
    }
  },
  async mounted () {
    await this.setMenu()
    this.queryOption = Object.assign({}, JSON.parse(JSON.stringify(dataset.queryOption)), { cat_id: this.getCurCategory.id })
    const res = (await this.queryArticleList(this.queryOption)).data
    this.makerArr = res.articleList || []
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.m-maker-page {
  background url("~@/assets/img/info_hk/bg-info.jpg") center no-repeat
  background-size cover
  >>> .m-com-container {
    width 1320px
    .m-com-center {
      padding 230px 0 95px
      .u-com-title {
        margin 0 0 110px 110px
        width 426px
        height 146px
        background url("~@/assets/img/maker_hk/title-maker.png") no-repeat center
      }
      .m-com-content {
        padding 109px 99px 10px
      }
    }
  }
}
</style>
