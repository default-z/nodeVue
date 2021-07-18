import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
import Add from '../views/add.vue'
import List from '../views/list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
      children:[
          {path:'/categories/create',component:Add},
          //设置props:true 说明页面可以接受路径参数 在组件的props可以拿到值，不需要在用 this.$router.params.id取值
          {path:'/categories/edit/:id',component:Add,props:true},
          {path:'/categories/list',component:List}
          ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
