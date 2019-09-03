import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/index.js'
import mixin from '@/mixin/index.js'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/style/base.css'
import 'swiper/dist/css/swiper.css'
import '@/assets/js/prototype-extend'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.mixin(mixin)

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
