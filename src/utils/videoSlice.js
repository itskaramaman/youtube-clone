import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: [],
  reducers: {
    addVideos: (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    },
    clearVideos: (state) => {
      state = [];
    },
  },
});

export const { addVideos, clearVideos } = videoSlice.actions;
export default videoSlice.reducer;
