<template>
  <div id="app">
    <div v-show="!showHome">
      <section class="videoShow-wrapper">
        <div v-if="videoSrc !== ''" class="video-wrapper">
          <video src="">您的浏览器不支持video标签</video>
        </div>
        <div v-else class="video-wrapper" @click="openVideoSound()">
          <img v-if="!videoItem.id" src="./assets/img/home/bg-video.jpg" alt="">
          <video v-else :id="videoItem.id +'video'"  muted autoplay>
            <source :src="videoItem.video_url" type="video/mp4">
          </video>
        </div>
        <a href="javascript:;" class="btn-enter" @click="handleEnter">点击进入官网</a>
      </section>
    </div>
    <div v-show="showHome">
      <com-header ref="header"></com-header>
      <com-content>
        <router-view/>
      </com-content>
      <com-footer></com-footer>
      <com-aside></com-aside>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Config from '@/config'
export default {
  data () {
    return {
      showHome: Config.showHome,
      videoSrc: '',
      is_pary_video: true,
      videoItem: {},
    }
  },
  async mounted () {
    window.$alert = (tip) => {
      return this.$alert(tip, '提示')
    }
    this.SET_HEADER_HEIGHT((this.$refs['header'] && this.$refs['header'].$el.clientHeight) || 118)
    function checkIE() {
      return '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style
    }
    if (checkIE()) {
      window.addEventListener('hashchange', () => {
        const currentPath = window.location.hash.slice(1)
        if (this.$route.path !== currentPath) {
          this.$router.push(currentPath)
        }
      }, false)
    }
    // 获取视频url
    await this.getVideo()
    if (this.is_pary_video && !this.showHome) {
      const vdo = document.getElementById(this.videoItem.id + 'video')
      const userAgent = navigator.userAgent
      vdo.play()
      console.log(userAgent.indexOf('Safari'))

      if (userAgent.indexOf('Safari') === -1) {
        vdo.muted = false
      }
    }
  },
  methods: {
    ...mapMutations(['SET_HEADER_HEIGHT']),
    // 获取视频url
    async getVideo () {
      this.videoItem = (await this.getVideoUrl())
    },
    handleEnter() {
      Config.showHome = true
      this.showHome = Config.showHome
      const array = this.arrItem
      this.arrItem = []
      this.arrItem = array
      const vdo = document.getElementById(this.videoItem.id + 'video')
      vdo.pause()
      this.is_pary_video = false
    },
    openVideoSound () {
      const vdo = document.getElementById(this.videoItem.id + 'video')
      vdo.play()
      vdo.muted = !vdo.muted
    },
  }
}
</script>
<style lang="stylus">
.videoShow-wrapper {
  position: fixed
  width:100%
  height: 100%
  top:0
  left:0
  z-index 10000
  .video-wrapper {
    position: absolute
    width:100%
    height: 100%
    left:0
    top:0
    img, video {
      max-width 100%
    }
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
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983

ul {
  margin:0
  padding:0
}

li {
  list-style none
}

a {
  text-decoration: none
  &:hover {
    text-decoration: none
  }
}

</style>
