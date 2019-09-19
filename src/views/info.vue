<template>
  <com-wrap class="m-info-page">
    <com-tab :act-index="actIndex" :nav-arr="infoPageNav" @changeNav="changeNav"></com-tab>
    <com-transition v-for="(item, index) in infoPageNav" :key="item.id">
      <com-article v-if="actIndex  == index" :article-total="queryOption[index].total" :cur-category="curCategoryArr" :parent-arr="infoPageNav[actIndex]" :arr="articleArr[index]" :has-detail="!(infoPageNav[actIndex] && (infoPageNav[actIndex].name == '招贤纳士' || infoPageNav[actIndex].name == '文件下载'))" :has-download="infoPageNav[actIndex] && infoPageNav[actIndex].name == '文件下载'"  @handleDownload="handleDownload"></com-article>
    </com-transition>
  </com-wrap>
</template>
<script>
import dataset from '@/config/dataset'
export default {
  pageName: 'Info',
  components: {
  },
  data () {
    return {
      actIndex: 0,
      infoPageNav: [],
      curCategoryArr: {},
      articleArr: [],
      queryOption: []
    }
  },
  // watch: {
  //   '$route.query.actIndex' (n, o) {
  //     this.changeNav(n || 0)
  //   }
  // },
  async mounted () {
    await this.setMenu()
    this.actIndex = parseInt(this.$route.query.actIndex) || this.actIndex
    this.curCategoryArr = this.getCurCategory
    this.infoPageNav = this.getCurCategory.children || []
    this.infoPageNav.forEach(async (item, index) => {
      this.queryOption[index] = Object.assign({}, JSON.parse(JSON.stringify(dataset.queryOption)), { cat_id: item.id })
      const res = (await this.queryArticleList(this.queryOption[index])).data
      this.$set(this.articleArr, index, res.articleList || [])
      this.queryOption[index].total = res.articleCount || 0
      this.queryOption[index].start = this.queryOption[index].start + dataset.queryOption.limit
    })
  },
  methods: {
    changeNav (index) {
      this.actIndex = index
    },
    handleDownload () {
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.query.name) {
        const routerName = to.query.name
        switch (routerName) {
        case 'dynamic':
          vm.actIndex = 0
          break
        case 'news':
          vm.actIndex = 1
          break
        case 'activity':
          vm.actIndex = 2
          break
        case 'recuit':
          vm.actIndex = 3
          break
        case 'download':
          vm.actIndex = 4
          break
        }
      }
    })
  },
}
</script>
<style lang="stylus" scoped>
.m-info-page {
  background url("~@/assets/img/info_hk/bg-info.jpg") center no-repeat
  background-size cover
  >>> .m-com-container {
    width 1320px
    .m-com-center {
      padding 265px 0 65px
      .u-com-title {
        margin 0 auto 85px
        width 424px
        height 144px
        background url("~@/assets/img/info_hk/title-info.png") no-repeat center
      }
      .m-com-content {
        padding 60px 69px 45px 51px
      }
    }
  }
  >>> .m-com-tab {
    margin-bottom 10px
    height 40px
    .m-com-nav {
      padding 10px 20px
      background-color transparent
      border-radius 20px
      font-size 20px
      color #000000
      text-align center
      transition all .2s ease
      &.active, &:hover {
        background-color #ec5a02
        color #ffffff
      }
    }
    .m-com-nav + .m-com-nav {
      margin-left 10px
    }
  }
  >>> .m-com-transition {
    > .m-com-article {
      .m-article-list {
        padding 40px 0
        min-height 84px
        border-bottom 1px dashed #999999
        .u-img {
          width 146px
          height 108px
        }
      }
    }
  }
}
</style>
