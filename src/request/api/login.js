import request from '../index'
//const serve = 'http://www.kuaidi100.com/query?type=yuantong&postid=11111111111'
const serve = 'http://erp.king-land.com:90/ChannelWebService/Service.asmx'
/*
*****************   渠道商及员工的注册及登录   **************************
*/ 

/**
 * 渠道商注册
 * */ 
function cheRegist(jsonData) {
  return request({
    url: `${serve}/ChannelBusinessAdd`,
    method: 'get',
    params: {
      jsonData
    }
  })
}

/**
 * 员工注册
 * */ 
function empRegist(jsonData) {
  return request({
    url: `${serve}/ChannelPersonAdd`,
    method: 'get',
    params: {
      jsonData
    }
  })
}

/**
 * 注册商登陆
 * */ 
function cheLogin(data) {
  return request({
    url: `${serve}/ChannelBusinessLogin`,
    method: 'get',
    params: data
    
  })
}
/**
 * 员工登陆
 * */ 
function EmpLogin(data) {
  return request({
    url: `${serve}/ChannelPersonLogin`,
    method: 'get',
    params:data
  })
}


/**
 * 获取已经审核通过的渠道商列表
 * */ 
function ChannelList() {
  return request({
    url: `${serve}/ChannelBusinessGetList`,
    method: 'get',
  })
}

/**
 * 获取员工清单列表
 * */ 
function getChannelEmpList(data) {
  return request({
    url: `${serve}/ChannelBusinessGetPeronList`,
    method: 'get',
    params:data
  })
}

/**
 * 获取项目清单列表
 * */ 
function getSaProjectList() {
  return request({
    url: `${serve}/ErpGetSaProjectList`,
    method: 'get',
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
  ChannelList,
  getChannelEmpList,
  getSaProjectList,

  snsapiBase,
  getSignature
}