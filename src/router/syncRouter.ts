import { RouteRecordRaw } from 'vue-router';

import layOut from '@/layOut/index.vue';

const syncRouter: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'home',
        meta: {
            title: 'home',
            keepAlive: false,
            requireAuth: false,
        },
        component: layOut,
    },
];

export default syncRouter;
