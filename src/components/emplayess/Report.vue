<template>
  <div>
    <div style="margin-top:40px">
      <group class="deepStyle">
        <x-input
          class="inStyle"
          name="emptyName"
          type="text"
          placeholder="请填写姓名"
          v-model="emptyName"
          is-type="china-name"
        ></x-input>
      </group>

      <group class="deepStyle">
        <x-input
          class="inStyle"
          name="emptyPhone"
          placeholder="请填写手机号码"
          mask="999 9999 9999"
          v-model="emptyPhone"
          :max="13"
          is-type="china-mobile"
        ></x-input>
      </group>
      <div style="padding-top:10px;padding-left:15px">
        <input type="radio" name="gender" value="0" v-model="gender" checked />男
        <span>&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" name="gender" value="1" v-model="gender" />女
      </div>
      <div style="padding-top:10px;padding-left:15px" >
       
          <p v-for="project in projects" :key="project.key" style="display:inline-block">
              <input name="sex" type="radio" v-model="projectId" value="project.key"/>{{project.value}} &nbsp;&nbsp;
          </p>
 
      </div>
      <div style="padding:15px;">
        <group>
          <x-textarea placeholder :height="100" :rows="8" :cols="30"></x-textarea>
        </group>
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
import { XInput, CheckIcon, XButton, Group, XTextarea ,Radio} from "vux";
import { getSaProjectList } from "@/request/api/login.js";
export default {
  components: {
    XInput,
    CheckIcon,
    XButton,
    Group,
    XTextarea,
    Radio
  },
  data() {
    return {
      emptyName: "",
      emptyPhone: "",
      demo: false,
      gender: 0,
      proName: "",
      projectList: [],
      projects: [],
      projectId:"",
    };
  },
  created() {
    getSaProjectList().then(res => {
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
      console.log(this.emptyName);
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
  width: 97%;
  height: 35px;
  background: #fff;
}
</style>
