// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
//二维码插件
import QRCode from 'qrcodejs2';
import Home from './components/HelloFromVux';
import Channel from  './components/ChaRegist';
import ChaLogin from './components/ChaLogin';
import EmpRegist from './components/EmpRegist';
import EmpLogin from './components/EmpLogin';
import MyEmp from './components/distributors/MyEmp';
import Commission from  './components/distributors/Commission';
import Distributors from './components/distributors/Distributors';
import Emplayess from  './components/emplayess/Emplayess';
import Customer from './components/emplayess/Customer';
import Report from './components/emplayess/Report'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home,
},
{
  path: '/ChaRegist',
  component: Channel
},
{
  path: '/ChaLogin',
  component: ChaLogin,
},
{
  path: '/distributors',
  component: Distributors,
},
{
  path: '/myEmp',
  component: MyEmp,
},
{
  path: '/commission',
  component : Commission,
},
{
  path: '/EmpRegist',
  component: EmpRegist
},
{
  path: '/EmpLogin',
  component: EmpLogin
},
{
  path: '/emplayess',
  component: Emplayess
},
{
  path: '/customer',
  component: Customer
},
{
  path: '/report',
  component: Report
}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
