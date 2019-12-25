const host = 'http://manage.hhhkpb.com/index.php/'
let showHome = false

if (window.performance.navigation.type === 1) {
  showHome = true
}
// console.log("页面被刷新");
// }
// const debug = truxe

// if (window.location.host == '') {
//   host = ''
// } else if (window.location.host == '') {
//   host = ''
//   debug = false
// } else {
//   host = ''
// }

export default {
  host,
  showHome
  // debug
}
