//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//关闭Vue的生产提示
Vue.config.productionTip = false

import VueRouter from 'vue-router'

import router from './router'
//创建vm
Vue.use(VueRouter)
new Vue({
	el: '#app',
	render: h => h(App),
	router: router

})