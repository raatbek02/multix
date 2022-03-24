import { createSlice } from "@reduxjs/toolkit";

const data = localStorage.getItem("local_adminPathName");

const adminPathName = createSlice({
  name: "adminPathName",
  initialState: {
    adminPathName: "" || JSON.parse(data),
  },
  reducers: {
    set_adminPathName(state, action) {
      return {
        adminPathName: action.payload,
      };
    },
  },
});

export const { set_adminPathName } = adminPathName.actions;
export default adminPathName.reducer;
