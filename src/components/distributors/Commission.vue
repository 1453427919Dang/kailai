<template>
  <div>
     <div class="emp-font">我的佣金</div>
     <div style="padding:10px">
    <flexbox>
      <flexbox-item><div class="flex-demo">
        <p>可结佣 （税前）</p>
        <p style="padding-top:15px">{{preTax}}元</p>
        </div></flexbox-item>
      <flexbox-item><div class="flex-demo">
        <p>可结佣 （税后）</p>
        <p style="padding-top:15px">{{afterTax}}元</p>
        </div></flexbox-item>
    </flexbox>
  </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Divider } from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Divider
  },
  data () {
    return {
     preTax:100,
     afterTax:200

    }
  },
  methods: {

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
    .flex-demo{
      background-color: crimson;
      color:#fff;
      height:82px;
      border:1px solid #fff;
      border-radius: 10px;
      padding: 10px;
      text-align: center
    }
</style>
