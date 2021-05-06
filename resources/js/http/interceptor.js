import axios from 'axios'
import {
    getAdmin,
    getUser,
} from '@/services/authentication'
import {
    Message
} from 'element-ui'
import messages from '@/utils/messages'

const http = axios.create({
    baseURL: process.env.MIX_APP_ENV === 'local' ? `${process.env.MIX_APP_URL}/api` : `${process.env.MIX_PROD_APP_URL}/api`,
    timeout: 60000
})



http.interceptors.request.use(async config => {
    let url = config.url.split('/')

    if (!url.includes('auth')) {
        if (url.includes('admin')) {
            const adminToken = await getAdmin()
            if (adminToken !== undefined && adminToken !== null) {
                config.headers['Authorization'] = `Bearer ${adminToken.token}`
            }

        }
        if (url.includes('user')) {
            const userToken = await getUser()
            if (userToken !== undefined && userToken !== null) {
                config.headers['Authorization'] = `Bearer ${userToken.token}`
            }
        }
    }
    if (process.env.MIX_APP_ENV === 'local') {
        console.log(config)
    }
    return config
}, error => {
    if (process.env.MIX_APP_ENV === 'local') {
        console.error(error)
    }
    return Promise.reject(error)
})

http.interceptors.response.use(res => {
    if (res.config.method === 'post' && process.env.MIX_APP_ENV === 'local') {
        console.log(res)
    }
    return res.data
}, error => {
    if (process.env.MIX_APP_ENV === 'local') {
        console.error(error)
    }

    if (error.response === undefined) {
        return throwError(messages.serverErrorMessage)
    }
    throwError(error?.response?.data?.message)

    if (process.env.MIX_APP_ENV === 'local') {
        console.error('Erro na requisição: ', error?.response)
    }
    return Promise.reject(error)
})

function throwError(message) {
	if (message === undefined) return   
    return Message({
        type: 'error',
        message: message,
        title: 'Erro!',
        duration: 5 * 1000
    })
}

export default http
