import userReducer from './user'
import {combineReducers} from 'redux'

const allReducer = combineReducers({
    userName: userReducer
})

export default allReducer