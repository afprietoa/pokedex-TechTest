import { types } from "../types/authTypes"


export const registerReducer = (state={}, action) => {
    switch (action.type) {
        case types.register:
            return{
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name
            }
            
    
        default:
            return state
    }
}
