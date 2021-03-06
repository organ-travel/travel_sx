import dataset from '@/config/dataset'
export const SET_ACTIVE_INDEX = (state, payload) => {
  state.activeIndex = payload
}
export const SET_HEADER_HEIGHT = (state, payload) => {
  state.headerHeight = payload
}
export const SET_MENU_DATA = (state, payload) => {
  state.menuData = payload.length ? dataset.initMenu.concat(payload) : [].concat(dataset.initMenu)
}
export const SET_MENU_RELATIONS = (state, payload) => {
  state.menuRelations = Object.assign({}, JSON.parse(JSON.stringify(dataset.initMenuRelations)), payload)
}
export const SET_CUR_CATEGORY = (state, payload) => {
  state.curCategory = JSON.parse(JSON.stringify(payload))
}
export const SET_SHOW_APP = (state, payload) => {
  state.showApp = payload
}
export const SET_SHOW_MAIN = (state, payload) => {
  state.showMain = payload
}
