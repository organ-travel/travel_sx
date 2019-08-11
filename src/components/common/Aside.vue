<template>
    <div class="alide-wrapper">
      <div class="alide-item wechat-wrapper">
        <a href="javascript:;" class="txt"><i class="fa fa-wechat"></i></a>
        <div class="img-wrapper" data-after="请扫描微信公众号">
          <a href="javascript:;"><img src="../../assets/img/wechat-qrcode.jpg" alt="" class="img"></a>
        </div>
      </div>
      <div class="alide-item comment-wrapper">
        <a href="javascript:;" class="txt"><i class="fa fa-commenting-o"></i></a>
        <div class="form-wrapper" data-before="留言咨询">
          <form action="">
            <div class="input-group" data-before="姓名：">
              <input type="text" class="form-control">
            </div>
            <div class="input-group" data-before="电话：">
              <input type="text" class="form-control">
            </div>
            <div class="input-group" data-before="留言：">
              <textarea id="" name="" cols="30" rows="8" class="form-control"></textarea>
            </div>
            <div class="btn-group">
              <button class="btn-submit">提交</button>
            </div>
          </form>
        </div>
      </div>
      <div class="alide-item customer-service-wrapper">
        <a href="javascript:;" class="txt"><i class="fa fa-user-o"></i></a>
        <div class="contact-wrapper" data-before="联系客服">
          <span class="txt-telephone">0911-4838030</span>
          <span class="txt-contact">在线客服</span>
        </div>
      </div>
      <div class="alide-item backtop-wrapper">
        <a href="javascript:;" class="txt"><i class="fa fa-arrow-up"></i></a>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  .alide-wrapper {
    position: fixed
    right: 0
    top: 50%
    margin-top:-102px
    z-index 1111
    .alide-item {
      position: relative
      margin-bottom: 2px
      width: 50px
      .txt {
        display: flex
        width: 50px
        height: 50px
        justify-content center
        align-content center
        background-color: #999
        .fa {
          font-size 24px
          color: #fff
          padding-top: 12px
        }
      }
      .img-wrapper, .form-wrapper, .contact-wrapper {
        display: none
        position: absolute
        top: 0
        right: 52px
      }
      .img-wrapper {
        &:before {
          content ''
          position: absolute
          border 5px solid transparent
          border-left-color #fff
          right: -10px;
        }
      }
      .form-wrapper, .contact-wrapper {
        &:after {
          content ''
          position: absolute
          border 5px solid transparent
          border-left-color #fff
          right: -10px;
        }
      }
      .form-wrapper {
        &:after {
          top 70px
        }
      }
      .contact-wrapper {
        &:after {
          top 20px
        }
      }
      &:hover {
        .txt {
          background-color: #ec5a02
        }
      }
      &.wechat-wrapper {
        .img-wrapper {
          width:158px
          background-color: #fff
          &:before {
            top: 20px;
          }
          &:after {
            content attr(data-after)
            display: block
            font-size 16px
            color: #290600
            margin-bottom: 10px
            text-align: center
          }
          .img {
            max-width 100%
          }
        }
        &:hover {
          .img-wrapper {
            display: block
          }
        }
      }
      &.comment-wrapper {
        .form-wrapper {
          position: absolute
          width: 348px
          height: 362px
          background-color: #fff
          right: 52px
          top: -52px
          padding:20px
          &:before {
            content attr(data-before)
            display: block
            font-size 20px
            color: #290600
            margin-bottom:20px
          }
          .input-group {
            border 1px solid #818181
            border-radius 4px
            padding:7px 10px 6px
            margin-bottom:10px
            &:before {
              content attr(data-before)
              display: inline-block
              vertical-align: top
              font-size 16px
              color: #290600
              line-height: 24px;
            }
            .form-control {
              padding:5px
              width:256px
              border: none;
              resize: none;
              font-family: "Microsoft YaHei";
            }
          }
          .btn-group {
            .btn-submit {
              background-color: #ec5a02
              color: #fff
              border none
              display: block
              width: 100%
              line-height 40px
              border-radius 4px
              cursor pointer
              &:hover {
                opacity .95
              }
              &:focus {
                outline none
              }
            }
          }
        }
        &:hover {
          .form-wrapper {
            display: block
          }
        }
      }
      &.customer-service-wrapper {
        .contact-wrapper {
          width:150px
          height:102px
          background-color: #fff
          top:0
          right:52px
          position: absolute
          padding-top:15px
          padding-bottom:5px
          &:before {
            content attr(data-before)
            display: block
            text-align: center
          }
          .txt-telephone {
            display: block
            text-align: center
            line-height: 40px
            font-size 18px
            color: #ec5a02
            font-weight: bold
            border-bottom:1px solid #ec5a02
          }
          .txt-contact {
            color: #290600
            display: block
            font-size 16px
            padding-top: 15px
            text-align: center
          }
        }
        &:hover {
          .contact-wrapper {
            display: block
          }
        }
      }
    }
  }
</style>
