import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ModalState {
	steps: string[];
}

const initialState: ModalState = {
	steps: ["invoiceAdressModal", "bankDataModal", "contactModal"],
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
  },
});

export const selectSteps = (state: RootState) => state.modal.steps;

export default modalSlice.reducer;
