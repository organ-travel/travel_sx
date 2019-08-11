<template>
  <com-wrap class="m-custom-page">
    <com-tab :act-index="actIndex" :nav-arr="wonderNav" @changeNav="changeNav"></com-tab>
    <!--古渡口小镇-->
    <com-transition>
      <div v-if="wonderNav[actIndex].name == 'town'" class="tabs-content_town">
        <div class="intro-wrapper">
          <div class="intro-left">
            <a href="javascript:;"><img :src=" wonder.town.intro.src " alt=""></a>
          </div>
          <div class="intro-right">
            <div class="content">
              <p class="txt">{{ wonder.town.intro.txt }}</p>
            </div>
          </div>
        </div>
        <com-list :list-arr="wonder.town.imgList"></com-list>
      </div>
    </com-transition>
    <!--4D影院-->
    <com-transition>
      <div v-if="wonderNav[actIndex].name == 'cinema'" class="tabs-content_cinema">
        <div class="intro-wrapper">
          <div class="intro-left">
            <a href="javascript:;"><img :src=" wonder.cinema.intro.src " alt=""></a>
          </div>
          <div class="intro-right">
            <div class="content">
              <p class="txt">{{ wonder.cinema.intro.txt }}</p>
            </div>
          </div>
        </div>
        <com-list :list-arr="wonder.cinema.imgList"></com-list>
      </div>
    </com-transition>
    <!--黄河大合唱-->
    <com-transition>
      <div v-if="wonderNav[actIndex].name == 'single'" class="tabs-content_single">
        <div class="intro-wrapper">
          <div class="intro-left">
            <a href="javascript:;"><img :src=" wonder.single.intro.src " alt=""></a>
          </div>
          <div class="intro-right">
            <div class="content">
              <p class="txt">{{ wonder.single.intro.txt }}</p>
            </div>
          </div>
        </div>
        <single :wonder="wonder" @getSingleList="getSingleList"></single>
      </div>
    </com-transition>
    <!--望龙台-->
    <com-transition>
      <div v-if="wonderNav[actIndex].name == 'platform'" class="tabs-content_platform">
        <div class="intro-wrapper">
          <div class="intro-left">
            <a href="javascript:;"><img :src=" wonder.platform.intro.src " alt=""></a>
          </div>
          <div class="intro-right">
            <div class="content">
              <p class="txt">{{ wonder.platform.intro.txt }}</p>
            </div>
          </div>
        </div>
        <com-list :list-arr="wonder.platform.imgList"></com-list>
      </div>
    </com-transition>
    <!--壶口八景-->
    <com-transition>
      <div v-if="wonderNav[actIndex].name == 'sight'" class="tabs-content_sight">
        <sight :wonder="wonder" @getSightList="getSightList"></sight>
      </div>
    </com-transition>
  </com-wrap>
</template>
<script>
import dataset from '@/config/dataset'
import ComWrap from '@/components/common/ComWrap.vue'
import ComList from '@/components/common/ComList.vue'
import Single from '@/components/wonder/Single.vue'
import Sight from '@/components/wonder/Sight.vue'
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
    ComWrap, ComList, Single, Sight
  },
  data() {
    return {
      actIndex: 0,
      wonderNav: dataset.wonderNav,
      wonder: {
        town: {
          intro: {
            src: '../../assets/img/hkqg/img-video.jpg',
            txt: '黄河古渡口小镇，又名圪针滩古渡口，古称采桑津，位于陕西黄河壶口瀑布南侧6.9公里处，在明清时期古渡小镇繁荣兴盛，曾是黄河两岸繁华的商业码头，店铺林立，艄公聚居，商贾云集，当时有钱庄、当铺、皮店、染房、盐店等商号60余家，与壶口瀑布上游的龙王辿码头同是壶口河船商贸集散地，清人贾遇时曾描述其：“客船星集，如鱼贯之相连，店铺林设，似雁形之不绝。地虽偏小，胜得泾阳三原，形似弹丸，赛过长安八水”。其繁华程度可想而知。\n'
          },
          imgList: []
        },
        cinema: {
          intro: {
            src: '../../assets/img/hkqg/img-video.jpg',
            txt: '4D影院，又名圪针滩古渡口，古称采桑津，位于陕西黄河壶口瀑布南侧6.9公里处，在明清时期古渡小镇繁荣兴盛，曾是黄河两岸繁华的商业码头，店铺林立，艄公聚居，商贾云集，当时有钱庄、当铺、皮店、染房、盐店等商号60余家，与壶口瀑布上游的龙王辿码头同是壶口河船商贸集散地，清人贾遇时曾描述其：“客船星集，如鱼贯之相连，店铺林设，似雁形之不绝。地虽偏小，胜得泾阳三原，形似弹丸，赛过长安八水”。其繁华程度可想而知。\n'
          },
          imgList: []
        },
        single: {
          intro: {
            src: '../../assets/img/hkqg/img-video.jpg',
            txt: '4D影院，又名圪针滩古渡口，古称采桑津，位于陕西黄河壶口瀑布南侧6.9公里处，在明清时期古渡小镇繁荣兴盛，曾是黄河两岸繁华的商业码头，店铺林立，艄公聚居，商贾云集，当时有钱庄、当铺、皮店、染房、盐店等商号60余家，与壶口瀑布上游的龙王辿码头同是壶口河船商贸集散地，清人贾遇时曾描述其：“客船星集，如鱼贯之相连，店铺林设，似雁形之不绝。地虽偏小，胜得泾阳三原，形似弹丸，赛过长安八水”。其繁华程度可想而知。\n'
          },
          imgList: []
        },
        platform: {
          intro: {
            src: '../../assets/img/hkqg/img-video.jpg',
            txt: '4D影院，又名圪针滩古渡口，古称采桑津，位于陕西黄河壶口瀑布南侧6.9公里处，在明清时期古渡小镇繁荣兴盛，曾是黄河两岸繁华的商业码头，店铺林立，艄公聚居，商贾云集，当时有钱庄、当铺、皮店、染房、盐店等商号60余家，与壶口瀑布上游的龙王辿码头同是壶口河船商贸集散地，清人贾遇时曾描述其：“客船星集，如鱼贯之相连，店铺林设，似雁形之不绝。地虽偏小，胜得泾阳三原，形似弹丸，赛过长安八水”。其繁华程度可想而知。\n'
          },
          imgList: []
        },
        sight: {
          imgList: []
        }
      }
    }
  },
  created() {
    this.getTownList()
    this.getCinemaList()
    this.getSingleList()
    this.getPlatformList()
    this.getSightList()
  },
  methods: {
    changeNav (index) {
      this.actIndex = index
    },
    getTownList() {
      this.wonder.town = {
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
    getCinemaList() {
      this.wonder.cinema = {
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
    getPlatformList() {
      this.wonder.platform = {
        intro: {
          src: imgTownVideo,
          txt: '望龙台，又名圪针滩古渡口，古称采桑津，位于陕西黄河壶口瀑布南侧6.9公里处，在明清时期古渡小镇繁荣兴盛，曾是黄河两岸繁华的商业码头，店铺林立，艄公聚居，商贾云集，当时有钱庄、当铺、皮店、染房、盐店等商号60余家，与壶口瀑布上游的龙王辿码头同是壶口河船商贸集散地，清人贾遇时曾描述其：“客船星集，如鱼贯之相连，店铺林设，似雁形之不绝。地虽偏小，胜得泾阳三原，形似弹丸，赛过长安八水”。其繁华程度可想而知。\n'
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
    getSingleList() {
      this.wonder.single = {
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
    getSightList() {
      this.wonder.sight = {
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
