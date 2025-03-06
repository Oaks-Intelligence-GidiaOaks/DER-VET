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
import set from "lodash/set";
import cloneDeep from "lodash/cloneDeep";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const initialState: RootObject = inputJson;

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ path: string; value: any }>
    ) => {
      const newState = cloneDeep(state);
      set(newState, action.payload.path, action.payload.value);
      return newState;
    },

    resetForm: () => initialState,
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
