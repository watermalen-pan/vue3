import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import asyncRouter from './asyncRouter';
import syncRouter from './syncRouter';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '/',
        redirect: {
            path: '/home',
        },
    },
    ...asyncRouter,
    ...syncRouter
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
