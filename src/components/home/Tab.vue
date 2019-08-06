<template>
  <div class="m-tab">
    <nav class="m-nav">
      <a v-for="(item, index) in nav" :key="index" href="javascript:void(0)" :class="{'nav-com': true, 'active': actIndex === index}" @click="handleClick(index)"><span class="text">{{ item.text }}</span></a>
    </nav>
    <ul v-if="arr.length" class="m-content">
      <li v-for="(item, index) in arr" :key="index" class="m-list">
        <div class="m-date">
          <span>{{ item.date }}</span>
          <span class="year">{{ item.year }}</span>
        </div>
        <div class="m-article">
          <h3 class="u-title">{{ item.title }}</h3>
          <div class="m-con">
            <span class="brief">{{ item.brief }}</span>
            <span class="detail">【详情】 </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    nav: {
      type: Array,
      default () {
        return []
      }
    },
    arr: {
      type: Array,
      default () {
        return []
      }
    },
    actIndex: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    console.log(this.arr)
  },
  methods: {
    handleClick (index) {
      this.$emit('changeInfo', index)
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-tab {
  text-align center
  .m-nav {
    display inline-flex
    justify-content space-between
    .nav-com {
      padding 0 15px
      font-size 24px
      color #666666
      .text {
        display inline-block
        padding-bottom 10px
      }
      &.active {
        .text {
          border-bottom 1px solid #ec5a02
        }
      }
    }
  }
  .m-content {
    display flex
    justify-content space-between
    flex-wrap wrap
    padding-top 48px
    .m-list {
      margin-bottom 35px
      display flex
      justify-content space-between
      .m-date {
        width 66px
        height 78px
        padding-right 18px
        margin-right 15px
        border-right 1px solid #999999
        font-size 24px
        color #ec5a02
        span {
          display inline-block
        }
        .year {
          margin-top 21px
          font-size 20px
          color #999999
        }
      }
      .m-article {
        width 440px
        text-align left
        .u-title {
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          font-size 18px
          color #333333
        }
        .m-con {
          padding-top 19px
          line-height 28px
          font-size 14px
          .brief {
            color #99999
          }
          .detail {
            color #ec5a02
          }
        }
      }
    }
  }
}
</style>
