<template>
  <div>
    <div class="emp-font">
          离职申请
    </div>
    <div>
      <group  class="deepStyle">
        <x-input title="渠道员工名称："   name="emptyName" type="text"   v-model="emplayessName"  is-type="china-name" disabled></x-input>
      </group>
      <group  class="deepStyle">
        <x-button class="buttonStyle" @click.native="controlVisiable">新渠道</x-button>  <x-button class="buttonStyle" @click.native="jump">全民经纪人</x-button>
      </group>

      <group class="deepStyle" v-show="visiable">
            <x-input  name="cbID" type="text"  placeholder="渠道商" v-model="cbID" is-type="china-name" required></x-input>
      </group>
      <group class="deepStyle">
        <datetime   v-model="quitDate"  title="离职时间：" required></datetime>
      </group>
    </div>
    <div>
       <button class="weui-btn weui-btn_warn" @click="quit">
        确定离职
      </button>
    </div>
  </div>
</template>

<script>
import { XInput, CheckIcon, XButton, Group, AlertModule ,Selector,Datetime,Alert} from "vux";
import { empRegist,ChannelList ,ChannelPersonDismission} from "@/request/api/login.js";
export default {
  data() {
    return {
      emplayessName: "",
      emplayessId:"",
      cbID:"",
      channelList:[],
      quitDate:"",
      visiable:false
    };
  },
  components:{
    XInput,
    CheckIcon,
    XButton,
    Group,
    Selector,
    Datetime,
    Alert
  },
  created(){
    this.emplayessName = this.$route.query.emplayessName;
    this.emplayessId = this.$route.query.emplayessId;
    ChannelList().then(res=>{
          console.log(res);
          this.channelList=[];
          let channel= res.data.data;
          for(var i=0;i<channel.length;i++){
            let obj={};
            obj.key=channel[i].id;
            obj.value=channel[i].name;
            this.channelList.push(obj);
          }
          console.log(this.channelList);
      })
  },
  methods: {
    controlVisiable(){
      this.visiable = true;
    },
    jump(){
      window.location.href = "http://klwx.choicelean.com/wx/toBrokerRegister.xhtml?broker.uType=1";
    },
    quit(){
        let data={
        pId:this.emplayessId,
        nwCompanyName:this.cbID,
        quitDate:this.quitDate
      }
    console.log(data);
      ChannelPersonDismission(data).then((res)=>{
        console.log(res);
        if(res.data.result){
            this.$vux.alert.show({
            title: res.data.msg,
            buttonText: "确定",
            hideOnBlur: true,
            maskZIndex: 100
          });
        }else{
            this.$vux.alert.show({
            title: res.data.msg,
            buttonText: "确定",
            hideOnBlur: true,
            maskZIndex: 100
          });
        }
      })
    }
  }
};
</script>

<style scoped>
.deepStyle /deep/ .weui-cells {
  margin-top: 1.17647059em;
  background-color: #fff;
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
  padding:10px;
  display: inline-block
}
.buttonStyle{
  display: inline-block;
  width:45%;
  margin-bottom:10px;
  color:#fff;
  background-color: rgb(230, 67, 64);
  margin-left: 2%;
}
</style>
