import {INIT, LOG} from './action.js';
const initialState = {
    msg: new Date().getTime()
}

export function HomeReducer(state = initialState, action) {
    switch (action.type) {
        case INIT:
            {
                return state;
            }
        case LOG:
            {
                return {
                    ...state,
                    msg: action.msg
                }
            }
        default:
            {
                return state
            }
    }
}