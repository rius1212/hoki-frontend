import Vue from 'vue'
import Router from 'vue-router'
const DashboardLayout = () => import('../components/dashboardLayout.vue')

function loadView(view) {
    return () => import(`../components/dashboardContents/${view}.vue`)
}
const routes = [{
    path: '/',
    component: DashboardLayout,
    children: [
        {
            name: 'homePage',
            path: '',
            component: loadView('homePage')
        },
        {
            name: 'login',
            path: '/login',
            component: loadView('login')
        },
    ]
}, 


]
Vue.use(Router)
    const router = new Router({
    mode: 'history',
    routes: routes
})

// router.beforeEach((to, from, next) => {
//     if (to.name !== 'login' &&  JSON.parse(localStorage.getItem('apiData')) === null && to.name!=='registration') next({ name: 'login' })
//     else next()
//   })


export default router