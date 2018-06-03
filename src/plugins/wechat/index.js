// error
// const wx = require('./1.3.2.js').wx

// success
const wx = require('./1.3.2.js')
// const wx = require('weixin-js-sdk')

const plugin = {
  install (Vue) {
    Vue.prototype.$wechat = wx
    Vue.wechat = wx
  },
  $wechat: wx
}

export default plugin
export const install = plugin.install
