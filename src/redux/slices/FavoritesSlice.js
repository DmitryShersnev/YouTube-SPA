import { createSlice } from "@reduxjs/toolkit";

const storedFavorites = localStorage.getItem("favorites");
const initialState = {
  favorites: Array.isArray(storedFavorites) ? JSON.parse(storedFavorites) : [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push({ ...action.payload, id: Date.now() });
    },
    updateFavorite: (state, action) => {
      const updatedItem = action.payload;

      state.favorites = state.favorites.map((item) =>
        item.id === updatedItem.id ? updatedItem : item,
      );
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id,
      );
    },
  },
  selectors: {
    selectFavorites: (state) => state.favorites,
  },
});

export const { selectFavorites } = favoritesSlice.selectors;
export const { addFavorite, updateFavorite, deleteFavorite } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
