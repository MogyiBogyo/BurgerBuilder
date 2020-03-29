import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-b226a.firebaseio.com/'
});

export default instance;