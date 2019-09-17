<template>
  <section class="videoShow-wrapper">
    <div v-if="videoSrc !== ''" class="video-wrapper">
      <video src="">您的浏览器不支持video标签</video>
    </div>
    <div v-else class="video-wrapper" @click="openVideoSound()">
      <img v-if="! videoItem.id" src="../assets/img/home/bg-video.jpg" alt="">
      <video v-if="videoItem.id" :id="videoItem.id +'video'"  muted autoplay>
        <source :src="videoItem.video_url" type="video/mp4">
      </video>
    </div>
    <a href="javascript:;" class="btn-enter" @click="handleEnter">点击进入官网</a>
  </section>
</template>

<script>
export default {
  name: 'VideoShow',
  data() {
    return {
      is_pary_video: true,
      videoSrc: '',
      videoItem: {}
    }
  },
  created() {
    console.log(this.$router)
  },
  async mounted() {
    // 获取视频url
    await this.getVideo()
    if (this.is_pary_video && !this.showHome) {
      const vdo = document.getElementById(this.videoItem.id + 'video')
      const userAgent = navigator.userAgent
      vdo.play()

      if (userAgent.indexOf('Safari') === -1) {
        vdo.muted = false
      }
    }
  },
  methods: {
    // 获取视频url
    async getVideo () {
      this.videoItem = (await this.getVideoUrl())
    },
    handleEnter() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .videoShow-wrapper {
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
