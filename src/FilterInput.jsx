import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  changeInput,
  clearInput,
  selectInputString,
} from "./redux/FilterInputSlice";
import { filter } from "./redux/InputSearchSlice";
const FilterInput = () => {
  const dispatch = useDispatch();
  const inputString = useSelector(selectInputString);

  const handleChange = (e) => {
    dispatch(changeInput(e.target.value));
  };
  const handleClick = (inputString) => {
    dispatch(filter(inputString));
    dispatch(clearInput());
  };
  return (
    <>
      <input
        style={{ height: 25, width: 200, borderRadius: "6px" }}
        onChange={handleChange}
        value={inputString}
      />
      <button
        style={{
          border: "1px solid gray",
          borderRadius: "6px",
          backgroundColor: "white",
          color: "#0759d3",
        }}
        onClick={() => {
          handleClick(inputString);
        }}
      >
        Фильтр
      </button>
    </>
  );
};

export default FilterInput;
