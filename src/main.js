import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element UI 库
import ElementUI from 'element-ui';
//  引入css文件
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
