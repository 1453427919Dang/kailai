<template>
  <div>
     <div class="emp-font">我的佣金</div>
     <div style="padding:10px">
    <flexbox>
      <flexbox-item><div class="flex-demo">
        <p>应结佣：{{dataSource.totalPrice}}元</p>
        </div></flexbox-item>
      <flexbox-item><div class="flex-demo">
        <p>已结佣：{{dataSource.payedPrice}}元</p>
        </div></flexbox-item>
    </flexbox>
  </div>
  <div style="padding:10px">

  <x-table :cell-bordered="false" :content-bordered="true" style="background-color:#fff;">
        <thead>
          <tr style="background-color: crimson;color:#fff">
            <th>渠道员工</th>
            <th>房号</th>
            <th>应结（元）</th>
            <th>已结（元）</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="commission in commissionList" :key="commission.personName"> 
            <td style="width:20%;text-align:left;padding-left:5px;">{{commission.personName}}</td>
            <td style="width:40%;text-align:left">{{commission.roomName}}</td>
            <td style="width:20%;text-align:right">{{commission.totalcommission}}</td>
            <td style="width:20%;text-align:right;padding-right:5px">{{commission.payedcommission}}</td>
          </tr>
        </tbody>
      </x-table>
  </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Divider,XTable, } from 'vux'
import {ChannelBusinessCommission} from  "@/request/api/login.js";
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Divider,
    XTable,
  },
  data () {
    return {
     preTax:100,
     afterTax:200,
     cbId:"",
     dataSource:{},
    commissionList:[],
    }
  },
  created(){
    this.cbId = this.$route.query.channelId;
    let data = {cbId:this.cbId}
    ChannelBusinessCommission(data).then((res)=>{
      console.log(res);
      if(res.data.result){
        this.dataSource = res.data.data;
        if(this.dataSource.list !=null){
          this.commissionList = this.dataSource.list
        }
      }
    })
  },
  methods: {

  }
}
</script>

<style scoped>
    .emp-font{
        font-size: 30px;
        color: crimson;
       font-weight: bold;
        text-align: center;
        font-style: italic;
    }
    .flex-demo{
      background-color: crimson;
      color:#fff;
      height:50px;
      border:1px solid #fff;
      border-radius: 10px;
      padding: 10px;
      text-align: center
    }
</style>
