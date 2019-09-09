<template>
  <div class="m-com-bread">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in listArr" :key="index">
        <a href="javascript:;" @click="handleBreadClick(item)">{{ item.name }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
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
    }
  },
  created() {
  },
  mounted () {
  },
  methods: {
    handleBreadClick(item) {
      window.location.href = item.type
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-com-bread {
  >>> .el-breadcrumb__inner a, >>> .el-breadcrumb__inner.is-link, >>> .el-breadcrumb__inner, >>> .el-breadcrumb__separator, >>> .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    // line-height 28px
    font-size 14px
    font-weight normal
    color #050505
  }
}
</style>
