// import dataset from '@/config/dataset'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getActiveIndex', 'getMenuData', 'getMenuRelations', 'getCurCategory'])
  },
  watch: {
    '$route.query.actIndex' (n, o) {
      if (this.$options.name && this.$options.name != 'transition') {
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
    if (this.$options.name && this.$options.name != 'transition') {
      console.log('minxin mounted------>')
    }
  }
}
