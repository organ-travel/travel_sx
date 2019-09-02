import getServer from '@/config/getServer'

export const getCategoryList = async (store, payload) => {
  const res = await getServer({
    // parmas: payload,
    action: 'categorys/getCategoryList'
  })
  store.commit('SET_MENU_DATA', res)
  const temp = {}
  res.forEach((item, index) => {
    temp[item.type.split('/')[1]] = index + 1
  })
  store.commit('SET_MENU_RELATIONS', temp)
}
