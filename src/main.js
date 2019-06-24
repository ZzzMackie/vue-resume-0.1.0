import Vue from 'vue';
// eslint-disable-next-line no-unused-vars
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
// 引入 ElementUI 响应式断点
import 'element-ui/lib/theme-chalk/display.css';
import './assets/css/resets.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
