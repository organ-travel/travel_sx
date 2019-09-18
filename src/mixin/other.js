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
          this.activeId = this.getCurCategory.children[n || 0] ? this.getCurCategory.children[n || 0].type : ''
          this.changeAnchor(this.activeId)
        } else {
          this.changeNav(n || 0)
        }
      }
    }
  },
  mounted () {
    if (this.$options.pageName) {
      console.log('minxin mounted------>', this.$options.pageName)
      if (this.$route.name != 'home') {
        this.SET_SHOW_APP(true)
        this.SET_SHOW_MAIN(true)
      }
    }
  }
}
