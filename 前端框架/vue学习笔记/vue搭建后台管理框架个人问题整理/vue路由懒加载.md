
# 路由懒加载
官方介绍地址 https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E6%8A%8A%E7%BB%84%E4%BB%B6%E6%8C%89%E7%BB%84%E5%88%86%E5%9D%97
    
    官方推荐写法
    定义一个常量加载对应路由模块
```js
首先定义常量加载的模块
const Foo = () => import('./Foo.vue')
在路由中与往常一样使用
const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})
```

    路由懒加载的最大好处就是使用到某个路由时才去加载这个路由的模块，不使用时不会去加载，速度提升明显