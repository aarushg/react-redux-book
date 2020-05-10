import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/', 
    headers:{
        Authorization: 'Client-ID smBrlJ8fCmgMX419UsNRoEJTH1Yl1CD39r6f47Y4la4'
    }
});