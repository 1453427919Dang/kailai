<template>
  <div>
    <div class="emp-font">
          客户转移
    </div>
    <div>
      <group class="deepStyle">
            <selector  v-model="forcbId" title="需转移的员工：" :options="channelList"  @on-change="onChange"></selector>
      </group>
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: crimson;color:#fff">
            <th>选择</th>
            <th>客户姓名</th>
            <th>电话</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in reportList" :key="report.canMoveClientId">
            <td><input type="checkbox" :value="report.canMoveClientId" @change="changeBox"></td>
            <td>{{report.cName}}</td>
            <td> {{report.cPhone}}</td>
          </tr>
        </tbody>
      </x-table>
       <group class="deepStyle">
            <selector  v-model="tocbID" title="待转移的员工：" :options="channelList" required></selector>
      </group>
    </div>
    <button class="weui-btn weui-btn_warn" @click="confirm">
        确定
      </button>
  </div>
</template>

<script>
import {
  XInput,
  CheckIcon,
  XButton,
  Group,
  AlertModule,
  Selector,
  XTable,
  Alert
} from "vux";
import {
  ChannelBusinessMoveGetList,
  ChannelBusinessMoveClient,
  getChannelEmpList
} from "@/request/api/login.js";
export default {
  data() {
    return {
      msg: "",
      channelList: [],
      cbID: "",
      forcbId: "",
      tocbID: "",
      reportList: [],
      canMoveClientIds: []
    };
  },
  created() {
    this.cbID = this.$route.query.channelId;
    this.getList();
  },
  components: {
    XInput,
    CheckIcon,
    XButton,
    Group,
    Selector,
    XTable,
    Alert
  },
  methods: {
    getList(){
      let data = { cbID: this.cbID };
    getChannelEmpList(data).then(res => {
      console.log(res);
      if (res.data.result) {
        this.channelList = [];
        let channel = res.data.data;
        for (var i = 0; i < channel.length; i++) {
          let obj = {};
          obj.key = channel[i].id;
          obj.value = channel[i].pName;
          this.channelList.push(obj);
        }
      }
    });
    },
    confirm() {
      console.log(this.tocbID);
      if (this.tocbID == "") {
        this.$vux.alert.show({
          title: "请选择想要转移到的员工",
          buttonText: "确定",
          hideOnBlur: true,
          maskZIndex: 100
        });
      } else {
        let data = {
          canMoveClientIds: this.canMoveClientIds.join(","),
          toPersonId: this.tocbID
        };
        ChannelBusinessMoveClient(data).then(res => {
          console.log(res);
          if (res.data.result) {
            this.$vux.alert.show({
              title: res.data.msg,
              buttonText: "确定",
              hideOnBlur: true,
              maskZIndex: 100
            });
            this.$router.go(-1)
          } else {
            this.$vux.alert.show({
              title: res.data.msg,
              buttonText: "确定",
              hideOnBlur: true,
              maskZIndex: 100
            });
          }
        });
      }
    },
    onChange(info) {
      console.log(info);
      let data = { pId: info };
      ChannelBusinessMoveGetList(data).then(res => {
        console.log(res);
        if (res.data.result) {
          this.reportList = res.data.data;
        }
      });
    },
    changeBox(info) {
      console.log(info.target.checked);
      if (info.target.checked) {
        this.canMoveClientIds.push(info.target.value);
        this.canMoveClientIds = [...new Set(this.canMoveClientIds)];
      } else if (!info.target.checked) {
        const index = this.canMoveClientIds.indexOf(info.target.value);
        const newFileList = this.canMoveClientIds.slice();
        newFileList.splice(index, 1);
        this.canMoveClientIds = newFileList;
      }
      console.log(this.canMoveClientIds);
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
  padding: 10px;
  display: inline-block;
}
</style>
