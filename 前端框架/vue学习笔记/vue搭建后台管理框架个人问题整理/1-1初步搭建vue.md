# 初步搭建vue
## 使用的版本vue -V 3.1.3
## 使用的vue全家桶(vuex/vueRouter/vuecli/axios)+bootstrap
## 工具使用官方推荐VSCode
## 碰到的第一个问题
### 1、我新建的项目目录与网上的不一样，因为有些配置文件隐藏了，想要修改端口？
    网上的路径修改配置文件如果不行
    可以试试到这
    node_modules/@vue/cli-service/lib/commands/serve.js
    修改一下port试试
### 2、怎么利用路由来整理出一个后台管理系统的架子呢？
    说一下我是怎么想的，利用路由，在main.js文件中全局注册路由，在App.vue页面使用<router-view />标签来显示路由指定的内容，router.js中利用先后顺序加载来实现这个单页面应用，可通过路由配置来理解
    我将组建集合文件夹(conponents)下的结构分成了layout/pages,在layout中分了头部/脚部/菜单部/登录界面
    分完之后我发现我的思路比较清晰了,将这些页面元素，统统在加载layout的时候加载进去，就可以了

### 3、我在使用路由得时候总在URL中出现‘#’,怎么取消呢？
    这个问题我是在视频中找到的，vue-router有三种模式，使用history模式#就取消了
    可参考官方文档案例地址 https://router.vuejs.org/zh/api/#mode
### 4、每个VUE组件都是一个独立的文件，怎么利用路由来将他们结合在一起呢？
    在vue组件中，对组件暴露出当前组件的名字，然后在路由中利用import来实现组件与路由之间的连接
### 5、我要开始给项目安装依赖了，我怎么能够查看一下我要安装的包在npm服务器上都有那些版本呢？
    
    查看jquery的所有版本npm view jquery versions
    查看jquery所有的信息 npm view jquery
    安装jquery包 npm install jquery --save
    安装指定版本
    在npm中安装固定的版本号package，只需要在其后加 ‘@版本号’    npm install jquery@x.x.x --save
    *************
    查看bootstrap所有版本 npm view bootstrap
    安装bootstrap  npm install bootstrap
    *************
    基于 promise 的 HTTP 客户端 axios 则是其中非常流行的一种
    安装官方推荐的axios请求库
    npm install axios
    *************
### 6、VUE框架怎么集合axios的第三方请求库？
    推荐给大家一个中文文档 
    地址  https://www.kancloud.cn/yunye/axios/234845
    相信这个文档就足够解决一些问题了
    说一下我的集成吧，首先使用npm安装axios包
    新建一个文件用来创建axios实例，定义URL，添加请求和响应拦截器，暴露出去，在使用的api中import request就好了
    注：（我在这的时候智障的在baseURL地址少写了两个//找了两个小时错误错误类型http:****/http://****）
### 7、vue-cli3 一直运行 /sockjs-node/info?t= 不断的请求我本地的地址报错
    我这洁癖怎么收拾他呢！
    然后看看报错的错误信息后面，会有在那个位置报错的，点击文件报错位置发现在1605行这行代码报错，然后找到/node_modules/sockjs-client/dist/sockjs.js或者全局搜索这个文件（sock.js）
    将这行代码屏蔽调OK
### 8、引入bootstrap进项目，又出现问题了，网上推荐的方法根本就一窍不通，还得自己鼓捣
    简单粗暴的方法供你使用
    直接将下列代码植入到你的main.js中
    import $ from 'jquery'; // 引入JQ
    // 这里要注意一下，由于bootstrap是基于JQ的，所以你要在bootstrap引入之前引入JQ，注意
    import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // 引入bootstrap样式
    import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // 引入bootstrap的js

    window.$ = window.jQuery = $;
    然后你在运行他竟然报错，说你bootstrap中少一个文件需要你自己使用命令在install
    一开始不以为意，当我入坑之后，还是消停的听他的吧，install引入这个文件就好了
    给你提供一下这个命令不谢
    npm install --save popper.js
 ### 9、Vuex分割状态管理store.js
