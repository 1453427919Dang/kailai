<template>
  <div>
    <div class="emp-font">员工列表</div>
    <div style="padding:10px">
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: crimson;color:#fff">
            <th>选择</th>
            <th>渠道员工</th>
            <th>电话号码</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="myEmpty in myEmptyList" :key="myEmpty.id"> 
            <td><input type="checkbox" :value="myEmpty.id" @change="onChange"></td>
            <td>{{myEmpty.pName}}</td>
            <td>{{myEmpty.pPhone}}</td>
          </tr>
        </tbody>
      </x-table>
      <button class="weui-btn weui-btn_warn" style="margin-top:300px" @click="confirm">
        审核
      </button>
    </div>
    <div>
          <p class="trademask">
              © 凯莱上海 版权所有.
          </p>
      </div>
  </div>
</template>
<script>
import { XTable,Alert } from "vux";
import {
  getApproveChannelEmpList,
  ChannelBusinessAudit
} from "@/request/api/login.js";

export default {
  components: {
    XTable,
    Alert
  },
  data() {
    return {
      myEmptyList: [],
      personIds:[],
    };
  },
  created() {
    getApproveChannelEmpList({ cbId: this.$route.query.channelId }).then(res => {
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
      if (info.target.checked == true) {
        this.personIds.push(info.target.value);
      }
      console.log(this.personIds);
    },
    confirm() {
      let data = {
        cbId: this.$route.query.channelId,
        jsonData: {
          personIds: this.personIds.join(",")
        }
      };
      console.log(data);
      ChannelBusinessAudit(data).then(res => {
        console.log(res);
        if(res.data.result){
            this.$vux.alert.show({
            title: res.data.msg,
            buttonText: "确定",
            hideOnBlur: true,
            maskZIndex: 100
          });
            this.$router.go(0)
        }else{
          this.$vux.alert.show({
            title: res.data.msg,
            buttonText: "确定",
            hideOnBlur: true,
            maskZIndex: 100
          });
        }
      });
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