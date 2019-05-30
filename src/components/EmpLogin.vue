<template>
  <div>
      <div class="emp-font">
          <img src="http://klwx.choicelean.com:80/images/logo.png" alt="">
      </div>
      <div>
        <div>
            <x-input class="inStyle"  name="phoneNumber"  placeholder="登录名"  v-model="phoneNumber"></x-input>
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
import { XInput,CheckIcon,XButton} from 'vux'
export default {
     components:{
        XInput,
        CheckIcon,
        XButton
    },
  data () {
    return {
      phoneNumber: '',
      password:'',
    }
  },
  methods: {
      goto(){
          this.$router.push({path:'/emplayess'})
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
        width:88%;
        height:25px;
        background: #fff;

    }
    .trademask {
        text-align: center;
        margin-top: 20%;
        color:rgba(0, 0, 0, 0.6);
    }
</style>
