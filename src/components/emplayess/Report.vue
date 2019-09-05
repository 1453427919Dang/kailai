<template>
  <div>
    <div style="margin-top:40px">
      <div class="deepStyle">
        <x-input
          class="inStyle"
          name="emptyName"
          type="text"
          placeholder="请填写姓名"
          v-model="emplayessName"
          is-type="china-name"
        ></x-input>
      </div>

      <div class="deepStyle">
        <x-input
          class="inStyle"
          name="emptyPhone"
          placeholder="请填写手机号码"
          mask="999 9999 9999"
          v-model="emplayessPhone"
          :max="13"
          is-type="china-mobile"
        ></x-input>
      </div>
      <div class="deepStyle">
          <checker   v-model="projectId" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
            <checker-item style="margin-left:5px;margin-top:5px" v-for="project in projects" :key="project.key" :value="project.key">{{project.value}}</checker-item>
          </checker>
          <!-- <p v-for="project in projects" :key="project.key" style="display:inline-block">
              <input name="sex" type="checkbox" v-model="projectId" :value="project.key"/>{{project.value}} &nbsp;&nbsp;
          </p> -->
      </div>
      <div style="padding:10px;">
        <h5 style="color:#676869">温馨提示</h5>
        <p style="color:#676869;font-size:12px">请务必提交真实的客户信息，若多次提交虚假信息，您的账号会被禁用</p>
      </div>
      <div style="padding:10px;">
        <x-button class="weui-btn weui-btn_warn" style="color:#fff" @click.native="report">报备</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import Base from "../../libs/base";
import {
  XInput,
  CheckIcon,
  XButton,
  Group,
  XTextarea,
  Radio,
  Checker,
  CheckerItem
} from "vux";
import { getSaProjectList, report,getProjectList } from "@/request/api/login.js";
export default {
  components: {
    XInput,
    CheckIcon,
    XButton,
    Group,
    XTextarea,
    Radio,
    Checker,
    CheckerItem
  },
  data() {
    return {
      emplayessName: "",
      emplayessPhone: "",
      proName: "",
      projectList: [],
      projects: [],
      projectId: ""
    };
  },
    created() {
    let companyId = {
      companyId: "100103"
    };
    getProjectList(companyId).then(res => {
      console.log(res);
      if (res.data.result) {
        this.projects = [];
        this.projectList = res.data.data;
        for (var i = 0; i < this.projectList.length; i++) {
          let project = {};
          project.key = this.projectList[i].id;
          project.value = this.projectList[i].name;
          this.projects.push(project);
        }
        console.log(this.projects);
      }
    });
  },
  methods: {
    report() {
      let data = {
        pId: this.$route.query.emplayessId,
        jsonData: {
          cName: this.emplayessName,
          cPhone: this.emplayessPhone.replace(" ", "").replace(" ", ""),
          projectId: this.projectId
        }
      };
      console.log(this.projectId);
      console.log(data);
      report(data).then(res => {
        console.log(res);
        if (res.data.result) {
          this.$vux.alert.show({
            title: res.data.msg,
            content: "报备成功",
            buttonText: "确定",
            hideOnBlur: true,
            maskZIndex: 100
          });
          this.$router.go(-1);
        } else {
          this.$vux.alert.show({
            title: res.data.msg,
            content: "请重新报备",
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
.deepStyle /deep/ .weui-cells {
  margin-top: 1.17647059em;
  background-color: #e7e7e7;
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
  height: 35px;
  background: #fff;
}
.demo1-item {
  border: 1px solid #ececec;
  background-color: #fff;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid crimson;
  
}
</style>
