# 4-1 vue框架路由重复点击刷新页面
```js
// 解决单页面重复路由跳转问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  window.location.reload() // 进入重复路由执行页面刷新
  return originalPush.call(this, location).catch(err => err)
}
```