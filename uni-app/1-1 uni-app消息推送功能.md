# 1-1 uni-app消息推送功能

    一个不厌其烦的注释，请牢记
    当前项目的所有内容，均为个人的经验经历后，所记录在案
    其中存在引用外部博客来解释知识点，如有冒犯请及时留言联系我

*阅读以下内容时默认你已经了解前几章的内容步骤

## 1、 项目框架配置

    获取CID设备标识符方法 plus.push.getClientInfo().clientid

    manifest.json文件中找到App模块配置，选中push(消息推送)与uniPush
    /* 模块配置 */
        "modules" : {
            "Maps" : {},
            "Push" : {
                // unipush配置：https://dev.dcloud.net.cn/uni/push?appid=__UNI__9B2759C&type=0
                // 在点击应用进入应用配置后选择uniPush--配置管理--应用配置，就能查看当前app的应用配置，对应替换下列内容就好
                "igexin" : {
                    "appid" : "QtPGmPJaqaADVSxPkG37E2", // 
                    "appkey" : "ORjsNg4fLY5fCzx7VIKBl7",
                    "appsecret" : "E5ILuQEQSG9Z5UBDstY5y9"
                }
            }
        },

## 2、uni-app开发者后台配置

    1、使用 HBuilder 账号登录 开发者中心 ，登录后会进入“我创建的应用”列表
    开通UniPush推送服务
    2、点击要操作的应用的应用名称，进入应用管理页面，点击左侧导航中的“Uni Push”-“Uni Push”，进入 Uni Push 设置页面。
    3、注意：在申请开通时，需要确保输入的 Android包名必须与打包时配置的一致，否则可能会导致无法收到推送消息。
    4、android应用签名(SHA1格式): 查看证书得SHA1码，keytool -list -v -keystore {your_app}.keystore
    5、查看时需要输入证书密码，就是在创建证书时设置得密码
    6、离线透传时需要使用uniPush的厂商推送设置，配合推发,如不进行配置厂商，可能导致透传消息失败
        华为举例
        1.注册、进入华为开发者后台https://developer.huawei.com/consumer/cn/console#/serviceCards/AppService
        2.我的应用--点击应用名称，进入应用管理 开通服务--push推送
    7、具体步骤我参考本篇博客https://blog.csdn.net/object_oriented/article/details/106695077
    8、以上内容全部配置好，uni-app的程序就实现了在线与离线消息通知

## 3、测试消息透传与推送

    1、使用uniPush的创建推送--通知消息/透传消息
    2、首先需要在app得登录页或者app.vue中获取当前设备得唯一标识符(CID)

``` js
onShow: function() {
    console.log("当前设备id：" + plus.push.getClientInfo().clientid)
},
```
    3、记录设备CID使用uniPush后台进行指定CID用户进行测试推送
    4、透传消息常用数据字段
        描述：华为透传第三次实验
        透传内容：{"title":"华为透传第三次实验","content":"发送到设备xxxx","payload":"","type":"1","status":true}
        安卓配置：
            厂商通道：开启
            通知标题：华为透传第三次离线实验
            通知内容：华为透传第三次实验，消息未震动与响铃测试是否解决
            通知类型：intent        intent:#Intent;action=android.intent.action.oppopush;launchFlags=0x14000000;component=软件包名自行替换/io.dcloud.PandoraEntry;S.UP-OL-SU=true;S.title=通知标题23;S.content=通知内容23;S.payload=test;end
            
            S.payload=test;为附加参数，非必填，仅在需要使用消息传递参数时使用

## 遇到的问题

    1、UniPush消息推送正常，但是没有声音和震动效果
        调整手机的软件通知消息级别
    2、全部配置完了，离线推送还是没有生效
        重新打包apk安装或重新打包基座
    3、华为应用未在项目下，无法使用推送服务
        找到已创建的项目或新建项目，选择已有的应用即可关联
    4、SHA256码忘记填了，WEB推送配置忘记开了
        SHA256码填入网址在：我的项目-项目设置-常规-应用-SHA256证书指纹
        WEB推送配置网址在：我的应用-运营-推送服务-配置-服务状态
    5、当使用离线透传时在华为手机上点击消息，接收不到intent的传递参数(离线透传接收不到参数)
        检查app.vue中对两个中情况(click/receive)的监听代码
## 本人实现此功能并测试通过后的代码(可以参考)
```js
<script>
	export default {
		onLaunch: function() {
			console.log("获取所有系统通知消息", plus.push.getAllMessage())
			// #ifdef APP-PLUS  
			const that = this;
			// 处理推送消息业务逻辑
			const _handlePush = function(message) {
				// TODO  
				console.log("推送消息返回值message", message)
				// 业务逻辑处理代码
				setTimeout(function() {
					uni.showToast({
						title: message.title,
						icon: "none",
						duration: 2000
					});
					// 指定页面跳转
					uni.navigateTo({
						url: '/pages/assigning/list/list'
					})
				}, 3000)
			};
			plus.push.addEventListener('click', _handlePush); // 用户点击系统通知栏中的消息，APP启动或者激活到前台运行，触发click事件。
			plus.push.addEventListener('receive', _handlePush); // 客户端接收到透传消息时（在系统通知栏中不显示消息），触发receive事件。
			// #endif  
		},
		onShow: function() {
			plus.device.setWakelock(true);
			// console.log("设置app角标数值")
			// plus.runtime.setBadgeNumber(0); // 清空app角标数值
			console.log("当前设备cid：" + plus.push.getClientInfo().clientid)
		},
		onHide: function() {

		}
	};
</script>
```