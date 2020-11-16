# uni-app 手撸弹出框组件

    在你查看下面的代码时，假设你对uni-popup已经有了一部分的使用经验
    随拿随用，复制粘贴干就完了
## 先上效果图
    
## 包含手撸的布局思想，实现方法，干货代码
    1、设计思路
        1. 需要一个弹出框，并且包含页头、内容区、页脚三大模块，竖列布局
        2. 对页头与页脚需要使用边框线来进行区分
        3. 页脚需要(确定、取消)两个按钮，平分整个页脚宽度，使用不同颜色区分
        4. 页头需要一个标题来对当前弹出框进行描述解释，需要一个关闭按钮红色的
    2、实现方法
        1. 集成uni-popup组件，将弹出框分上中下三部分，上下部分使用边框线
        2. 页脚部分使用flex布局，并用 flex:1 来对两个按钮左右平分上下居中，取其中一个按钮进行左/右的边框线，进行分隔
        3. 页头需要两个部分，一、标题  二、关闭按钮 ，使用flex布局align-items: center;justify-content: space-between ,进行两边靠并垂直居中,使用相对定位将关闭按钮靠至弹出框的右上方，别忘了改成红色
        4. 我的关闭按钮使用的是iconfont的字体图标，当然你也可以用设计好的图片，建议使用字体图标，方便！
## 上 html 代码
```html
<uniPopup ref="uniPopup">
  <!-- 弹出层主框架 -->
  <view class="lee-uniPopup-main">
    <!-- 弹出层头部 -->
    <view class="lee-uniPopup-title">
      <view class="">
        <text>标题1</text>
      </view>
      <text class="iconfont icon-cha1 lee-uniPopup-close"></text>
    </view>
    <!-- 弹出层内容区 -->
    <view class="lee-uniPopup-content">
      <text>弹出层内容区，表单查看区</text>
    </view>
    <!-- 弹出层脚部 -->
    <view class="lee-uniPopup-footer">
      <view class="lee-btn-branch">
        <text class="">取消</text>
      </view>
      <view class="lee-btn-master uni-border-left">
        <text class="">确定</text>
      </view>
    </view>
  </view>
</uniPopup>
```

## 上 css 代码

```css
/* 固定弹出框样式模板 */
.lee-uniPopup-main {
  width: 90vw;
  border-radius: 15px;
  background-color: #fff;
  padding: 15upx;
}

.lee-uniPopup-main .lee-uniPopup-title {
  font-size: 36upx;
  border-bottom: solid 1px #f0f0f0;
  margin: 20upx 0;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
}

.lee-uniPopup-main .lee-uniPopup-close {
  width: 20upx;
  height: 20upx;
  font-size: 44upx;
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
}

.lee-uniPopup-main .lee-uniPopup-footer {
  border-top: solid 1px #f0f0f0;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  font-size: 14px;
  height: 45px;
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
```
