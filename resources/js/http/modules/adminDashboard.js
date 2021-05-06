import axios from '@/http/interceptor'

export default {
    adminDashboardGetProducts: () => axios.get('/products'),
    adminDashboardShowProducts: (id) => axios.get(`/products/${id}`),
    adminDashboardStoreProducts: (data) => axios.post('/products/store', data),
    adminDashboardUpdateProducts: (id, data) => axios.post(`/products/update/${id}`, data),
    adminDashboardDeleteProducts: (id) => axios.post(`/products/delete/${id}`),

}
