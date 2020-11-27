# uni-app 版本更新功能与下载进度样式
    这是一个简易demo具体接口分配需根据后台来定
# 相关插件
    没有多余插件，仅用了一个UNI-APP原生弹出框 uni-popup
    很平常的插件，自己使用官方的或者使用当前文档根目录我为你准备好的
    引入即可
# 废话不多说先上代码
```html
<template>
	<view class="">
		<!-- 更新内容 -->
		<uniPopup ref="versionContent">
			<!-- 弹出层主框架 -->
			<view class="lee-uniPopup-main" style="padding-top: 70upx;">
				<view class="lee-uniPopup-image">
					<image src="../../static/image/logo.png" mode=""></image>
				</view>
				<!-- 弹出层头部 -->
				<view class="lee-uniPopup-title-center">
					<text class="lee-font-size-40 lee-font-weight-700">发现新版本{{version}}</text>
				</view>
				<!-- 弹出层内容区 -->
				<view class="lee-uniPopup-content">
					<text class="lee-font-size-30">本次版本更新内容:</text>
					<view class="">
						<block v-for="(item,index) in contentList">
							<view class="lee-font-size-30">{{index + 1}}、{{item}}</view>
						</block>
					</view>
				</view>
				<!-- 弹出层脚部 -->
				<view class="lee-uniPopup-footer">
					<view class="lee-btn-branch" @click="closeModel('versionContent'); cancelUpdate()">
						<text class="">暂不更新</text>
					</view>
					<view class="lee-btn-master uni-border-left" @click="updating('versionContent','downloadProgress')">
						<text class="">立即更新</text>
					</view>
				</view>
			</view>
		</uniPopup>
		<!-- 下载进度 -->
		<uniPopup ref="downloadProgress" :maskClick="false">
			<!-- 弹出层主框架 -->
			<view class="lee-uniPopup-main">
				<view class="lee-uniPopup-image">
					<image src="../../static/image/logo.png" mode=""></image>
				</view>
				<!-- 弹出层头部 -->
				<view class="lee-uniPopup-title-center" style="padding: 40upx 0;">
					<text class="lee-font-size-40 lee-font-weight-700">版本更新</text>
				</view>
				<!-- 弹出层内容区 -->
				<view class="lee-uniPopup-content lee-font-size-40" style="padding: 20upx 0;">
					<text>正在为您更新，请耐心等待</text>
					<!-- 文件长度 Bytes -->
					<!-- <view>({{startPercent}}/{{endPercent}})</view> -->
					<!-- 下载进度百分比 -->
					<view>({{progressPercent}}/100%)</view>
					<progress :percent="progressPercent" :show-info="false" :duration="300" activeColor="#41A863" :active="true" active-mode="forwards"/>
				</view>
				<!-- 弹出层脚部 -->
				<view class="lee-uniPopup-footer">
					<view class="lee-btn-branch" @click="cancelUpdate()">
						<text class="">取消下载</text>
					</view>
					<view class="lee-btn-master uni-border-left" @click="closeModel('downloadProgress')">
						<text class="">后台下载</text>
					</view>
				</view>
			</view>
		</uniPopup>
		<!-- 更新完成 -->
		<uniPopup ref="downloadComplete" type="center">
			<!-- 弹出层主框架 -->
			<view class="lee-uniPopup-main">
				<!-- 弹出层头部 -->
				<view class="lee-uniPopup-title-center" style="padding: 40upx 0;">
					<text class="lee-font-size-40 lee-font-weight-700">{{version}}版本升级成功!</text>
				</view>
				<!-- 弹出层内容区 -->
				<view class="lee-uniPopup-content lee-font-size-40" style="padding: 20upx 0 ;">
					<text>版本更新已完成，请重新启动APP！</text>
				</view>
				<!-- 弹出层脚部 -->
				<view class="lee-uniPopup-footer" style="justify-content: center;padding: 40upx;">
					<button type="warn" style="width: 80%;" @tap="restartApp">立即重启</button>
				</view>
			</view>
		</uniPopup>
	</view>
</template>
```

