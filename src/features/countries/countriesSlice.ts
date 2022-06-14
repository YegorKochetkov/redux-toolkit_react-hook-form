import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Country } from "../../types/Country";

export const getCountries = createAsyncThunk(
	"countries/getCountries",
	async(dispatch, state) => {
		const response = await fetch("https://restcountries.com/v2/all?fields=name");

		return response.json();
	}
);

export interface CountriesState {
	countries: Country[],
	status: string | null,
}

const initialState: CountriesState  = {
		countries: [],
		status: null,
}

const countriesSlice = createSlice({
	name: "countriesList",
	initialState,
	reducers: {

	},
	extraReducers: {
		[String(getCountries.pending)]: (state: CountriesState, action: PayloadAction<Country[]>) => {
			state.status = "loading";
		},
		[String(getCountries.fulfilled)]: (state: CountriesState, action: PayloadAction<Country[]>) => {
			state.status = "success";
			state.countries = action.payload;
		},
		[String(getCountries.rejected)]: (state: CountriesState, action: PayloadAction<Country[]>) => {
			state.status = "failed";
		}
	}
});

export const selectCountries = (state: RootState) => state.countriesList.countries;
export const selectCountriesStatus = (state: RootState) => state.countriesList.status;

export default countriesSlice.reducer;