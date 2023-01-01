import { routingsTypes } from 'redux/ActionTypes'
import { ISelectRouting, SelectRoutings } from 'redux/types'

export const setLocation = (payload: ISelectRouting): SelectRoutings => ({
  type: routingsTypes.ROUTINGS_SELECT_DATA,
  payload,
})
