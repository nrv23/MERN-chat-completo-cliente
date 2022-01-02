import authService from '../services/authService';
import { 
    LOGIN,
    LOGIN_ERROR,
    REGISTER,
    REGISTER_ERROR,
    LOGOUT,
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SESSSION_EXPIRED
} from '../types/auth';


export const login = (data,history) => {

    return async dispatch => {

        try {

            const {data:{
                user,token
            }} = await authService.login(data);
            localStorage.setItem("token",token);
            await dispatch({
                type: LOGIN,
                payload: {
                    user,token
                }
            });

            history.push('/');

    
        } catch (error) {
            console.log(error)
            if(error.response.status === 404) {
                //usuario no encontrado
                dispatch({
                    type: LOGIN_ERROR,
                    payload: error.response.data.msg
    
                })
            } else if(error.response.status === 422) {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: error.response.data.msg
    
                })
                //faltan parametros
            } else if(error.response.status === 400) {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: error.response.data.msg
    
                })
                //mala peticion
            } else {
                //error de servidor
                dispatch({
                    type: LOGIN_ERROR,
                    payload: error.response.data.msg
    
                })
            }
        }

    }
}

export const register = (data,history) => {

    return async dispatch => {

        try {

            const {data:{
                user,token
            }} = await authService.register(data);
            localStorage.setItem("token",token);
            dispatch({
                type: REGISTER,
                payload: {
                    user,token
                }

            });

            history.push('/'); //pantalla de chat
    
        } catch (error) {

            if(error.response.status === 404) {
                //usuario no encontrado
                dispatch({
                    type: REGISTER_ERROR,
                    payload: error.response.data.msg
    
                })
            } else if(error.response.status === 422) {
                dispatch({
                    type: REGISTER_ERROR,
                    payload: error.response.data.msg
    
                })
                //faltan parametros
            } else if(error.response.status === 400) {
                dispatch({
                    type: REGISTER_ERROR,
                    payload: error.response.data.msg
    
                })
                //mala peticion
            } else {
                //error de servidor
                dispatch({
                    type: REGISTER_ERROR,
                    payload: error.response.data.msg
    
                })
            }
        }

    }
}

export const logout = () => {

    localStorage.removeItem("token");
    return {
        type: LOGOUT
    }
}

export const getCurrentUser = () => {

    return async dispatch => {

       

        try {

            const {data:{
                user,token
            }} = await authService.getCurrentUser();
            localStorage.setItem("token",token);
    
            dispatch({
                type: GET_USER,
                payload: {
                    user,token
                }
            })
            
        } catch (error) {
            console.log(error);
            if(error.response.status === 401) { //token vencido
                dispatch({
                    type: GET_USER_SESSSION_EXPIRED
                })
            } else { // error del servidor
                dispatch({
                    type: GET_USER_ERROR
                })
            }
        }
    }
}