```js
import uniPopup from "../uni-popup/uni-popup.vue"
var downloadTask
export default {
    name: "version-update",
    components: {
        uniPopup
    },
    props: {
        // apk下载地址
        apkurl: {
            type: String,
            default: "http://www.jiatairoadtransport.com/jeecg-boot/temp/%E5%98%89%E6%B3%B0%E9%A9%BE%E9%A9%B6%E5%91%98%201.6_1606100839777.6.apk"
        },
        // 更新内容列表
        contentList: {
            type: Array,
            default: function() {
                return ["解决部分已知bug", "优化页面样式", "解决部分页面bug", "修改部分遗留bug"]
            }
        },
        // 版本号
        version: {
            type: String,
            default: "1.0.0"
        },
        // 是否触发更新 (true\触发  false\不触发)
        status: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        // 触发更新状态监听
        status: function(newVal, oldVal) {
            if (newVal) {
                this.openModel('versionContent')
            }
        }
    },
    data() {
        return {
            startPercent: 0, // 已下载进度
            endPercent: 0, // 未下载进度
            progressPercent: 0, // 下载进度百分比
        }
    },
    methods: {
        // 重启app
        restartApp() {
            plus.runtime.restart()
        },
        // 打开弹出框
        openModel(ref) {
            this.$refs[ref].open()
        },
        // 关闭弹出框
        closeModel(ref) {
            this.$refs[ref].close()
        },
        // 取消更新
        cancelUpdate() {
            downloadTask.abort();
            setTimeout(()=>{
                this.closeModel('downloadProgress')
            },1000)
        },
        // 立即更新
        updating(closeRef, openRef) {
            this.closeModel(closeRef)
            this.openModel(openRef)
            downloadTask = uni.downloadFile({
                url: this.apkurl,
                success: (downloadResult) => {
                    console.log('文件下载完成', downloadResult)
                    if (downloadResult.statusCode === 200) {
                        plus.runtime.install(downloadResult.tempFilePath, {
                            force: true
                        }, () => {
                            plus.runtime.restart();
                        }, (e) => {
                            console.error(e.message);
                        })
                    }
                },
                fail: (err) => {
                    console.log("文件下载失败", err)
                },
                complete: () => {}
            })
            downloadTask.onProgressUpdate((res) => {
                this.progressPercent = res.progress
                this.startPercent = res.totalBytesWritten
                this.endPercent = res.totalBytesExpectedToWrite
                // 测试使用
                // if (res.progress >= 5) {
                // 	console.log("取消下载")
                // 	downloadTask.abort();
                // }
            });
        },
    }
}
```
```css
<style scoped>
	.lee-padding-top-80 {
		padding-top: -80upx;
	}

	.lee-padding-top-40 {
		padding-top: 40upx;
	}

	.lee-margin-tb-30 {
		marign: 30upx 0;
	}

	.lee-padding-tb-20 {
		padding: 20upx 0;
	}

	.lee-padding-tb-50 {
		padding: 50upx 0;
	}

	.lee-padding-tb-80 {
		padding: 80upx 0;
	}

	.lee-font-size-20 {
		font-size: 20upx;
	}

	.lee-font-size-30 {
		font-size: 30upx;
	}

	.lee-font-size-40 {
		font-size: 40upx;
	}

	.lee-font-size-50 {
		font-size: 50upx;
	}

	.lee-font-size-60 {
		font-size: 60upx;
	}

	.lee-font-size-80 {
		font-size: 80upx;
	}

	.lee-font-weight-700 {
		font-weight: 700;
	}

	/* 固定弹出框样式模板 */
	.lee-uniPopup-main {
		width: 90vw;
		border-radius: 15px;
		background-color: #fff;
		padding: 15upx;
	}

	.lee-uniPopup-main .lee-uniPopup-image {
		text-align: center;
		position: absolute;
		top: -80upx;
		width: 86vw;
	}

	.lee-uniPopup-image image {
		width: 150upx;
		height: 150upx;
	}

	.lee-uniPopup-main .lee-uniPopup-title {
		font-size: 40upx;
		font-weight: 600;
		border-bottom: solid 1px #f0f0f0;
		margin: 20upx 0;
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: space-between;
	}

	.lee-uniPopup-main .lee-uniPopup-title-center {
		font-size: 40upx;
		font-weight: 600;
		border-bottom: solid 1px #f0f0f0;
		margin: 20upx 0;
		padding: 20upx 0;
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
	}

	.lee-uniPopup-main .lee-uniPopup-close {
		width: 20upx;
		height: 20upx;
		font-size: 44upx;
		font-weight: 300;
		color: #dd524d;
		position: relative;
		right: 0;
		left: -35upx;
		top: -40upx;
	}

	.lee-uniPopup-main .lee-uniPopup-content {
		width: auto;
		margin-left: 15upx;
		margin-right: 15upx;
		margin-bottom: 20upx;
		min-height: 100upx;
	}

	.lee-uniPopup-main .lee-uniPopup-footer {
		border-top: solid 1px #f0f0f0;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		font-size: 14px;
		min-height: 45px;
		padding-top: 20upx;
	}

	.lee-uniPopup-footer .lee-btn-branch {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.lee-uniPopup-footer .lee-btn-master {
		color: #4cd964;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex: 1;
		border-left: solid 1px #f0f0f0;
	}
</style>
```

# 简单介绍一下
    看到这个位置基本代码都熟悉了
    说一下我的实现思路吧
    1、需要展示版本更新内容、需要有下载进度展示、需要提示下载完成
    2、本意是将版本更新封装为一个组件，外部调用
    3、控制父组件传进来的参数，就是我都需要什么参数 { apk下载地址、更新内容列表、版本号、是否触发更新 (true\触发  false\不触发) }
    4、监听父组件的触发更新变量来控制是否执行版本更新
    5、使用uni-downloadFile来进行下载安装包并监控下载进度
    6、使用html5plus来进行对手机的控制安装与重启plus.runtime.install、plus.runtime.restart()
    7、https://www.html5plus.org/doc/
    8、弹出框样式可自行根据之前的文章来进行调整 https://github.com/YesIsLast/web-log/blob/master/uni-app/1-5%20uni-app%E6%89%8B%E6%92%B8%E5%BC%B9%E5%87%BA%E6%A1%86%E7%BB%84%E4%BB%B6.md
    9、下载与下载进度控制请查看uni-app官方api文档 https://uniapp.dcloud.io/api/request/network-file?id=downloadfile
	10、封装完更新组件，怎么使用我就不多BB了OVER