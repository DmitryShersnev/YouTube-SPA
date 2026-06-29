import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import ModalWindow from "../components/Modal";

import {
  open,
  selectCurrentItem,
  selectIsOpen,
} from "../redux/slices/ModalSlice";
import {
  selectFavorites,
  deleteFavorite,
} from "../redux/slices/FavoritesSlice";
import { change } from "../redux/slices/InputSearchSlice";
import { fetchVideos } from "../api/fetchVideos";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleClickEdit = (item) => {
    dispatch(open(item));
  };
  const handleClickDelete = (item) => {
    dispatch(deleteFavorite(item));
  };

  const handleClickSearch = (item) => {
    navigate("/");
    dispatch(change(item.request));
    dispatch(
      fetchVideos({
        request: item.request,
        amount: item.amount,
        sortBy: item.sortBy,
      }),
    );
  };

  const isOpen = useSelector(selectIsOpen);
  const currentItem = useSelector(selectCurrentItem);

  return (
    <div className="favorites">
      <Header />

      <h2>Избранное</h2>

      {favorites.length === 0 ? (
        <p>Вы ещё не сохраняли запросы</p>
      ) : (
        favorites.map((item) => (
          <div className="favorite" key={item.id}>
            {item.name}
            <button
              onClick={() => {
                handleClickEdit(item);
              }}
            >
              🖊
            </button>
            <button
              onClick={() => {
                handleClickDelete(item);
              }}
            >
              ❌
            </button>
            <button
              onClick={() => {
                handleClickSearch(item);
              }}
            >
              Поиск
            </button>
          </div>
        ))
      )}
      {isOpen && <ModalWindow item={currentItem} />}
    </div>
  );
};

export default Favorites;
