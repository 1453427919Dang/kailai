<template>
  <div>
      <div class="emp-font">
          <img src="http://klwx.choicelean.com:80/images/logo.png" alt="">
      </div>
      <div>
        <div>
            <x-input class="inStyle"  name="phoneNumber"  placeholder="登录名"  v-model="phoneNumber" required></x-input>
        </div>
         <div>
            <x-input class="inStyle" name="password" type="password" placeholder="请填写数字密码"  v-model="password" required></x-input>
        </div>
        <div style="padding:10px;">
            <x-button class="weui-btn weui-btn_warn"  @click.native="login">登陆</x-button>
            <router-link to='/ChaRegist'>没有账号？点击注册</router-link>
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
import Base from "../libs/base";
import { XInput, CheckIcon, XButton } from "vux";
import { getCaptcha, cheLogin } from "@/request/api/login.js";
import qs from "qs";
export default {
  components: {
    XInput,
    CheckIcon,
    XButton
  },
  data() {
    return {
      phoneNumber: "",
      password: ""
    };
  },
  created() {
    this.phoneNumber = localStorage.getItem("chaId");
    this.password = localStorage.getItem("chaPassword");
  },
  methods: {
    login() {
      let data = {
        loginName: this.phoneNumber,
        password: this.password
      };
      cheLogin(qs.parse(data)).then(res => {
        console.log(res);
        if (res.data.result) {
          localStorage.setItem("chaId", this.phoneNumber);
          localStorage.setItem("chaPassword", this.password);
          let response = res.data.data;
        //   localStorage.setItem("auditList", response);
        //   console.log(localStorage.getItem("auditList"));
          this.$router.push({
            path: "/distributors",
            query: {
              channelId: response.id,
              channelName: response.accountName,
              auditList: response.auditList,
            }
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
  width: 97%;
  height: 45px;
  background: #fff;
}
.trademask {
  text-align: center;
  margin-top: 20%;
  color: rgba(0, 0, 0, 0.6);
}
</style>
