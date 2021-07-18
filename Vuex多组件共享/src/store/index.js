import Vue from 'vue'
import Vuex from 'vuex'
import { nanoid } from 'nanoid'
Vue.use(Vuex)

const actions = {
    jiaOdd(context, value) {
        if (context.state.sum % 2)
            context.commit('JIA', value)
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)
    },
    //这个逻辑不放到mutation里完成是为了遵循“服务员——厨师”的分工合作流程
    jiaren(context, value) {
        const obj = { id: nanoid(), name: value }
        context.commit('ADD_PERSON', obj)
    },
}
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        state.personList.unshift(value)
    }
}
const state = {
    sum: 0,
    subject: '计算机',
    school: '北大',
    personList: [
        { id: '001', name: '张三' }
    ]
}
const getters = {
    bigsum(state) {
        return state.sum * 10
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})