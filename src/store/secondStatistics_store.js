import { createSlice } from "@reduxjs/toolkit";

const secondStatistics_store = createSlice({
  name: "secondStatistics_store",
  initialState: {
    secondStatisticsData: [],
  },
  reducers: {
    setSecondStatisticsData(state, action) {
      return {
        secondStatisticsData: action.payload,
      };
    },
  },
});

export const { setSecondStatisticsData } = secondStatistics_store.actions;
export default secondStatistics_store.reducer;
