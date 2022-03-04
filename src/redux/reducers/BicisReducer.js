import { typesBicis } from "../types/types"


const initialState = []

export const bicisReducer = (state=initialState, action)=>{

    switch(action.type){
        case typesBicis.cargar:
            return{}
        default:
            return state
    }

}