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

export const getVideoUrl = (store, payload) => {
  return getServer({
    data: payload,
    action: 'articles/getVideoUrl'
  })
}

export const getArticleDetail = (store, payload) => {
  return getServer({
    action: 'articles/getArticleDetail/' + payload
  })
}

export const getTicketsList = (store, payload) => {
  return postServer({
    data: payload || {},
    action: 'tickets/getTicketsList'
  })
}

export const addConsult = (store, payload) => {
  return postServer({
    data: payload || {},
    action: 'consult/addConsult'
  })
}

export const getConTactArticle = (store, payload) => {
  return getServer({
    data: payload || {},
    action: 'articles/getContact'
  })
}
