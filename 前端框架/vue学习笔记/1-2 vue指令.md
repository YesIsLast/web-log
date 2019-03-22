## vue 背景
创始人 **尤雨溪**，华人，目前就职于阿里巴巴，2014.2开源了vue.js库

    由个人维护的一个开源项目，（github）
## vue 指令
 + 指令以**v-xxx**开头
 + 数据怎么存，html代码+JSON数据，在创建一个vue实例
 + 引入了Virtual DOM(虚拟DOM)，这个虚拟DOM由什么作用，可以令页面的刷新效率更高，速度更快
## 下载vuejs
    使用npm命令 npm install vue --save

## 推荐根据视频教程和vuestudy项目与笔记一同观看学习，个人崇尚**实践是唯一检验真理的标准**，自己动手敲
    此时我使用的编辑器是HBuilder，大家随意

## 安装vue-devtools插件（调试Vue.js应用程序）
+ 官方地址 https://github.com/vuejs/vue-devtools
+ 谷歌商店，搜索vue-devtools使用由vue官方网站提供的扩展，添加至Chrome https://chrome.google.com/webstore/search/vue-devtools
+ 手动添加，可根据github上提供的方法按步骤手动添加 https://github.com/vuejs/vue-devtools
+ 也可使用视频中老师提供的配置好的压缩包解压添加至谷歌扩展程序 https://edu.51cto.com/course/10543.html
    
        我选择的是根据官方github上手动操作的教程，但是这里有两个坑记录一下
        1、npm run build 后需要更改文件 vue-devtools\shells\chrome\manifest.json中的这个字段"persistent": false,将false改为true。
        2、更改完成后保存，在Chrome扩展程序中的刷新此插件并重新运行项目，打开F12开发者工具，在控制台的导航栏中找到vue面板，出现图形化界面表示完成
+ 我调试好的工具在此repositories中vue工具中
## 生产模式/开发模式
*
    在官方网站中的API中，**全局配置**模块里可以查看到官方推荐给你的方法（devtools）
### 如何开启或关闭生产模式 || 开发模式
```js
<javascript>
//配置是否允许vue-devtools插件检查代码，开发环境设为true,生产环境设为false
Vue.config.devtools = false;
</javascript>
```
### 如何阻止生成生产提示，也就是我们控制台中的这句 
    You are running Vue in development mode.Make sure to turn on production mode when deploying for production.
    See more tips at https://vuejs.org/guide/deployment.html
```js
//阻止vue启动时生成上方的成产消息
Vue.config.productionTip = false;

