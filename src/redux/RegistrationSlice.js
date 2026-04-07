import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const registration = createAsyncThunk(
  "youtube/registration",
  async (regData, thunkAPI) => {
    try {
      const response = await fetch(
        "https://todo-redev.herokuapp.com/api/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(regData),
        },
      );
      const data = await response.json();
      if (!response.ok) {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      return error;
    }
  },
);

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
