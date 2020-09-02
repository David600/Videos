import axios from 'axios';

const KEY = 'AIzaSyButRX85mONpw2NJWQtOuokqCL8UPxpl5w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResaults: 5,
        key: KEY
    }

});