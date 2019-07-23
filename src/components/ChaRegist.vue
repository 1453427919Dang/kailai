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
            <x-input class="inStyle"  name="phone"  placeholder="联系电话" mask="999 9999 9999" v-model="phone" :max="13" is-type="china-mobile" required></x-input>
        </div>
        <div class="deepStyle">
            <x-input class="inStyle" name="address" type="text" placeholder="联系地址" v-model="address" ></x-input>
        </div>
        <!-- <div style="padding-top:10px">
            <check-icon :value.sync="demo2" type="plain"> <a href="http://klwx.choicelean.com/regprotocol.html">我同意以上注册协议</a> </check-icon>
        </div> -->
        <div style="padding:10px;">
            <x-button class="weui-btn weui-btn_warn" @click.native="register">注册</x-button>
            <router-link to='/ChaLogin'>已有页面？点击登陆</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import Base from "../libs/base";
import { XInput, CheckIcon, XButton, Group ,AlertModule,Confirm} from "vux";
import { cheRegist, getCaptcha, cheLogin } from "@/request/api/login.js";
export default {
  components: {
    XInput,
    CheckIcon,
    XButton,
    Group,
    AlertModule,
    Confirm
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
      demo2: ""
    };
  },
  methods: {
    register() {
      this.data = {
        account: this.account,
        password: this.password,
        companyName: this.companyName,
        taxNumber: this.taxNumber,
        contacts: this.contacts,
        phone: this.phone,
        address: this.address
      };
     cheRegist(this.data).then(res => {
            console.log(res);
            if (res.data.result) {
                this.$vux.alert.show({
                    title: res.data.msg,
                    content: '请去登录页登陆！',
                    buttonText: '确定',
                    hideOnBlur: true,
                    maskZIndex: 100,
                 })
                 this.$router.push({path:'/ChaLogin'})
            }else{
                this.$vux.alert.show({
                    title: res.data.msg,
                    buttonText: '确定',
                    hideOnBlur: true,
                    maskZIndex: 100,
                 })
            }
      });
      console.log(this.data);
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
</style>
