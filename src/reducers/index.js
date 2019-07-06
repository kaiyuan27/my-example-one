import { combineReducers } from "redux"
import * as reducer from "./commonReducer"

export default combineReducers({
  common: reducer.commonReducer
})