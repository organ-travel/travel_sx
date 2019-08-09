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
        <com-desc :title="item.title" :brief="item.brief" class="m-article"></com-desc>
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
        >>> .u-title {
          color #333333
        }
        >>> .m-con {
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
