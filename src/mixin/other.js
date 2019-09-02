// import dataset from '@/config/dataset'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getActiveIndex', 'getMenuData', 'getMenuRelations'])
  },
  async mounted () {
    console.log('mixin', this.$options.name || this.$options.com, this.$route.name)
    if (this.$options.name && this.$options.name != 'transition') {
      // 获取menu数据
      if (!this.getMenuData.length) {
        await this.getCategoryList()
      }
      // 当前导航
      const name = this.$route.name
      console.log('mixin mounted', this.$route.name, Object.keys(this.getMenuRelations).includes(name))
      console.log(this.getMenuRelations[name])
      if (Object.keys(this.getMenuRelations).includes(name)) {
        this.SET_ACTIVE_INDEX(this.getMenuRelations[name])
        console.log(this.getMenuRelations[name])
      }
    }
  }
}
