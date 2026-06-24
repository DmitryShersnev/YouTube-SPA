import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "youtube/login",
  async (loginData, thunkAPI) => {
    try {
      const response = await fetch(
        "https://todo-redev.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        },
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.access_token);
      } else {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
