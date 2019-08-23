<template>
  <div>
      <div style="text-align:center;height:100%;line-height:100%">
        正在加载...
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "@/request/api/login.js";
export default {
  components:{
  },
  data () {
    return {
    }
  },
  created() {
    //    let code = this.getUrlKey("code");
    // // alert ("code"+code)
    // if (code) {
    //   getUserInfo(code).then(res => {
    //     if (res.data.result) {
    //       // alert(res.data.data.openId);
    //          this.$router.push({ path: "./home" });
    //         localStorage.setItem("openid",res.data.data.openId);
    //     }else{
    //       alert("错误"+res.data.msg)
    //        this.$router.push({ path: "./home" });
    //     }
    //   });
    // } else{
    //   this.getCodeApi("123")
    // }
  },
  methods: {
      getUrlKey(name) {
      //获取url 参数
      return (
        decodeURIComponent(
          (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
            location.href
          ) || [, ""])[1].replace(/\+/g, "%20")
        ) || null
      );
    },
    getCodeApi(state) {
      //获取code
      let urlNow = encodeURIComponent(window.location.href);
      let scope = "snsapi_userinfo"; //snsapi_userinfo   //静默授权 用户无感知
      let appid = "wxd56bc11d7bdf8b23"; 
      let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlNow}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`;
      window.location.replace(url);
    },
  }
}
</script>

<style scoped>

</style>
