import { SET_ERROR,CLEAN_ERROR } from "../types/Error";

const initialState = {

    error: null
}

export const errorReducer = (state=initialState,action) => {

    switch(action.payload) {

        case SET_ERROR:
            return {
                error: action.payload
            }
        case CLEAN_ERROR: 
            return {
                error: null
            }

        default:
            return state;
    }

}
