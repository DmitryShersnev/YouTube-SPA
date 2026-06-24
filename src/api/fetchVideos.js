import { createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

export const fetchVideos = createAsyncThunk(
  "youtube/fetchVideos",
  async ({ request, amount, sortBy }, thunkAPI) => {
    try {
      const response = await fetch(
        `${apiUrl}?part=snippet&q=${request}&type=video&maxResults=${amount}&key=${key}&order=${sortBy}`,
      );
      const data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return error;
    }
  },
);
