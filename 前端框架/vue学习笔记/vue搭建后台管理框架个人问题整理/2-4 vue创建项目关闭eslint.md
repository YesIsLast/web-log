
## 1、关闭代码检查
    使用vue cli 创建vue的项目时，选择将eslint文件保存到各自文件中，不要保存到package.json中
### 1-1 关闭方法
    满足上方创建项目的条件后，找到.eslintrc.js文件
```js
    'extends': [
    'plugin:vue/essential',
    // '@vue/standard' 关闭语法检测
    ]
```
