
import { mapMutations, mapActions } from 'vuex'

export default {
  ...mapActions(['queryCategoryList', 'queryArticleList', 'getHomeTopCategoryList', 'getBannerList', 'getArticleDetail']),
  ...mapMutations(['SET_ACTIVE_INDEX', 'SET_MENU_DATA', 'SET_CUR_CATEGORY']),
  async setMenu () {
    if (!this.getMenuData.length) {
      await this.queryCategoryList()
    }
    const curName = this.$route.name
    if (Object.keys(this.getMenuRelations).includes(curName)) {
      this.SET_ACTIVE_INDEX(this.getMenuRelations[curName])
    }
    if (curName) {
      this.getMenuData.forEach(item => {
        if (item.type === `#/${curName}`) {
          this.SET_CUR_CATEGORY(item)
        }
      })
    }
  },
  // setCurCategory () {
  //   const curName = this.$route.name
  //   this.getMenuData.forEach(item => {
  //     if (item.type === `#/${curName}`) {
  //       this.SET_CUR_CATEGORY(item)
  //     }
  //   })
  // },
  // setActiveIndex () {
  //   const curName = this.$route.name
  //   if (Object.keys(this.getMenuRelations).includes(curName)) {
  //     this.SET_ACTIVE_INDEX(this.getMenuRelations[curName])
  //   }
  // }
}
