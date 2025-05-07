import axios from 'axios'

const apiLocal = axios.create({
    baseURL: 'http://192.168.56.1:3333'
})

export default apiLocal