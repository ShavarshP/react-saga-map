import { routingsTypes } from '../../ActionTypes/RoutingsTypes'
import { RoutingsActions, RoutingsState } from '../../types'

const initialState: RoutingsState = {
  pending: false,
  routingsData: [],
  error: null,
}

const routing = (state = initialState, action: RoutingsActions) => {
  switch (action.type) {
    case routingsTypes.FETCH_ROUTINGS_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case routingsTypes.FETCH_ROUTINGS_SUCCESS:
      return {
        ...state,
        pending: false,
        routingsData: action.payload.routingsData,
        error: null,
      }
    case routingsTypes.FETCH_ROUTINGS_FAILURE:
      return {
        ...state,
        pending: false,
        routingsData: [],
        error: action.payload.error,
      }
    default:
      return {
        ...state,
      }
  }
}
export default routing
