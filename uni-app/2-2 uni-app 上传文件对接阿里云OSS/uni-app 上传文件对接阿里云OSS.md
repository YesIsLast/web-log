# uni-app 上传文件对接阿里云 OSS

# 先上代码 - 亲手实践成功(仅为 demo，实际应用请自行封装)

```html
<view>
  <button type="primary" @tap="uploadFileOSS">上传</button>
  <image :src="tmpImgurl" mode=""></image>
</view>
```

```js
import { Base64 } from "../../common/base64.js";
import crypto from "../../node_modules/crypto-js/crypto-js.js";
export default {
  data() {
    return {
      tmpImgurl: "",
    };
  },
  methods: {
    uploadFileOSS() {
      // 上传OSS相关配置变量
      let host = "https://wozuitiancai.oss-cn-beijing.aliyuncs.com/"; // 存储空间的访问域名
      let accessKeySecret = "asdoijaadsoasdnaksdioqw1452kj"; // 你自己的OSS accessKeySecret
      let accessKeyId = "asdijanmnj54109fanmfkqskj"; // 你自己的OSS accessKeyId
      let policy = this.getPolicyBase64(); // 请求的base64签名
      let signature = this.signature(policy, accessKeySecret);
      let ossFilePath = "test/" // 上传到OSS的文件路径
      // 调取相机选择图片
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ["compressed"],
        // sourceType: ["album"], 如需选择相册或直接拍摄请查看uni-app官方接口文档 https://uniapp.dcloud.io/api/media/image?id=chooseimage
        success: (res) => {
          // 设置文件名称(毫秒级时间戳格式)
          let osskey = ossFilePath + new Date().getTime() + ".jpg"; // 设置文件路径名称
          uni.uploadFile({
            url: host, // 输入你的 bucketname.endpoint
            filePath: res.tempFilePaths[0],
            name: "file",
            formData: {
              key: osskey,
              policy: policy, // 输入你获取的policy签名
              OSSAccessKeyId: accessKeyId, // 输入你的AccessKeyId
              success_action_status: "200", // 设置上传成功，默认会返回204
              signature: signature, // 输入你获取的signature签名
            },
            success: (ossres) => {
              console.log("success", ossres);
              console.log("拼接上传成功的图片地址", host + ossFilePath);
            },
            fail: (err) => {
              console.log("err", err);
            },
          });
        },
      });
    },
    getPolicyBase64() {
      let date = new Date();
      let maxSize = 50; // 限制上传文件大小(M)。
      let timeOut = 1; // 参数的生效时间
      // 设置policy签名过期时间。
      date.setHours(date.getHours() + timeOut);
      let srcT = date.toISOString();
      const policyText = {
        expiration: srcT,
        conditions: [["content-length-range", 0, maxSize * 1024 * 1024]],
      };
      return Base64.encode(JSON.stringify(policyText));
    },
    signature(policy, accessKeySecret) {
      return crypto.enc.Base64.stringify(
        crypto.HmacSHA1(policy, accessKeySecret)
      );
    },
  },
};
```
# 使用相关
    1、参考文档 阿里云-oss-微信小程序直传实践 (https://help.aliyun.com/document_detail/92883.html?spm=a2c4g.11186623.6.1711.66b255c1zMqfBp)
    2、需要引入两个插件分别为 js-base64  crypto-js
        1· npm install --save js-base64
        2· npm install crypto-js
        3· 具体使用方式请上npm官方插件地址文档查看 https://www.npmjs.com/
    3、也可手动引入插件包，插件存放到当前文档的根目录，自行取走
    4、OSS配置文件变量，建议单独存放文件中，方便修改配置，或将OSS上传单独封装为组件