import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import TheRadio from './components/TheRadio.vue';
import TheInputs from './components/TheInputs.vue';
import TheSidebar from './components/TheSidebar.vue';
import ThePageHeadings from './components/ThePageHeadings.vue';
import TheCardHeadings from './components/TheCardHeadings.vue';
import TheDescriptionList from './components/TheDescriptionList.vue';
import TheCalendar from './components/TheCalendar.vue';
import TheFeeds from './components/TheFeeds.vue';


export default createRouter({

    history: createWebHashHistory(),
    routes: [{
            path: '/',
            component: TheInputs
        },
        {
            path: '/radio',
            component: TheRadio
        },
        {
            path: '/sidebar',
            component: TheSidebar
        },
        {
            path: '/pageheadings',
            component: ThePageHeadings
        },
        {
            path: '/cardheadings',
            component: TheCardHeadings
        },
        {
            path: '/descriptionslist',
            component: TheDescriptionList
        },
        {
            path: '/calendar',
            component: TheCalendar
        },
        {
            path: '/feeds',
            component: TheFeeds
        }

    ]
});

// const routes = [{
//     path: './radio',
//     name: radio,
//     component: TheRadio
// }];

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes
// });

// export default router;