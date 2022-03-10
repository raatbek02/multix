import { createSlice } from "@reduxjs/toolkit";

const service_store = createSlice({
  name: "service_store",
  initialState: {
    serviceData: [],
  },
  reducers: {
    setServiceData(state, action) {
      return {
        serviceData: action.payload,
      };
    },
  },
});

export const { setServiceData } = service_store.actions;
export default service_store.reducer;
