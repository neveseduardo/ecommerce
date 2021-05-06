import axios from '@/http/interceptor'

export default {
    userLogin: data => axios.post('/auth/userLogin', data),
    adminLogin: data => axios.post('/auth/adminLogin', data),
	getUser: () => axios.get('/user'),
	getAdmin: () => axios.get('/admin'),
}
