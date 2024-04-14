import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
//configure the redux persist
const persistConfig = {
  key: "user",
  storage,
  transforms: [
    encryptTransform({
      secretKey: "my-secret-key",
    }),
  ],
};

//create the persistedReducer
const persistedReducer = persistReducer(persistConfig, Reducer);
//create a Redux store and contain the reducer in it
const store = configureStore({
  reducer: persistedReducer,
});

//create persist store
const persistor = persistStore(store);
//export persistor store
export { persistor };
export default store;
