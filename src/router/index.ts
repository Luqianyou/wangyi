import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Index = () => import('../pages/index.vue');

const routes: Array<RouteRecordRaw> = [
  { path: '/',redirect:'/index'},
  {path:'/index',name:'Index',component:Index},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default router