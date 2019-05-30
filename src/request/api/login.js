import request from '../index'
//const serve = 'http://www.kuaidi100.com/query?type=yuantong&postid=11111111111'
const serve = 'https://itmwxtv.wilmar.cn/v1/wx'
/*
*****************   渠道商及员工的注册及登录   **************************
*/ 

/**
 * 渠道商注册
 * */ 
function cheRegist() {
  return request({
    url: `${serve}`,
    method: 'get',
  })
}

/**
 * 员工注册
 * */ 
function empRegist(para) {
  return request({
    url: `${serve}/accountBind/sendCaptcha`,
    method: 'get',
    params: {
      para
    }
  })
}

/**
 * 注册商登陆
 * */ 
function cheLogin(data) {
  return request({
    url: `${serve}/accountBind/driverBind`,
    method: 'post',
    data
  })
}
/**
 * 员工登陆
 * */ 
function EmpLogin(data) {
  return request({
    url: `${serve}/accountBind/customerBind`,
    method: 'post',
    data
  })
}


/*
*****************   获取openId   **************************
*/ 

/**
 * 获取openId
 * @param [{String}] code 微信识别码
 * */ 
function snsapiBase(code) {
  return request({
    url: `/mtwechat/snsapiBase/getOpenId?code=` + code,
    method: 'get'
  })
}

/**
 * 获取js页面权限签名
 * @param [{String}] noncestr  随机字符串 长度大于10
 * @param [{String}] timestamp utc时间戳 10位
 * @param [{String}] url       当前网页的URL，不包含#及其后面部分
 * */ 
function getSignature(data) {
  return request({
    url: `/mtwechat/snsapiBase/getSignature`,
    method: 'post',
    data
  })
}


function getCaptcha(phone) {
  return request({
    url: `${serve}/accountBind/sendCaptcha`,
    method: 'get',
    params: {
      phone
    }
  })
}

export {
  cheRegist,
  empRegist,
  cheLogin,
  EmpLogin,
  getCaptcha,

  snsapiBase,
  getSignature
}