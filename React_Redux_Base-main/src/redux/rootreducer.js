import { combineReducers } from "redux";
import { likesReducer } from "./Likes-reducer";
import { inputReducer } from "./InputReducer";
import { commentsReducer } from "./comments-reducer";
import {appReducer} from "./app-reducer";

export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer,
    appReducer,
})