import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Users from '../components/user/Users.vue'
import Welcome from '../components/Welcome.vue'
import GoodsList from '../components/goods/List.vue'
import Add from '../components/goods/Add.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home', component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome  },
        { path: '/users', component: Users },
        // { path: '/rights', component: Rights },
        // { path: '/roles', component: Roles },
        // { path: '/categories', component: Cate },
        // { path: '/params', component: Params },
        { path: '/goods', component: GoodsList },
        { path: '/goods/add', component: Add }
      ]
    }
  ]
})
//挂载路由导航
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router