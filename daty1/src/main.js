/*
 * @Author: 席鹏昊
 * @Date: 2019-11-29 19:30:44
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-29 19:39:47
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
