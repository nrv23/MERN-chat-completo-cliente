import { 
    LOGIN,
    REGISTER,
    LOGIN_ERROR,
    REGISTER_ERROR,
    LOGOUT,
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SESSSION_EXPIRED
} from "../types/auth";

const initialState = {
    user:{},
    token: '',
    isLoggedIn: false,
    error: null
}

export const authReducer = (state=initialState,action) => {

    switch(action.type) {

        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user,
                token: action.payload.token
            }
        case LOGIN_ERROR: 
            return {
                ...state,
                error: action.payload
            }

        case REGISTER:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLoggedIn: true
            }
        
        case REGISTER_ERROR: 
            return {
                ...state,
                error: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                user:{},
                token: '',
                isLoggedIn: false,
                error: null
            }
        case GET_USER: 
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLoggedIn: true
            }
        case GET_USER_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_USER_SESSSION_EXPIRED:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                token: '',
                error: null
            }
        default:
            return state;
    }
}
