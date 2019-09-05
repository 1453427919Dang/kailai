<template>
  <div>
      <div class="emp-font">项目列表</div>
      <div>       
        <div>
            <button class="weui-btn weui-btn_warn" v-for="project in projects" :key="project.key"  @click="scanQRCode(project.key)">
              <!-- <input  :value="project.key"  v-show="false"> -->
              {{project.value}}
            </button>
              <!-- {{project.value}} -->
            <!-- <checker   v-model="projectIds" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
            <checker-item  style="display:block;margin-top:5px;" v-for="project in projects" :key="project.key" :value="project.key" @click="scanQRCode">{{project.value}}</checker-item>
          </checker> -->
        </div>
      </div>
  </div>
</template>

<script>
import Base from "../libs/base";
import axios from "axios";
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
import {
  XInput,
  CheckIcon,
  XButton,
  Group,
  AlertModule,
  Confirm,
  Checker,
  CheckerItem
} from "vux";
import {
  cheRegist,
  getCaptcha,
  cheLogin,
  getProjectList,
  sendMessage
} from "@/request/api/login.js";
export default {
  components: {
    XInput,
    CheckIcon,
    XButton,
    Group,
    AlertModule,
    Confirm,
    Checker,
    CheckerItem
  },
  data() {
    return {
      data: {},
      account: "",
      password: "",
      companyName: "",
      taxNumber: "",
      contacts: "",
      phone: "",
      address: "",
      demo2: "",
      demo1Checkbox: "",
      file: "",
      projectIds: [],
      projects: [],
      projectList: [],
      verfication: ""
    };
  },
  created() {
    let companyId = {
      companyId: "100103"
    };
    getProjectList(companyId).then(res => {
      console.log(res);
      if (res.data.result) {
        this.projects = [];
        this.projectList = res.data.data;
        for (var i = 0; i < this.projectList.length; i++) {
          let project = {};
          project.key = this.projectList[i].id;
          project.value = this.projectList[i].name;
          this.projects.push(project);
        }
        console.log(this.projects);
      }
    });
  },
  methods: {
    scanQRCode(id) {
      // alert(id);
      localStorage.setItem("projectId", id);
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
.deepStyle /deep/ .weui-cells {
  margin-top: 1.17647059em;
  background-color: #e7e7e7;
  line-height: 1.41176471;
  font-size: 14px;
  overflow: hidden;
  position: relative;
}
.emp-font {
  font-size: 30px;
  color: crimson;
  font-weight: bold;
  text-align: center;
  font-style: italic;
}
.inStyle {
  border: 1px solid #eee;
  border-radius: 8px;
  margin-left: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 97%;
  height: 45px;
  background: #fff;
}
.inStyle1 {
  border: 1px solid #eee;
  border-radius: 8px;
  margin-left: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 97%;
  height: 45px;
  background: #fff;
  padding-top: 10px;
  padding-left: 3px;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
  background: #fff;
}
.demo1-item-selected {
  border: 1px solid crimson;
}
.btn {
  background-color: rgba(230, 67, 64);
  color: #fff;
  width: 30%;
  height: 40px;
  margin-left: 4%;
  margin-top: -5px;
}
.put {
  height: 40px;
  margin-top: 5px;
  width: 60%;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-left: 5px;
}
.main {
  overflow: hidden;

  position: absolute;
}

</style>
