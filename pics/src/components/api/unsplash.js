import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 375050ffdbf694b061b433dcf1fe72940b2226c0f85a46600bce861c4d050903'
    }
});