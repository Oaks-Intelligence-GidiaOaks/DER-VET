import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { IFile, RootObject } from "./output.interface";
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

      console.log(action.payload.path, "path");
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

const fileInitialState: { files: Array<IFile> } = {
  files: [
    {
      filename: "cycle_10487cf5-16d9-4b78-8109-440b29e1ef78.csv",
      url: "https://storage.googleapis.com/carbon-adjust-file.appspot.com/dervet/5eaeea7d-1093-45ed-87f8-67a8ef55fcc9/cycle_10487cf5-16d9-4b78-8109-440b29e1ef78.csv",
    },
    {
      filename: "yearly.csv",
      url: "https://storage.googleapis.com/carbon-adjust-file.appspot.com/dervet/a483cf51-aada-4856-ad0b-3227230d0a8b/yearly.csv",
    },
    {
      filename: "timeseries.csv",
      url: "https://storage.googleapis.com/carbon-adjust-file.appspot.com/dervet/9b948379-88f8-4a49-b65d-5a464fbaaa1b/timeseries.csv",
    },
    {
      filename: "tariff.csv",
      url: "https://storage.googleapis.com/carbon-adjust-file.appspot.com/dervet/58aff115-e0d8-49b0-b2ff-3b742eecb684/tariff.csv",
    },
    {
      filename: "monthly.csv",
      url: "https://storage.googleapis.com/carbon-adjust-file.appspot.com/dervet/cb04d137-085a-404e-b33d-c0e8355849b8/monthly.csv",
    },
    {
      filename: "load_shed_percentage.csv",
      url: "https://storage.googleapis.com/carbon-adjust-file.appspot.com/dervet/6701d054-ce2d-46d1-9c28-f9465e11a9be/load_shed_percentage.csv",
    },
  ],
};

const fileSlice = createSlice({
  name: "files",
  initialState: fileInitialState,
  reducers: {
    updateFile: (state, action: PayloadAction<IFile>) => {
      const fileIndex = state.files.findIndex(
        (item) => item.filename === action.payload.filename
      );

      if (fileIndex !== -1) return;

      state.files = [...state.files, action.payload];
    },
  },
});

const rootReducer = combineReducers({
  form: formSlice.reducer,
  der: derSlice.reducer,
  files: fileSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

// Slice actions
export const { updateField } = formSlice.actions;
export const { updateDer, removeDer } = derSlice.actions;
export const { updateFile } = fileSlice.actions;

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
