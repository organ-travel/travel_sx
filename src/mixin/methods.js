
import { mapMutations, mapActions } from 'vuex'

export default {
  ...mapActions(['queryCategoryList', 'queryArticleList']),
  ...mapMutations(['SET_ACTIVE_INDEX', 'SET_CUR_CATEGORY']),
  async setMenu () {
    if (!this.getMenuData.length) {
      await this.queryCategoryList()
    }
  },
  setCurCategory () {
    const curName = this.$route.name
    this.getMenuData.forEach(item => {
      if (item.type === `#/${curName}`) {
        this.SET_CUR_CATEGORY(item)
      }
    })
  },
  setActiveIndex () {
    const name = this.$route.name
    if (Object.keys(this.getMenuRelations).includes(name)) {
      this.SET_ACTIVE_INDEX(this.getMenuRelations[name])
      console.log(this.getMenuRelations[name])
    }
  }
}
