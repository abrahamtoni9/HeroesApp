
import { types } from '../types/types';

export const authReducer = (state ={}, action) => {
    
    console.log("action.type = ",action.type)

    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };
        case types.logout:
            return {
                ...state,
                logged: false,
                user: null
            };
        default:
            return state;
    }
};