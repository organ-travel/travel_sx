<template>
  <div v-if="articleTotal" class="m-com-article" :ides="articleTotal">
    <div v-for="(item, index) in arr" :key="index" class="m-article-list">
      <a href="javascript:void(0)" class="clearfix">
        <img v-if="item.imgUrl" :src="item.imgUrl" class="u-img"/>
        <div class="m-article-con">
          <h3 class="u-title">{{ item.title }}</h3>
          <div v-if="item.description" class="m-con">
            {{ item.description }}
          </div>
        </div>
      </a>
      <span v-if="item.create_time && !hasDownload" class="u-date">{{ item.create_time | transformDate }}</span>
      <a v-if="hasDetail" class="u-detail" href="javascript:;" @click="handleJump(item)">查看详情</a>
      <a v-if="hasDownload" class="u-download" href="javascript:;" @click="handleJump(item)">下载</a>
      <!--<a v-if="hasDetail" class="u-detail" :href="'#/infoDetail?id=' + item.id" target="_blank" @click="handleJump(item)">查看详情</a>-->
      <!--<a v-if="hasDownload" class="u-download" :href="'#/infoDetail?id=' + item.id" target="_blank">下载</a>-->
    </div>
    <el-pagination
      layout="prev, pager, next"
      :total="articleTotal"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    curCategory: {
      type: Object,
      default () {
        return {}
      }
    },
    parentArr: {
      type: Object,
      default () {
        return {}
      }
    },
    arr: {
      type: Array,
      default () {
        return []
      }
    },
    hasDetail: {
      type: Boolean,
      default: true
    },
    hasDownload: {
      type: Boolean,
      default: false
    },
    articleTotal: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  methods: {
    handleDownload () {
      if (!this.hasDownload) {
        return
      }
      this.$emit('handleDownload')
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
      console.log(`当前页: ${val}`)
    },
    handleJump(item) {
      const firstParams = {
        id: '',
        text: '首页',
        path: '/'
      }
      const secondParams = {
        id: this.curCategory.id,
        text: this.curCategory.name,
        path: this.curCategory.type.replace('#/', '')
      }
      const thirdParams = {
        id: this.parentArr.id,
        text: this.parentArr.name
      }
      const breadArr = [].concat(firstParams, secondParams, thirdParams)
      window.localStorage.setItem('breadData', JSON.stringify(breadArr))
      this.$router.push('infoDetail?id=' + item.id)
      // window.open('#/infoDetail?id=' + item.id)
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-com-article {
  .m-article-list {
    position relative
    display flex
    .u-img {
      float left
      margin-right 20px
      vertical-align top
    }
    .m-article-con {
      float left
      width 775px
      overflow hidden
      .u-title {
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        font-size 18px
        color #333333
      }
      .m-con {
        padding-top 19px
        display: -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 2
        height 56px
        line-height 28px
        overflow hidden
        font-size 14px
        color #666666
      }
    }
    .u-date, .u-detail, .u-download {
      position absolute
      right 0
    }
    .u-date {
      top 40px
      font-size 18px
      color #999999
    }
    .u-detail {
      top 87px
      padding 10px 22px
      border 1px solid #ec5a02
      border-radius 19px
      font-size 14px
      color #ec5a02
    }
    .u-download {
      top: 30px
      padding-left 40px
      height 28px
      line-height 28px
      background url('~@/assets/img/info_hk/icon-copy.png') no-repeat left center
      background-size 34px 28px
      font-size 18px
      color #ec5a02
    }
  }
}
</style>
