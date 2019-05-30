import request from '../index'
// import qs from 'qs'

let serve = process.env.NODE_ENV === 'production' ? '/mtwechat/v1/wx' : process.env.NODE_ENV === 'prodBuild' ? 'https://itmwxtv.wilmar.cn/v1/wx' : '/v1/wx'
if (process.env.NODE_ENV === 'testDev') {
  serve = `/v1/wx`
}
// const serve = `http://10.227.113.144:8088/mtwechat/v1/wx`
/*
*****************   运输管理单据查询列表   **************************
*/

/**
 * 提单详情查询
 * @param [{JSON}] data 分页查询参数
 * */
function deliveryBillInfo(data) {
  return request({
    url: `${serve}/bill/deliveryBillInfo`,
    method: 'post',
    data
  })
}

/**
 * 提单列表查询
 * @param [{JSON}] data 分页查询参数
 * */
function deliveryBilldataGrid(data) {
  return request({
    url: `${serve}/bill/deliveryBilldataGrid`,
    method: 'post',
    data
  })
}

/**
 * 提单列表 更新实收数据
 * @param [{JSON}] data 分页查询参数
 * */
function updateReceiptNum(data) {
  return request({
    url: `${serve}/bill/updateReceiptNum`,
    method: 'post',
    data
  })
}



/**
 * 提单状态查询
 * @param [{JSON}] data 分页查询参数
 * */
function deliveryBillNodeInfo(data) {
  return request({
    url: `${serve}/bill/deliveryBillNodeInfo`,
    method: 'post',
    data
  })
}

/**
 * 车辆信息查询
 * */
function carInfo(data) {
  return request({
    url: `${serve}/bill/carInfo`,
    method: 'post',
    data
  })
}

/**
 * 运单列表查询
 * @param [{JSON}] data 分页查询参数
 * */
function transferBillDataGrid(data) {
  return request({
    url: `${serve}/bill/transferBillDataGrid`,
    method: 'post',
    data
  })
}

/**
 * 运单详情查询
 * @param [{JSON}] data 分页查询参数
 * */
function transferBillInfo(data) {
  return request({
    url: `${serve}/bill/transferBillInfo`,
    method: 'post',
    data
  })
}

/*
*****************   分配车辆司机   **************************
*/

/**
 * 分配车辆司机
 * @param [{JSON}] data 分页查询参数
 * */
function assignCarDriver(data) {
  return request({
    url: `${serve}/assignCarDriver/assignCarDriver`,
    method: 'post',
    data
  })
}

/**
 * 重新分配车辆司机
 * @param [{JSON}] data 分页查询参数
 * */
function updateCarDriver(data) {
  return request({
    url: `${serve}/assignCarDriver/updateCarDriver`,
    method: 'post',
    data
  })
}

/**
 * 获取车辆集合
 * @param [{String}] openId 访问ID
 * */
function getCars(openId) {
  return request({
    url: `${serve}/assignCarDriver/getCars`,
    method: 'get',
    params: { openId }
  })
}

/**
 * 获取司机集合
 * @param [{String}] openId 访问ID
 * */
function getDrivers(openId) {
  return request({
    url: `${serve}/assignCarDriver/getDrivers`,
    method: 'get',
    params: { openId }
  })
}


/**
 * 更新提单司机车辆信息
 * @param [{JSON}] data
 * */
function updateDeliveryBillCarDriver(data) {
  return request({
    url: `${serve}/assignCarDriver/updateDeliveryBillCarDriver`,
    method: 'post',
    data
  })
}

/**
 * 修改车辆司机
 * @param [{Object}] data 修改车辆司机参数
 * */
// function updateCarDriver(data) {
//   return request({
//     url: `${serve}/assignCarDriver/updateCarDriver`,
//     method: 'post',
//     data
//   })
// }

/*
*****************   仓库预约模块   **************************
*/

/**
 * 查询仓库可预约日期和时间段
 * @param [{string}] openId 用户id
 * @param [{string}] transferId 运单主键
 * @param [{string}] warehouseCode 仓库编码
 * */
function appoTime(openId, transferId, warehouseCode) {
  return request({
    url: `${serve}/apm/appoTime`,
    method: 'get',
    params: {
      openId,
      transferId,
      warehouseCode
    }
  })
}

