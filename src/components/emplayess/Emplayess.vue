<template>
  <div>
      <div class="box">
          <flexbox>
            <flexbox-item><div class="flex-demo" style="display:inner-block"><img width="100" height="100"  style="padding-left:10px"   src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558932077919&di=a377be2a73e4b2ea94bb8340f2c8e963&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201605%2F07%2F20160507191419_J2m8R.thumb.700_0.jpeg" alt="">
            <span style="font-size:22px; padding-left:10px">{{emplayessName}}</span>
            </div>
           
            </flexbox-item>
        </flexbox>
      </div>
      <div>
      <button class="weui-btn weui-btn_warn"  @click="herfReport">
        <img src="../../assets/report.png" alt="" width="30" height="30">
        <span class="font-style">我的报备</span>
        </button>
      <button class="weui-btn weui-btn_warn" @click="herfCus">
        <img src="../../assets/personal.png" alt="" width="30" height="30"> 
        <span class="font-style"> 报备清单</span>
        </button>
    </div>
      <div>
      <button class="weui-btn weui-btn_warn"  @click="useqrcode">
        <img src="../../assets/qr.png" alt="" width="30" height="30">
        <span class="font-style">我的二维码</span>
        </button>
      <button class="weui-btn weui-btn_warn" @click="quit" >
        <img src="../../assets/scan.png" alt="" width="30" height="30"> 
        <span class="font-style"> 离职申请
        </span>
        </button>
    </div>
  </div>
</template>

<script>

import QRCode from 'qrcode';
import { Flexbox, FlexboxItem, Divider,Alert } from 'vux';
export default {
components: {
    Flexbox,
    FlexboxItem,
    Divider,
    Alert
  },
  data () {
    return {
      emplayessName:'',
      emplayessId:'',
      canReport:'true',
    }
  },
  created(){
    // $route.channelList;
    this.emplayessName = this.$route.query.emplayessName;
    this.emplayessId = this.$route.query.emplayessId;
    this.canReport = this.$route.query.canReport;
    console.log(this.canReport);
  },
  methods: {
    herfReport(){
      console.log(this.canReport);
      if(this.canReport){
         this.$router.push({path:'/report',query:{emplayessId:this.emplayessId}})
      }else{
        this.$vux.alert.show({
          title: "请检查是否处于在职状态或是否审核通过",
          buttonText: "确定",
          hideOnBlur: true,
          maskZIndex: 100
        });
      }
     
    },
    herfCus(){
      this.$router.push({path:'/customer',query:{emplayessId:this.emplayessId}});
    },
    useqrcode(){
         this.$router.push({path:'/qr',query:{emplayessId:this.emplayessId}})
      },
    quit(){
        this.$router.push({path:'/quitEmplayess',query:{emplayessId:this.emplayessId,emplayessName:this.emplayessName}})
    }
     
    },
}
</script>

<style scoped>
    .box{
      border: 1px solid #fff;
      border-radius:8px;
      height:180px;
      width:93%;
      padding: 10px;
      margin: 20px 15px;
      background: #fff;
    }

    button.weui-btn {
  width: 45%;
  height: 100px;
  display: inline-block;
  margin: 2%;
  font-size: 14px;
}

.font-style {
  display: block;
  text-align: center;
  width: 100%;
}
.mask{
   width: 100%;
    height: 100%;
   vertical-align: middle;
   text-align: center;
   line-height: 100%;
   bottom: -270px;
  position: fixed;
  z-index: 998;
}
</style>
