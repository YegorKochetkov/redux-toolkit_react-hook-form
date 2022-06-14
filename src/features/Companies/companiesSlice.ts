import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Company } from "../../types/Company";

export interface CompaniesState {
  company: Company,
  companies: Company[],
};

const initialState: CompaniesState = {
  company: {
    Company: "",
    Name: "",
    Additional: "",
    Street: "",
    "Postal Code": "",
    Country: "",
    IBAN: "",
    BIC: "",
    "Bank name": "",
    Fax: "",
    Mail: "",
    Birthday: "",
    Homepage: "",
  },
  companies: [],
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Company>) => {
      state.company =  { ...state.company, ...action.payload };
    },
    resetData: (state) => {
      state.company =  { ...state.company, ...initialState.company };
    },
    addCompany: (state) => {
      state.companies.push(state.company);
    },
    removeCompany: (state, action: PayloadAction<string>) => {
      const removingCompany = state.companies.findIndex((company) => company.IBAN === action.payload);
      state.companies.splice(removingCompany, 1);
    },
  }
});

export const { setData, resetData, addCompany, removeCompany } = companiesSlice.actions;

export const selectCompanies = (state: RootState) => state.companies.companies;
export const selectCompany = (state: RootState) => state.companies.company;

export default companiesSlice.reducer;
