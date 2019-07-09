<template>
  <div>
      <div class="box">
          <flexbox>
            <flexbox-item><div class="flex-demo" style="display:inner-block"><img width="100" height="100"  style="padding-left:10px"   src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558932077919&di=a377be2a73e4b2ea94bb8340f2c8e963&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201605%2F07%2F20160507191419_J2m8R.thumb.700_0.jpeg" alt="">
            <span style="font-size:22px; padding-left:10px">{{personalList.accountName}}</span>
            </div>
           
            </flexbox-item>
        </flexbox>
         <flexbox>
            <flexbox-item><div class="flex-demo" style="display:inner-block">
            </div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demo" style="padding-left:10px">
                <span>推荐人数</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>总佣金</span>
              </div>
            </flexbox-item>
        </flexbox>
        <flexbox>
            <flexbox-item><div class="flex-demo" style="display:inner-block">
            </div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demo" style="padding-left:10px">
                  <span>
                    <img width="30" height="30" src="../../assets/man.png" alt="">
                  3</span>
                  <span><img width="30" height="30" src="../../assets/xian.png" alt=""></span>
                <span>
                  <img width="30" height="30" src="../../assets/money.png" alt="">
                  100
                  </span>
              </div>
            </flexbox-item>
        </flexbox>
      </div>
      <div>
      <button class="weui-btn weui-btn_warn"  @click="herfStaff">
        <img src="../../assets/￥.png" alt="" width="30" height="30">
        <span class="font-style">我的佣金</span>
        </button>
      <button class="weui-btn weui-btn_warn" @click="herfCom">
        <img src="../../assets/personal.png" alt="" width="30" height="30"> 
        <span class="font-style"> 我的员工</span>
        </button>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Divider } from 'vux';
export default {
components: {
    Flexbox,
    FlexboxItem,
    Divider
  },
  created(){
    // $route.channelList;
    this.personalList = this.$route.query.channelList;
  },
  data () {
    return {
      personalList:[],
    }
  },
  methods: {
    herfStaff(){
      this.$router.push({path:'/commission'})
    },
    herfCom(){
      this.$router.push({path:'/myEmp', query:{channelId:this.personalList.id}});
    }
  }
}
</script>

<style scoped>
    .box{
      border: 1px solid #fff;
      border-radius:8px;
      height:180px;
      width:93%;
      padding: 10px;
      margin: 20px 15px;
      background: #fff;
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
