import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/layout/Layout'

Vue.use(Router)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Epage = { template: '<div>error</div>' }
const Children1 = { template: '<div>children1</div>' }
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
const Reg = { template: '<div>reg</div>' }
// 路由配置不好会 地址 错误
export default new Router({
  routes: [
    { path: '/404', component: Epage, hidden: true },
    { path: '/login', component: () => import('../views/login/index'), hidden: true },

    {
      path: '/',
      component: Layout,
      hidden: true,
      redirect: '/dashboard',
      children: [{
        path: 'dashboard',
        component: () => import('../views/dashboard/index')
      }]
    },
    { path: '/foo', component: Foo, hidden: true },
    { path: '/bar', component: Bar, hidden: true },

    { path: '/home',
      // redirect: '/home/homechildren1',
      component: Layout,
      name: 'Home',
      meta: { title: 'Home', icon: 'home' },
      children: [
        {
          path: '/home/homechildren1',
          component: Children1,
          name: 'Home',
          meta: { title: 'Home', icon: 'home' }
        }, // '/'代表顶级目录
        {
          path: '/home/user/:id',
          component: User,
          name: 'user',
          meta: { title: 'user', icon: 'user' }
        },
        {
          path: '/home/reg',
          component: Reg,
          name: 'reg',
          meta: { title: 'Home', icon: 'home' }
        }
      ]
    }
  ]
})
