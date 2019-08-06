<template>
  <section class="wonder-wrapper">
    <section class="wonder-container">
      <section class="tabs-wrapper">
        <section class="tabs-wrapper-inner">
          <section class="tabs-header">
            <ul>
              <li><a href="javascript:;" class="txt">古渡口小镇</a></li>
              <li><a href="javascript:;" class="txt">4D影院</a></li>
              <li><a href="javascript:;" class="txt">黄河大合唱</a></li>
              <li><a href="javascript:;" class="txt">望龙台</a></li>
              <li><a href="javascript:;" class="txt">壶口八景</a></li>
            </ul>
          </section>
          <section class="tabs-content">
            <section class="tabs-content_town">
              <div class="intro-wrapper">
                <div class="intro-left">
                  <a href="javascript:;"><img src="../assets/img/hkqg/img-video.jpg" alt=""></a>
                </div>
                <div class="intro-right">
                  <div class="content">
                    <p class="txt">
                      黄河古渡口小镇，又名圪针滩古渡口，古称采桑津，位于陕西黄河壶口瀑布南侧6.9公里处，在明清时期古渡小镇繁荣兴盛，曾是黄河两岸繁华的商业码头，店铺林立，艄公聚居，商贾云集，当时有钱庄、当铺、皮店、染房、盐店等商号60余家，与壶口瀑布上游的龙王辿码头同是壶口河船商贸集散地，清人贾遇时曾描述其：“客船星集，如鱼贯之相连，店铺林设，似雁形之不绝。地虽偏小，胜得泾阳三原，形似弹丸，赛过长安八水”。其繁华程度可想而知。
                    </p>
                    <p class="txt">
                      我们现在看到的黄河古渡口小镇是壶口文旅公司2017年在原圪针滩古渡口基础上恢复修葺而成的，古镇以陕北特色窑洞建筑高低错落布局，总占地面积70亩，窑洞建筑面积1.4万平米。其中一期占地面积37亩，窑洞建筑面积6800平米，打造了156孔陕北台地窑洞群风格为主体的小镇物理商业文化体验空间，汇聚了陕西本土特色餐饮、精品民宿、特色纪念品、民俗体验等服务。吸引了众多游客前来光顾体验，已成为壶口景区的重要游览景点，同时可为广大游客提供当地特色餐饮、陕北小吃、网红摔碗酒、精品民宿、特色纪念品、民俗体验等服务。
                    </p>
                  </div>
                </div>
              </div>
              <div class="img-lists">
                <ul>
                  <li>
                    <a href="javascript:;"><img src="../assets/img/hkqg/img-01.jpg" alt=""></a>
                    <span class="txt">古渡口小镇</span>
                  </li>
                  <li>
                    <a href="javascript:;"><img src="../assets/img/hkqg/img-02.jpg" alt=""></a>
                    <span class="txt">古渡口小镇</span>
                  </li>
                  <li>
                    <a href="javascript:;"><img src="../assets/img/hkqg/img-03.jpg" alt=""></a>
                    <span class="txt">古渡口小镇</span>
                  </li>
                  <li>
                    <a href="javascript:;"><img src="../assets/img/hkqg/img-04.jpg" alt=""></a>
                    <span class="txt">古渡口小镇</span>
                  </li>
                  <li>
                    <a href="javascript:;"><img src="../assets/img/hkqg/img-05.jpg" alt=""></a>
                    <span class="txt">古渡口小镇</span>
                  </li>
                  <li>
                    <a href="javascript:;"><img src="../assets/img/hkqg/img-06.jpg" alt=""></a>
                    <span class="txt">古渡口小镇</span>
                  </li>
                  <li>
                    <a href="javascript:;"><img src="../assets/img/hkqg/img-07.jpg" alt=""></a>
                    <span class="txt">古渡口小镇</span>
                  </li>
                  <li>
                    <a href="javascript:;"><img src="../assets/img/hkqg/img-08.jpg" alt=""></a>
                    <span class="txt">古渡口小镇</span>
                  </li>
                </ul>
              </div>
            </section>
            <section class="tabs-content_cinema">

            </section>
            <section class="tabs-content_single">

            </section>
            <section class="tabs-content_platform">

            </section>
            <section class="tabs-content_sight">

            </section>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>
<script>
export default {
  name: 'Wonder'
}
</script>

<style lang="stylus" scoped>
  .wonder-wrapper {
    background: url("../assets/img/hkqg/bg-hkqg.jpg") top center no-repeat;
    .wonder-container {
      width: 1276px;
      margin: 0 auto;
      overflow: hidden
      .tabs-wrapper {
        position: relative
        overflow: hidden
        margin-top:245px
        margin-bottom:100px
        &:before {
          content ''
          display: block
          width:426px
          height:126px
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
            left:0
            top:0
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
                margin:20px 10px
                width:152px
                text-align: center
                .txt {
                  display: block
                  background-color: #fff
                  border-radius 24px
                  font-size 20px
                  padding:15px 10px
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
                margin:0 40px
                .intro-left {
                  float: left
                  width:400px
                  height:300px
                  img {
                    max-width 100%
                  }
                }
                .intro-right {
                  float: right
                  position: absolute
                  left:430px
                  top:0
                  .content {
                    &:before {
                      content ''
                      display: block
                      width:210px
                      height:45px
                      margin-bottom: 15px
                      background: url("../assets/img/hkqg/icon-hkqg-small.png") no-repeat
                    }
                    .txt {
                      font-size 14px
                      color: #000
                      line-height:24px
                    }
                  }
                }
              }
              .img-lists {
                margin:35px 24px
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
                      left:0
                      right:0
                      bottom: 0
                      line-height:30px
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
                        background-color: rgba(0,0,0,.5)
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
