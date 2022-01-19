import { updateUserProfile } from "../services/userService";
import { GET_USER_SESSSION_EXPIRED } from "../types/auth";
import { 
    ACTUALIZAR_PERFIL,
    ACTUALIZAR_PERFIL_ERROR 
} from "../types/user";

export const showError = (type=ACTUALIZAR_PERFIL_ERROR,payload) => {

    return {
        type,
        payload
    }
}

export const updateUser =  (obj) => {

    console.log(obj)
    return async dispatch => { 

        try {
        
            let { data:
                { user } 
            } = await updateUserProfile(obj);

            const urlImagen = `${process.env.REACT_APP_BACKEND_URL_USER_IMG}${user.avatar}`;
            user.avatar = urlImagen;


            console.log({user});

            dispatch({
                type: ACTUALIZAR_PERFIL,
                payload: user
            })
            
    
        } catch (error) {   
            console.log(error.response.data);
            if(error.response.status === 500) { // ocurrió un error
                dispatch(showError(
                        ACTUALIZAR_PERFIL_ERROR,
                        error.response
                    )
                )
            } else if(error.response.status === 401) { // se venció la sesión
                dispatch(showError(
                        GET_USER_SESSSION_EXPIRED,
                        error.response.data.error
                    )
                )

            } else { // 400 bad request

                dispatch(showError(
                        ACTUALIZAR_PERFIL_ERROR,
                        error.response.data.error
                    )
                )

            }
        }
    } 
}


