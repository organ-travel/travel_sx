<template>
  <div class="m-com-pagition">
    <ul>
      <li v-if="currentPage > 1"><a href="javascript:;" @click="currentPage--, pageClick()">&lt;</a></li>
      <li v-if="currentPage === 1"><a href="javascript:;" class="banclick">&lt;</a></li>
      <li v-for="index in pages" :key="index" :class="{ 'active': currentPage === index }">
        <a href="javascript:;" class="txt" @click="currentPage++, btnClick(index)">{{ index }}</a>
      </li>
      <li v-if="currentPage !== pages.length"><a href="javascript:;" @click="currentPage++, pageClick()">&gt;</a></li>
      <li v-if="currentPage === pages.length"><a href="javascript:;" class="banclick">&gt;</a></li>
      <li><a href="javascript:;">共<i>{{ pages.length }}</i>页</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    totalPage: {
      type: Number,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    pages () {
      let left = 1
      let right = this.totalPage
      const array = []
      if (this.totalPage >= 5) {
        if (this.currentPage > 3 && this.currentPage < this.totalPage - 2) {
          left = this.currentPage - 2
          right = this.currentPage + 2
        } else {
          if (this.currentPage <= 3) {
            left = 1
            right = 5
          } else {
            right = this.totalPage
            left = this.totalPage - 4
          }
        }
      }
      while (left <= right) {
        array.push(left)
        left++
      }
      return array
    }

  },
  watch: {
    currentPage (oldValue, newValue) {
      this.$emit('getList')
    }
  },
  methods: {
    btnClick (index) { // 页码点击事件
      this.$emit('getList', index)
    },
    pageClick () {
      this.$emit('getList')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .m-com-pagition {
    ul {
      font-size 0
      text-align: center
      li {
        display: inline-block
        vertical-align: middle
        margin 0 5px
        line-height: 20px
        a {
          font-size 16px
          color: #666
          vertical-align: middle
        }
        .txt {
          display: block
          width 20px
          height 20px
          text-align: center
        }
        &.active {
          background-color: #ec5a02
          .txt {
            border-radius 50%
            color: #fff
          }
        }
      }
    }
  }
</style>
