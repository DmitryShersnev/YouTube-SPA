import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  style: "list",
};

const stylesSlice = createSlice({
  name: "styles",
  initialState,
  reducers: {
    listStyle: (state, action) => {
      state.style = "list";
    },
    cardStyle: (state, action) => {
      state.style = "cards";
    },
  },
});

export const selectStyle = (state) => state.style.style;
export const { listStyle, cardStyle } = stylesSlice.actions;
export default stylesSlice.reducer;
