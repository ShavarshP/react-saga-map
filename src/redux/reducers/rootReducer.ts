import { combineReducers } from 'redux'
import routingSelect from './routingSelectReducer'
import routingReducer from './routingsReducer'

const rootReducer = combineReducers({
  routings: routingReducer,
  routingSelect: routingSelect,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
