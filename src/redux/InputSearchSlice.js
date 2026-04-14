import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  inputSearch: "",
  request: "",
  videos: [],
  amountOfVideos: null,
  done: false,
  loading: false,
};

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

const inputSearchSlice = createSlice({
  name: "inputSearch",
  initialState,
  reducers: {
    change: (state, action) => {
      state.inputSearch = action.payload;
    },
    clear: (state) => {
      state.inputSearch = "";
    },
    filter: (state, action) => {
      state.videos = state.videos.filter((item) =>
        item.snippet.title.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.videos = action.payload.items;
        state.amountOfVideos = action.payload.pageInfo.totalResults;
        state.request = state.inputSearch;
        state.done = true;
        state.loading = false;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false;
      });
  },
  selectors: {
    selectInputSearch: (state) => state.inputSearch,
    selectVideos: (state) => state.videos,
    selectAmountOfVideos: (state) => state.amountOfVideos,
    selectDone: (state) => state.done,
    selectRequest: (state) => state.request,
    selectLoading: (state) => state.loading,
  },
});

export const { change, clear, filter } = inputSearchSlice.actions;
export const {
  selectVideos,
  selectInputSearch,
  selectDone,
  selectRequest,
  selectLoading,
  selectAmountOfVideos,
} = inputSearchSlice.selectors;

export default inputSearchSlice.reducer;
