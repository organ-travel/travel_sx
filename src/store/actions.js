import getServer from '@/config/getServer'
import postServer from '@/config/server'

export const queryCategoryList = async (store, payload) => {
  const res = await getServer({
    // parmas: payload,
    action: 'categorys/getCategoryList'
  })
  store.commit('SET_MENU_DATA', res)
  const temp = {}
  // 当前导航
  res.forEach((item, index) => {
    temp[item.type.split('/')[1]] = index + 1
  })
  store.commit('SET_MENU_RELATIONS', temp)
}

export const getHomeTopCategoryList = (store, payload) => {
  return getServer({
    data: payload,
    action: 'categorys/getHomeTopCategoryList'
  })
}

export const queryArticleList = (store, payload) => {
  return postServer({
    data: payload || {},
    action: 'articles/getArticleList'
  })
}

export const getBannerList = (store, payload) => {
  return getServer({
    data: payload,
    action: 'articles/getBannerList'
  })
}
