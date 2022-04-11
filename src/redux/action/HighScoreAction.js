import { SET_PERSONS } from "../type/highScoreType"
import axios from "axios";

export const allHighScore=(props)=>{
    return (dispatch)=>{
        axios.get("https://api.tibiadata.com/v3/highscores/all/experience/all")
        .then(response=>{
            dispatch({
                type:SET_PERSONS,
                payload:response.data
            })
        })
    }
}


export const HighScorefilter=({world="all",category="experience",vocation="all"})=>{
    return (dispatch)=>{
        axios.get(`https://api.tibiadata.com/v3/highscores/${world}/${category}/${vocation}`)
        .then(response=>{
            dispatch({
                type:SET_PERSONS,
                payload:response.data
            })
        })
    }
}

export const PersonSearch=({name})=>{
    return (dispatch)=>{
        axios.get(`https://api.tibiadata.com/v3/character/${name}`)
        .then(response=>{
            dispatch({
                type:SET_PERSONS,
                payload:response.data
            })
        })
    }
}