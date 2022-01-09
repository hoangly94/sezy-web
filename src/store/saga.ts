
import { all } from '@redux-saga/core/effects';
import test from './modules/test/saga'

export default function* rootSaga() {
    yield all([
        test()
    ]);
  }