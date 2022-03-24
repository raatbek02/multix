import { createSlice } from "@reduxjs/toolkit";

const about_store = createSlice({
  name: "service_store",
  initialState: {
    aboutData: [],
  },
  reducers: {
    setAboutData(state, action) {
      return {
        aboutData: action.payload,
      };
    },
  },
});

export const { setAboutData } = about_store.actions;
export default about_store.reducer;
