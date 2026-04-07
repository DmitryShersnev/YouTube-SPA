import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  change,
  fetchVideos,
  selectDone,
  selectInputSearch,
} from "./redux/InputSearchSlice";
import { useState } from "react";
import ModalWindow from "./Modal";
import { open } from "./redux/ModalSlice";

const InputSearch = () => {
  const [error, setError] = useState("");
  const inputSearch = useSelector(selectInputSearch);
  const done = useSelector(selectDone);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(change(e.target.value));
  };
  const handleClickSearch = (inputSearch) => {
    if (inputSearch.trim() == "") {
      setError("Введите ваш запрос");
    } else {
      dispatch(
        fetchVideos({ request: inputSearch, amount: 15, sortBy: "relevance" }),
      );
      setError("");
    }
  };
  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      if (inputSearch.trim() == "") {
        setError("Введите ваш запрос");
      } else {
        dispatch(
          fetchVideos({
            request: inputSearch,
            amount: 15,
            sortBy: "relevance",
          }),
        );
        setError("");
      }
    }
  };
  const handleClickSave = () => {
    dispatch(open());
  };

  return done ? (
    <>
      <h2>Поиск видео</h2>
      <div className="inputSearch">
        <input
          style={{ height: 25, width: 300, borderRadius: "6px" }}
          onChange={handleChange}
          onKeyDown={handleKeyEnter}
        ></input>
        <button
          style={{
            border: "1px solid gray",
            borderRadius: "6px",
            backgroundColor: "white",
            color: "#0759d3",
          }}
          onClick={handleClickSave}
        >
          ❤
        </button>
        <button
          onClick={() => {
            handleClickSearch(inputSearch);
          }}
        >
          Найти
        </button>
      </div>
      <ModalWindow />
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
    </>
  ) : (
    <>
      <h2>Поиск видео</h2>
      <div className="inputSearch">
        <input
          style={{ height: 25, width: 300, borderRadius: "6px" }}
          onChange={handleChange}
          onKeyDown={handleKeyEnter}
        ></input>
        <button
          onClick={() => {
            handleClickSearch(inputSearch);
          }}
        >
          Найти
        </button>
      </div>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
    </>
  );
};

export default InputSearch;
