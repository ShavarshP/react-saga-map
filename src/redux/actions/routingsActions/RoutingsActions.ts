import { routingsTypes } from 'redux/ActionTypes'
import {
  FetchRoutingsFailure,
  FetchRoutingsFailurePayload,
  FetchRoutingsRequest,
  FetchRoutingsSuccess,
  FetchRoutingsSuccessPayload,
} from 'redux/types'

export const getRoutingsData = (): FetchRoutingsRequest => ({
  type: routingsTypes.FETCH_ROUTINGS_REQUEST,
})

export const setRoutingsData = (
  payload: FetchRoutingsSuccessPayload,
): FetchRoutingsSuccess => ({
  type: routingsTypes.FETCH_ROUTINGS_SUCCESS,
  payload,
})

export const fetchRoutingsFailure = (
  payload: FetchRoutingsFailurePayload,
): FetchRoutingsFailure => ({
  type: routingsTypes.FETCH_ROUTINGS_FAILURE,
  payload,
})
