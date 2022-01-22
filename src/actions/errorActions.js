import { 
    SET_ERROR,
    CLEAN_ERROR 
} from "../types/Error";


export const setErrorAction = (msg) => {

    return {

        type: SET_ERROR,
        payload: msg
    }
}

export const cleanErrorAction = () => {

    return {

        type: CLEAN_ERROR
    }
}