<template>
  <div class="m-com-list">
    <a v-for="(item, index) in listArr" :key="index" :href="item.route" class="m-com-img">
      <img v-if="isImg" :src="item.addr" :class="['u-com-img', imgClass]" alt="" title=""/>
      <span v-else :class="['u-com-img', item.iconClass]"></span>
      <span v-if="hasTitle" class="title">{{ item.text || item.name }}</span>
      <div v-if="hasMask" class="m-com-mask">
        <com-desc v-if="isArticle" :title="item.title" :brief="item.brief" class="m-article m-con-mask"></com-desc>
        <!-- <div v-if="isArticle" class="m-article m-con-mask">
          <h3 class="u-title">{{ item.title }}</h3>
          <div class="m-con">
            <span class="brief">{{ item.brief }}</span>
            <span class="detail">【详情】 </span>
          </div>
        </div> -->
        <div v-if="isCode" class="m-code m-con-mask">
          <img :src="item.codeUrl" class="code" />
          <span class="name">{{ item.name }}</span>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    listArr: {
      type: Array,
      default () {
        return []
      }
    },
    imgClass: {
      type: String,
      default: ''
    },
    isImg: {
      type: Boolean,
      default: true
    },
    iconClass: {
      type: String,
      default: ''
    },
    hasTitle: {
      type: Boolean,
      default: true
    },
    hasMask: {
      type: Boolean,
      default: false
    },
    isArticle: {
      type: Boolean,
      default: false
    },
    isCode: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.m-com-list {
  display flex
  flex-wrap wrap
  .m-com-img {
    position relative
    overflow hidden
    font-size 14px
    color #ffffff
    text-align center
    &:hover .u-com-img {
      transform scale(1.1)
    }
    &:hover .m-com-mask {
      display block
    }
    .u-com-img {
      width 100%
      height 100%
      vertical-align top
      transition all .2s ease
    }
    .title {
      position absolute
      left 0
      right 0
      bottom 0
      height 30px
      line-height 30px
      background rgba(0, 0, 0, .5)
    }
    .m-com-mask {
      display none
      position absolute
      width 100%
      height 100%
      left 0
      top 0
      background rgba(0, 0, 0, .6)
      .m-con-mask {
        display flex
        flex-direction column
        justify-content center
        margin 0 auto
        height 100%
        &.m-article {
          width 265px
          .u-title {
          }
          .m-con {
            .brief {
            }
            .detail {
            }
          }
        }
        &.m-code {
          width 150px
          .code {
            width 150px
            height 150px
          }
          .name {
            margin-top 35px
            font-size 20
          }
        }
      }
    }
  }
}
</style>
