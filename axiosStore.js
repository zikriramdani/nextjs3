import axios from 'axios'

const instance = axios.create({
    baseURL: `http://localhost:6768/api`
})

export default instance