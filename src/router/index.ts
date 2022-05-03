import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Index = () => import('@/pages/index.vue')
const NotFond = () => import('@/pages/404.vue')

const Contain = () => import('@/pages/Contain/index.vue')
const FrontPage = () => import('@/pages/Contain/frontPage.vue')
const MusicLibraryPage = () => import('@/pages/Contain/musicLibraryPage.vue')
const SearchPage = () => import('@/pages/Contain/searchPage.vue')

const Login = () => import('@/pages/Contain/Login/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
  { path: '/404', component: NotFond },
  { path: '/', redirect: '/index' },
  { path: '/index', name: 'Index', component: Index, redirect:'/contain',
  children: [
    {path:'/contain',name:'Contain',component:Contain,redirect:'/contain/frontPage',
    children:[
      {path:'/contain/frontPage',name:'FrontPage',component:FrontPage},
      {path:'/contain/musicLibraryPage',name:'MusicLibraryPage',component:MusicLibraryPage},
      {path:'/contain/searchPage',name:'SearchPage',component:SearchPage},
      {path:'/contain/login',name:'Login',component:Login}
    ]
  }
  ] 
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
