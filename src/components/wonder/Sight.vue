<template>
  <div class="sight-wrapper">
    <ul>
      <li v-for="(item, index) in wonder.sight.imgList" :key="index">
        <div v-if="index === 0  || index === 1" class="left">
          <div class="img-wrapper"><a href="javascript:;"><img :src="imgvideo" alt=""></a></div>
          <div class="txt-wrapper">
            <h1 class="txt-title">{{ item.title }}</h1>
            <div class="txt-content">
              <p class="txt">{{ item.content }} <a href="javascript:;" class="txt-link">【详情】</a> </p>
            </div>
          </div>
        </div>
        <div v-else-if="index === 2" class="left-all">
          <div class="img-wrapper"><a href="javascript:;"><img :src="imgvideo" alt=""></a></div>
          <div class="txt-wrapper">
            <h1 class="txt-title">{{ item.title }}</h1>
            <div class="txt-content">
              <p class="txt">{{ item.content }} <a href="javascript:;" class="txt-link">【详情】</a> </p>
            </div>
          </div>
        </div>
        <div v-else-if="index === 7" class="right-all">
          <div class="img-wrapper"><a href="javascript:;"><img :src="imgvideo" alt=""></a></div>
          <div class="txt-wrapper">
            <h1 class="txt-title">{{ item.title }}</h1>
            <div class="txt-content">
              <p class="txt">{{ item.content }} <a href="javascript:;" class="txt-link">【详情】</a> </p>
            </div>
          </div>
        </div>
        <div v-else class="right">
          <div class="img-wrapper"><a href="javascript:;"><img :src="imgvideo" alt=""></a></div>
          <div class="txt-wrapper">
            <h1 class="txt-title">{{ item.title }}</h1>
            <div class="txt-content">
              <p class="txt">{{ item.content }} <a href="javascript:;" class="txt-link">【详情】</a> </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import imgTownVideo from '@/assets/img/hkqg/img-video.jpg'
export default {
  props: {
    wonder: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      'imgvideo': imgTownVideo
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.$emit('getSightList')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .sight-wrapper {
    ul {
      font-size 0
      li {
        display: inline-block
        vertical-align: middle
        position: relative
        margin-bottom:40px
        &:nth-child(1) {
          .left {
            margin-right:15px
          }
        }
        &:nth-child(4), &:nth-child(6) {
          .right {
            margin-right:15px
          }
        }
        .img-wrapper {
          position: absolute
          top 50%
          margin-top -110px
          overflow: hidden
          width:276px
          height:220px
          img {
            max-width 100%
            -webkit-transition: all .2s ease .2s
            -moz-transition: all .2s ease .2s
            -ms-transition: all .2s ease .2s
            -o-transition: all .2s ease .2s
            transition: all .2s ease .2s
          }
          &:hover {
            img {
              -webkit-transform: scale(1.1)
              -moz-transform: scale(1.1)
              -ms-transform: scale(1.1)
              -o-transform: scale(1.1)
              transform: scale(1.1)
            }
          }
        }
        .txt-wrapper {
          .txt-title {
            font-size 18px
            color: #000
            margin: 32px 0
            text-align: center
          }
          .txt-content {
            .txt {
              line-height 30px
              font-size 14px
              color: #000
              .txt-link {
                color: #ec5a02
              }
            }
          }
        }
        .left, .left-all {
          .img-wrapper {
            left:0
          }
          .txt-wrapper {
            margin-left: 130px
            padding-left: 172px
            padding-right: 36px
            background-color: #ddf5f3
          }
        }
        .left-all, .right-all {
          .txt-wrapper {
            width:888px
            overflow: hidden
            height:387px
          }
        }
        .left, .right {
          .txt-wrapper {
            width:268px
            height:387px
            overflow: hidden
          }
        }
        .right, .right-all {
          .txt-wrapper {
            margin-right: 130px
            padding-right: 172px
            padding-left: 36px
            background-color: #ddf5f3
          }
        }
        .right, .right-all {
          .img-wrapper {
            right:0
          }
        }
        &:nth-child(4), &:nth-child(6) {
          .img-wrapper {
            right:15px
          }
        }
      }
    }
  }
</style>
