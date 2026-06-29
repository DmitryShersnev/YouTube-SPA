import { createSlice } from "@reduxjs/toolkit";
import { registration } from "../../api/registrationApi";

const registrationSlice = createSlice({
  name: "registration",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.rejected, (state, action) => {
        alert(action.payload);
      })
      .addCase(registration.fulfilled, (state, action) => {
        alert("Вы успешно зарегистрировались! Теперь нужно залогиниться!");
      });
  },
});

export default registrationSlice.reducer;
