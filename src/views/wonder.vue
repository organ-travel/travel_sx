<template>
  <com-wrap class="m-custom-page" :hide-bg-color="hideBgColor">
    <!--<com-tab :act-index="actIndex" :nav-arr="infoPageNav" @changeNav="changeNav"></com-tab>-->
    <!--<com-transition v-for="(item, index) in infoPageNav" :key="item.id">-->
      <!--<com-article v-if="actIndex  == index" :arr="articleArr[index]" :has-detail="!(infoPageNav[actIndex] && (infoPageNav[actIndex].name == '招贤纳士' || infoPageNav[actIndex].name == '文件下载'))" :has-download="infoPageNav[actIndex] && infoPageNav[actIndex].name == '文件下载'"  @handleDownload="handleDownload"></com-article>-->
    <!--</com-transition>-->

    <com-tab :act-index="actIndex" :nav-arr="wonderNav" @changeNav="changeNav"></com-tab>
    <!--古渡口小镇-->
    <com-transition>
      <gu-du-kou v-if="wonderNav[actIndex] && wonderNav[actIndex].type === 'gudukou'" :intro="wonderNav[actIndex].article" :show-page="showPage" :list="wonderObj.gudukou"></gu-du-kou>
    </com-transition>
    <!--4D影院-->
    <com-transition>
      <film v-if="wonderNav[actIndex] && wonderNav[actIndex].type === 'film'" :intro="wonderNav[actIndex].article" :show-page="showPage" :list="wonderObj.film"></film>
    </com-transition>
    <!--黄河大合唱-->
    <com-transition>
      <sing v-if="wonderNav[actIndex] && wonderNav[actIndex].type === 'sing'" :intro="wonderNav[actIndex].article" :show-page="showPage" :list="wonderObj.sing"></sing>
    </com-transition>
    <!--望龙台-->
    <com-transition>
      <wang-long-tai v-if="wonderNav[actIndex] && wonderNav[actIndex].type === 'wlt'" :intro="wonderNav[actIndex].article" :show-page="showPage" :list="wonderObj.wlt"></wang-long-tai>
    </com-transition>
    <!--壶口八景-->
    <com-transition>
      <scenery v-if="wonderNav[actIndex] && wonderNav[actIndex].type === 'scenery'" :intro="wonderNav[actIndex].article" :show-page="showPage" :list="wonderObj.scenery"></scenery>
    </com-transition>
  </com-wrap>
</template>
<script>
import dataset from '@/config/dataset'
import ComWrap from '@/components/common/ComWrap.vue'
import GuDuKou from '@/components/wonder/Gudukou.vue'
import Film from '@/components/wonder/Film.vue'
import Sing from '@/components/wonder/Sing.vue'
import WangLongTai from '@/components/wonder/Wanglongtai.vue'
import Scenery from '@/components/wonder/Scenery.vue'

