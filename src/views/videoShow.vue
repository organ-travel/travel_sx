<template>
  <section class="videoShow-wrapper">
    <div class="video-wrapper">
      <video src="">您的浏览器不支持video标签</video>
    </div>
    <a href="javascript:;" class="btn-enter">点击进入官网</a>
  </section>
</template>

<script>
export default {
  name: 'VideoShow'
}
</script>

<style lang="stylus" scoped>
  .videoShow-wrapper {
    position: relative
    min-height 700px
    .video-wrapper {
      position: absolute
      width:100%
      height: 100%
      left:0
      top:0
    }
    .btn-enter {
      position: absolute
      left: 50%
      margin-left: -100px
      top: 50%
      margin-top: -22px
      font-size 20px
      color: #ec5a02
      border 2px solid #ec5a02
      padding:11px 36px
      border-radius 2px
      &:hover {
        background-color: #ec5a02
        color: #fff
      }
    }
  }
</style>
