<template>
  <section class="m-header">
    <header class="m-wrap clearfix">
      <a href="#/" class="m-title">
        <span class="u-logo"></span>
        <span class="u-text">黄河壶口瀑布</span>
      </a>
      <div class="m-search">
        <input v-model="search" placeholder="请输入搜索内容" type="text" @keyup.enter="handleSearch"/>
        <span class="u-search" @click="handleSearch"></span>
      </div>
      <div class="m-other">
        <nav class="m-lang">
          <a href="">中文</a>
          <a href="">English</a>
          <a href="">한국어</a>
          <a href="">にほんご</a>
        </nav>
        <span class="u-tel"></span>
      </div>
    </header>
  </section>
</template>
<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  mounted () {
  },
  methods: {
    handleSearch () {
      const menuData = [].concat(this.getMenuData) || []
      let isSearch = false
      for (let i = 0; i < menuData.length; i++) {
        if (menuData[i].name.indexOf(this.search) > -1) {
          window.location.href = menuData[i].type
          isSearch = true
          break
        } else {
          for (let m = 0; m < menuData[i].children.length; m++) {
            if (menuData[i].children[m].name.indexOf(this.search) > -1) {
              window.location.href = menuData[i].type + '?name=' + menuData[i].children[m].type
              isSearch = true
              break
            }
          }
          const String = '票价信息'
          if (String.indexOf(this.search) > -1) {
            isSearch = true
            window.location.href = '#/notice?name=price'
          }
          const String1 = '重要通知'
          if (String1.indexOf(this.search) > -1) {
            isSearch = true
            window.location.href = '#/notice?name=notice'
          }
          const String2 = '在线购票'
          if (String2.indexOf(this.search) > -1) {
            isSearch = true
            window.location.href = '#/notice?name=perchase'
          }
          const String3 = '永远跟党走'
          if (String3.indexOf(this.search) > -1) {
            isSearch = true
            window.location.href = '#/pictures?id=749'
          }
        }
      }
      if (isSearch === false) window.$alert('暂无匹配数据')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .m-header {
    width 100%
    background #333333
    .m-wrap {
      margin 0 auto
      padding 26px 0
      width 1199px
      height 66px
      font-size 18px
      .m-title {
        float left
        height 100%
        .u-logo {
          padding-right 11px
          width 146px
          height 57px
          display inline-block
          background url('~@/assets/img/logo.png') no-repeat left center
          vertical-align bottom
        }
        .u-text {
          text-align left
          color #ffffff
          vertical-align bottom
        }
      }
      .m-search {
        float left
        margin 20px 0 0 115px
        width 341px
        height 46px
        border-radius 46px
        text-align left
        input {
          padding 0 18px
          width 235px
          height 100%
          vertical-align bottom
          border-top-left-radius 23px
          border-bottom-left-radius 23px
          font-size 16px
          color #999
        }
        .u-search {
          display inline-block
          width 70px
          height 100%
          border-top-right-radius 23px
          border-bottom-right-radius 23px
          vertical-align bottom
          background #ec5a02 url('~@/assets/img/search.png') no-repeat center
          background-size 25px 25px
        }
      }
      .m-other {
        float right
        .m-lang {
          line-height 32px
          a {
            padding 0 10px
            color #ffffff
            font-size 16px
          }
          a + a {
            border-left 1px solid #ffffff
          }
        }
        .u-tel {
          display inline-block
          width 264px
          height 31px
          background url('~@/assets/img/telephone.png') no-repeat left center
        }
      }
    }
  }
</style>
