<template>
  <div>
    <div class="emp-font">员工详情列表</div>
    <div style="padding:10px">
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff">
        <thead>
          <tr style="background-color: crimson;color:#fff" >
            <th style="width:45%">房源</th>
            <th>合同签订日期</th>
            <th>合同金额</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="detail in contractDetail" :key="detail.index"> 
            <td>{{detail.roomName}}</td>
            <td>{{detail.signDate}}</td>
            <td>{{detail.price}}</td>
          </tr>
        </tbody>
      </x-table>  
    </div>
    <div>
          <p class="trademask">
              © 凯莱上海 版权所有.
          </p>
      </div>
  </div>
</template>
<script>
import { XTable } from "vux";
import {
  getChannelEmpList,
  ChannelBusinessAudit
} from "@/request/api/login.js";

export default {
  components: {
    XTable
  },
  data() {
    return {
      contractDetail: [],
    };
  },
  created() {
   this.contractDetail= this.$route.query.detail;
    console.log(this.contractDetail);
  },
  methods: {
  
  }
};
</script>

<style scoped>
.emp-font {
  font-size: 30px;
  color: crimson;
  font-weight: bold;
  text-align: center;
  font-style: italic;
}
.trademask {
  text-align: center;
  margin-top: 90%;
  color: rgba(0, 0, 0, 0.6);
}
</style>