const localStorageMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);

  const actions = [
    "favorites/addFavorite",
    "favorites/updateFavorite",
    "favorites/deleteFavorite",
  ];

  if (actions.includes(action.type)) {
    const state = storeAPI.getState();
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }

  return result;
};

export default localStorageMiddleware;
