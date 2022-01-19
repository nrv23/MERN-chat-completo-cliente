import {

    CARGAR_CHATS,
    CARGAR_CHATS_ERROR,
    INSERTAR_CHAT,
    INSERTAR_CHAT_ERROR
} from '../types/Chat';

const initialState = {
    chats : [],
    currentChat : {},
    error: null
}

export const chatReducer = (state=initialState,action) => {

    switch(action.type) {   
        
        case CARGAR_CHATS: 
            return {
                ...state,
                chats: action.payload
            }

        default:
            return state;
    }
}