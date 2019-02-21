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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mavonEditor,
  components: { App },
  template: '<App/>'
})
