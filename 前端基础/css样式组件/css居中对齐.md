# css居中对齐得几种方法

## 1、文字居中对齐

``` css
    .center1{
        display: table-cell;
        vertical-align: middle;
    }
    .center2{
        text-align:center
    }
```
## 2、块级元素与行内元素居中对齐
flex布局中还有其他多种多样得布局方式
    http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
``` css 
    .center1{
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
    }
    .center2{
        text-align:center
    }
```