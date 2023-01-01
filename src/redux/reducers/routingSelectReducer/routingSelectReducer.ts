import { routingsTypes } from 'redux/ActionTypes'
import { RoutingsActions, SelectRoutingsState } from 'redux/types'

const initialState: SelectRoutingsState = {
  selectRoutingsData: null,
}

const routingSelectReducer = (
  state = initialState,
  action: RoutingsActions,
) => {
  switch (action.type) {
    case routingsTypes.ROUTINGS_SELECT_DATA:
      return {
        ...state,
        selectRoutingsData: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}
export default routingSelectReducer
