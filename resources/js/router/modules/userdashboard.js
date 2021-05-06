import Layout from '@/layouts/UserDashboard';

export default {
    path: '/user',
    component: Layout,
    redirect: 'dashboard',
    children: [{
            path: 'dashboard',
            component: () => import('@/views/UserDashboard/Dashboard.vue'),
            name: 'UserDashboard',
            meta: {
                auth: true,
                role: 'user',
                title: 'UserDashboard'
            },
        },
        {
            path: 'profile',
            component: () => import('@/views/UserDashboard/Profile.vue'),
            name: 'UserProfile',
            meta: {
                auth: true,
                role: 'user',
                title: 'UserProfile'
            },
        },
        {
            path: 'payments',
            component: () => import('@/views/UserDashboard/Payments.vue'),
            name: 'UserPayments',
            meta: {
                auth: true,
                role: 'user',
                title: 'UserPayments'
            },
        },
        {
            path: 'notifications',
            component: () => import('@/views/UserDashboard/Notifications.vue'),
            name: 'UserNotifications',
            meta: {
                auth: true,
                role: 'user',
                title: 'UserNotifications'
            },
        },
        {
            path: 'messages',
            component: () => import('@/views/UserDashboard/Messages.vue'),
            name: 'UserMessages',
            meta: {
                auth: true,
                role: 'user',
                title: 'UserMessages'
            },
        },
        {
            path: 'settings',
            component: () => import('@/views/UserDashboard/Settings.vue'),
            name: 'UserSettings',
            meta: {
                auth: true,
                role: 'user',
                title: 'UserSettings'
            },
        },

    ],
}
