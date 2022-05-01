import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Index = () => import('../pages/index.vue');
const NotFond = () => import('../pages/404.vue');



const routes: Array<RouteRecordRaw> = [
  {
    path: "/:catchAll(.*)", 
    redirect: '/404',
  },
  { path:'/404', component: NotFond },
  { path: '/',redirect:'/index'},
  {path:'/index',name:'Index',component:Index},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default router