import { all, fork } from 'redux-saga/effects'
import routingsSaga from './routingsSaga'

export function* rootSaga() {
  yield all([fork(routingsSaga)])
}
