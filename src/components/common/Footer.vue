<template>
  <!--footer-section start-->
  <section class="footer-wrapper">
    <div class="footer-container">
      <div class="footer-top">
        <div class="contact-wrapper">
          <ul>
            <li><span class="txt txt-company">陕西黄河壶口文化旅游发展有限责任公司</span></li>
            <li><span class="txt txt-address">陕西省延安市宜川县壶口乡</span></li>
            <li><span class="txt txt-telephone">0911-4838030</span></li>
          </ul>
        </div>
        <div class="qrcode-wrapper">
          <div class="qrcode-mobile" data-after="手机微官网">
            <img src="@/assets/img/common/weiguan.jpg" alt="二维码" class="img">
          </div>
          <div class="qrcode-wechat" data-after="微信公众号">
            <img src="@/assets/img/common/weixin.jpg" alt="二维码" class="img">
          </div>
          <div class="qrcode-weibo" data-after="微博">
            <img src="@/assets/img/common/weibo.jpg" alt="二维码" class="img">
          </div>
        </div>
      </div>
      <div class="footer-bottom">

        <div class="link-in-wrapper">
          <a href="#/" class="txt">首页</a>
          <a href="#/survey" class="txt">壶口概况</a>
          <a href="#/info" class="txt">壶口资讯</a>
          <a href="#/wonder" class="txt">壶口奇观</a>
          <a href="#/strategy" class="txt">壶口攻略</a>
          <a href="#/custom" class="txt">壶口风情</a>
          <a href="#/maker" class="txt">壶口创客</a>
          <a href="#/contact" class="txt">联系我们</a>
        </div>
        <div class="link-out-wrapper" data-before="友情链接：">
          <a href="//www.ctrip.com/" target="_blank" class="txt">携程网</a>
          <a href="//www.meituan.com/" target="_blank" class="txt">美团网</a>
          <a href="http://www.juntu.com/" target="_blank" class="txt">骏途旅游网</a>
        </div>
        <div class="copyright-wrapper">
          <p class="txt">Copyright©2019 陕西黄河壶口文化旅游发展有限责任公司</p>
        </div>
      </div>
    </div>
    <div class="feature-bar">
      <a href="javascript:;" class="icon-arrow" @click="handleToggle"><i class="el-icon-caret-left"></i></a>
      <div :class="['manage-entry', showFlag ? 'toggle' : '']" data-before="后台管理系统入口:">
        <a href="javascript:;" class="txt">网站后台</a>
        <a href="javascript:;" class="txt">公众号后台</a>
        <a href="javascript:;" class="txt">微博后台</a>
      </div>
    </div>
  </section>
  <!--footer-section end-->
</template>

<script>
export default {
  data() {
    return {
      showFlag: true
    }
  },
  methods: {
    handleToggle() {
      this.showFlag = !this.showFlag
    }
  }
}
</script>

<style lang="stylus" scoped>
  .footer-wrapper {
    background-color: #333;
    color: #fff;
    position: relative
    .footer-container {
      width: 1200px;
      margin: 0 auto;
      padding: 50px 0;
      .footer-top {
        position: relative;
        padding-left:222px
        padding-bottom: 28px
        border-bottom:1px solid #fff
        &:before {
          content ''
          position: absolute
          width:146px
          height:57px
          background: url("~@/assets/img/common/logo-footer.png") no-repeat
          left:0
          top:10px
        }
        &:after {
          content ''
          clear both
          display: table
          width:100%
        }
        .contact-wrapper {
          float: left;
          width: 530px;
          ul {
            li {
              .txt {
                font-size:14px;
                color:#fff;
                display: block;
                padding: 10px 0
                position: relative
                &:before {
                  content ''
                  position: absolute
                  left:-42px
                  top:50%
                }
                &.txt-company {
                  &:before {
                    width:19px
                    height:20px
                    margin-top: -10px
                    background: url("~@/assets/img/common/icon-pubuliu.png") no-repeat
                    -webkit-background-size: 100%
                    background-size: 100%
                  }
                }
                &.txt-address {
                  &:before {
                    width: 16px
                    height: 22px
                    margin-top: -11px
                    background: url("~@/assets/img/common/icon-map.png") no-repeat
                    -webkit-background-size: 100%
                    background-size: 100%
                  }
                }
                &.txt-telephone {
                  &:before {
                    width:17px
                    height:21px
                    margin-top: -10px
                    background: url("~@/assets/img/common/icon-phone.png") no-repeat
                    -webkit-background-size: 100%
                    background-size: 100%
                  }
                }
              }
            }
          }
        }

        .qrcode-wrapper {
          font-size 0
          .qrcode-mobile,
          .qrcode-wechat,
          .qrcode-weibo {
            display: inline-block
            vertical-align: middle
            margin:0 24px
            &:after {
              display: block
              text-align: center
              content attr(data-after)
              font-size:14px;
              color:#fff;
              margin-top: 10px;
            }
            .img {
              width:100px
              height:102px
              display: block
              background-color: #fff
            }
          }
        }
      }
      .footer-bottom {
        overflow: hidden;
        padding: 15px 0;
        .link-in-wrapper, .link-out-wrapper, .copyright-wrapper {
          text-align: center
          margin-bottom:10px
          .txt {
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;
            color: #fff;
          }
        }
        .link-in-wrapper {
          .txt {
            border-left 1px solid #fff
            padding:0 12px
            &:first-child {
              border-left:none
            }
          }
        }
        .link-out-wrapper {
          &:before {
            content attr(data-before)
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;
            color: #fff;
          }
          .txt {
            padding-right: 20px
            &:hover {
              color: #ec5a02
            }
          }
        }
        .copyright-wrapper {
          .txt {

          }
        }
      }
    }
    .feature-bar {
      position: absolute
      right:0
      bottom 40px
      width: 375px
      height:40px
      overflow: hidden
      .icon-arrow {
        position: absolute
        right -13px
        top 4px
        z-index 1
        i {
          color: #fff
          font-size 36px
        }
      }
      .manage-entry {
        background-color: #4d4d4d
        border-radius 20px 0 0 20px
        padding:10px 10px 10px 24px
        position: absolute
        right:0
        width:340px
        -webkit-transition: all .2s ease-in .2s
        -moz-transition: all .2s ease-in .2s
        -ms-transition: all .2s ease-in .2s
        -o-transition: all .2s ease-in .2s
        transition: all .2s ease-in .2s
        &.toggle {
          right: -350px
        }
        &:before {
          content attr(data-before)
          display: inline-block;
          vertical-align: middle;
          font-size: 14px;
          color: #fff;
          margin-right:10px
        }
        .txt {
          display: inline-block;
          vertical-align: middle;
          font-size: 14px;
          margin-right: 10px
          color: #fff;
          &:hover {
            color: #ec5a02
          }
        }
      }
    }
  }
</style>
