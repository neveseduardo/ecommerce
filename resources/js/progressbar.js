import NProgress from "nprogress";
import {
    getUser,
    getAdmin
} from '@/services/authentication'

let routeResolved = false;

function tryInitProgress() {
    routeResolved = false;
    setTimeout(() => {
        if (!routeResolved) {
            NProgress.start();
        }
    }, 200);
}
export default function initProgress(router) {
    router.beforeEach(async (to, from, next) => {
        tryInitProgress();
        let user = await getUser();
        let admin = await getAdmin();

        if (admin === null && to.meta.auth && to.meta.role === 'admin') {
            return next({
                name: 'AdminLogin'
            })
        }

        if (user === null && to.meta.auth && to.meta.role === 'user') {
            return next({
                name: 'UserLogin'
            })
        }

        if (admin !== null && to.meta.role === 'admin' && to.name === 'AdminLogin') {
            return next({
                name: 'AdminDashbord'
            })
        }

        if (user !== null && to.meta.role === 'user' && to.name === 'UserLogin') {
            return next({
                name: 'UserDashboard'
            })
        }

        return next()
    });
    router.afterEach(() => {
        routeResolved = true;
        NProgress.done();
    });
}
