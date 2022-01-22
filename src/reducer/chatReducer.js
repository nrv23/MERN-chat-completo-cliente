import {

    CARGAR_CHATS,
    CARGAR_CHATS_ERROR,
    INSERTAR_CHAT,
    INSERTAR_CHAT_ERROR,
    SETEAR_CHAT_ACTUAL
} from '../types/Chat';

const initialState = {
    chats : [],
    currentChat : {}
}

export const chatReducer = (state=initialState,action) => {

    switch(action.type) {   
        
        case CARGAR_CHATS: 
            return {
                ...state,
                chats: action.payload
            }
        case SETEAR_CHAT_ACTUAL:
            return {
                ...state,
                currentChat: action.payload
            }

        default:
            return state;
    }
}