<template>
  <div>
      <div class="emp-font">渠道商注册</div>
      <div>
          <group  class="deepStyle">
            <x-input  class="inStyle" name="chaName" type="text"  placeholder="登陆名" v-model="chaName"  is-type="china-name"></x-input>
        </group>
        <group class="deepStyle">
            <x-input class="inStyle" name="password" type="password" placeholder="密码"  v-model="password" ></x-input>
        </group>
        <group class="deepStyle">
            <x-input class="inStyle" name="comName" type="text"  placeholder="公司名称" v-model="comName"></x-input>
        </group>
        <group class="deepStyle">
            <x-input class="inStyle" name="ein" type="text"  placeholder="税号"  v-model="ein"></x-input>
        </group>
        <group class="deepStyle">
            <x-input class="inStyle" name="contact" type="text"  placeholder="联系人"  v-model="contact" ></x-input>
        </group>
        <group class="deepStyle">
            <x-input class="inStyle"  name="phone"  placeholder="联系电话" mask="999 9999 9999" v-model="phone" :max="13" is-type="china-mobile"></x-input>
        </group>
        <group class="deepStyle">
            <x-input class="inStyle" name="address" type="text" placeholder="联系地址" v-model="address" ></x-input>
        </group>
        <div style="padding-top:10px">
            <check-icon :value.sync="demo2" type="plain"> <a href="http://klwx.choicelean.com/regprotocol.html">我同意以上注册协议</a> </check-icon>
        </div>
        <div style="padding:10px;">
            <h5 style="color:#676869">温馨提示</h5>
            <p style="color:#676869;font-size:12px">
                请输入正确的姓名以及电话，否则可能无法结佣。
                置业顾问请实名注册成为全民经纪人，发展团队成员，但不得直接推荐客户
            </p>
        </div>
        <div style="padding:10px;">
            <x-button class="weui-btn weui-btn_warn" @click.native="register">注册</x-button>
            <router-link to='/ChaLogin'>已有页面？点击登陆</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import Base from '../libs/base'
import { XInput,CheckIcon,XButton,Group} from 'vux'
import {  cheRegist,getCaptcha } from '@/request/api/login.js'
export default {
    components:{
        XInput,
        CheckIcon,
        XButton,
        Group,
    },
  data () {
    return {
      chaName: '',
      password:'',
      comName:'',
      ein:'',
      contact:'',
      phone:'18654942767',
      address:'',
      demo2:false,
    }
  },
  methods: {
      register(){
    //       alert("123");
    //       cheRegist(
              
    //       ).then(res => {
    //           console.log(res);
    //       })
         getCaptcha(this.phone).then(res => {
        if (res.code !== 0) {
          MessageBox({
            title: "提示",
            message: res.msg
          });

          this.show = true;
          clearInterval(this.timer);
          this.getVerifCode = "获取验证码";
          this.timer = null;
        }
      })

     }
  }
}
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
    .emp-font{
        font-size: 30px;
        color: crimson;
       font-weight: bold;
        text-align: center;
        font-style: italic;
    }
    .inStyle{
         border:1px solid #eee;
        border-radius: 8px;
        margin-left: 5px;
        margin-right:10px;
        width:88%;
        height:25px;
        background: #fff;

    }
</style>
