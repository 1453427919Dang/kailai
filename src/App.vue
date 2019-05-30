<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import "./styles/weui/widget/weui-button/weui-button.less";
@import "./styles/weui/widget/weui-loading/weui-loading.less";
body {
      overflow: hidden;
    overflow-y: auto;
    background: #e7e7e7 url(./assets/backgroud.png) no-repeat left bottom;
    background-size: 100%;
    min-height: 100%;
    font-size: 13px;
    font-family: arial;
    -webkit-text-size-adjust: none;
    line-height: 1.62;
    font-family: "微软雅黑";
}
html{
    min-height: 100%;
    overflow: hidden;
    overflow-y: auto;
}
</style>
