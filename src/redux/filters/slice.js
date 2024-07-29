import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    params: {
      filter: "Popular",
    },
  },
  reducers: {
    saveFilter: (state, action) => {
      state.params.filter = action.payload;
    },
  },
});

export const { saveFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
