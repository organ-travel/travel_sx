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
        .com-sep-lists {
          position: relative
          .com-sep-list {
            overflow: hidden
            img {
              -webkit-transition: all .2s ease-in .2s
              -moz-transition: all .2s ease-in .2s
              -ms-transition: all .2s ease-in .2s
              -o-transition: all .2s ease-in .2s
              transition: all .2s ease-in .2s
            }
            &:hover {
              img {
                -webkit-transform: scale(1.1)
                -moz-transform: scale(1.1)
                -ms-transform: scale(1.1)
                -o-transform: scale(1.1)
                transform: scale(1.1)
              }
            }
            &:last-child {
              position: absolute;
              left: 50%;
              margin-left: -225px;
              top: 50%;
              margin-top: -225px;
            }
            .u-title {
              display: none
            }
          }
        }
      }
    }
  }
}
</style>
