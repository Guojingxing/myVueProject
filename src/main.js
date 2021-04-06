import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://127.0.0.1:3306/search?serverTimezone=GMT%2B8';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
