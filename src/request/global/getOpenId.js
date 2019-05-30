import { snsapiBase } from '../api/login';
import { getParameter } from "@/utils/index.js";
import { MessageBox } from 'mint-ui';
import config from '@/config/index.js';

export async function getOpenId() {
  // window.localStorage.setItem(config.openId, 'oaHcc0t5wKnM0kKeLb9I-Zb-RRMo');
  // console.log('1',window.localStorage.getItem(config.openId))
  if (window.localStorage.getItem(config.openId)) {
    return
  } else {
    // console.log('2',window.localStorage.getItem(config.openId))
    if(getParameter("code") === '') {
      return
    }
    let response = await snsapiBase(getParameter("code"));
    console.log('外部多次调用', response.code)
    if(response.code === 0) {
      console.log(response.code)
      window.localStorage.setItem(config.openId, response.data);
    } else {
      console.log('response.code', response.code)
      MessageBox('提示', response.msg);
    }
  }
}