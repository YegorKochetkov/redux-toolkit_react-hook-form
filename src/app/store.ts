import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import companiesReducer from "../features/Companies/companiesSlice";
import countriesReducer from "../features/countries/countriesSlice";
import modalReducer from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    companies: companiesReducer,
    modal: modalReducer,
    countriesList: countriesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
