import VueRouter from "vue-router"
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/about',
            component: About,
            meta: { title: '关于' },
        },
        {
            meta: { title: '主页' },
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'xiaoxi',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                },
                {
                    meta: { isAuth: true, title: '信息' },
                    name: 'xinxi',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xijie',
                            path: 'detail',
                            component: Detail,
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }

                        }

                    ]
                }

            ]
        }
    ],
})
router.beforeEach((to, from, next) => {

    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'hcxy')
            next()
        else {
            alert('学校垃圾不给看')
        }
    } else {
        next()
    }
})
router.afterEach((to, from) => {
    document.title = to.meta.title || '小系统'
})

export default router;