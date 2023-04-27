import { combineReducers } from "redux"
import loginReducer from "./loginReducer"
import themeReducer from "./themeReducer"
const reducers=combineReducers({

    login:loginReducer,
    theme:themeReducer,

})

export default reducers