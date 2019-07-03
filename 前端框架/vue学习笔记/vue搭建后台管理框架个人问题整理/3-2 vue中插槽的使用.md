# vue 中插槽（slot）的使用
## 插槽分类
插槽是子级，数据源是父级
|插槽分类|个人理解|使用方式|
|:-----|-----|-----|-----|
|具名插槽/默认插槽|一个有别名，一个没有而已|插槽是先在`<temeplate v-slot="xx">标签中`将要写的任何东西存放到标签中，然后再要使用的位置通过`<slot name="xx"></slot>`展示你插槽中temeplate的内容|
|作用域插槽|接收prop数据，用来在子级与父级之间进行数据通信|绑定在 `<slot name="todo" v-bind:todo="todo"></slot>` 元素上的特性todo被称为**插槽prop**,在子组件中使用v-slot:defaul="x插槽自定义名称x"，使用`<slot>`中的todo数据，接收prop数据
