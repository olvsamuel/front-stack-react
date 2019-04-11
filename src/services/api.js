import axios from 'axios';

const api = axios.create({
    baseURL: 'https://olvsamuel-test.herokuapp.com',
});

export default api;