<template>
  <ul class="com-sep-lists clearfix">
    <li v-for="(item, index) in listArr" :key="index" class="com-sep-list">
      <a :href="'#/infoDetail?id=' + item.id" class="com-sep-pic">
        <img :src="item.picture_url" class="u-img"/>
        <p v-if="index < 4" class="u-title">{{ item.title }}</p>
      </a>
      <!-- 二维码 -->
      <!--<div v-if="item.picture_url && index ==4 " class="m-com-mask">-->
        <!--<com-column :img-url="item.picture_url" img-class="com-sep-code"></com-column>-->
      <!--</div>-->
      <!--<img v-if="item.picture_url && index ==4 " :src="item.picture_url" class="com-sep-code"/>-->
    </li>
  </ul>
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
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.com-sep-lists {
  .com-sep-list {
    position relative
    padding-bottom 76px
    float left
    width 450px
    &:nth-child(2n+1) {
      margin-right 216px
    }
    &:hover .m-com-mask{
      display block
    }
    >>> .m-com-mask {
      display none
      position absolute
      top 0
      left 0
      width 100%
      height 336px
      .m-com-column {
        height 100%
        .com-sep-code {
          width 150px
          height 150px
          vertical-align top
        }
      }
    }
    .com-sep-pic {
      display block
      font-size 18px
      color #000000
      .u-img {
        width 100%
        height 336px
        vertical-align top
      }
      .u-title {
        padding-top 23px
        text-align center
      }
    }
  }
}
</style>
