const { getChats } = require("../services/chatService");
const { CARGAR_CHATS,SETEAR_CHAT_ACTUAL } = require("../types/Chat");

export const getChatActions =  () => {

    return async dispatch => {

        try {
           
            const { data } = await getChats();

            data.forEach(chat => {
                chat.Users.foreEach(user => {
                    user.status ="offline"
                })
                chat.Messages.reverse();
            });

            dispatch({
                type: CARGAR_CHATS,
                payload: data
            })


        } catch (error) {

            
            if(error.response.status === 401) {

            } else if(error.response.status === 403 || error.response.status === 500) {

            } 
        }
    } 
}

export const setCurrentChatAction = chat => {

    return {
        type: SETEAR_CHAT_ACTUAL,
        payload: chat
    }
}