import axios from "axios"

const axiosInstance = axios.create({
    baseURL: '', // isi url api
    headers: {
        "Content-Type": 'application/json' //sesuaikan headers
    }
})

export default axiosInstance