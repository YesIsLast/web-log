# 3-1 vscode+vue+webpack断点调试方法
## 具体操作步骤由网友分享，我这里当一下搬运工
地址： https://blog.csdn.net/weixin_35958891/article/details/88774241

### 准备工作
    vscode和chrome更新到最新版，vscode中安装Debugger for Chrome插件
### 配置vue.config.js文件(如果没有，在根目录下新增一个)
    ```js
    module.exports = {
	configureWebpack: {
		devtool: 'source-map'
	}
    };
    ```
### 配置babel.config.js 文件
    ```js
    module.exports = {
    "env":{
    "development":{
      "sourceMaps":true,
      "retainLines":true, 
    }
  },
  presets: [
    '@vue/app'
  ]
    }
    ```
### 配置launch.json文件
   ```js
     {
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "vuejs: chrome",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}/src",
            "breakOnLoad": true,
            "sourceMapPathOverrides": {
                "webpack:///src/*": "${webRoot}/*",
                "webpack:///./src/*": "${webRoot}/*"
            }
        },
    ]
    }
   ```
### 启动项目 npm run serve

### 在项目中打好断点，F5打开调试