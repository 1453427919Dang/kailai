<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/index.jpg">
    </div>
    <div>
      <button class="weui-btn weui-btn_warn"  @click="herfCha">
        <img src="http://klwx.choicelean.com:80/images/btn-bg-zc.png" alt="" width="30" height="30">
        <span class="font-style">渠道商注册</span>
        </button>
      <button class="weui-btn weui-btn_warn" @click="herfEmp">
        <img src="http://klwx.choicelean.com:80/images/btn-bg-zc.png" alt="" width="30" height="30"> 
        <span class="font-style"> 员工注册</span>
        </button>
    </div>
    <div>
      <button class="weui-btn weui-btn_warn" @click="herfChaLogin">
        <img src="http://klwx.choicelean.com:80/images/btn-bg-22.png" alt="" width="30" height="30"> 
       <span class="font-style">  渠道商管理</span>
        </button>
      <button class="weui-btn weui-btn_warn" @click="herfEmpLogin">
        <img src="http://klwx.choicelean.com:80/images/btn-bg-55.png" alt="" width="30" height="30"> 
        <span class="font-style"> 员工管理</span>
      </button>
    </div>
    <div>
      <button class="weui-btn weui-btn_warn" @click="herfAdviserLogin">
        <img src="http://klwx.choicelean.com:80/images/btn-bg-22.png" alt="" width="30" height="30"> 
       <span class="font-style">置业顾问登陆</span>
        </button>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from "vux";
import { XButton } from "vux";
import { getUserInfo } from "@/request/api/login.js";

export default {
  components: {
    Group,
    Cell,
    XButton
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: "Hello World!"
    };
  },
  created() {
    
  },
  mounted() {
    let that = this;
    // 添加返回事件监听
    window.addEventListener(
      "popstate",
      function(e) {
        that.isShowTestDiv = false;
      },
      false
    );
  },
  methods: {
    herfCha() {
      this.$router.push({ path: "./ChaRegist" });
    },
    herfEmp() {
      this.$router.push({ path: "./EmpRegist" });
    },
    herfChaLogin() {
      this.$router.push({ path: "./ChaLogin" });
    },
    herfEmpLogin() {
      this.$router.push({ path: "./EmpLogin" });
    },
    herfAdviserLogin() {
      this.$router.push({ path: "./AdviserLogin" });
    }
  }
};
</script>

<style lang="less" scoped>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100%;
  height: 200px;
}
button.weui-btn {
  width: 45%;
  height: 100px;
  display: inline-block;
  margin: 2%;
  font-size: 14px;
}
.font-style {
  display: block;
  text-align: center;
  width: 100%;
}
</style>
