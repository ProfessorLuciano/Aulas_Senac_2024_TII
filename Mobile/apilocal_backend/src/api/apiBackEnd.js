import axios from 'axios'

const apiBackEnd = axios.create({
    baseURL: 'http://10.152.46.56:3333'
})

export default apiBackEnd