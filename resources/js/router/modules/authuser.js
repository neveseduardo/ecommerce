import Layout from '@/layouts/AuthUser';

export default {
	path: '/user',
	component: Layout,
	redirect: 'login',
	children: [
		{
			path: 'login',
			component: () => import('@/views/AuthUser/Login.vue'),
			name: 'UserLogin',
			meta: { auth: false, role: 'user', title: 'UserLogin' },
		},
		{
			path: 'register',
			component: () => import('@/views/AuthUser/Register.vue'),
			name: 'UserRegister',
			meta: { auth: false, role: 'user', title: 'UserRegister' },
		},
		{
			path: 'forgot',
			component: () => import('@/views/AuthUser/ForgotPassword.vue'),
			name: 'UserForgotPassword',
			meta: { auth: false, role: 'user', title: 'ForgotPassword' },
		},
		{
			path: 'reset',
			component: () => import('@/views/AuthUser/ResetPassword.vue'),
			name: 'UserResetPassword',
			meta: { auth: false, role: 'user', title: 'ResetPassword' },
		},
	],
}