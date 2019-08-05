const webpack = require('webpack')

function getEnv () {
  return (() => {
    if (process.env.CODE_ENV === 'dev') {
      return 'dev'
    } else if (process.env.CODE_ENV === 'beta') {
      return 'qa'
    }
    return ''
  })()
}
module.exports = {
  publicPath: './',
  lintOnSave: process.env.NODE_ENV !== 'production',

  devServer: {
    disableHostCheck: true
    // ,
    // host: 'web.ymmoa.com'
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  configureWebpack: {
    externals: {
      // 在index.html文件使用script引入以下文件才能使用
      // 'vue': 'Vue',
      // 'vue-router': 'VueRouter',
      // 'vuex': 'Vuex'
    }
  }
}
console.log(getEnv())
