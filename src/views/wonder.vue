<template>
  <com-wrap class="m-custom-page">
    <com-tab :act-index="actIndex" :nav-arr="wonderNav" @changeNav="changeNav"></com-tab>
    <!--古渡口小镇-->
    <com-transition>
      <gu-du-kou v-if="wonderNav[actIndex].name === 'gudukou'" :wonder="wonder.gudukou"></gu-du-kou>
    </com-transition>
    <!--4D影院-->
    <com-transition>
      <film v-if="wonderNav[actIndex].name === 'film'" :wonder="wonder.film"></film>
    </com-transition>
    <!--黄河大合唱-->
    <com-transition>
      <sing v-if="wonderNav[actIndex].name === 'sing'" :wonder="wonder.sing"></sing>
    </com-transition>
    <!--望龙台-->
    <com-transition>
      <wang-long-tai v-if="wonderNav[actIndex].name === 'wlt'" :wonder="wonder.wlt"></wang-long-tai>
    </com-transition>
    <!--壶口八景-->
    <com-transition>
      <scenery v-if="wonderNav[actIndex].name === 'scenery'" :wonder="wonder.scenery"></scenery>
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

import imgTownVideo from '@/assets/img/hkqg/img-video.jpg'
import imgTown01 from '@/assets/img/hkqg/img-01.jpg'
import imgTown02 from '@/assets/img/hkqg/img-02.jpg'
import imgTown03 from '@/assets/img/hkqg/img-03.jpg'
import imgTown04 from '@/assets/img/hkqg/img-04.jpg'
import imgTown05 from '@/assets/img/hkqg/img-05.jpg'
import imgTown06 from '@/assets/img/hkqg/img-06.jpg'
import imgTown07 from '@/assets/img/hkqg/img-07.jpg'
import imgTown08 from '@/assets/img/hkqg/img-08.jpg'
import imgPlatform from '@/assets/img/hkqg/img-platform.jpg'
export default {
  name: 'Wonder',
  components: {
    ComWrap, GuDuKou, Film, Sing, WangLongTai, Scenery
  },
  data() {
    return {
      actIndex: 0,
      wonderNav: dataset.wonderNav,
      wonder: {
        gudukou: {
          intro: {},
          imgList: []
        },
        film: {
          intro: {},
          imgList: []
        },
        sing: {
          intro: {},
          imgList: []
        },
        wlt: {
          intro: {},
          imgList: []
        },
        scenery: {
          imgList: []
        }
      }
    }
  },
  created() {
    this.getGudukouList()
    this.getFilmList()
    this.getSingList()
    this.getWltList()
    this.getSceneryList()
  },
  methods: {
    changeNav (index) {
      this.actIndex = index
    },
    getGudukouList() {
      this.wonder.gudukou = {
        intro: {
          src: imgTownVideo,
          txt: '黄河古渡口小镇，又名圪针滩古渡口，古称采桑津，位于陕西黄河壶口瀑布南侧6.9公里处，在明清时期古渡小镇繁荣兴盛，曾是黄河两岸繁华的商业码头，店铺林立，艄公聚居，商贾云集，当时有钱庄、当铺、皮店、染房、盐店等商号60余家，与壶口瀑布上游的龙王辿码头同是壶口河船商贸集散地，清人贾遇时曾描述其：“客船星集，如鱼贯之相连，店铺林设，似雁形之不绝。地虽偏小，胜得泾阳三原，形似弹丸，赛过长安八水”。其繁华程度可想而知。\n'
        },
        imgList: [{
          addr: imgTown01,
          text: '古渡口小镇'
        }, {
          addr: imgTown02,
          text: '古渡口小镇'
        }, {
          addr: imgTown03,
          text: '古渡口小镇'
        }, {
          addr: imgTown04,
          text: '古渡口小镇'
        }, {
          addr: imgTown05,
          text: '古渡口小镇'
        }, {
          addr: imgTown06,
          text: '古渡口小镇'
        }, {
          addr: imgTown07,
          text: '古渡口小镇'
        }, {
          addr: imgTown08,
          text: '古渡口小镇'
        }]
      }
    },
    getFilmList() {
      this.wonder.film = {
        intro: {
          src: imgTownVideo,
          txt: '4D影院，又名圪针滩古渡口，古称采桑津，位于陕西黄河壶口瀑布南侧6.9公里处，在明清时期古渡小镇繁荣兴盛，曾是黄河两岸繁华的商业码头，店铺林立，艄公聚居，商贾云集，当时有钱庄、当铺、皮店、染房、盐店等商号60余家，与壶口瀑布上游的龙王辿码头同是壶口河船商贸集散地，清人贾遇时曾描述其：“客船星集，如鱼贯之相连，店铺林设，似雁形之不绝。地虽偏小，胜得泾阳三原，形似弹丸，赛过长安八水”。其繁华程度可想而知。\n'
        },
        imgList: [{
          addr: imgTown01,
          text: '4D影院'
        }, {
          addr: imgTown02,
          text: '4D影院'
        }, {
          addr: imgTown03,
          text: '4D影院'
        }, {
          addr: imgTown04,
          text: '4D影院'
        }, {
          addr: imgTown05,
          text: '4D影院'
        }, {
          addr: imgTown06,
          text: '4D影院'
        }, {
          addr: imgTown07,
          text: '4D影院'
        }, {
          addr: imgTown08,
          text: '4D影院'
        }]
      }
    },
    getWltList() {
      this.wonder.wlt = {
        intro: {
          src: imgTownVideo,
          txt: '黄河古渡口小镇，又名圪针滩古渡口，古称采桑津，位于陕西黄河壶口瀑布南侧6.9公里处，在明清时期古渡小镇繁荣兴盛，曾是黄河两岸繁华的商业码头，店铺林立，艄公聚居，商贾云集，当时有钱庄、当铺、皮店、染房、盐店等商号60余家，与壶口瀑布上游的龙王辿码头同是壶口河船商贸集散地，清人贾遇时曾描述其：“客船星集，如鱼贯之相连，店铺林设，似雁形之不绝。地虽偏小，胜得泾阳三原，形似弹丸，赛过长安八水”。其繁华程度可想而知。\n' +
          '我们现在看到的黄河古渡口小镇是壶口文旅公司2017年在原圪针滩古渡口基础上恢复修葺而成的，古镇以陕北特色窑洞建筑高低错落布局，总占地面积70亩，窑洞建筑面积1.4万平米。其中一期占地面积37亩，窑洞建筑面积6800平米，打造了156孔陕北台地窑洞群风格为主体的小镇物理商业文化体验空间，汇聚了陕西本土特色餐饮、精品民宿、特色纪念品、民俗体验等服务。吸引了众多游客前来光顾体验，已成为壶口景区的重要游览景点，同时可为广大游客提供当地特色餐饮、陕北小吃、网红摔碗酒、精品民宿、特色纪念品、民俗体验等服务。\n'
        },
        imgList: [{
          addr: imgPlatform,
          text: '望龙台'
        }, {
          addr: imgPlatform,
          text: '望龙台'
        }, {
          addr: imgPlatform,
          text: '望龙台'
        }, {
          addr: imgPlatform,
          text: '望龙台'
        }, {
          addr: imgPlatform,
          text: '望龙台'
        }, {
          addr: imgPlatform,
          text: '望龙台'
        }]
      }
    },
    getSingList() {
      this.wonder.sing = {
        intro: {
          src: imgTownVideo,
          txt: '4D影院，又名圪针滩古渡口，古称采桑津，位于陕西黄河壶口瀑布南侧6.9公里处，在明清时期古渡小镇繁荣兴盛，曾是黄河两岸繁华的商业码头，店铺林立，艄公聚居，商贾云集，当时有钱庄、当铺、皮店、染房、盐店等商号60余家，与壶口瀑布上游的龙王辿码头同是壶口河船商贸集散地，清人贾遇时曾描述其：“客船星集，如鱼贯之相连，店铺林设，似雁形之不绝。地虽偏小，胜得泾阳三原，形似弹丸，赛过长安八水”。其繁华程度可想而知。\n'
        },
        imgList: [{
          addr: imgTown01,
          title: '第一幕《朔方》',
          content: '演员游客融为一体， 以民俗情景表演唢呐快闪的形式演绎东方红， 使游客身临其境， 同唱响经典名曲《东方红》...'
        }, {
          addr: imgTown01,
          title: '第一幕《朔方》',
          content: '演员游客融为一体， 以民俗情景表演唢呐快闪的形式演绎东方红， 使游客身临其境， 同唱响经典名曲《东方红》...'
        }, {
          addr: imgTown01,
          title: '第一幕《朔方》',
          content: '演员游客融为一体， 以民俗情景表演唢呐快闪的形式演绎东方红， 使游客身临其境， 同唱响经典名曲《东方红》...'
        }, {
          addr: imgTown01,
          title: '第一幕《朔方》',
          content: '演员游客融为一体， 以民俗情景表演唢呐快闪的形式演绎东方红， 使游客身临其境， 同唱响经典名曲《东方红》...'
        }, {
          addr: imgTown01,
          title: '第一幕《朔方》',
          content: '演员游客融为一体， 以民俗情景表演唢呐快闪的形式演绎东方红， 使游客身临其境， 同唱响经典名曲《东方红》...'
        }, {
          addr: imgTown01,
          title: '第一幕《朔方》',
          content: '演员游客融为一体， 以民俗情景表演唢呐快闪的形式演绎东方红， 使游客身临其境， 同唱响经典名曲《东方红》...'
        }]
      }
    },
    getSceneryList() {
      this.wonder.scenery = {
        imgList: [{
          addr: imgTown01,
          title: '第一幕《朔方》',
          content: '演员游客融为一体， 以民俗情景表演唢呐快闪的形式演绎东方红， 使游客身临其境， 同唱响经典名曲《东方红》...'
        }, {
          addr: imgTown01,
          title: '第一幕《朔方》',
          content: '演员游客融为一体， 以民俗情景表演唢呐快闪的形式演绎东方红， 使游客身临其境， 同唱响经典名曲《东方红》...'
        }, {
          addr: imgTown01,
          title: '第一幕《朔方》',
          content: '演员游客融为一体， 以民俗情景表演唢呐快闪的形式演绎东方红， 使游客身临其境， 同唱响经典名曲《东方红》...'
        }, {
          addr: imgTown01,
          title: '第一幕《朔方》',
          content: '演员游客融为一体， 以民俗情景表演唢呐快闪的形式演绎东方红， 使游客身临其境， 同唱响经典名曲《东方红》...'
        }, {
          addr: imgTown01,
          title: '第一幕《朔方》',
          content: '演员游客融为一体， 以民俗情景表演唢呐快闪的形式演绎东方红， 使游客身临其境， 同唱响经典名曲《东方红》...'
        }, {
          addr: imgTown01,
          title: '第一幕《朔方》',
          content: '演员游客融为一体， 以民俗情景表演唢呐快闪的形式演绎东方红， 使游客身临其境， 同唱响经典名曲《东方红》...'
        }, {
          addr: imgTown01,
          title: '第一幕《朔方》',
          content: '演员游客融为一体， 以民俗情景表演唢呐快闪的形式演绎东方红， 使游客身临其境， 同唱响经典名曲《东方红》...'
        }, {
          addr: imgTown01,
          title: '第一幕《朔方》',
          content: '演员游客融为一体， 以民俗情景表演唢呐快闪的形式演绎东方红， 使游客身临其境， 同唱响经典名曲《东方红》...'
        }]
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.query.name) {
        const routerName = to.query.name
        switch (routerName) {
        case 'gudukou':
          vm.actIndex = 0
          break
        case 'film':
          vm.actIndex = 1
          break
        case 'sing':
          vm.actIndex = 2
          break
        case 'wlt':
          vm.actIndex = 3
          break
        case 'scenery':
          vm.actIndex = 4
          break
        }
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.m-custom-page {
  background url("~@/assets/img/custom_hk/bg-custom.jpg") center -118px no-repeat
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
    .tabs-content_town, .tabs-content_cinema, .tabs-content_platform {
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
    .tabs-content_platform {
      .m-com-list {
        margin: 35px 32px
        padding-bottom: 20px
        .m-com-img {
          display: inline-block
          vertical-align: middle
          position: relative
          overflow: hidden
          margin 14px 4px
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
