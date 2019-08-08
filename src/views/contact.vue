<template>
  <section class="m-contact-page">
    <div class="m-contact-banner"></div>
    <div class="m-contact-list m-contact-wrap">
      <div class="contact-list">
        <span class="icon icon-tel"></span>
        <span class="text">0911-4838030</span>
      </div>
      <div class="contact-list">
        <span class="icon icon-addr"></span>
        <span class="text">陕西省延安市宜川县壶口乡</span>
      </div>
      <div class="contact-list">
        <span class="icon icon-email"></span>
        <span class="text">1067072211@qq.com</span>
      </div>
    </div>
    <div class="m-contact-map m-contact-wrap"></div>
    <div class="m-contact-code m-contact-wrap">
      <div class="contact-list">
        <img src="" class="u-img"/>
        <span class="text">公共号二维码</span>
      </div>
      <div class="contact-list">
        <img src="" class="u-img"/>
        <span class="text">公共号二维码</span>
      </div>
      <div class="contact-list">
        <img src="" class="u-img"/>
        <span class="text">公共号二维码</span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Contact',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.m-contact-page {
  position relative
  .m-contact-banner {
    margin-top -118px
    width 100%
    height 648px
    background url('~@/assets/img/contact_hk/banner-contact.jpg') no-repeat center
  }
  .m-contact-wrap {
    margin 0 auto
    width 1199px
    &.m-contact-list {
      padding 55px 0
      display flex
      justify-content center
      .contact-list + .contact-list {
        margin-left 155px
      }
      .contact-list {
        padding 0 13px
        display flex
        flex-direction column
        justify-content center
        align-items center
        width 138px
        height 164px
        border-radius 50%
        border 1px solid #cccccc
        text-align center
        .icon-tel {
          margin-bottom 30px
          width 24px
          height 29px
          background url('~@/assets/img/contact_hk/icon-tel.png') no-repeat
        }
        .icon-addr {
          margin-bottom 15px
          width 18px
          height 28px
          background url('~@/assets/img/contact_hk/icon-addr.png') no-repeat
        }
        .icon-email {
          margin-bottom 23px
          width 25px
          height 18px
          background url('~@/assets/img/contact_hk/icon-email.png') no-repeat
        }
        .text {
          width 100%
          word-wrap break-word
        }
      }
    }
    &.m-contact-map {
      height 540px
    }
  }
  .m-contact-code {
    display flex
    justify-content center
    width 100%
    height 215px
    background #f2f2f2
    .contact-list {
      display flex
      flex-direction column
      justify-content center
      align-items center
      width 270px
      text-align center
      .u-img {
        width 110px
        height 110px
      }
      .text {
        margin-top 15px
        width 100%
        word-wrap break-word
      }
    }
  }
}
</style>
