import { createApp } from 'vue';
import App from './App.vue';
// import VueRouter from 'vue-router';
import './index.css';
import router from './router';

// Vue.config.productionTip = false;

// Vue.use(VueRouter);

createApp(App).use(router).mount('#app');