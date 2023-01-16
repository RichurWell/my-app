import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//1、创建路由组件
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main  from '../views/Main.vue'



//2、将路由与组件进行映射

const routes = [
    {
        path:'/',
        component:Main,
        children:[
            //子路由
            {path:'/home',component:Home},
            {path:'/user',component:User},
        ]
    },
  
]


//3.创建router实例
const router =new VueRouter({
    routes
})


//4、将当前的router实例对外暴露
export default router