/**
 * 仓库对预约的运单进行查询
 * @param [{string}] openId 用户id
 * @param [{Array}] apmSts 预约状态
 * @param [{string}] pageIndex 当前页码
 * @param [{string}] size 页面大小
 * @param [{string}] appoDateStart  预约开始时间(yyyy-MM-dd)
 * @param [{string}] appoDateEnd    预约结束时间(yyyy-MM-dd)
 * @param [{string}] applyDateStart 预约申请开始时间--仓库(yyyy-MM-dd)
 * @param [{string}] applyDateEnd   预约申请结束时间--仓库(yyyy-MM-dd)
 * @param [{string}] pcorp 仓库Id
 * */
function appointment(openId, apmSts, pageIndex, size, appoDateStart, appoDateEnd, applyDateStart, applyDateEnd, pcorp) {
  return request({
    url: `${serve}/apm/appointment`,
    method: 'get',
    params: {
      openId,
      apmSts,
      pageIndex,
      size,
      appoDateStart,
      appoDateEnd,
      applyDateStart,
      applyDateEnd,
      pcorp
    }
  })
}

/**
 * 获取可预约
 * @param [{string}] openId 用户id
 * @param [{string}] transferId 运单主键
 * */
function warehouseGetByTransferId(openId, transferId) {
  return request({
    url: `${serve}/apm/warehouseGetByTransferId`,
    method: 'get',
    params: {
      openId,
      transferId
    }
  })
}

/**
 * 获取可预约 客户角色
 * @param [{string}] openId 用户id
 * @param [[string]] deliveryBillIdList 客户角色提单id集合 以逗号连接
 * */
function warehouseGetByDeliveryId(openId, deliveryBillIdList) {
  return request({
    url: `${serve}/apm/warehouseGetByDeliveryId`,
    method: 'get',
    params: {
      openId,
      deliveryBillIdList
    }
  })
}

/**
 * 用户提交预约时间
 * @param [{string}] openId 用户id
 * @param [{string}] transferId 运单主键
 * @param [{string}] warehouseCode 仓库编码
 * @param [{string}] resourceCode: 预约资源代码
 * @param [{string}] timeStart 开始时间
 * @param [{string}] timeEnd 结束时间
 * */
function appoTimePost(data) {
  return request({
    url: `${serve}/apm/appoTime`,
    method: 'post',
    data
  })
}

/**
 * 客户提交预约时间
 * @param [{string}] openId 用户id
 * @param [[Array]] deliveryBillIdList 提单ID列表
 * @param [{string}] warehouseCode 仓库编码
 * @param [{string}] resourceCode: 预约资源代码
 * @param [{string}] timeStart 开始时间
 * @param [{string}] timeEnd 结束时间
 * */
function apmCustomerAppoTimePost(data) {
  return request({
    url: `${serve}/apm/apmCustomerAppoTimePost`,
    method: 'post',
    data
  })
}

/**
 * 客户取消运单预约
 * @param [{string formData}] openId 用户id
 * @param [{long formData}] transferId 运单主键,
 * @param [{long formData}] apmId 预约单号(预约表主键)
 * @param [{long formData}] appointmentId id
 * */
function appointmentCancel(data) {
  return request({
    url: `${serve}/apm/appointmentCancel`,
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data,
    transformRequest: [function (data, headers) {
      console.log(headers)
      // Do whatever you want to transform the data
      let ret = ""
      for (let it in data) {
        ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&"
      }

      return ret;
    }]
  })
}

/**
 * 客户运单审核
 * @param [{formData string}] openId 用户id
 * @param [{formData string}] apmSts 审批状态
 * @param [{formData Array}] transferIds 预约单号
 * @param [{formData String}] failedReason 失败原因
 * */
function approval(data) {
  return request({
    url: `${serve}/apm/approval`,
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data,
    transformRequest: [function (data, headers) {
      console.log(headers)
      // Do whatever you want to transform the data
      let ret = ""
      for (let it in data) {
        ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&"
      }

      return ret;
    }]
  })
}

/*
*****************   提单拍照及异常模块   **************************
*/

/**
 * 异常上传之后的图片回显展示
 * @param [{string}] openId 用户id
 * @param [{string}] transferId 预约单号
 * @param [{Array}] deliveries 提单号list
 * */
function imgGet(openId, transferId, deliveries, imgType) {
  return request({
    url: `${serve}/bill/imgGet?openId=${openId}&transferId=${transferId}&deliveries=${deliveries}&imgType=${imgType}`,
    method: 'get'
  })
}

