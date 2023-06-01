import { Action } from "./action"

export interface TokenState {
    //model a ser usada no redux
    tokens: string,
    id: string
}

const initialState = {
    tokens: '',
    id: ''
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    //coloca no campo de tokens o payload que tá chegando 
    switch(action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload, id: state.id}
        };
        case "ADD_ID": {
            return {id: action.payload, tokens: state.tokens}
        }
        default: return state   
    }
}