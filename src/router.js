import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: r => require(['./views/home.vue'], r)
    }, {
      path: '/introduction',
      name: 'introduction',
      component: r => require(['./views/introduction.vue'], r)
    }, {
      path: '/test',
      name: 'test',
      component: r => require(['./views/test.vue'], r)
    }
  ]
})
