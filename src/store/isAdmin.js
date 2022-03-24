import { createSlice } from "@reduxjs/toolkit";

const isAdminLocal = localStorage.getItem("isAuthLocal");

const isAdmin = createSlice({
  name: "isAuth",
  initialState: {
    //  isAdmin: false || JSON.parse(isAdminLocal),
    isAdmin: true,
  },
  reducers: {
    setIsAdmin(state, action) {
      return {
        isAdmin: action.payload,
      };
    },
  },
});

export const { setIsAdmin } = isAdmin.actions;
export default isAdmin.reducer;
