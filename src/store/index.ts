import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { RootObject } from "./output.interface";
import inputJson from "./inputs.json";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["form"], // List of reducers to persist
};

const initialState: RootObject = inputJson;

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (
      state: any,
      action: PayloadAction<{ field: string; data: any }>
    ) => {
      state[action.payload.field] = action.payload;
    },
  },
});

const rootReducer = combineReducers({
  form: formSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

// Slice actions
export const { updateField } = formSlice.actions;

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
