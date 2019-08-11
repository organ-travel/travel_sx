<template>
  <section class="m-contact-page">
    <div class="m-contact-banner"></div>
    <div class="m-contact-list m-contact-wrap">
      <com-column icon-class="icon-tel" content="0911-4838030"></com-column>
      <com-column icon-class="icon-addr" content="陕西省延安市宜川县壶口乡"></com-column>
      <com-column icon-class="icon-email" content="1067072211@qq.com"></com-column>
    </div>
    <div class="m-contact-map m-contact-wrap"></div>
    <div class="m-contact-code m-contact-wrap">
      <com-column content="公共号二维码" img-url="aaa"></com-column>
      <com-column content="公共号二维码" img-url="aaa"></com-column>
      <com-column content="公共号二维码" img-url="aaa"></com-column>
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
      .m-com-column + .m-com-column {
        margin-left 155px
      }
      >>> .m-com-column {
        padding 0 13px
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
    >>> .m-com-column {
      width 270px
      text-align center
      .img {
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
