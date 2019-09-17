<template>
  <div class="list-wrapper">
    <div v-for="(item, index) in listArr" :key="index" :class="['m-com-list', item.class_name]">
      <div class="list-left" >
        <a target="_blank" :href="'#/infoDetail?id=' + item.id" class="m-com-img">
          <img :src="item.picture_url" :class="['u-com-img', imgClass]" alt="" title=""/>
          <a v-if="item.is_video === 1" :href="'#/infoDetail?id=' + item.id" target="_blank" class="u-com-video"></a>
        </a>
      </div>
      <div class="list-right">
        <p class="txt-title">{{ item.title }}</p>
        <p class="txt-content">{{ item.description }}</p>
        <a :href="'#/infoDetail?id=' + item.id" class="txt-link">...【详情】</a>
      </div>
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
