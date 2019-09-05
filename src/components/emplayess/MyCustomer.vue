<template>
  <div>
    <div class="emp-font">客户列表</div>
    <div style="padding:10px">
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: crimson;color:#fff">
            <th>选择</th>
            <th>姓名</th>
            <th>意向楼盘</th>
            <th>电话</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in reportList" :key="report.personId">
            <td><input type="checkbox" :value="report.reportId" @change="onChange"></td>
            <td>{{report.cName}}</td>
            <td>{{report.projectName}}</td>
            <td> {{report.cPhone}}</td>
            <td> {{report.statusName}}</td>
          </tr>
        </tbody>
      </x-table>
      <div class="paginate_container">
        <paginate
          :page-count="totalPages"
          :margin-pages="1"
          :page-range="1"
          :initial-page="0"
          :click-handler="pageEvent"
          prev-text="上一页"
          next-text="下一页"
          :container-class="'pagination'"
          :page-class="'page-item'"
          :page-link-class="'page-link-item'"
          :prev-class="'prev-item'"
          :prev-link-class="'prev-link-item'"
          :next-class="'next-item'"
          :next-link-class="'next-link-item'"
        ></paginate>
      </div>
      <group class="deepStyle">
            <selector  v-model="adviserId" title="职业顾问：" :options="adviserList" required></selector>
      </group>
      <button class="weui-btn weui-btn_warn" @click="confirm" style="margin-top:8px">
        带看确认
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
import { XTable, Alert, Group, Selector } from "vux";
import Paginate from "vuejs-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getReportList,
  SeeHouseConfirm,
  ClientReportCanSeeList,
  getAdviser
} from "@/request/api/login.js";

export default {
  components: {
    XTable,
    Paginate,
    Alert,
    Group,
    Selector
  },
  data() {
    return {
      totalPages: 1,
      currentPage: 1,
      totalCount: "",
      reportList: [],
      pId: "",
      reportIds: [],
      verfification: "",
      adviserList: [],
      adviserId:"",
    };
  },
  created() {
    let url = location.href;
    let paraList = url.split("/");
    console.log(paraList);
    this.pId = paraList[paraList.length - 1];
    console.log(this.pId);
    let data = {
      pId:this.pId,
      projectId: localStorage.getItem("projectId")
      // projectId: 100158
    };
    console.log(data);
    ClientReportCanSeeList(data).then(res => {
      console.log(res);
      if (res.data.result) {
        this.reportList = res.data.data.listdata;
        this.currentPage = res.data.data.page.totalPages;
      }
    });
    let project = {
      projectId:localStorage.getItem("projectId")
      // projectId: 100158
    };
    getAdviser(project).then(res => {
      console.log(res);
      if (res.data.result) {
        this.adviserList = [];
        let adviser = res.data.data;
        for (var i = 0; i < adviser.length; i++) {
          let obj = {};
          obj.key = adviser[i].Id;
          obj.value = adviser[i].Name;
          this.adviserList.push(obj);
        }
      }
    });
  },
  methods: {
    onItemClick() {
      console.log("on item click");
    },
    pageEvent(e) {
      this.currentPage = e;
      conosle.log(this.currentPage);
    },
    onChange(info) {
      console.log();
      if (info.target.checked == true) {
        this.reportIds.push(info.target.value);
      }
      console.log(this.reportIds);
    },
    confirm() {
      console.log(this.adviserId);
      let source = {
        erpUserCode: this.adviserId,
        pId: this.pId,
        jsonData: {
          reportIds: this.reportIds.join(",")
        }
      };
      console.log(source);
      SeeHouseConfirm(source).then(res => {
        console.log(res.data);
        if (res.data.result) {
          //alert(res.data.msg);
          this.$vux.alert.show({
            title: res.data.msg,
            buttonText: "确定",
            hideOnBlur: true,
            maskZIndex: 100
          });
          this.$router.go(0);
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