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
    3、注意：在申请开通时，需要确保输入的 Android包名或 iOS Bundle ID 必须与打包时配置的一致，否则可能会导致无法收到推送消息。
    4、离线透传时需要使用uniPush的厂商推送设置，配合推发
        华为举例
        1.注册、进入华为开发者后台https://developer.huawei.com/consumer/cn/console#/serviceCards/AppService
        2.我的应用--点击应用名称，进入应用管理 开通服务--push推送
    5、具体步骤我参考本篇博客https://blog.csdn.net/object_oriented/article/details/106695077
    6、以上内容全部配置好，uni-app的程序就实现了在线与离线消息通知
## 3、测试消息透传与推送
    1、使用uniPush的创建推送--通知消息/透传消息
    2、透传消息常用数据字段
        描述：华为透传第三次实验
        透传内容：{"title":"华为透传第三次实验","content":"发送到设备xxxx","payload":""}
        安卓配置：
            厂商通道：开启
            通知标题：华为透传第三次离线实验
            通知内容：华为透传第三次实验，消息未震动与响铃测试是否解决
            通知类型：intent        intent:#Intent;component=软件包名自行替换/io.dcloud.PandoraEntry;S.parm1=value1;S.parm2=value2;end
## 遇到的问题
    1、UniPush消息推送正常，但是没有声音和震动效果
        调整手机的软件通知消息级别