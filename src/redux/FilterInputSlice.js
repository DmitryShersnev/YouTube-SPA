import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputString: "",
};

const filterInputSlice = createSlice({
  name: "filterInput",
  initialState,
  reducers: {
    changeInput: (state, action) => {
      state.inputString = action.payload;
    },
    clearInput: (state, action) => {
      state.inputString = "";
    },
  },
  selectors: { selectInputString: (state) => state.inputString },
});

export const { selectInputString } = filterInputSlice.selectors;
// export const selectInputString = (state) => state.inputString.inputString;
export const { changeInput, clearInput } = filterInputSlice.actions;
export default filterInputSlice.reducer;
