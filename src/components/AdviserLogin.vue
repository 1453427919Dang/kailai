<template>
  <div>
      <div class="emp-font">
          <img src="http://klwx.choicelean.com:80/images/logo.png" alt="">
      </div>
      <div style="padding:15px">
        <div>
            <x-input class="inStyle"  name="emptyPhone"  placeholder="请输入用户名称"  required  v-model="adviseName"></x-input>
        </div>
         <div>
            <x-input class="inStyle" name="password" type="password" placeholder="请输入用户密码"  v-model="password" ></x-input>
        </div>   
        <div style="padding:10px;">
            <x-button class="weui-btn weui-btn_warn" style="color:#fff"  @click.native="goto">登陆</x-button>
            <router-link to='/EmpRegist'>没有账号？点击注册</router-link>
        </div>
      </div>
      <div>
          <p class="trademask">
              © 凯莱上海 版权所有.
          </p>
      </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import Base from "../libs/base";
import { XInput, CheckIcon, XButton, Selector, Group } from "vux";
import { adviserLogin } from "@/request/api/login.js";
import qs from "qs";
export default {
  components: {
    XInput,
    CheckIcon,
    XButton,
    Group,
    Selector
  },
  data() {
    return {
      adviseName: "",
      password: ""
    };
  },
  created(){
    this.adviseName = localStorage.getItem("userId")
    this.password =  localStorage.getItem("userPassword")
    // let code = this.getUrlKey("code");
    // if (code) {
    //   if (localStorage.getItem("openid") == "") {
    //     getUserInfo(code).then(res => {
    //       if (res.data.result) {
    //         localStorage.setItem("openid", res.data.data.openId);
    //       } else {
    //         alert("错误" + res.data.msg);
    //       }
    //     });
    //   }
    // } else {
    //   this.getCodeApi("123");
    // }
  },
  methods: {
    //  getUrlKey(name) {
    //   //获取url 参数
    //   return (
    //     decodeURIComponent(
    //       (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
    //         location.href
    //       ) || [, ""])[1].replace(/\+/g, "%20")
    //     ) || null
    //   );
    // },
    // getCodeApi(state) {
    //   //获取code
    //   let urlNow = encodeURIComponent(window.location.href);
    //   let scope = "snsapi_userinfo"; //snsapi_userinfo   //静默授权 用户无感知
    //   let appid = "wxd56bc11d7bdf8b23";
    //   let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlNow}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`;
    //   window.location.replace(url);
    // },
    goto() {
      let data = {
        userId: this.adviseName,
        password: this.password,
        dNo: "",
        // 
        dToken:localStorage.getItem("openid") ,
      };
      
      adviserLogin(qs.parse(data)).then(res => {
        console.log(res);
        if (res.data.result) {
          localStorage.setItem("userId", this.adviseName);
          localStorage.setItem("userPassword", this.password);
          this.$router.push({
            path: "/adviser",
            query: { emplayessList: res.data.data }
          });
        } else {
          this.$vux.alert.show({
            title: res.data.msg,
            content: "请重新登陆",
            buttonText: "确定",
            hideOnBlur: true,
            maskZIndex: 100
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.emp-font {
  font-size: 30px;
  color: crimson;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
}

.inStyle {
  border: 1px solid #eee;
  border-radius: 8px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  width: 100%;
  height: 45px;
  background: #fff;
}
.trademask {
  text-align: center;
  margin-top: 20%;
  color: rgba(0, 0, 0, 0.6);
}
</style>
