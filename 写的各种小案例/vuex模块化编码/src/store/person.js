import { nanoid } from 'nanoid'
export default {
    namespaced: true,
    actions: {
        //这个逻辑不放到mutation里完成是为了遵循“服务员——厨师”的分工合作流程
        jiaren(context, value) {
            const obj = { id: nanoid(), name: value }
            context.commit('ADD_PERSON', obj)
        },
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },

}

