import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import { authReducer } from "./slices/authSlice";
import storage from "./customStorage";
import logger from "redux-logger";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["isAuth", "jid"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * @description The code above is responsible for creating the redux store for us. Notice the authPersistConfig definition. This code directs the redux store to persist auth data but only the isAuth and jid keys specified in the whitelist array. Also note the storage am using, its not directly from redux-persist. I have a custom implementation that will take care of execution of the code in client and server side. Using the storage directly from redux-persist results to an error in the server side.
 */