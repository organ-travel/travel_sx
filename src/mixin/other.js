// import dataset from '@/config/dataset'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getActiveIndex', 'getMenuData', 'getMenuRelations', 'getCurCategory', 'getShowApp', 'getShowMain'])
  },
  watch: {
    '$route.query.actIndex' (n, o) {
      if (this.$options.pageName) {
        console.log('watch this.$route.name', this.$route.name, n, o)
        if (this.$route.name == 'survey') {
          if (typeof n == 'undefined' && typeof o != 'undefined') {
            window.scrollTo(0, 0)
            this.activeId = ''
            return
          }
          this.activeId = this.getCurCategory.children[n || 1] ? this.getCurCategory.children[n || 1].type : ''
          this.changeAnchor(this.activeId)
        } else {
          this.changeNav(n || 0)
        }
      }
    }
  },
  mounted () {
    if (this.$options.pageName) {
      console.log('minxin mounted------>', this.$options.pageName, this.$route.query.actIndex)
      if (this.$route.name != 'home') {
        this.SET_SHOW_APP(true)
        this.SET_SHOW_MAIN(true)
      }
    }
  }
}
