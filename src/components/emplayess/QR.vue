<template>
  <div>
      <div class="emp-font">客户信息</div>
      <div class="bg">
        <div  class="mask" @click="mask">
             <div id='code'></div>
             <canvas id="canvas"></canvas>
         </div>
      </div>
  </div>
</template>

<script>
import QRCode from 'qrcode';
export default {
  data () {
    return {
      id:'',
    }
  },
  created(){
    this.id=this.$route.query.emplayessId;
    console.log(this.id);
  },
  methods: {
      mask(){
            //  this.maskShow = !this.maskShow;
        var canvas = document.getElementById('canvas')
        QRCode.toCanvas(canvas, 'http://weixin.wings-cloud.com/#/myCustomer/'+this.id, function (error) {
          if (error) console.error(error)
          console.log('success!');
        })
      },
  },
    mounted(){
      this.mask();
    }
}


</script>

<style scoped>
.emp-font{
        font-size: 30px;
        color: crimson;
       font-weight: bold;
        text-align: center;
        font-style: italic;
    }
    .mask{
   width: 73%;
    height: 50%;
    background: #fff;
   vertical-align: middle;
    text-align: center;
   line-height: 100%;
    bottom: 200px;
    left: 15%;
  position: fixed; 
  z-index: 998;
}
#canvas{
    margin-top:50px;
    width: 100%
}
</style>
