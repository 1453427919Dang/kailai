<template>
  <div>
    <div class="emp-font">员工列表</div>
    <div style="padding:10px">
      <div style="padding-bottom:10px">
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;margin-bottom：10px">
        <thead>
          <tr style="background-color: crimson;color:#fff">
            <th>渠道员工</th>
            <th>报备数量</th>
            <th>带看数量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="myEmpty in myEmptyList" :key="myEmpty.id"> 
            <td>{{myEmpty.pName}}</td>
            <td>{{myEmpty.rptCount}}</td>
            <td>{{myEmpty.seeCount}}</td>
          </tr>
        </tbody>
      </x-table>
      </div>
       <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: crimson;color:#fff">
            <th>渠道员工</th>
            <th>已认购数量</th>
            <th>已认购金额</th>
            <th>已认购详情</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="myEmpty in myEmptyList" :key="myEmpty.id"> 
            <td>{{myEmpty.pName}}</td>
            <td>{{myEmpty.order.totalNum}}</td>
            <td>{{myEmpty.order.totalPrice}}</td>
            <td> <a @click="jump(myEmpty.order.list)">详情</a></td>
          </tr>
        </tbody>
      </x-table>
       <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: crimson;color:#fff">
            <th>渠道员工</th>
            <th>已签约数量</th>
            <th>已签约数量</th>
            <th>已签约详情</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="myEmpty in myEmptyList" :key="myEmpty.id"> 
            <td>{{myEmpty.pName}}</td>
            <td>{{myEmpty.contract.totalNum}}</td>
            <td>{{myEmpty.contract.totalPrice}}</td>
            <td> <a @click="jump(myEmpty.contract.list)">详情</a></td>
          </tr>
        </tbody>
      </x-table>
       <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: crimson;color:#fff">
            <th>渠道员工</th>
            <th>退认购数量</th>
            <th>退认购金额</th>
            <th>退认购详情</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="myEmpty in myEmptyList" :key="myEmpty.id"> 
            <td>{{myEmpty.pName}}</td>
            <td>{{myEmpty.orderReturn.totalNum}}</td>
            <td>{{myEmpty.orderReturn.totalPrice}}</td>
            <td> <a @click="jump(myEmpty.orderReturn.list)">详情</a></td>
          </tr>
        </tbody>
      </x-table>
       <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: crimson;color:#fff">
            <th>渠道员工</th>
            <th>退签约数量</th>
            <th>退签约数量</th>
            <th>退签约详情</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="myEmpty in myEmptyList" :key="myEmpty.id"> 
            <td>{{myEmpty.pName}}</td>
            <td>{{myEmpty.contractReturn.totalNum}}</td>
            <td>{{myEmpty.contractReturn.totalPrice}}</td>
            <td> <a @click="jump(myEmpty.contractReturn.list)">详情</a></td>
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
      myEmptyList: [],
      personIds:[],
    };
  },
  created() {
    getChannelEmpList({ cbId: this.$route.query.channelId }).then(res => {
      console.log(res);
      if (res.data.result) {
        this.myEmptyList = res.data.data;
      }
    });
  },
  methods: {
    onItemClick() {
      console.log("on item click");
    },
    onChange(info) {
      console.log();
      if (info.target.checked == true) {
        this.personIds.push(info.target.value);
      }
    },
    jump(list){
      console.log(list);
      this.$router.push({path:"/empDetail",query:{detail:list}})
    }
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