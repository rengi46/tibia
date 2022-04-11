import { combineReducers } from "redux";
import MonsterReducer from "./MonsterReducer";
import HighScoreReduce from "./HighScoreReduce";
export default combineReducers({
    MonsterReducer,
    HighScoreReduce
})