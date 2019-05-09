# 搭建一个vue+element的框架
    因为看了element的文档发现它也是响应式布局，所以想要通过这个组件库来学习vue，不用bootstrap了
## 1、vuecli3+,隐藏的文件
    项目创建命令 vue create ***
    项目生成时隐藏了一些配置文件，如果需要可以在项目根目录自行创建配置
    如vue.config.js
## 2、关闭代码检查
    module.exports = {
    baseUrl: './',
    lintOnSave : false,// 关闭代码检查
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'http://192.168.1.8:8080',
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    }
}