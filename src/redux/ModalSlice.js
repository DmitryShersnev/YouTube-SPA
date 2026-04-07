import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  currentItem: null,
};

const modalSlise = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action) => {
      state.isOpen = true;
      state.currentItem = action.payload;
    },
    close: (state, action) => {
      state.isOpen = false;
      state.currentItem = null;
    },
  },
  selectors: {
    selectIsOpen: (state) => state.isOpen,
    selectCurrentItem: (state) => state.currentItem,
  },
});

export const { selectIsOpen, selectCurrentItem } = modalSlise.selectors;
export const { open, close } = modalSlise.actions;
export default modalSlise.reducer;
