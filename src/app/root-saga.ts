import { takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import authSaga from "features/auth/auth-saga";
import counterSaga from "features/counter/counter-saga";
import { all } from "redux-saga/effects";

function logAction(action: PayloadAction) {
  console.log("Action", action);
}

export default function* rootSaga() {
  yield takeEvery("*", logAction);
  yield all([counterSaga(), authSaga()]);
}
