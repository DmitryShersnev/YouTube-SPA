import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./LoginSlice";
import registrationReducer from "./RegistrationSlice";
import inputSearchReducer from "./InputSearchSlice";
import favoritesReducer from "./FavoritesSlice";
import modalReducer from "./ModalSlice";
import styleReducer from "./StylesSlice";
import filterInputReducer from "./FilterInputSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    registration: registrationReducer,
    inputSearch: inputSearchReducer,
    favorites: favoritesReducer,
    modal: modalReducer,
    styles: styleReducer,
    filterInput: filterInputReducer,
  },
});
