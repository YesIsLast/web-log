# 4-3 vue v-for冲突与flex布局

## 在vue的虚拟DOM中v-for标签与flex布局

    当使用flex布局在v-for使用的标签上
    会引发等比划分v-for
    就会引起每个for的内容是平分父元素容器的
    如果for内容占据空间过多就会引发内容溢出

## 解决方法

    使用flex:none
    取消flex布局的等比划分父元素容器空间

## 遇到的另一个题外问题

    v-for的父元素布局与页面同等级父元素划分页面区域失衡
    解决办法：将二者外层包一层父元素就解决了

## 部分代码

``` html
        <body>
            <div style="display:flex;flex-direction:column">
                <div>
                    比如页面头的容器
                </div>
                <div>
                    <div>
                        比如页面条件搜索的容器
                    </div>
                    <div v-for="(item, index) in list" :key="index" style="flex:none">
                        <div>某些超出父元素的容器</div>
                    </div>
                </div>
            </div>
        </body>
```
