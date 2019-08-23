<template>
  <div>
    <div class="emp-font">员工列表</div>
    <div style="padding:10px">
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: crimson;color:#fff">
            <th>渠道员工</th>
            <th>报备数量</th>
            <th>带看数量</th>
            <th>成交数量</th>
            <th>成交总价</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="myEmpty in myEmptyList" :key="myEmpty.id"> 
            <td>{{myEmpty.pName}}</td>
            <td>{{myEmpty.rptCount}}</td>
            <td>{{myEmpty.seeCount}}</td>
            <td> {{myEmpty.contractNum}}</td>
            <td>{{myEmpty.contractPrice}}</td>
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