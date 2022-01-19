import axios from './api';

export const getChats = async () => {

    const token = localStorage.getItem("token") || '';

    const headers = {
        'Authorization': token
    }

    return axios.get('/chats',{headers});
}