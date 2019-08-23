<template>
  <div>
      <div class="box">
          <flexbox>
            <flexbox-item>
              <div  style="display:inner-block">
            <span style="font-size:22px; padding-left:10px">{{personalName}}</span>
            </div>
           
            </flexbox-item>

        </flexbox>
        
         <flexbox style="margin-top:10px" >
           <flexbox-item>
            <span>报备客户总数：{{qdList.rptCount}}</span>
        </flexbox-item>
        <flexbox-item>
           <span>带看客户总数：{{qdList.seeCount}}</span>
        </flexbox-item> 
        </flexbox >
            <flexbox style="margin-top:10px">
           <flexbox-item>
           <span>成交客户总数：{{qdList.saleCount}}</span>
        </flexbox-item>
        <flexbox-item>
           <span>佣金总金额：{{qdList.payedcommission}}</span>
        </flexbox-item> 
        </flexbox>
      </div>
      <div>
      <button class="weui-btn weui-btn_warn"  @click="hrefStaff">
        <img src="../../assets/￥.png" alt="" width="30" height="30">
        <span class="font-style">我的佣金</span>
        </button>
      <button class="weui-btn weui-btn_warn" @click="hrefCom">
        <img src="../../assets/personal.png" alt="" width="30" height="30"> 
        <span class="font-style"> 我的员工</span>
        </button>
    </div>
    <div>
      <button class="weui-btn weui-btn_warn" @click="hrefApprov">
        <img src="../../assets/personal.png" alt="" width="30" height="30"> 
        <span class="font-style"> 待审员工</span>
      </button>
      
      <button class="weui-btn weui-btn_warn" @click="hrefTrasfer">
        <img src="../../assets/personal.png" alt="" width="30" height="30"> 
        <span class="font-style"> 客户转移</span>
      </button>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Divider } from "vux";
import {ChannelBusinessCount} from "@/request/api/login.js";
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Divider,
  },
  created() {
  
    this.personalId = this.$route.query.channelId;
    this.personalName = this.$route.query.channelName;
    let data={
      cbId:this.personalId
    }
    ChannelBusinessCount(data).then((res)=>{
        console.log(res);
        if(res.data.result){
          if(res.data.data!=null){
            this.qdList = res.data.data[0];
            console.log(this.qdList)
          }
        }
    })
  },
  data() {
    return {
      personalName: "",
      personalId: "",
      qdList:{},

    };
  },
  methods: {
    hrefStaff() {
      this.$router.push({
        path: "/commission",
        query: { channelId: this.personalId }
      });
    },
    hrefCom() {
      this.$router.push({
        path: "/myEmp",
        query: { channelId: this.personalId }
      });
    },
    hrefApprov() {
      this.$router.push({
        path: "/approvingEmp",
        query: { channelId: this.personalId }
      });
    },
    hrefTrasfer(){
       this.$router.push({
        path: "/customerTrasfer",
        query: { channelId: this.personalId }
      });
    }
    
  }
};
</script>

<style scoped>
.box {
  border: 1px solid #fff;
  border-radius: 8px;
  height: 150px;
  width: 93%;
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
</style>
