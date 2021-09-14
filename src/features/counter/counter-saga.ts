import { delay, put, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { incrementSagaAsync, incrementSagaAsyncSuccess } from "./counter-slice";

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log("Waiting 1s");
  // Wait 1s
  yield delay(1000);

  console.log("Waiting done, dispatch action");

  // Dispatch action success
  yield put(incrementSagaAsyncSuccess(action.payload));
}

export default function* counterSaga() {
  yield takeEvery(incrementSagaAsync.toString(), handleIncrementSaga);
}
