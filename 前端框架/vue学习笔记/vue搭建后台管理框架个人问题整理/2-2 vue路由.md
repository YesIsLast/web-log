# vue 路由
### 路由中component 引用方法

    在路由中注册组件写法有两种
### 第一种
    component: () =>import('@/xxx.vue')
    只适用于当撰写页面的路由时适用，优点简洁不需要额外引用
### 第二种
    import QQQxxx from '../../../QQQxxx'
    component: QQQxxx
    适用于路由集群，与单页路由时，缺点麻烦

## 路由集群中重定向的方法
    1、正常路由重定向配置写法
    {
        path: '/',
        redirect: '/login' // 默认配置成重定向登录页
      },
    2、路由集群重定向路由写法
    // 此处重定向写法重定向到当前路由下配置
    {
        path: '/', redirect: 'firstMenuFirstChildComponent'	// 默认配置成重定向第一页
    },
