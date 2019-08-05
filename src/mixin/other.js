import dataset from '@/config/dataset'
export default {
  mounted () {
    if (this.$options.name) {
      const name = this.$route.name
      if (Object.keys(dataset.menuRelations).includes(name)) {
        this.SET_ACTIVE_INDEX(dataset.menuRelations[name])
      }
    }
  }
}
