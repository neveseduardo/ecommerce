import Layout from '@/layouts/AuthAdmin';

export default {
	path: '/admin',
	component: Layout,
	redirect: 'login',
	children: [
		{
			path: 'login',
			component: () => import('@/views/AuthAdmin/Login.vue'),
			name: 'AdminLogin',
			meta: { auth: false, role: 'admin', title: 'AdminLogin' },
		},
	],
}