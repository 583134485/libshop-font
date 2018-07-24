import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'

Vue.use(Router)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Children1 = { template: '<div>children1</div>' }
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
const Reg = { template: '<div>reg</div>' }
// 路由配置不好会 地址 错误
export default new Router({
  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/home',
      // redirect: '/home/homechildren1',
      component: Home,
      children: [
        { path: '/home/homechildren1', component: Children1 }, // '/'代表顶级目录
        { path: '/home/user/:id', component: User },
        { path: '/home/reg', component: Reg }
      ]
    }
  ]
})
