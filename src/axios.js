import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-clone.herokuapp.com',
});

export default instance; 