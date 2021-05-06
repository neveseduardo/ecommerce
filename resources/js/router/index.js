import Vue from 'vue';

import Router from 'vue-router';
import errorsRoutes from '@/router/modules/errors'
import HomeRoutes from '@/router/modules/home'
import AdminAuthRoutes from '@/router/modules/authadmin'
import UserAuthRoutes from '@/router/modules/authuser'
import AdminDashboardRoutes from '@/router/modules/admindashboard'
import UserDashboardRoutes from '@/router/modules/userdashboard'

Vue.use(Router);

export const routes = [
    HomeRoutes,
	errorsRoutes,
	AdminAuthRoutes,
	UserAuthRoutes,
	UserDashboardRoutes,
	AdminDashboardRoutes,
]

const createRouter = () => new Router({
    //mode: 'history', // não funciona com laravel nativamente
    scrollBehavior: () => ({
        y: 0
    }),
    base: process.env.MIX_BASE_PATH,
    routes: routes,
});

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

export default router;
