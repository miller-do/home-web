import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'

export const routes = [
  // {
  //   path: '/',
  //   name: 'index',
  //   component: () => import('@/views/index/index.vue'),
  // },
  {
    path: '/',
    redirect: 'index',
    component: () => import('@/views/layouts/index.vue'),
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '首页',
          icon: 'el-icon-s-home',
          affix: true,
        },
      },
      {
        path: 'article',
        name: 'Article',
        component: () => import('@/views/article/index.vue'),
        meta: {
          title: '文章列表',
          icon: 'el-icon-s-home',
          affix: true,
        },
      },
      {
        path: 'articleDetail',
        name: 'ArticleDetail',
        component: () => import('@/views/article/detail.vue'),
        meta: {
          title: '文章详情',
          icon: 'el-icon-s-home',
          affix: true,
        },
      },
      {
        path: 'animations',
        name: 'Animations',
        component: () => import('@/views/animations/index.vue'),
        meta: {
          title: '动画特效',
          icon: 'el-icon-s-home',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register/index.vue'),
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/help/index.vue'),
  },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
