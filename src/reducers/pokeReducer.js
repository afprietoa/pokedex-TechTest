import { typesData, typesPk } from "../types/pokeTypes";


const initialState = {
    data: [],
    loading: false,
    err: '',
    dataPk: {}
}
export const pokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesData.request:
            return {
                ...state,
                loading:true
            }
        case typesData.success:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case typesData.failure:
            return {
                ...state,
                err: action.payload
            }
            //poke section

            case typesPk.requestPk:
                return {
                    ...state,
                    loading:true
                }
            case typesPk.successPk:
                return {
                    ...state,
                    loading: false,
                    dataPk: action.payload
                }
            case typesPk.failurePk:
                return {
                    ...state,
                    err: action.payload
                }
        default:
            return initialState
    }
}