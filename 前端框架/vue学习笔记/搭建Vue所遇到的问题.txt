
					关于在学习Vue的框架搭建时所碰到的问题汇总
										201811260346
		官方是最好的教程
-----------------------------------------------------------------------------------------------------------------------------------
两种开发形式，一种为老版本2.0一种为新版本3.0，脚手架不同使用命令不同
-----------VueCLI2.X	
	VueCLI2.X下载命令  npm install vue-cli -g
	检查是否安装成功  vue -V/vue/vue -version
	项目创建命令，使用cd指定项目要创建到的目录 vue init webpack 项目名称
	项目终端启动命令  npm run dev
	参考博客https://segmentfault.com/a/1190000008922234
	参考视频，慕课网《快速入门Web阅读器开发》课程
	Vue项目打包终端命令npm run build
	修改项目占用的端口8080为4200，防止前后一起运行端口冲突，在Vue项目中找到config文件夹下有一个index.js在其中找到port可以随意修改端口
	修改使用本地IP来访问我们本地运行的网站网址，在Vue项目中找到config文件夹下有一个index.js在其中找到host修改为0.0.0.0/127.0.0.1/localhost  就OK！
	iView组件库仅支持vue.js 2.X/1.X,如果使用的是下面的3.X创建的项目，iView组件库并不支持
	组件的使用请参考iView官网 https://www.iviewui.com/docs/guide/install
	如果使用官方的推荐工程，首先将项目在Github上下载回本地，将其项目文件重命名，使用VSCode打开，使用终端命令 npm install 安装相关依赖，使用 npm run dev运行项目
-----------VueCLI3.X
	VueCLI3.X下载命令  npm install -g @vue/cli
	项目创建命令，使用cd指定项目要创建到的目录 vue create 项目名称
	项目启动命令，npm run serve
	Vue项目打包终端命令npm run build
	修改项目运行使用端口,参考博客：https://blog.csdn.net/qq_39313596/article/details/83544745
	
