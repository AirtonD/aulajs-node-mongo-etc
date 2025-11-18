import { all } from "redux-saga/effects";

import auth from "./example/saga";

export default function* rootSaga() {
  yield all([auth()]);
}