/**
 * 文件上传
 * @param [{string}] openId 用户id
 * @param [{string}] transferId 预约单号
 * @param [{formData}] file 上传文件
 * */
function imgPost(openId, transferId, data, imgType) {
  return request({
    url: `${serve}/bill/imgPost?openId=${openId}&transferId=${transferId}&imgType=${imgType}`,
    method: 'post',
    data
  })
}

/**
 * 提单拍照提交
 * @param [{string}] openId 用户id
 * @param [{Array}] deliveries 提单号list
 * @param [{Array}] imgUrls 图片暂存服务器路径
 * */
function deliveryPost(data) {
  return request({
    url: `${serve}/bill/deliveryPost`,
    method: 'post',
    // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data,
    // transformRequest: [function (data, headers) {
    //   // Do whatever you want to transform the data
    //   let ret = ""
    //   for (let it in data) {
    //     ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&"
    //   }

    //   return ret;
    // }]
  })
}

/**
 * 单据异常申报
 * @param [{JSON}] exceptionAppealParam 异常参数实体类
 * */
function exceptionAppeal(data) {
  return request({
    url: `${serve}/bill/exceptionAppeal`,
    method: 'post',
    data
  })
}

/**
 * 上传图片后若不选择提交,则前端发送请求删除之前上传的图片url
 * @param [{String}] openId 用户ID
 * @param [{String}] transferId 预约单号(运单主键)
 * @param [{Array}] imgUrls 图片暂存服务器路径(包括文件名)
 * */
function imgDelete(data) {
  return request({
    url: `${serve}/bill/imgDelete`,
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data,
    transformRequest: [function (data) {
      // Do whatever you want to transform the data
      let ret = ""
      for (let it in data) {
        ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&"
      }

      return ret;
    }]
  })
}

/**
 * 司机货物送达后进行确认
 * @param [{formData String}] openId 用户ID
 * @param [{formData String}] transferId 预约单号(运单主键)
 * @param [{formData Array}] deliveries 图片暂存服务器路径(包括文件名)
 * */
function confirmDelivery(data) {
  return request({
    url: `${serve}/bill/confirmDelivery`,
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data,
    transformRequest: [function (data) {
      // Do whatever you want to transform the data
      let ret = ""
      for (let it in data) {
        ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&"
      }

      return ret;
    }]
  })
}

/**
 * 司机查看实发数量后确认装货
 * @param [{formData String}] openId 用户ID
 * @param [{formData String}] transferId 预约单号(运单主键)
 * @param [{formData Array}] deliveries 图片暂存服务器路径(包括文件名)
 * */
function confirmLoad(data) {
  return request({
    url: `${serve}/bill/confirmLoad`,
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data,
    transformRequest: [function (data) {
      // Do whatever you want to transform the data
      let ret = ""
      for (let it in data) {
        ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&"
      }

      return ret;
    }]
  })
}

/*
*****************   position 在途信息   **************************
*/

/**
 * 承运商查看运单list
 * @param [{String}] openId
 * */
function transferList(openId) {
  return request({
    url: `${serve}/position/transferList`,
    method: 'get',
    params: {
      openId
    }
  })
}

/**
 * 客户提单在途查看
 * @param [{String}] openId
 * @param [{String}] deliveryId   提单主键
 * @param [{String}] deliverySts  提单状态
 * */
function delivery(openId, deliveryId, deliverySts) {
  return request({
    url: `${serve}/position/delivery`,
    method: 'get',
    params: {
      openId,
      deliveryId,
      deliverySts
    }
  })
}


export {
  deliveryBillInfo,
  deliveryBilldataGrid,
  deliveryBillNodeInfo,
  transferBillDataGrid,
  transferBillInfo,
  updateReceiptNum,
  carInfo,

  assignCarDriver,
  getCars,
  getDrivers,
  updateCarDriver,
  updateDeliveryBillCarDriver,

  appoTime,
  appointment,
  warehouseGetByDeliveryId,
  warehouseGetByTransferId,
  appoTimePost,
  apmCustomerAppoTimePost,
  appointmentCancel,
  approval,

  imgGet,
  imgPost,
  deliveryPost,
  exceptionAppeal,
  imgDelete,
  confirmDelivery,
  confirmLoad,

  transferList,
  delivery
}
