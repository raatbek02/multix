import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("searched__items");

const search_store = createSlice({
  name: "search_store",
  initialState: {
    searched_items: (items && JSON.parse(items)) || [],
  },
  reducers: {
    addSearchItems(state, action) {
      state.searched_items = action.payload;

      localStorage.setItem(
        "searched__items",
        JSON.stringify(state.searched_items)
      );
    },
  },
});

export const { addSearchItems } = search_store.actions;
export default search_store.reducer;
