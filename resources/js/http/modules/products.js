import axios from '@/http/interceptor'

export default {
    getProducts: () => axios.get('/products'),
    getData: () => axios.get('/products/get'),
    showProducts: (id) => axios.get(`/products/${id}`),
    storeProducts: (data) => axios.post('/products/store', data),
    updateProducts: (id, data) => axios.post(`/products/update/${id}`, data),
    deleteProducts: (id) => axios.post(`/products/delete/${id}`),
}
