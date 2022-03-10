import { createSlice } from "@reduxjs/toolkit";

const contact_store = createSlice({
  name: "news_store",
  initialState: {
    contactData: [],
  },
  reducers: {
    setContactData(state, action) {
      return {
        contactData: action.payload,
      };
    },
  },
});

export const { setContactData } = contact_store.actions;
export default contact_store.reducer;
