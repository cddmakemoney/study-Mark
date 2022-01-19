/* 这里只说引用VUE，没说引用里面的哪个文件夹以及引用哪个JS文件；所以按package里面的main选项执行，默认的是1KB的生产环境VUE.JS文件
    但是默认的生产环境VUE.JS文件是残缺的VUE,没有模板解析器；因为如果直接导入原版330KB的VUE.JS文件，会导致生产项目太大了。
    所以VUE官方专门出了一个template解析器，在package.json里面指明了：vue-template-compiler
 */

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
})