export default {
  pageName: 'Wonder',
  components: {
    ComWrap, GuDuKou, Film, Sing, WangLongTai, Scenery
  },
  data() {
    return {
      actIndex: 0,
      queryOption: [],
      wonderNav: [],
      wonderObj: {},
      showPage: 'show',
      hideBgColor: false
    }
  },
  async mounted () {
    const singOddArr = [] // 奇数
    const singEvenArr = [] // 偶数
    await this.setMenu()
    window.scrollTo(0,0)
    this.actIndex = parseInt(this.$route.query.actIndex) || this.actIndex
    this.wonderNav = this.getCurCategory.children || []
    this.wonderNav.forEach(async (item, index) => {
      this.queryOption[index] = Object.assign({}, JSON.parse(JSON.stringify(dataset.queryOption)), { cat_id: item.id })
      const res = (await this.queryArticleList(this.queryOption[index])).data
      this.$set(this.wonderObj, item.type, res.articleList || [])
      this.$set(this.wonderObj, 'showPage', 'show')
      if (item.type === 'sing') {
        res.articleList.forEach((item, index) => {
          index % 2 === 0 ? singEvenArr.push(item) : singOddArr.push(item)
        })
        // 偶数行
        singEvenArr.forEach((item, index) => {
          index === 0 ? item.class_name = 'item_blue' : item.class_name = 'item_yellow'
        })
        // 奇数行
        singOddArr.forEach((item, index) => {
          index === 0 ? item.class_name = 'item_yellow' : item.class_name = 'item_blue'
        })
        this.wonderObj.sing = [...singOddArr, ...singEvenArr]
      }
      if (item.type === 'scenery') {
        res.articleList.forEach((item, index) => {
          if (index === 2 || index === 7) {
            item.description = item.description.length > 360 ? item.description.substr(0, 360) + '...' : item.description.substr(0, 360)
          } else {
            item.description = item.description.length > 160 ? item.description.substr(0, 160) + '...' : item.description.substr(0, 160)
          }
        })
      }
      this.queryOption[index].total = res.articleCount || 0
      this.queryOption[index].start++
    })
  },
  created() {
  },
  methods: {
    changeNav (index) {
      this.actIndex = index
      if (index === 0) {
        this.hideBgColor = true
      } else {
        this.hideBgColor = false
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.name === 'wonder') {
        console.log(vm)
        console.log(vm.actIndex)
        if (vm.actIndex === 0) {
          vm.hideBgColor = true
        }
      }
      if (to.query.name) {
        const routerName = to.query.name
        switch (routerName) {
        case 'gudukou':
          vm.actIndex = 2
          break
        case 'film':
          vm.actIndex = 1
          break
        case 'sing':
          vm.actIndex = 3
          break
        case 'wlt':
          vm.actIndex = 4
          break
        case 'scenery':
          vm.actIndex = 0
          vm.hideBgColor = true
          break
        }
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.m-custom-page {
  background url("~@/assets/img/wonder_hk/bg-wonder.jpg") center no-repeat
  background-size cover
  >>> .m-com-container {
    width 1320px
    .m-com-center {
      padding 270px 0 140px
      .u-com-title {
        margin 0 auto 110px
        width 426px
        height 146px
        background url("~@/assets/img/wonder_hk/bg-title-wonder.png") no-repeat center
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
    .tabs-content_town, .tabs-content_cinema, .tabs-content_platform {
      .intro-wrapper {
        overflow: hidden
        position: relative
        margin: 0 40px
        .intro-left {
          float: left
          width: 400px
          height: 300px
          position: relative
          overflow: hidden
          img {
            width 100%
          }
          .u-com-video {
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            width 46px
            height 46px
            background url('~@/assets/img/common/icon-video.png') no-repeat center
          }
        }
        .intro-right {
          float: right
          position: absolute
          left: 430px
          top: 0
          .content {
            overflow: hidden
            .txt {
              font-size 14px
              color: #000
              line-height: 24px
            }
          }
        }
      }
    }
    .tabs-content_town {
      .intro-wrapper {
        .intro-left {
          .u-com-video {
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            width 46px
            height 46px
            background url('~@/assets/img/common/icon-video.png') no-repeat center
          }
        }
        .intro-right {
          .content {
            &:before {
              content ''
              display: block
              width: 210px
              height: 45px
              margin-bottom: 15px
              background: url("../assets/img/hkqg/icon-hkqg-small.png") no-repeat
            }
          }
        }
      }
    }
    .tabs-content_town, .tabs-content_cinema {
      .m-com-list {
        margin: 35px 24px
        padding-bottom: 20px
        .m-com-img {
          display: inline-block
          vertical-align: middle
          position: relative
          overflow: hidden
          margin 14px 8px
          width 278px
          height:208px
          .u-com-img {
            -webkit-transition: all .2s ease .1s
            -moz-transition: all .2s ease .1s
            -ms-transition: all .2s ease .1s
            -o-transition: all .2s ease .1s
            transition: all .2s ease .1s
            max-width 100%
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
          .title {
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: 30px
            text-align: center
            font-size 14px
            color: #fff
            z-index 1
            &:after {
              content ''
              position: absolute
              left: 0
              right: 0
              top: 0
              bottom: 0
              background-color: rgba(0, 0, 0, .5)
              z-index -1
            }
          }
        }
      }
    }
    .tabs-content_platform {
      .intro-wrapper {
        .intro-right {
          .content {
            &:before {
              content '望龙台'
              display: inline-block
              height: 45px
              line-height: 45px
              margin-bottom: 15px
              padding: 0 20px
              background-color: #ec5a02
              color: #fff
            }
          }
        }
      }
      .m-com-list {
        margin: 35px 30px
        padding-bottom: 20px
        .m-com-img {
          display: inline-block
          vertical-align: middle
          position: relative
          overflow: hidden
          margin: 14px 10px;
          width: 369px;
          height:284px
          .u-com-img {
            -webkit-transition: all .2s ease .1s
            -moz-transition: all .2s ease .1s
            -ms-transition: all .2s ease .1s
            -o-transition: all .2s ease .1s
            transition: all .2s ease .1s
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
          .title {
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: 30px
            text-align: center
            font-size 14px
            color: #fff
            z-index 1
            &:after {
              content ''
              position: absolute
              left: 0
              right: 0
              top: 0
              bottom: 0
              background-color: rgba(0, 0, 0, .5)
              z-index -1
            }
          }
        }
      }
    }
    .tabs-content_single {
      .intro-wrapper {
        overflow: hidden
        position: relative
        margin: 0 40px
        .intro-left {
          float: left
          width: 400px
          height: 300px
          img {
            max-width 100%
          }
        }
        .intro-right {
          float: right
          position: absolute
          left: 430px
          top: 0
          .content {
            overflow: hidden
            &:before {
              content '黄河大河唱'
              display: inline-block
              height: 45px
              line-height: 45px
              margin-bottom: 15px
              padding: 0 20px
              background-color: #ec5a02
              color: #fff
            }
            .txt {
              font-size 14px
              color: #000
              line-height: 24px
            }
          }
        }
      }
      .list-wrapper {
        padding:0 22px
      }
      .m-com-list {
        display: inline-block
        vertical-align: top
        width:556px
        height:240px
        overflow: hidden
        &:nth-child(even) {
          margin: 16px 18px
        }
        &:nth-child(odd) {
          margin: 16px 18px
        }
        &.item_yellow {
          background-color: #fff6e5
        }
        &.item_blue {
          background-color: #ddf6f3
        }
        .list-left {
          float: left
          width:324px
          overflow: hidden
        }
        .list-right {
          width: 192px
          padding: 25px 20px
          float: left
          .txt-title {
            font-size 18px
            text-align: center
            margin-bottom:12px
          }
          .txt-content {
            font-size 14px
            line-height:28px
            max-height 145px
            overflow: hidden
          }
          .txt-link {
            font-size 14px
            color: #ec5a02
          }
        }
        .m-com-img {
          position: relative
          .u-com-img {
            -webkit-transition: all .2s ease .1s
            -moz-transition: all .2s ease .1s
            -ms-transition: all .2s ease .1s
            -o-transition: all .2s ease .1s
            transition: all .2s ease .1s
            max-width 100%
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
          .title {
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: 30px
            text-align: center
            font-size 14px
            color: #fff
            z-index 1
            &:after {
              content ''
              position: absolute
              left: 0
              right: 0
              top: 0
              bottom: 0
              background-color: rgba(0, 0, 0, .5)
              z-index -1
            }
          }
        }
      }
    }
    .tabs-content_sight {

    }
  }
}

  .wonder-wrapper {
    background: url("../assets/img/hkqg/bg-hkqg.jpg") top center no-repeat;
    .wonder-container {
      width: 1276px;
      margin: 0 auto;
      overflow: hidden
      .tabs-wrapper {
        position: relative
        overflow: hidden
        margin-top: 245px
        margin-bottom: 100px
        &:before {
          content ''
          display: block
          width: 426px
          height: 126px
          margin: 0 auto
          padding-bottom: 60px
          background: url("../assets/img/hkqg/icon-hkqg.png") top center no-repeat
        }
        .tabs-wrapper-inner {
          position: relative
          &:after {
            content ''
            position: absolute
            width: 100%
            height: 100%
            left: 0
            top: 0
            background-color: rgba(255, 255, 255, .8)
            border-radius 16px
          }
          .tabs-header, .tabs-content {
            position: relative
            z-index 1
          }
          .tabs-header {
            ul {
              font-size 0
              text-align: center
              li {
                display: inline-block
                vertical-align: middle
                margin: 20px 10px
                width: 152px
                text-align: center
                .txt {
                  display: block
                  background-color: #fff
                  border-radius 24px
                  font-size 20px
                  padding: 15px 10px
                  color: #000
                }
                &:hover, &.active {
                  .txt {
                    background-color: #ec5a02
                    color: #fff
                  }
                }
              }
            }
          }
          .tabs-content {
            .tabs-content_town {
              .intro-wrapper {
                overflow: hidden
                position: relative
                margin: 0 40px
                .intro-left {
                  float: left
                  width: 400px
                  height: 300px
                  img {
                    max-width 100%
                  }
                }
                .intro-right {
                  float: right
                  position: absolute
                  left: 430px
                  top: 0
                  .content {
                    &:before {
                      content ''
                      display: block
                      width: 210px
                      height: 45px
                      margin-bottom: 15px
                      background: url("../assets/img/hkqg/icon-hkqg-small.png") no-repeat
                    }
                    .txt {
                      font-size 14px
                      color: #000
                      line-height: 24px
                    }
                  }
                }
              }
              .img-lists {
                margin: 35px 24px
                ul {
                  padding-bottom: 20px
                  li {
                    display: inline-block
                    vertical-align: middle
                    position: relative
                    overflow: hidden
                    margin 14px
                    img {
                      -webkit-transition: all .2s ease .1s
                      -moz-transition: all .2s ease .1s
                      -ms-transition: all .2s ease .1s
                      -o-transition: all .2s ease .1s
                      transition: all .2s ease .1s
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
                    .txt {
                      position: absolute
                      left: 0
                      right: 0
                      bottom: 0
                      line-height: 30px
                      text-align: center
                      font-size 14px
                      color: #fff
                      z-index 1
                      &:after {
                        content ''
                        position: absolute
                        left: 0
                        right: 0
                        top: 0
                        bottom: 0
                        background-color: rgba(0, 0, 0, .5)
                        z-index -1
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
