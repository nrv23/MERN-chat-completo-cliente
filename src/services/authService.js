
import axiosClient from './api';



const login = async (user) => {

    const headers = {
        'Content-Type': 'application/json'
    }
    
    return axiosClient.post('/login',user, {headers});
}

const register = async user => {
    const headers = {
        'Content-Type': 'application/json'
    }
    
    return axiosClient.post('/register',user, {headers});
}

const getCurrentUser = () => {

    const token = localStorage.getItem("token") || '';

    const headers = {
        'Authorization': token
    }
    return axiosClient.get('/user/',{headers});
}

const authService = {
    login,
    register,
    getCurrentUser
}

export default authService; 