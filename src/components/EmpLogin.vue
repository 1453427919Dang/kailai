<template>
  <div>
      <div class="emp-font">
          <img src="http://klwx.choicelean.com:80/images/logo.png" alt="">
      </div>
      <div style="padding:15px">
        <div>
            <x-input class="inStyle"  name="emptyPhone"  placeholder="手机号码" mask="999 9999 9999"  :max="13" is-type="china-mobile" required  v-model="phoneNumber"></x-input>
        </div>
         <div>
            <x-input class="inStyle" name="password" type="password" placeholder="请填写数字密码"  v-model="password" ></x-input>
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
import QRCode from 'qrcodejs2';
import Base from '../libs/base'
import { XInput,CheckIcon,XButton, Selector, Group,} from 'vux'
import {  EmpLogin } from "@/request/api/login.js"
import qs from	'qs'
export default {
     components:{
        XInput,
        CheckIcon,
        XButton,
        Group,
        Selector,
    },
  data () {
    return {
      phoneNumber: '',
      password:'',
    }
  },
  created(){
      this.phoneNumber = localStorage.getItem("empId")
    this.password =  localStorage.getItem("empPassword")
  },
  methods: {
      goto(){
          let data={
              "loginName": this.phoneNumber.replace(' ','').replace(' ',''),
	            "password": this.password
          }
           EmpLogin(qs.parse(data)).then(res => {
               console.log(res);
               if(res.data.result){
                   localStorage.setItem("empId", this.phoneNumber);
                    localStorage.setItem("empPassword", this.password);
                   let response = res.data.data;
                   console.log(response.pName);
                   this.$router.push({path:'/emplayess',query:{emplayessId:response.id,emplayessName:response.pName,canReport:response.canReport,statusName:response.StatusName,auditReason:response.auditReason}})
               }else{
                   this.$vux.alert.show({
                    title: res.data.msg,
                    content: '请重新登陆',
                    buttonText: '确定',
                    hideOnBlur: true,
                    maskZIndex: 100,
                 })
               }
           })
          
      }

  }
}
</script>

<style scoped>
    .emp-font{
        font-size: 30px;
        color: crimson;
       font-weight: bold;
        text-align: center;
        margin: 20px 0;
    }

    .inStyle{
        border:1px solid #eee;
        border-radius: 8px;
        margin-left: 5px;
        margin-right: 5px;
        margin-bottom: 10px;
        width:100%;
        height: 45px;
        background: #fff;

    }
    .trademask {
        text-align: center;
        margin-top: 20%;
        color:rgba(0, 0, 0, 0.6);
    }
</style>
