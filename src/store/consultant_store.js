import { createSlice } from "@reduxjs/toolkit";

const consultant_store = createSlice({
  name: "consultant_store",
  initialState: {
    consultantData: [],
  },
  reducers: {
    setConsultantData(state, action) {
      return {
        consultantData: action.payload,
      };
    },
  },
});

export const { setConsultantData } = consultant_store.actions;
export default consultant_store.reducer;
