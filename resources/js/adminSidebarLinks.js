export default [
	{
        name: 'Dashboard',
        icon: 'fa fa-tachometer-alt',
        path: '/admin/dashboard'
    },

	{
        name: 'Meu Perfil',
        icon: 'fa fa-address-card',
        path: '/admin/profile'
    },
	{
        name: 'Usuários',
        icon: 'fa fa-users',
		children: [
			{
				name: 'Lista de usuários',
				path: '/admin/users'
			},
			{
				name: 'Novo usuário',
				path: '/admin/users/form'
			},
		]
    },
	{
        name: 'Produtos',
        icon: 'fa fa-shopping-cart',
		children: [
			{
				name: 'Lista de produtos',
				path: '/admin/products'
			},
			{
				name: 'Formulário de produto',
				path: '/admin/products/form'
			},
		]
    },
	{
        name: 'Meu pagamentos',
        icon: 'fa fa-money-check-alt',
        path: '/admin/payments'
    },
	{
        name: 'Notificações',
        icon: 'fa fa-bell',
        path: '/admin/notifications'
    },
	{
        name: 'Mensagens',
        icon: 'fa fa-envelope',
        path: '/admin/messages'
    },
	{
        name: 'Configurações',
        icon: 'nc-icon nc-settings-gear-65',
        path: '/admin/settings'
    },
]
