<template>
  <div>
    <div class="emp-font">客户列表</div>
    <div>
       <group class="deepStyle">
            <selector  v-model="status" title="请选择状态" :options="statusList"  @on-change="onChange"></selector>
      </group>
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;margin-top:5px">
        <thead>
          <tr style="background-color: crimson;color:#fff">
            <th>姓名</th>
            <th>意向楼盘</th>
            <th>电话</th>
            <th>状态</th>
            <th>详情</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in reportList" :key="report.reportId">
            <td>{{report.cName}}</td>
            <td>{{report.projectName}}</td>
            <td> {{report.cPhone}}</td>
            <td> {{report.statusName}}</td>
            <td ><a @click="query(report.clientId)">查看</a></td>
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
    </div>

    <div>
          <p class="trademask">
              © 凯莱上海 版权所有.
          </p>
      </div>
  </div>
</template>
<script>
import { XTable, Tab, TabItem, Group, AlertModule, Selector } from "vux";
import Paginate from "vuejs-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import { getReportList } from "@/request/api/login.js";

export default {
  components: {
    XTable,
    Paginate,
    Tab,
    TabItem,
    Group,
    AlertModule,
    Selector
  },
  data() {
    return {
      totalPages: 1,
      currentPage: 1,
      totalCount: "",
      reportList: [],
      statusList: [],
      status: ""
    };
  },
  created() {
    this.statusList = [
      { key: "0", value: "有效" },
      { key: "1", value: "无效" },
      { key: "2", value: "可带看" },
      { key: "3", value: "已带看" },
      { key: "51", value: "已签约" },
      { key: "50", value: "已认购" },
      { key: "41", value: "退签约" },
      { key: "40", value: "退认购" },
      { key: " ", value: "所有" }
    ];
    let data = {
      pId: this.$route.query.emplayessId,
      page: this.currentPage,
      pageCount: 10,
      jsonQuery: {
        name: "",
        phone: "",
        state: ""
      },
      sortby: ""
    };
    console.log(data);
    getReportList(data).then(res => {
      console.log(res);
      if (res.data.result) {
        this.reportList = res.data.data.listdata;
        this.currentPage = res.data.data.page.currentPage;
        this.totalPages = res.data.data.page.totalPages;
      }
    });
  },
  methods: {
    onItemClick() {
      console.log("on item click");
    },
    pageEvent(e) {
      this.currentPage = e;
      console.log(this.currentPage);
      let data = {
        pId: this.$route.query.emplayessId,
        page: this.currentPage,
        pageCount: 10,
        jsonQuery: {
          name: "",
          phone: "",
          state: ""
        },
        sortby: ""
      };
      console.log(data);
      getReportList(data).then(res => {
        console.log(res);
        if (res.data.result) {
          this.reportList = res.data.data.listdata;
          this.currentPage = res.data.data.page.currentPage;
          this.totalPages = res.data.data.page.totalPages;
        }
      });
    },
    onChange(info) {
      let data = {};
      if (info == " ") {
        data = {
          pId: this.$route.query.emplayessId,
          page: this.currentPage,
          pageCount: 10,
          jsonQuery: {
            name: "",
            phone: "",
            state: ""
          },
          sortby: ""
        };
      } else {
        data = {
          pId: this.$route.query.emplayessId,
          page: this.currentPage,
          pageCount: 10,
          jsonQuery: {
            name: "",
            phone: "",
            state: info
          },
          sortby: ""
        };
      }
      getReportList(data).then(res => {
        if (res.data.result) {
          this.reportList = res.data.data.listdata;
          this.currentPage = res.data.data.page.currentPage;
          this.totalPages = res.data.data.page.totalPages;
        }
      });
    },
    query(id) {
      this.$router.push({ path: "/customerDetail", query: { clientId: id } });
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