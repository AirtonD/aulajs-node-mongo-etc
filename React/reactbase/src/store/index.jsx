import { persistStore } from "redux-persist";
import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import persistedReducers from "./modules/reduxPersist";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleeare = createSagaMiddleware();

const store = legacy_createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddleeare)
);

sagaMiddleeare.run(rootSaga);

export const persistor = persistStore(store);
export default store;
