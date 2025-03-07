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
import { IDer, IDerState } from "./der.interface";

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

const derinitialState: IDerState = {
  data: [],
};

const derSlice = createSlice({
  name: "der",
  initialState: derinitialState,
  reducers: {
    updateDer: (state, action: PayloadAction<IDer>) => {
      state.data = state.data.some((item) => item.text === action.payload.text)
        ? state.data
        : [...state.data, action.payload];
    },
    removeDer: (state, action: PayloadAction<IDer>) => {
      const index = state.data.findIndex(
        (item) => item.name === action.payload.name
      );

      if (index !== -1) {
        state.data = state.data.filter((_, i) => i !== index);
      }
    },
  },
});

const rootReducer = combineReducers({
  form: formSlice.reducer,
  der: derSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

// Slice actions
export const { updateField } = formSlice.actions;
export const { updateDer, removeDer } = derSlice.actions;

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
