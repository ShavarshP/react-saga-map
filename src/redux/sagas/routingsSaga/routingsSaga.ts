import axios from 'axios'
import {
  setRoutingsData,
  fetchRoutingsFailure,
} from 'redux/actions/routingsActions'
import { IRouting } from 'redux/types/types'
import { routingsTypes } from 'redux/ActionTypes'
import { all, call, put, takeLatest } from 'redux-saga/effects'

const getRoutings = () =>
  axios.get<IRouting[]>(
    'https://my-json-server.typicode.com/ShavarshP/mockjson/lngData',
  )

function* fetchRoutingsSaga() {
  try {
    //@ts-ignore
    const response = yield call(getRoutings)
    yield put(
      setRoutingsData({
        routingsData: response.data,
      }),
    )
  } catch (e: any) {
    yield put(
      fetchRoutingsFailure({
        error: e.message,
      }),
    )
  }
}

function* RoutingsSaga() {
  yield all([
    takeLatest(routingsTypes.FETCH_ROUTINGS_REQUEST, fetchRoutingsSaga),
  ])
}

export default RoutingsSaga
