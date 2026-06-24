import { createAsyncThunk } from "@reduxjs/toolkit";

export const registration = createAsyncThunk(
  "youtube/registration",
  async (regData, thunkAPI) => {
    try {
      const response = await fetch(
        "https://todo-redev.onrender.com/api/auth/register",
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
