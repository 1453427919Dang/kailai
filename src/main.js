// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import axios from 'axios'
Vue.prototype.$http = axios
//二维码插件
import Home from './components/HelloFromVux';
import Channel from  './components/ChaRegist';
import ChaLogin from './components/ChaLogin';
import EmpRegist from './components/EmpRegist';
import EmpLogin from './components/EmpLogin';
import MyEmp from './components/distributors/MyEmp';
import ApprovingEmp from './components/distributors/ApprovingEmp';
import Commission from  './components/distributors/Commission';
import Distributors from './components/distributors/Distributors';
import CustomerTrasfer from './components/distributors/CustomerTrasfer'
import Emplayess from  './components/emplayess/Emplayess';
import QuitEmplayess from  './components/emplayess/QuitEmplayess';
import CustomerDetail from './components/emplayess/CustomerDetail'
import Customer from './components/emplayess/Customer';
import Report from './components/emplayess/Report';
import AdviserLogin from './components/AdviserLogin';
import Adviser from './components/Adviser'
import MyCustomer from './components/emplayess/MyCustomer'
import QR from './components/emplayess/QR'
import Loading from './components/Loading'
import $ from 'jquery'

Vue.use(VueRouter)

import { AlertPlugin } from 'vux'
Vue.use(AlertPlugin)




const routes = [
//   {
//   path: '/',
//   component: Loading,
// },
{
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
  path:'/customerTrasfer',
  component:CustomerTrasfer,
},
{
  path:'/approvingEmp',
  component:ApprovingEmp

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
  path:'/quitEmplayess',
  component:QuitEmplayess
},
{
  path: '/customer',
  component: Customer
},
{
  path:'/customerDetail',
  component:CustomerDetail
},
{
  path: '/report',
  component: Report
},
{
  path: '/adviserLogin',
  component: AdviserLogin
},
{
  path: '/qr',
  component: QR
},
{
  path: '/adviser',
  component: Adviser
},
{
  path: '/myCustomer/:id',
  component: MyCustomer
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


FastClick.prototype.focus = function (targetElement) {
  let length;
  if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length;
    targetElement.focus();
    targetElement.setSelectionRange(length, length);
  } else {
    targetElement.focus();
  }
}
