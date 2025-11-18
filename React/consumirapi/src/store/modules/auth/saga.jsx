import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "../types";
import { toast } from "react-toastify";

function* loginRequest({ payload }) {
  console.log(payload);
}

export default function* exampleSaga() {
  yield all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
}
