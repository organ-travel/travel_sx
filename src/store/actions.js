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
  console.log('res ------> ', res)
  res.forEach((item, index) => {
    temp[item.type.split('/')[1]] = index + 1
    // if (item.type === `#/${payload.curName}`) {
    //   commit('SET_CUR_CATEGORY', item)
    // }
  })
  store.commit('SET_MENU_RELATIONS', temp)
}

export const queryArticleList = (store, payload) => {
  return postServer({
    data: payload || {},
    action: 'articles/getArticleList'
  })
}

export const getArticleList = async (store, payload) => {
  const res = await postServer({
    data: payload,
    action: 'articles/getArticleList'
  })
  store.commit('SET_ARTICLE_DATA', res)
}
