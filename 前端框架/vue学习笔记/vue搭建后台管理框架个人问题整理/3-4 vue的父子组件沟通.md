# vue 中父子组件沟通
## 1、实现数据的实时传输（数据绑定功能）
        主要使用了vue中的$emit接口，他为子组件抛出了一个自定义的指令，并且可以自定义参数，在父组件中的使用也比较简单，只需要像使用v-on:click=""这种方法一样使用即可，例如我在子组件中抛出了一个 this.$emit('update:fatherInputVal',val) fatherInputVal的指令参数为val，这是一个子组件中的变量值，那么在父组件中使用也比较简单只需要在使用子组件的位置        <demoChildComponent :fatherInputVal.sync="fatherInputValParam"></demoChildComponent>对这个抛出的指令fatherInputVal进行使用，然后自定义一个变量来对子组件中传入的值进行接收使用就好，但有两个位置一定不要忽略，子组件中自定义指令前要使用update:父组件中要使用 .sync
        官方接口介绍地址：https://cn.vuejs.org/v2/api/#vm-emit
**接下来贴一下代码**
```html
<!-- 子组件代码 -->
<template>
    <div>
        <span>子组件中的输入框(数据实时传输)：</span>
        <a-input type="text" v-model="inputVal"></a-input>
    </div>
</template>
<!-- 父组件代码 -->
<demoChildComponent :fatherInputVal.sync="fatherInputValParam"></demoChildComponent>{{"父组件接收的参数值：" + fatherInputValParam}}
```
```js
// 子组件代码
export default {
    name:"demoChildComponent",
    // 可以接收和返回父子组件之间的传参
    props:{
        fatherInputVal:{
            type:String,
        }
    },
    data(){
        return {
            inputVal:""
        }
    },
    watch:{
        // 监听输入值得变化
        inputVal:function (val,oldVal){
            console.log("查看当前准备传入父组件中的值")
            console.log(val)
            this.$emit('update:fatherInputVal',val)
        }
    },
    methods:{

    }
};
// 父组件代码
export default {
    name:'demo',
    watch:{
        
    },
    data(){
        return {
            fatherInputValParam:""
        }
    },
}

```
## 2、在父组件中执行子组件中的方法并接收返回值
    执行子组件中的方法可以使用VUE中的ref，借用一句官方的话，尽管存在 prop 和事件，有的时候你仍可能需要在 JavaScript 里直接访问一个子组件。为了达到这个目的，你可以通过 ref 特性为这个子组件赋予一个 ID 引用。
    官方解释地址： https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0
**贴代码**

子组件代码
```html
<template>
    <div>
        <span>子组件中的输入框(数据实时传输)：</span>
        <a-input type="text" v-model="inputVal"></a-input>
    </div>
</template>
```
```js
export default {
    name:"demoChildComponent",
    // 可以接收和返回父子组件之间的传参
    props:{
        fatherInputVal:{
            type:String,
        }
    },
    data(){
        return {
            inputVal:""
        }
    },
    watch:{
        // 监听输入值得变化
        inputVal:function (val,oldVal){
            console.log("查看当前准备传入父组件中的值")
            console.log(val)
            this.$emit('update:fatherInputVal',val)
        }
    },
    methods:{
        selectInputVal(){
            console.log("子组件中方法的返回值为：" + this.inputVal)
            return this.inputVal
        }
    }
};
```
父组件代码
```html
<template>
    <div>
        <h1>3.父子组件沟通</h1>
        <demoChildComponent ref="demoChildComponent" :fatherInputVal.sync="fatherInputValParam"></demoChildComponent>
        {{"父组件接收的参数值：" + fatherInputValParam}}
        <br>
        <a-button @click="demoChildComponentBtn">点击执行子组件中的方法并接收方法返回值</a-button>
        <br>
        {{ "子组件方法返回值：" + this.refdemoChildComponent }}
    </div>
</template>
```
```js

export default {
    name:'demo',
    watch:{
        
    },
    data(){
        return {
            fatherInputValParam:"", // 父子组件沟通的参数值
            refdemoChildComponent:"" // 子组件方法返回值
        }
    },
    methods: {
        // 父子组件沟通
        demoChildComponentBtn(){
            this.refdemoChildComponent = this.$refs.demoChildComponent.selectInputVal()
        }
    }
};
```

