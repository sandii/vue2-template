import Vue from 'vue';
import App from '@/app.vue';
import router from '@/router';
import store from '@/store/store';
import '@/styles/common.scss';
import '@/styles/shim-el.scss';
import {
  Loading,
  Message,
} from 'element-ui';

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
