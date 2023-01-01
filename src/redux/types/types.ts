import { routingsTypes } from 'redux/ActionTypes'

export interface IRouting {
  key: string
  n: string
  latFrom: number
  lngFrom: number
  latTo: number
  lngTo: number
}

export interface RoutingsState {
  pending: boolean
  routingsData: IRouting[]
  error: string | null
}

export interface ISelectRouting {
  latFrom: number
  lngFrom: number
  latTo: number
  lngTo: number
}

export interface SelectRoutingsState {
  selectRoutingsData: ISelectRouting | null
}

export type SelectRoutings = {
  type: typeof routingsTypes.ROUTINGS_SELECT_DATA
  payload: ISelectRouting
}

export interface FetchRoutingsSuccessPayload {
  routingsData: IRouting[]
}

export interface FetchRoutingsFailurePayload {
  error: string
}

export interface FetchRoutingsRequest {
  type: typeof routingsTypes.FETCH_ROUTINGS_REQUEST
}

export type FetchRoutingsSuccess = {
  type: typeof routingsTypes.FETCH_ROUTINGS_SUCCESS
  payload: FetchRoutingsSuccessPayload
}

export type FetchRoutingsFailure = {
  type: typeof routingsTypes.FETCH_ROUTINGS_FAILURE
  payload: FetchRoutingsFailurePayload
}

export type RoutingsActions =
  | FetchRoutingsRequest
  | FetchRoutingsSuccess
  | FetchRoutingsFailure
  | SelectRoutings
