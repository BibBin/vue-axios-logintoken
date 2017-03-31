import {request} from '../../src/utils/httpconfig.js'

//GET请求模板
//export const getArticleApi = () => {
//  return request('/rest/getArticles')
//}

//*** getCode ***快速注册获取验证码
export const getRegisterCodeApi = (params) => {
  return request({method: 'post', url: '/api/services/k5game/account/SendRegisterCode', data: params})
}

//*** quickRegister ***快速注册
export const quickRegisterApi = (params) => {
  return request({method: 'post', url: '/api/services/k5game/account/QuickRegister', data: params})
}

//*** sendResetPasswordCode ***重置密码获取验证码
export const getResetPasswordCodeApi = (params) => {
  return request({method: 'post', url: '/api/services/k5game/account/SendPasswordResetCode', data: params})
}

//*** ResetPassword ***重置密码
export const ResetPasswordApi = (params) => {
  return request({method: 'post', url: '/api/services/k5game/account/ResetPassword', data: params})
}

//*** userLogin ***用户登录
export const userLoginApi = (params) => {
  return request({method: 'post', url: '/api/TokenAuth', data: params})
}


