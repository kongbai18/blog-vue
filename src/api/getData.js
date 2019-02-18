import fetch from '@/config/fetch'

/*
*获取两级导航列表
*/
export const navTwoStage = () => fetch('/index/v1/category');

/*
*获取标签列表
*/
export const labelList = () => fetch('/index/v1/label');