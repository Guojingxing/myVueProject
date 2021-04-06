import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/index',
    meta:{title:'首页'},
    component: () => import('../views/home/index.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        meta:{title:'索引'},
        component: () => import('../views/home/index/index.vue')
      },
      {
        path: '/stats',
        name: 'stats',
        meta:{title:'数据分析'},
        component: () => import('../views/home/stats/index.vue')
      },
      {
        path: '/wms',
        name: 'wms',
        meta:{title:'信息管理'},
        component: () => import('../views/home/wms/index.vue'),
        children: [
          {
            path: '/wms/list',
            name: 'wmslist',
            meta:{title:'列表展示'},
            component: () => import('../views/home/wms/list/index.vue')
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

//路由拦截
// router.beforeEach(function (to, from, next) {
//   if (!sessionStorage.getItem('username')) {
//     if (to.path !== '/login')
//       next('/login');
//   }
//   next();
// })
export default router
