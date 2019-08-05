import axios from 'axios'
import config from '@/config'

const Server = data => {
  let url = ''
  if (data.mock) {
    url = data.url || `${config.mockHost}${data.action}`
  } else {
    url = data.url || `${config.host}${data.action}`
  }
  return new Promise((resolve, reject) => {
    axios.post(url, data.data || {}, {
      headers: data.otherHeaders ? data.headers : config.headers,
      withCredentials: !data.hasOwnProperty('withCredentials'),
    })
      .then(async (response) => {
        if (response.status === 200) {
          if (data.silent) {
            resolve(response.data)
          } else {
            if (response.data.result == 1) {
              resolve(response.data)
            } else {
              response.data.errorMsg && await window.$alert(response.data.errorMsg)
            }
          }
        } else if (response.status == 401) {
          await window.$alert('用户未登录')
          this.logout()
        } else if (response.status == 403) {
          await window.$alert('你无权限访问该内容,请联系管理员分配权限')
          this.logout()
        } else {
          response.data.errorMsg && await window.$alert(response.data.errorMsg)
        }
      })
      .catch((err) => {
        console.log('Server:res:', err)
        // err && await window.$dialog('服务器错误')
        reject(err)
      }).finally(() => {})
  })
}

export default Server
