import Vue from 'vue'
import Vuex from 'vuex'
import countAbout from './count'
import personAbout from './person'
Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        personAbout,
        countAbout
    }
})