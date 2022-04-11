import { SET_PERSONS } from "../type/highScoreType"
const initialState = {
    HighScore: [],
    cargando:true,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSONS:
            return {
                ...state,
                HighScore: action.payload,
                cargando:false
            }
        default:
            return state
    }
}