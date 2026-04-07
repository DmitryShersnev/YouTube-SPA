import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};

export const login = createAsyncThunk(
  "youtube/login",
  async (loginData, thunkAPI) => {
    try {
      const response = await fetch(
        "https://todo-redev.herokuapp.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        },
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
      } else {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

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
