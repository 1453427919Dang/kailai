<template>
  <div>
      <div class="box">
          <flexbox>
            <flexbox-item><div class="flex-demo" style="display:inner-block"><img width="100" height="100"  style="padding-left:10px"   src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558932077919&di=a377be2a73e4b2ea94bb8340f2c8e963&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201605%2F07%2F20160507191419_J2m8R.thumb.700_0.jpeg" alt="">
            <span style="font-size:22px; padding-left:10px">{{adviserList.userName}}</span>
            </div>
           
            </flexbox-item>
        </flexbox>
         <flexbox>
            <flexbox-item><div class="flex-demo" style="display:inner-block">
            </div>
            </flexbox-item>
            <flexbox-item>
              <!-- <div class="flex-demo" style="padding-left:10px">
                <span>推荐人数</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>总佣金</span>
              </div> -->
            </flexbox-item>
        </flexbox>
        <flexbox>
            <flexbox-item><div class="flex-demo" style="display:inner-block">
            </div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demo" style="padding-left:10px">
                  <span>
                    <img width="30" height="30" src="../assets/man.png" alt="">
                  3</span>
                  <span><img width="30" height="30" src="../assets/xian.png" alt=""></span>
                <span>
                  <img width="30" height="30" src="../assets/money.png" alt="">
                  100
                  </span>
              </div>
            </flexbox-item>
        </flexbox>
      </div>
      <div>
      <button class="weui-btn weui-btn_warn" @click="scanQRCode">
        <img src="../assets/scan.png" alt="" width="30" height="30"> 
        <span class="font-style"> 我的扫描</span>
        </button>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";
import { Flexbox, FlexboxItem, Divider } from "vux";
import wx from "weixin-js-sdk";
import $ from "jquery";
let url = location.href;
let adviserUrl = url.split("#")[0];
console.log(adviserUrl);
$.ajax({
  url:
    "http://erp.king-land.com:90/ChannelWebService/Service.asmx/WeiXinCodeScan",
  data: {
    // 具体参数看后台给你的文档，我的只需要一个url
    url: adviserUrl
    // 这里是当前页面的url，一定要 location.href 获取，不然签名会无效。
  },
  success: function(res) {
    // res 返回的签名等数据
    this.wexinData = res.data;
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: this.wexinData.appId, // 必填，公众号的唯一标识
      timestamp: this.wexinData.timestamp, // 必填，生成签名的时间戳
      nonceStr: this.wexinData.nonceStr, // 必填，生成签名的随机串
      signature: this.wexinData.signature, // 必填，签名
      jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表
    });
  }
});

wx.ready(function() {
  // config信息验证成功后会执行ready方法,所有接口调用都必须在config接口获得结果之后
  // config 是一个客户端的异步操作,所以如果需要在页面加载时调用相关接口,则须把相关接口放在ready函数中调用来确保正确执行.对于用户触发是才调用的接口,则可以直接调用,不需要放在ready函数中
});
wx.error(function(res) {
  // config 信息验证失败会执行error函数,如签名过期导致验证失败,具体错误信息可以打开config的debug模式查看,也可以在返回的res参数中查看,对于SPA可以在这里更新签名
  alert("配置验证失败: " + res.errMsg);
});
wx.scanQRCode({
  needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
  scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
  success: function(res) {
    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
  }
});
// const scanQRCode = fn => {

// };
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Divider
  },
  data() {
    return {
      adviserList: {},
      adviserId: "",
      wexinData: {}
    };
  },
  created() {
    this.adviserList = this.$route.query.emplayessList;
    this.adviserId = this.adviserList.userCode;
  },
  methods: {
    useqrcode() {
      this.$router.push({ path: "/qr" });
    },
    scanQRCode() {
      wx.scanQRCode({
        // 默认为0，扫描结果由微信处理，1则直接返回扫描结果
        needResult: 0,
        desc: "scanQRCode desc",
        success(res) {
          console.log(res.resultStr);
        }
      });
    }
  }
};
</script>

<style scoped>
.box {
  border: 1px solid #fff;
  border-radius: 8px;
  height: 180px;
  width: 93%;
  padding: 10px;
  margin: 20px 15px;
  background: #fff;
}

button.weui-btn {
  width: 45%;
  height: 100px;
  display: inline-block;
  margin: 2%;
  font-size: 14px;
}

.font-style {
  display: block;
  text-align: center;
  width: 100%;
}
.mask {
  width: 100%;
  height: 100%;
  vertical-align: middle;
  text-align: center;
  line-height: 100%;
  bottom: -270px;
  position: fixed;
  z-index: 998;
}
</style>
