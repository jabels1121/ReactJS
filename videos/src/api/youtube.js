import axios from 'axios';

const API_KEY = 'AIzaSyDAB7hJEIEYUTWrGXGAu3qEy2KJUF546is';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }
});