import fetch from '@/config/fetch'

/*
*获取两级导航列表
*/
export const navTwoStage = () => fetch('/index/v1/category');

/*
*获取标签列表
*/
export const labelList = () => fetch('/index/v1/label');

/*
*登陆
*/
export const login = data => fetch('/index/v1/login',data,'POST');

/*
*登陆
*/
export const logout = () => fetch('/index/v1/logout',[],'POST');

/*
*获取手机验证码
*/
export const sendSms = data => fetch('/index/v1/sendsms',data,'POST');

/*
*注册账号
*/
export const register = data => fetch('/index/v1/register',data,'POST');

/*
*获取用户信息
*/
export const userInfo = () => fetch('/index/v1/user');