# 1-3 uni-app获取手机电量功能

## 话不多说先上代码

    原作者发布地址：https://ask.dcloud.net.cn/article/992

``` js
 // 安卓手机代码
 //注意，安卓需要配置下manifest.json文件，打开后，进入模块权限配置，在右侧的Android权限设置里勾选上android.permission.BATTERY_STATS  
 var main = plus.android.runtimeMainActivity();
 var Intent = plus.android.importClass('android.content.Intent');
 var recevier = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {
     onReceive: function(context, intent) {
         var action = intent.getAction();
         if (action == Intent.ACTION_BATTERY_CHANGED) {
             var level = intent.getIntExtra("level", 0); //电量  
             var voltage = intent.getIntExtra("voltage", 0); //电池电压  
             var temperature = intent.getIntExtra("temperature", 0); //电池温度  
             //如需获取别的，在这里继续写，此代码只提供获取电量  
             console.log("当前电量", level)
         }
     }
 });
 var IntentFilter = plus.android.importClass('android.content.IntentFilter');
 var filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
 main.registerReceiver(recevier, filter);

 // IOS代码
 var UIDevice = plus.ios.import("UIDevice");
 var dev = UIDevice.currentDevice();
 if (!dev.isBatteryMonitoringEnabled()) {
     dev.setBatteryMonitoringEnabled(true);
 }
 var level = dev.batteryLevel();
```
