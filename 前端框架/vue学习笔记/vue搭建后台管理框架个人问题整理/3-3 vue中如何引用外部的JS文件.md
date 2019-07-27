# 在vue中如何使用外部JS文件

```js
// 此处引入方法的{}很关键 切记
import {IdCardValidate} from '../../lib/validate.js'

export default {
    methods: {
        cardValidate(event) {
            IdCardValidate(val) // 使用引入的外部文件中的函数
        }
    }
};
```
``` js

function IdCardValidate(val){
    // 外部方法
}
// 此处暴露方法也很关键
export {
    IdCardValidate
}
```