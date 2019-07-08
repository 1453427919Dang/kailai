<template>
  <div>
    <div class="emp-font">客户列表</div>
    <div style="padding:10px">
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: crimson;color:#fff">
            <th>姓名</th>
            <th>意向楼盘</th>
            <th>电话</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in table" :key="i.member">
            <td>{{i.member}}</td>
            <td>{{i.customer}}</td>
            <td> {{i.clinch}}</td>
            <td> {{i.sum}}</td>
          </tr>
        </tbody>
      </x-table>
      <div class="paginate_container">
    <paginate
      :page-count="20"
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
import { XTable } from "vux";
import Paginate from "vuejs-paginate";
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  components: {
    XTable,
    Paginate
  },
  data() {
    return {
      table: [
        {
          member: "张三",
          customer: "11",
          clinch: "4",
          sum: "50"
        },
        {
          member: "李四",
          customer: "13",
          clinch: "4",
          sum: "60"
        },
        {
          member: "王五",
          customer: "10",
          clinch: "8",
          sum: "60"
        }
      ]
    };
  },
  methods: {
    onItemClick() {
      console.log("on item click");
    },
    pageEvent(e){
      console.log(e);
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