import axios from 'axios'

const api = axios.create({
    baseURL: 'http://satellite.nagoya/api/wp-json/wp/v2',
    // baseURL: 'https://bizvektor.com/wp-json/wp/v2',
    timeout: 10000
})

export default api
