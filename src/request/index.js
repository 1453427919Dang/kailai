import axios from 'axios';

const service = axios.create({
  timeout: 150000,// request timeout  设置15秒超时
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})


// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Add a request interceptor
// service.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   clearTimeout(closeIn)
//   var closeIn = setTimeout(()=> {
//     Indicator.close()
//     clearTimeout(closeIn)
//   }, 150000)
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// // Add a response interceptor
// service.interceptors.response.use(function (response) {
//   // Do something with response data
//   if(response.status === 200) {
//     return response.data
//   } else if(parseInt(response.status) === 500){
//     MessageBox('提示', '网络繁忙，请稍后重试');
//     return response.data
//   } else {
//     MessageBox('提示', response.data.msg);
//     return response.data;
//   }
// }, function (error) {
//   console.log(error)
//   if(parseInt(error.response.status) === 500 || parseInt(error.response.status) === 404) {
//     Indicator.close()
//     MessageBox('提示', '网络异常，请稍后重试！');
//   }
//   // throw new Error(error)
//   // Do something with response error
//   return Promise.reject(error);
// });


export default service
