<template>
  <div>
    <div class="emp-font">跟进记录</div>
    <div class="container">
      <group  style="background-color:#fff;margin-top:5px" v-for="item in dataSource.Contacts" :key="item.ccId">
        <input type="radio" :id="item.ccId" name="item"><label :for="item.ccId">接待时间：{{item.VisitDate}}</label>
        <div class="context">
            <cell title="项目:" :value="item.ProjectName"></cell>
            <!-- <cell title="接待时间:" :value="item.VisitDate"></cell> -->
            <cell title="访问类型:" :value="item.VisitType"></cell>
            <cell title="意向强度 :" :value="item.Intention"></cell>
            <cell title="接待信息:" :value="item.Remark"></cell>
            <cell title="计划更进日期:" :value="item.NextReceiveDate"></cell>
        </div>
       </group>
       <br style='clear:both'/>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from "vux";
import { ChannelPersonGetClientContact } from "@/request/api/login.js";
export default {
  data() {
    return {
      msg: "",
      clientId: "",
      dataSource: []
    };
  },
  components: {
    Group,
    Cell
  },
  created() {
    this.clientId = this.$route.query.clientId;
    console.log(this.clientId);
    let data = { clientId: this.clientId };
    ChannelPersonGetClientContact(data).then(res => {
      console.log(res);
      if (res.data.result) {
        this.dataSource = res.data.data;
      }
    });
  },
  methods: {}
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
/* * {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
} */
.container {
  /* width:80%; */
   height: 2000px; 


}
input {
  display: none;
}
label {
  display: block;
  background-color: #f5f5f5;
  width: 99%;
  height: 40px;
  margin: 0 auto;
  border: 1px solid #dddddd;
  border-radius: 2px;
  margin-top: 1px;
  line-height: 40px;
  font-size: 14px;
  padding-left:5px;
}
.context {
  width: 99%;
  height: 280px;
  margin: 0 auto;
  border: 1px solid #dddddd;
  border-radius: 2px;
  visibility: visible;
  /* visibility: hidden; */
  transition: height 0.5s linear;
  -webkit-transition: height 0.5s linear;
  -moz-transition: height 0.5s linear;
  -ms-transition: height 0.5s linear;
  font-size: 14px;
}
input:checked + label + .context {
  visibility: hidden;
  height: 0px;
}
</style>
