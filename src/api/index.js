import axios from 'axios'

const baseUrl = 'http://vuecourse.zent.edu.vn';

export const apiAxios = axios.create({
    baseURL: `${baseUrl}/api`,
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
})

export default {
    getProduct(data) {
        return apiAxios({
            method: 'get',
            url: `/products?q=${data.q}&page=${data.page}`,
        })
    },

    saveProduct(data) {
        return apiAxios({
            method: 'post',
            url: '/products',
            data,
        })
    },

    deleteProduct(id) {
        return apiAxios({
            method: 'delete',
            url: `/products/${id}`
        })
    },

    updateProduct(data) {
        return apiAxios({
            method: 'post',
            url: `/products/${data.id}`,
            data,
        })
    }
}