<template>
  <div class="m-com-bread">
    <el-breadcrumb separator-class="el-icon-arrow-right">
<<<<<<< Updated upstream
      <el-breadcrumb-item v-for="(item, index) in listArr" :key="index" :to="{ 'path':item.type }">{{ item.name }}</el-breadcrumb-item>
=======
      <el-breadcrumb-item v-for="(item, index) in listArr" :key="index" :to="{ 'path': item.path }" :replace="true">{{ item.text }}</el-breadcrumb-item>
>>>>>>> Stashed changes
      <!-- <el-breadcrumb-item :to="{ path: '/' }">魅力壶口</el-breadcrumb-item>
      <el-breadcrumb-item>斗鼓</el-breadcrumb-item> -->
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
