import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { cacheResult } = searchSlice.actions;
export default searchSlice.reducer;
