import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Index = () => import('@/pages/index.vue')
const NotFond = () => import('@/pages/404.vue')

const Contain = () => import('@/pages/Contain/index.vue')
const FrontPage = () => import('@/pages/Contain/navPage/frontPage.vue')
const MusicLibraryPage = () =>import('@/pages/Contain/navPage/musicLibraryPage.vue')
const SearchPage = () => import('@/pages/Contain/navPage/searchPage.vue')

const Login = () => import('@/pages/Contain/Login/index.vue')
const QrLogin = () => import('@/pages/Contain/Login/qrlogin.vue')
const EmailLogin = () => import('@/pages/Contain/Login/emailLogin.vue')
const phoneLogin = () => import('@/pages/Contain/Login/phoneLogin.vue')

const musicCardDetail = () => import('@/pages/MusicCardDetail/musicCardDetail.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
  { path: '/404', component: NotFond },
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    redirect: '/contain',
    children: [
      {
        path: '/contain',
        name: 'Contain',
        component: Contain,
        redirect: '/contain/frontPage',
        children: [
          {
            path: '/contain/frontPage',
            name: 'FrontPage',
            component: FrontPage,
          },
          {
            path: '/contain/musicLibraryPage',
            name: 'MusicLibraryPage',
            component: MusicLibraryPage,
            beforeEnter: (to, from, next) => {
              if (localStorage.getItem('userInfo')) {
                next()
              } else {
                next('/contain/login')
              }
            },
          },
          {
            path: '/contain/searchPage',
            name: 'SearchPage',
            component: SearchPage,
          },
          {
            path: '/contain/login',
            name: 'Login',
            component: Login,
            redirect: '/contain/login/qrlogin',
            children: [
              {
                path: '/contain/login/qrlogin',
                name: 'QrLogin',
                component: QrLogin,
              },
              {
                path: '/contain/login/emailLogin',
                name: 'EmailLogin',
                component: EmailLogin,
              },
              {
                path: '/contain/login/phoneLogin',
                name: 'phoneLogin',
                component: phoneLogin,
              },
            ],
          },
          {path:'musicCardDetail/:id',name:'musicCardDetail',component:musicCardDetail},
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
