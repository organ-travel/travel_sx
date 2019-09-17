<template>
  <section class="m-survey-page">
    <list ref="lists" :survey-content="surveyContent"></list>
    <anchor ref="anchor" :survey-anchor="surveyAnchor" :active-id="activeId" @changeAnchor="changeAnchor"></anchor>
  </section>
</template>
<script>
import dataset from '@/config/dataset'
import List from '@/components/survey/List.vue'
import Anchor from '@/components/survey/Anchor.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Survey',
  components: {
    List,
    Anchor
  },
  data () {
    return {
      surveyContent: [],
      articleArr: [],
      surveyAnchor: [],
      queryOption: [],
      activeId: '',
      actIndex: 0,
      // 点击导航页面滚动
      isClick: false,
      timer: null,
      scrollTop: 0
    }
  },
  computed: {
    ...mapGetters(['getHeaderHeight'])
  },
  // watch: {
  //   '$route.query.actIndex' (n, o) {
  //     this.activeId = this.getCurCategory.children[n || 0] ? this.getCurCategory.children[n || 0].type : ''
  //     this.changeAnchor(this.activeId)
  //   }
  // },
  async mounted () {
    await this.setMenu()
    // this.setActiveIndex()
    // this.setCurCategory()
    this.actIndex = parseInt(this.$route.query.actIndex) || this.actIndex
    this.activeId = this.getCurCategory.children[this.actIndex] ? this.getCurCategory.children[this.actIndex].type : ''
    this.surveyAnchor = this.getCurCategory.children || []
    this.handleScroll('isFirst')
    window.addEventListener('scroll', this.handleScroll, false)
    this.surveyAnchor.forEach(async (item, index) => {
      if (item.type != 'introduction') this.surveyContent.push({ type: item.type, article: item.article })
      this.queryOption[index] = Object.assign({}, JSON.parse(JSON.stringify(dataset.queryOption)), { cat_id: item.id })
      const res = (await this.queryArticleList(this.queryOption[index])).data
      this.$set(this.articleArr, index, res.articleList)
      this.queryOption[index].total = res.articleCount || 0
      this.queryOption[index].start++
    })
    console.log(this.surveyContent)
  },
  methods: {
    async changeAnchor (id) {
      this.timer && await clearTimeout(this.timer)
      this.activeId = id
      this.isClick = true
      const _that = this
      const top = this.$refs['lists'].$refs[id][0].offsetTop + this.getHeaderHeight || 118
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let distance = 0
      if (top > this.scrollTop) {
        // down
        distance = (top - this.scrollTop) / 10
        moveDown()
      } else {
        // up
        distance = (this.scrollTop - top) / 10
        moveUp()
      }
      function moveDown () {
        if (Math.ceil(_that.scrollTop) < top) {
          _that.scrollTop += distance
          document.body.scrollTop ? (document.body.scrollTop = _that.scrollTop) : (document.documentElement.scrollTop = _that.scrollTop)
          _that.timer = setTimeout(moveDown, 50)
        } else {
          _that.scrollTop = top
          _that.isClick = false
          _that.timer = null
        }
      }
      function moveUp () {
        if (Math.floor(_that.scrollTop) > top) {
          _that.scrollTop -= distance
          document.body.scrollTop ? (document.body.scrollTop = _that.scrollTop) : (document.documentElement.scrollTop = _that.scrollTop)
          _that.timer = setTimeout(moveUp, 50)
        } else {
          _that.scrollTop = top
          _that.isClick = false
          _that.timer = null
        }
      }
    },
    handleScroll (isFirst) {
      if (this.isClick) {
        return
      }
      const items = document.querySelectorAll('.m-list-survey')
      if (items.length > items[this.actIndex]) {
        if (isFirst === 'isFirst') {
          const height = items[this.actIndex].offsetTop + this.getHeaderHeight || 118
          document.body.scrollTop ? (document.body.scrollTop = height) : (document.documentElement.scrollTop = height)
          return
        }
      }

      items.forEach((item, index) => {
        const top = item.offsetTop + this.getHeaderHeight || 118
        const max = item.clientHeight + top
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (Math.ceil(scrollTop) < max && Math.ceil(scrollTop) >= top) {
          this.activeId = item.id
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-survey-page {
  position relative
  >>> .m-com {
    width 100%
    .m-wrap {
      margin 0 auto
      width 1199px
      height 100%
      .m-wrap-content {
        position relative
        margin 0 auto
        width 1030px
        height 100%
        background rgba(0, 0, 0, .5)
        .m-content {
          position absolute
          top 50%
          left 50%
          width 760px
          transform translate(-50%, -50%)
          color #ffffff
          font-size 14px
          .icon  {
            margin-bottom 40px
          }
          .content {
            line-height 30px
            .para{
              padding-bottom 20px
            }
          }
        }
      }
    }
    &:first-child .m-wrap .m-wrap-content {
      height calc(100% - 90px)
      .m-content{
        margin-top -90px
      }
    }
  }
  >>> .m-history {
    height 961px
    background url('~@/assets/img/hkgk/historyP.jpg') no-repeat center
    .m-content {
      .icon {
        width 224px
        height 80px
        background url('~@/assets/img/hkgk/icon-history.png') no-repeat center
      }
    }
  }
  >>> .m-culture {
    height 1080px
    background url('~@/assets/img/hkgk/cultureP.jpg') no-repeat center
    .m-content {
      .icon {
        width 224px
        height 79px
        background url('~@/assets/img/hkgk/icon-culture.png') no-repeat center
      }
    }
  }
  >>> .m-geo {
    height 1080px
    background url('~@/assets/img/hkgk/geoP.jpg') no-repeat center
    .m-content {
      .icon {
        width 225px
        height 81px
        background url('~@/assets/img/hkgk/icon-geo.png') no-repeat center
      }
    }
  }
  >>> .m-source {
    height 1080px
    background url('~@/assets/img/hkgk/sourceP.jpg') no-repeat center
    .m-content {
      .icon {
        width 224px
        height 86px
        background url('~@/assets/img/hkgk/icon-source.png') no-repeat center
      }
    }
  }
  >>> .m-letters {
    height 1083px
    background url('~@/assets/img/hkgk/lettersP.jpg') no-repeat center
    .m-content {
      .icon {
        width 217px
        height 82px
        background url('~@/assets/img/hkgk/icon-letters.png') no-repeat center
      }
    }
  }
  >>> .m-anchor-list {
    position fixed
    top 50%
    right 50%
    width 90px
    margin-top -120px
    margin-right 590px
    .m-anchor {
      display block
      line-height 25px
      font-size 20px
      color #ffffff
      .u-anchor {
        display inline-block
        position relative
        margin-right 14px
        width 25px
        height 25px
        border 1px solid transparent
        border-radius 50%
        vertical-align middle
        &:after {
          position absolute
          top 50%
          left 50%
          transform translate(-50%, -50%)
          content ''
          width 15px
          height 15px
          background #ffffff
          border-radius 50%
        }
      }
      &.active .u-anchor {
        border 1px solid #ffffff
      }
      .text {
        vertical-align middle
      }
    }
    .m-anchor + .m-anchor {
      margin-top 25px
    }
  }
}
</style>
