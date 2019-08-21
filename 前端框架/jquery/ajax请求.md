# ajax请求
## 




















## ajax一个完整的请求例子
``` js
// 其他Ajax操作可查看官方api接口文档  https://www.jquery123.com/category/ajax/
$.ajax({
    url:"http://www.microsoft.com",    //请求的url地址
    dataType:"json",   //返回格式为json
    async:true,//请求是否异步，默认为异步，这也是ajax重要特性
    data:{"id":"value"},    //参数值
    type:"POST",   //请求方式
    beforeSend:function(){
        //请求前的处理
    },
    success:function(req){
        //请求成功时处理
    },
    complete:function(){
        //请求完成的处理
    },
    error:function(){
        //请求出错处理
    },
});
```