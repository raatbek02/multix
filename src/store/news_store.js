import { createSlice } from "@reduxjs/toolkit";

const news_store = createSlice({
  name: "news_store",
  initialState: {
    newsData: [],
  },
  reducers: {
    setNewsData(state, action) {
      return {
        newsData: action.payload,
      };
    },
  },
});

export const { setNewsData } = news_store.actions;
export default news_store.reducer;
