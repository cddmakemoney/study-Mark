
export default {
    namespaced: true,
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2)
                context.commit('JIA', value)
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        },
    },
    state: {
        sum: 0,
        subject: '计算机',
        school: '北大',
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },

    getters: {
        bigsum(state) {
            return state.sum * 10
        }
    }
}
