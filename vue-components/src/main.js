import {
    def
} from '@vue/shared';
import {
    createApp
} from 'vue';
import App from './App.vue';
import './index.css';
import router from './router';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import 'maz-ui/css/main.css';
import MazBtn from 'maz-ui/components/MazBtn';
import MazInput from 'maz-ui/components/MazInput';
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
import V3ColorPicker from 'v3-color-picker';


import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";



createApp(App).use(Vue3ColorPicker).use(V3ColorPicker).component('MazPhoneNumberInput', MazPhoneNumberInput).component('MazInput', MazInput).component('MazBtn', MazBtn).component('Datepicker', Datepicker).use(router).mount('#app');