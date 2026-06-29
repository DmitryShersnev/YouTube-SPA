import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/LoginSlice";
import registrationReducer from "./slices/RegistrationSlice";
import inputSearchReducer from "./slices/InputSearchSlice";
import favoritesReducer from "./slices/FavoritesSlice";
import modalReducer from "./slices/ModalSlice";
import styleReducer from "./slices/StylesSlice";
import filterInputReducer from "./slices/FilterInputSlice";
import localStorageMiddleware from "./localStorageMiddleware";

const middlewareArray = [localStorageMiddleware];

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
  middleware: (getDefaultMiddleWare) => [
    ...getDefaultMiddleWare(),
    ...middlewareArray,
  ],
});
