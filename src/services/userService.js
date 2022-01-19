import axios from './api';

export const updateUserProfile = async obj => {

    const token = localStorage.getItem("token") || '';
    const headers = {
        'Authorization': token,
    }

    return axios.put('/update-user',obj,{headers});
} 