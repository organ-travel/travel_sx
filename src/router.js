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
      path: '/wonder',
      name: 'wonder',
      component: r => require(['./views/wonder.vue'], r)
    }, {
      path: '/survey',
      name: 'survey',
      component: r => require(['./views/survey.vue'], r)
    }, {
      path: '/letters',
      name: 'letters',
      component: r => require(['./views/survey.vue'], r)
    }, {
      path: '/info',
      name: 'info',
      component: r => require(['./views/info.vue'], r)
    }, {
      path: '/custom',
      name: 'custom',
      component: r => require(['./views/custom.vue'], r)
    }, {
      path: '/maker',
      name: 'maker',
      component: r => require(['./views/maker.vue'], r)
    }, {
      path: '/strategy',
      name: 'strategy',
      component: r => require(['./views/strategy.vue'], r)
    }, {
      path: '/contact',
      name: 'contact',
      component: r => require(['./views/contact.vue'], r)
    }, {
      path: '/test',
      name: 'test',
      component: r => require(['./views/test.vue'], r)
    }
  ]
})
