import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/404.vue'
import Home from './views/Home'
// import Login from './views/Login'


Vue.use(Router)

let routes = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login'),
      hidden: true
    },
    {
      path: '/',
      component: Home,
      name: '',
      iconCls: 'el-icon-orange', //图标样式class
      leaf: true, //只有一个节点
      children: [{
        path: '/overview',
        component: () => import('@/views/overview/overview'),
        name: '概览'
      }, ]
    },
    {
      path: '/',
      component: Home,
      iconCls: 'el-icon-tickets',
      name: '导航一',
      children: [{
        path: '/helloWorld',
        iconCls: 'el-icon-tickets',
        component: () => import('@/views/helloword/helloword'),
        name: 'HelloWorld'
      }, ]
    },
    {
      path: '/',
      component: Home,
      iconCls: 'el-icon-orange',
      name: '表格',
      children: [{
          path: '/table',
          iconCls: 'el-icon-orange',
          component: () => import('@/views/table/Table'),
          name: '表格1'
        }, {
          path: '/SearchTable',
          iconCls: 'el-icon-orange',
          component: () => import('@/views/table/SearchTable'),
          name: '表格2'
        },
        {
          path: '/Table3',
          iconCls: 'el-icon-orange',
          component: () => import('@/views/table/Table3'),
          name: '表格3'
        },
        {
          path: '/Table4',
          iconCls: 'el-icon-orange',
          component: () => import('@/views/table/Table4'),
          name: '表格4'
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      hidden: true
    },
    {
      path: '*',
      hidden: true,
      redirect: {
        path: '/404'
      }
    }
  ]
})

export default routes;