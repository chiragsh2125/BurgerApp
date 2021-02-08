import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://react-my-burger-595da-default-rtdb.firebaseio.com/'
});

export default instance;    