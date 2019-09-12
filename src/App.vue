<template>
  <div id="app">
    <com-header ref="header"></com-header>
    <com-content>
      <router-view/>
    </com-content>
    <com-footer></com-footer>
    <com-aside></com-aside>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  mounted () {
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
  },
  methods: {
    ...mapMutations(['SET_HEADER_HEIGHT']),
  }
}
</script>
<style lang="stylus">
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
