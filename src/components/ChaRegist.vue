<template>
  <div>
      <div class="emp-font">渠道商注册</div>
      <div>
          <div class="deepStyle">
            <x-input  class="inStyle" name="account" type="text"  placeholder="登陆名" v-model="account"  is-type="china-name" required></x-input>
        </div>
        <div class="deepStyle">
            <x-input class="inStyle" name="password" type="password" placeholder="密码"  v-model="password" required></x-input>
        </div>
        <div class="deepStyle">
            <x-input class="inStyle" name="companyName" type="text"  placeholder="公司名称" v-model="companyName" required></x-input>
        </div>
        <div class="deepStyle">
            <x-input class="inStyle" name="taxNumber" type="text"  placeholder="税号"  v-model="taxNumber" required></x-input>
        </div>
        <div class="deepStyle">
            <x-input class="inStyle" name="contacts" type="text"  placeholder="联系人"  v-model="contacts"  required></x-input>
        </div>
        <div class="deepStyle">
            <x-input class="inStyle"  name="phone"  placeholder="手机号" mask="999 9999 9999" v-model="phone" :max="13" is-type="china-mobile" required></x-input>
        </div>
        <div class="deepStyle">
            <x-input class="inStyle" name="address" type="text" placeholder="联系地址" v-model="address" ></x-input>
        </div>
        <div class="deepStyle">
          <input class="inStyle1" type="file" @change="uploadFile($event)" multiple="multiple"/>
        </div>
        <!-- <div style="padding-top:10px">
            <check-icon :value.sync="demo2" type="plain"> <a href="http://klwx.choicelean.com/regprotocol.html">我同意以上注册协议</a> </check-icon>
        </div> -->
        <div class="deepStyle">
            <checker   v-model="projectIds" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
            <checker-item style="margin-left:5px;margin-top:5px" v-for="project in projects" :key="project.key" :value="project.key">{{project.value}}</checker-item>
          </checker>
        </div>
        <div class="deepStyle" style="margin-top:5px">
            <!-- <div class="inStyle1"> -->
              <input type="text" class="put" v-model="verfication"><button class="btn" @click="sendMessage">发送验证</button>
            <!-- </div> -->
        </div>
        <div style="padding:10px;">
            <x-button class="weui-btn weui-btn_warn" @click.native="register">注册</x-button>
            <router-link to='/ChaLogin'>已有页面？点击登陆</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import Base from "../libs/base";
import axios from "axios";
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
    uploadFile: function(event) {
      console.log(event)
       this.file=event.target.files[0]
      var reader = new FileReader(); //获取input的图片file值
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files[0]);
      reader.onload = () => {
        console.log("file 转 base64结果：" + reader.result);
        this.file = reader.result.split(",")[1];
        console.log(this.file);
      };
    },
    sendMessage() {
      let strRand = "";
      for (var i = 0; i < 6; i++) {
        strRand += Math.floor(Math.random() * 10);
      }
      console.log(strRand);
      localStorage.setItem("strRand", strRand);
      let data = {
        mobile: this.phone.replace(" ", "").replace(" ", ""),
        random: strRand
      };
      if (this.phone != "") {
        sendMessage(data).then(res => {
          this.$vux.alert.show({
            title: res.data.msg,
            buttonText: "确定",
            hideOnBlur: true,
            maskZIndex: 100
          });
        });
      } else {
        this.$vux.alert.show({
          title: "请输入电话号码",
          buttonText: "确定",
          hideOnBlur: true,
          maskZIndex: 100
        });
      }
    },
    register() {
      this.data = {
        jsonData: {
          account: this.account,
          password: this.password,
          companyName: this.companyName,
          taxNumber: this.taxNumber,
          contacts: this.contacts,
          phone: this.phone.replace(" ", "").replace(" ", ""),
          address: this.address,
          ImageBase64Str: this.file,
          projectIds: this.projectIds.join(",")
        }
      };
      console.log(this.data);
      // if (this.verfication == localStorage.getItem("strRand")) {
      cheRegist(this.data).then(res => {
        console.log(res);
        if (res.data.result) {
          this.$vux.alert.show({
            title: res.data.msg,
            content: "请去登录页登陆！",
            buttonText: "确定",
            hideOnBlur: true,
            maskZIndex: 100
          });
          this.$router.push({ path: "/ChaLogin" });
        } else {
          this.$vux.alert.show({
            title: res.data.msg,
            buttonText: "确定",
            hideOnBlur: true,
            maskZIndex: 100
          });
        }
      });
      // } else {
      // this.$vux.alert.show({
      //   title: "验证码错误",
      //   buttonText: "确定",
      //   hideOnBlur: true,
      //   maskZIndex: 100
      // });
      // }
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

.file {
  position: absolute;

  z-index: 200;

  margin-left: -200px;

  opacity: 0;

  filter: alpha(opacity=0);

  margin-top: -50px;
}
</style>
