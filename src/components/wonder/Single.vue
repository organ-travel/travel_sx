<template>
  <div class="single-wrapper">
    <ul>
      <li v-for="(item, index) in wonder.single.imgList" :key="index">
        <div class="img-wrapper"><a href="javascript:;"><img :src="imgvideo" alt=""></a></div>
        <div class="txt-wrapper">
          <h1 class="txt-title">{{ item.title }}</h1>
          <div class="txt-content">
            <p class="txt">{{ item.content }} <a href="javascript:;" class="txt-link">【详情】</a> </p>
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
      this.$emit('getSingleList')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .single-wrapper {
    margin: 60px 0
    ul {
      padding:0 40px
      &:after {
        content ''
        display: table
        clear both
        width:100%
      }
      li {
        display: flex
        width:556px
        float: left
        margin-bottom: 35px
        background-color: #ddf6f3
        &:nth-child(odd) {
          margin-right: 35px
        }
        .img-wrapper {
          flex 0 0 280px
          overflow: hidden
          img {
            max-width 100%
            -webkit-transition: all .2s ease .1s
            -moz-transition: all .2s ease .1s
            -ms-transition: all .2s ease .1s
            -o-transition: all .2s ease .1s
            transition: all .2s ease .1s
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
          flex 1
          padding:0 20px
          .txt-title {
            font-size 18px
            color: #000
            margin: 20px 0
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
      }
    }
  }
</style>
