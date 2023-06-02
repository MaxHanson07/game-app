import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '080280a86d5244d4bb59324c1f83aa4b'
    }
})