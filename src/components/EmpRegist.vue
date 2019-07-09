<template>
  <div>
      <div class="emp-font">渠道员工注册</div>
      <div>
          <group  class="deepStyle">
            <x-input  class="inStyle" name="emptyName" type="text"  placeholder="登录名" v-model="emptyName"  is-type="china-name" required></x-input>
        </group>
         
        <group class="deepStyle">
            <x-input class="inStyle"  name="emptyPhone"  placeholder="手机号码" mask="999 9999 9999" v-model="emptyPhone" :max="13" is-type="china-mobile" required></x-input>
        </group>
        <group class="deepStyle">
            <x-input class="inStyle" name="emptyPassword" type="password" placeholder="数字密码"  v-model="emptyPassword" required></x-input>
        </group>
         <group class="deepStyle">
            <selector v-model="cbID" title="渠道商选择：" :options="channelList" ></selector>
         </group> 
        <div style="padding:10px;">
            <h5 style="color:#676869">温馨提示</h5>
            <p style="color:#676869;font-size:12px">
                请输入正确的姓名以及电话，否则可能无法结佣。
                置业顾问请实名注册成为全民经纪人，发展团队成员，但不得直接推荐客户
            </p>
        </div>
        <div style="padding:10px;">
            <x-button class="weui-btn weui-btn_warn" @click.native="register">注册</x-button>
            <router-link to='/EmpLogin'>已有页面？点击登陆</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import Base from "../libs/base";
import { XInput, CheckIcon, XButton, Group, AlertModule ,Selector} from "vux";
import { empRegist,ChannelList } from "@/request/api/login.js";
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
      data: {},
      emptyName: "",
      emptyPassword: "",
      emptyPhone: "",
      channelList:[],
      cbID:"",
      list2:[
         {key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}
      ]
    };
  },
  created(){
      ChannelList().then(res=>{
          console.log(res);
          this.channelList=[];
          let channel= res.data.data;
          for(var i=0;i<channel.length;i++){
            let obj={};
            obj.key=channel.id;
            obj.value=channel.name;
            this.channelList.push(obj);
          }
      })
    
  },
  methods: {
    register() {
      this.data = {
        pPhone: this.emptyPhone,
        pPassword: this.emptyPassword,
        pName: this.emptyName,
        cbID: this.cbID
      };
      empRegist(this.data).then(res => {
        console.log(res);
        if (res.data.result) {
          this.$vux.alert.show({
            title: res.data.msg,
            content: "请去登录页登陆！",
            buttonText: "确定",
            hideOnBlur: true,
            maskZIndex: 100
          });
          this.$router.push({ path: "/EmpLogin" });
        } else {
          this.$vux.alert.show({
            title: res.data.msg,
            buttonText: "确定",
            hideOnBlur: true,
            maskZIndex: 100
          });
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
  width: 97%;
  height: 35px;
  background: #fff;
  padding:10px;
}
</style>
