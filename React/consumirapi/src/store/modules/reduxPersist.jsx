import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// eslint-disable-next-line react-refresh/only-export-components
export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: "CONSUMO API",
      storage,
      whitelist: ["auth"],
    },
    reducers
  );

  return persistedReducers;
};
