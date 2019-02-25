// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false
Vue.use(mavonEditor)

Vue.filter('htmlToStr', function (value) {
    return value.replace(/<.*?>/g,"");
})

Vue.filter('isInArray', function (arr1,arr2) {
    if(arr2.indexof(arr1) == -1){
        return false;
    }else {
        return true;
    }
})

Vue.filter('setTime', function (value) {
    value = value*1000;
    var currentDate=new Date();
    var currentYear=currentDate.getFullYear();

    var actualDate = new Date(value);
    var actualYear=actualDate.getFullYear();
    var actualMonth = (actualDate.getMonth() + 1 < 10 ? '0' + (actualDate.getMonth() + 1) : actualDate.getMonth() + 1);
    var actualDay = actualDate.getDate() < 10 ? '0'+actualDate.getDate() : actualDate.getDate();
    var actualHours = actualDate.getHours() < 10 ? '0'+actualDate.getHours() : actualDate.getHours();
    var actualMinute = actualDate.getMinutes() < 10 ? '0'+actualDate.getMinutes() : actualDate.getMinutes();

    if(currentYear === actualYear){
       if(new Date(value).toDateString() === new Date().toDateString()){
           //今天
           return '今天 '+actualHours+':'+actualMinute;
       }else{
           //今年但不是今天
           return actualMonth+'月'+actualDay+'日'+' '+actualHours+':'+actualMinute;
       }
    }else{
       //今年之前
        return actualYear+'-'+actualMonth+'-'+actualDay+'-'+' '+actualHours+':'+actualMinute;
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mavonEditor,
  components: { App },
  template: '<App/>'
})
