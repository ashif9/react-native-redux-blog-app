import {combineReducers} from 'redux'
import BlogReducers from './BlogReducers'
import PreLoderReducers from './PreLoderReducers'




const rootReducer = combineReducers({
    blogsList : BlogReducers,
    blogsPreLoader: PreLoderReducers
})

export default rootReducer