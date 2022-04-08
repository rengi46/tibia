import { SET_MONSTERS,SET_RACE,CARGANDO } from "../type/MonsterAction"
const initialState = {
    monsters: [],
    race:[],
    cargando:true,
    cargandodetails:true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MONSTERS:
            return {
                ...state,
                monsters: action.payload,
                cargando:false
            }
        case SET_RACE:
            return {
                ...state,
                race: action.payload,
                cargandodetails:false
            }
        case CARGANDO:
            return {
                ...state,
                cargando:true
            }
        default:
            return state
    }
}