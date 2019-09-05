<template>
  <div>
    <div class="emp-font">员工列表</div>
    <div style="padding:10px">
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: crimson;color:#fff">
            <th><input type="checkbox" v-model='checked' @click='checkedAll' ></th>
            <th>渠道员工</th>
            <th>电话号码</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="myEmpty in myEmptyList" :key="myEmpty.id"> 
            <td><input type="checkbox" v-model='checked' :value="myEmpty.id" @change="onChange"></td>
            <td>{{myEmpty.pName}}</td>
            <td>{{myEmpty.pPhone}}</td>
          </tr>
        </tbody>
      </x-table>
      <div style="margin-top:300px">
        <button class="weui-btn weui-btn_warn"  @click="confirm">
          通过
        </button>
        <button class="weui-btn weui-btn_warn" @click="unConfirm">
          不通过
        </button>
      </div>
          <div>
      <confirm v-model="show"
      :title="'不通过理由'"
      confirm-text="确定"
      cancel-text="取消"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
     >
        <p style="text-align:center;" >
          <textarea type="text" v-model="auditReason" rows="4"></textarea>
        </p>
      </confirm>
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
import { XTable, Alert,Confirm, } from "vux";
import {
  getApproveChannelEmpList,
  ChannelBusinessAudit
} from "@/request/api/login.js";

export default {
  components: {
    XTable,
    Alert,
    Confirm,
  },
  data() {
    return {
      myEmptyList: [],
      personIds: [],
      show: false,
      checked:false,
      checked1:false,
      auditType:"",
      auditReason:"",
    };
  },
  created() {
    getApproveChannelEmpList({ cbId: this.$route.query.channelId }).then(
      res => {
        console.log(res);
        if (res.data.result) {
          this.myEmptyList = res.data.data;
        }
      }
    );
  },
  watch: {
    personIds: {
      handler: function(val, oldVal) {
        if (val.length === this.myEmptyList.length) {
          this.checked = true;
        } else {
          this.checked = false;
        }
      },
      deep: true
    }
  },
  methods: {
    onCancel () {
    },
    
     onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    onItemClick() {
      console.log("on item click");
    },
    onChange(info,index) {
      console.log(info);
      if (info.target.checked == true) {
        this.personIds.push(info.target.value);
        this.personIds=[...new Set(this.personIds)];
      }else{
        this.personIds.splice(index,1)
      }
      
      
    },
      checkedAll(e) {
        console.log(e.target.checked);
      var _this = this;
      console.log(_this.personIds);
      if (!e.target.checked) {
        
       //实现反选
        _this.personIds = [];
      } else {
        //实现全选
         _this.personIds = [];
        this.myEmptyList.forEach(function(item, index) {
          _this.personIds.push(item.id);
        });
      }
      
    },
    unConfirm(){
      this.show= true;
    },
    onConfirm (msg) {
       let data = {
        cbId: this.$route.query.channelId,
        jsonData: {
          personIds: this.personIds.join(","),
          auditType:"3",
          auditReason:this.auditReason
        }
      };
      this.handlerConfirm(data)
    },
    confirm(){
       let data = {
        cbId: this.$route.query.channelId,
        jsonData: {
          personIds: this.personIds.join(","),
          auditType:"2",
          auditReason:this.auditReason
        }
      };
      this.handlerConfirm(data)
    },
    handlerConfirm(data) {
     
      console.log(data);
      ChannelBusinessAudit(data).then(res => {
        console.log(res);
        if (res.data.result) {
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
button.weui-btn {
  width: 45%;
  /* height: 100px; */
  display: inline-block;
  margin: 2%;
  font-size: 14px;
}
</style>