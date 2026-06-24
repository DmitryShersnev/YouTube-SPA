import { createSlice } from "@reduxjs/toolkit";
import { login } from "../api/loginApi";

const initialState = {};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.rejected, (state, action) => {
      alert(action.payload);
    });
  },
});

export default loginSlice.reducer;
