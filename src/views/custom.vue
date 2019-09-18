<template>
  <com-wrap class="m-custom-page">
    <com-tab :act-index="actIndex" :nav-arr="customNav" @changeNav="changeNav"></com-tab>
    <com-transition v-for="(item, index) in customNav" :key="item.id">
      <div v-if="actIndex == index && customNav[actIndex] && customNav[actIndex].type == 'drum'" :class="`m-${customNav[actIndex].type}`">
        <div class="u-desc">{{ item.description }}</div>
        <com-list :list-arr="articleObj.drum"></com-list>
      </div>
      <div v-if="actIndex == index && customNav[actIndex] && customNav[actIndex].type == 'paperCut'" :class="`m-${customNav[actIndex].type}`">
        <com-list :list-arr="articleObj.paperCut"></com-list>
      </div>
      <div v-if="actIndex == index && customNav[actIndex] && customNav[actIndex].type == 'shoot'" :class="`m-${customNav[actIndex].type}`">
        <com-list :list-arr="articleObj.shoot"></com-list>
      </div>
      <div v-if="actIndex == index && customNav[actIndex] && customNav[actIndex].type == 'picture'" :class="`m-${customNav[actIndex].type}`">
        <com-list :list-arr="articleObj.picture"></com-list>
      </div>
      <div v-if="actIndex == index && customNav[actIndex] && customNav[actIndex].type == 'film_video'" :class="`m-${customNav[actIndex].type}`">
        <com-list :list-arr="articleObj.film_video"></com-list>
        <p class="u-more"><a :href="'#/pictures?id=' + customNav[actIndex].id">点击更多视频 >></a></p>
      </div>
    </com-transition>
  </com-wrap>
</template>
<script>
import dataset from '@/config/dataset'
export default {
  pageName: 'Custom',
  components: {
  },
  data () {
    return {
      actIndex: 0,
      customNav: [],
      articleObj: {},
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
    this.customNav = this.getCurCategory.children || []
    this.customNav.forEach(async (item, index) => {
      if (item.type === 'film_video') this.queryOption[index] = Object.assign({}, JSON.parse(JSON.stringify(dataset.queryOption)), { limit: 1, cat_id: item.id })
      else this.queryOption[index] = Object.assign({}, JSON.parse(JSON.stringify(dataset.queryOption)), { cat_id: item.id })
      const res = (await this.queryArticleList(this.queryOption[index])).data
      this.$set(this.articleObj, item.type, res.articleList || [])
      this.queryOption[index].total = res.articleCount || 0
      this.queryOption[index].start++
    })
  },
  methods: {
    changeNav (index) {
      this.actIndex = index
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.query.name) {
        const routerName = to.query.name
        switch (routerName) {
        case 'paperCut':
          vm.actIndex = 0
          break
        case 'drum':
          vm.actIndex = 1
          break
        case 'shoot':
          vm.actIndex = 2
          break
        case 'picture':
          vm.actIndex = 3
          break
        case 'film_video':
          vm.actIndex = 4
          break
        }
      }
    })
  },
}
</script>
<style lang="stylus" scoped>
.m-custom-page {
  background url("~@/assets/img/custom_hk/bg-custom.jpg") center no-repeat
  background-size cover
  >>> .m-com-container {
    width 1260px
    .m-com-center {
      padding 230px 0 155px
      .u-com-title {
        margin 0 auto 110px
        width 426px
        height 146px
        background url("~@/assets/img/custom_hk/title-custom.png") no-repeat center
      }
      .m-com-content {
        padding 44px 16px 31px
      }
    }
  }
  >>> .m-com-tab {
    margin-bottom 27px
    height 50px
    .m-com-nav {
      padding 14px 35px
      background-color #ffffff
      border-radius 25px
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
      margin-left 20px
    }
  }
  >>> .m-com-transition {
    .m-drum {
      .u-desc {
        padding 0 169px 16px
        line-height 28px
        font-size 14px
        text-align center
        color #000000
      }
      .m-com-list {
        .m-com-img {
          margin 14px
          width 381px
          height 284px
          .u-com-img {
          }
        }
      }
    }
    .m-paperCut, .m-shoot, .m-picture {
      .m-com-list {
        .m-com-img {
          margin 14px
          width 381px
          height 284px
          .u-com-img {
          }
        }
      }
    }
    .m-paperCut, .m-shoot, .m-picture {
      line-height 100px
      text-align center
    }
    .m-film_video {
      .m-com-list {
        padding 25px 0 28px
        .m-com-img {
          margin 0 auto
          width 1150px
          height 647px
          .u-film-bg {
            display inline-block
            background url('~@/assets/img/custom_hk/bg-film.jpg') no-repeat center
          }
        }
      }
      .u-more, a {
        line-height 42px
        text-align center
        font-size 18px
        color #000000
        &:hover {
          color: #ec5a02
        }
      }
    }
  }
}
</style>
