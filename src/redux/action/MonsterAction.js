import { SET_MONSTERS,SET_RACE,CARGANDO } from "../type/MonsterType"
import axios from "axios";

export const treaerMonstruos=(props)=>{
    return (dispatch)=>{
        axios.get("https://api.tibiadata.com/v3/creatures")
        .then(response=>{
            dispatch({
                type:SET_MONSTERS,
                payload:response.data
            })
        })
    }
}

export const treaerMonstruosPorRace=(race)=>{
    return (dispatch)=>{
        axios.get(`https://api.tibiadata.com/v3/creature/${race}`)
        .then(response=>{
            dispatch({
                type:SET_RACE,
                payload:response.data
            })
        })
    }
}

export const cargandoDatos=()=>{
    console.log("cargando");
    return {
            type:CARGANDO
        }
    
}