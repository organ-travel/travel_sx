<template>
  <div>
    <div class="m-com-list">
      <a v-for="(item, index) in listArr" :key="index" :href="'#/infoDetail?id=' + item.id" target="_blank" class="m-com-img">
        <img v-if="isImg" :src="item.picture_url" :class="['u-com-img', imgClass]" alt="" title=""/>
        <span v-else :class="['u-com-img', item.iconClass]"></span>
        <a v-if="item.is_video === 1" :href="'#/infoDetail?id=' + item.id" target="_blank" class="u-com-video"></a>
        <span v-if="hasTitle" class="title">{{ item.title || item.name }}</span>
        <div v-if="hasMask" class="m-com-mask">
          <com-desc v-if="isArticle" :title="item.title" :brief="item.brief" class="m-article"></com-desc>
          <com-column v-if="isCode" :img-url="item.codeUrl" :content="item.name" class="m-code"></com-column>
        </div>
      </a>
    </div>
    <el-pagination
      v-if="listArr.length > 0"
      layout="prev, pager, next"
      :total="listArr.length"
      @current-change="handleCurrentChange">
    </el-pagination>
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
    isVideo: {
      type: Boolean,
      default: false
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
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
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
    .u-com-video {
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 46px
      height 46px
      background url('~@/assets/img/common/icon-video.png') no-repeat center
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
      >>> .m-com-column {
        height 100%
        &.m-article {
          .u-title {
            // width 265px
          }
          .m-con {
            // width 265px
            .brief {
            }
            .detail {
            }
          }
        }
        &.m-code {
          .img {
            width 150px
            height 150px
          }
          .text {
            margin-top 35px
            font-size 20
          }
        }
      }
    }
  }
}
</style>
