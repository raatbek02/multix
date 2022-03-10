import { createSlice } from "@reduxjs/toolkit";

const team_store = createSlice({
  name: "team_store",
  initialState: {
    teamData: [],
  },
  reducers: {
    setTeamData(state, action) {
      return {
        teamData: action.payload,
      };
    },
  },
});

export const { setTeamData } = team_store.actions;
export default team_store.reducer;
