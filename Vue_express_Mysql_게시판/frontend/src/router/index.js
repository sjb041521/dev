import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/BoardList.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Index_scope from '../components/BoardList_id.vue'
import Write from '@/components/Write.vue'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/list/:id',
    name: 'list',
    component: Index_scope
  },
  {
    path: '/write',
    name: 'write',
    component: Write
  }, 

]

const router = new VueRouter({
  mode: "history",
  routes
  
})

export default router
