# 如何重写组件库中的组件样式
## 对组件库中的样式进行覆盖

    html代码中对需要修改样式的组件的标签进行自定义一个class类
    在css代码中通过.class类加上“ > ” 指向当前组件库中组件标签的样式

### 例如Input，查看下面代码示例

```html
 <a-input type="text" placeholder="请输入用户名" v-model="loginForm.userName" class="loginInput"  size="large">
            <a-icon slot="prefix" type="user" />
            <a-icon v-if="loginForm.userName" slot="suffix" type="close-circle"/>
          </a-input>
```

```css
  /* 重写组件库中的组件样式 */
  .loginInput > .ant-input {
    background-color: rgba(255, 255, 255, 0);
    color: red;
  }
```
通过上面的代码就实现了对组件库中组件样式的重写了

## 查看明白当前所使用的组件的样式层级
  最明显得的方法就是组件库的样式使用的为class，通过css类的层级关系
  !important> inline css > id选择器 > class选择器 > tag选择器
  就可以对组件库的样式进行覆盖了