import {
    createRouter,
    createWebHashHistory
} from 'vue-router';

// import TheForm from './components/TheForm.vue';
// import TestPage from './components/TestPage.vue';

import Main_Input_Class from './components/Main_Input_Class.vue';



export default createRouter({

    history: createWebHashHistory(),
    routes: [
        //     path: '/',
        //     component: TheInputs
        // },
        // {
        //     path: '/forms',
        //     component: TheForm
        // },
        {
            path: '/main_input',
            component: Main_Input_Class
        }
        // {
        //     path: '/testpage',
        //     component: TestPage
        // },

    ]
});