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
    method: 'post',
    // params: {
      jsonData
    // }
  })
}

/**
 * 短信发送
 * */ 
function sendMessage(data) {
  return request({
    url: `${serve}/SmsSend`,
    method: 'get',
     params: data
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
 * 短信验证
 * */ 
// function sendMessage(jsonData) {
//   return request({
//     url: ``,
//     method: 'get',
//     params: {
//       jsonData
//     }
//   })
// }

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
 * 待审核员工数量
 * */ 
function todoAudit(data) {
  return request({
    url: `${serve}/ChannelBusinessGetPeronUnAuditedCount`,
    method: 'get',
    params: data
    
  })
}
/**
 * 通过公司id获取项目名称
 * */ 
function getProjectList(data) {
  return request({
    url: `${serve}/ErpGetSaProjectListByCompanyId`,
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
 * 审核员工
 * */ 
function ChannelBusinessAudit(data) {
  return request({
    url: `${serve}/ChannelBusinessAudit`,
    method: 'get',
    params:data
  })
}



/**
 * 获取已经审核通过的渠道商列表
 * */ 
function ChannelList(data) {
  return request({
    url: `${serve}/ChannelBusinessGetList`,
    method: 'get',
  })
}

/**
 * 获取已审核通过员工清单列表
 * */ 
function getChannelEmpList(data) {
  return request({
    url: `${serve}/ChannelBusinessGetPeronList `,
    method: 'get',
    params:data
  })
}


/**
 * 获取未审核通过员工清单列表
 * */ 
function getApproveChannelEmpList(data) {
  return request({
    url: `${serve}/ChannelBusinessGetPeronListUnAudited `,
    method: 'get',
    params:data
  })
}
/**
 * 渠道商员工客户转移
 * */ 
function ChannelBusinessMoveClient(data) {
  return request({
    url: `${serve}/ChannelBusinessMoveClient `,
    method: 'get',
    params:data
  })
}

/**
 * 获取某员工的客户列表
 * */ 
function ChannelBusinessMoveGetList(data) {
  return request({
    url: `${serve}/ChannelBusinessMoveGetList `,
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
/**
 * 获取客户置业顾问更进情况
 * */ 
function ChannelPersonGetClientContact(data) {
  return request({
    url: `${serve}/ChannelPersonGetClientContact`,
    method: 'get',
    params:data
  })
}

/**
 * 新增报备
 * */ 
function report(data) {
  return request({
    url: `${serve}/ClientReportAdd`,
    method: 'get',
    params:data
  })
}
/**
 *渠道商汇总
 * */ 
function ChannelBusinessCount(data) {
  return request({
    url: `${serve}/ChannelBusinessCount`,
    method: 'get',
    params:data
  })
}

/**
 * 获取报备清单
 * */ 
function getReportList(data) {
  return request({
    url: `${serve}/ClientReportList`,
    method: 'get',
    params:data
  })
}

/**
 * 获取可带看报备清单
 * */ 
function ClientReportCanSeeList(data) {
  return request({
    url: `${serve}/ClientReportCanSeeList`,
    method: 'get',
    params:data
  })
}

/**
 * 置业顾问登陆接口
 * */ 
function adviserLogin(data) {
  return request({
    url: `${serve}/ErpLogin`,
    method: 'get',
    params:data
  })
}

/**
 * 带看确认接口
 * */ 
function SeeHouseConfirm(data) {
  return request({
    url: `${serve}/SeeHouseConfirm`,
    method: 'get',
    params:data
  })
}

/**
 * 获取渠道商佣金
 * */ 
function ChannelBusinessCommission(data) {
  return request({
    url: `${serve}/ChannelBusinessCommission`,
    method: 'get',
    params:data
  })
}


/**
 * 渠道员工离职
 * */ 
function ChannelPersonDismission(data) {
  return request({
    url: `${serve}/ChannelPersonDismission`,
    method: 'get',
    params:data
  })
}
/**
 * 获取职业顾问列表
 * */ 
function getAdviser(data) {
  return request({
    url: `${serve}/ErpGetProjectUserList`,
    method: 'get',
    params:data
  })
}

/*
*****************   获取openId   **************************
*/ 

/**
 * 获取openId
 * @param [{String}] code 微信识别码
 * */ 
function getUserInfo(code) {
  return request({
    url: `${serve}/getUserInfo?code=` + code,
    method: 'get'
  })
}

/**
 * 微信扫一扫
 */

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
  report,
  getReportList,
  adviserLogin,
  SeeHouseConfirm,
  getUserInfo,
  getApproveChannelEmpList,
  ChannelBusinessAudit,
  ChannelPersonDismission,
  ClientReportCanSeeList,
  ChannelBusinessMoveGetList,
  ChannelBusinessMoveClient,
  ChannelPersonGetClientContact,
  ChannelBusinessCount,
  ChannelBusinessCommission,
  getProjectList,
  todoAudit,
  sendMessage,
  getAdviser,

  snsapiBase,
  getSignature
}