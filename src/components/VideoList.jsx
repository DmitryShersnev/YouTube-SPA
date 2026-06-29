import { useSelector } from "react-redux";
import FilterInput from "./filterInput";
import {
  selectRequest,
  selectLoading,
  selectVideos,
  selectAmountOfVideos,
} from "../redux/slices/InputSearchSlice";
import VideoCard from "./VideoCard";
import { useDispatch } from "react-redux";

import { selectStyle } from "../redux/slices/StylesSlice";

import { listStyle, cardStyle } from "../redux/slices/StylesSlice";
import { amountHelper } from "../helpers/amountHelper";

const VideoList = () => {
  const videos = useSelector(selectVideos);
  const request = useSelector(selectRequest);
  const amount = useSelector(selectAmountOfVideos);
  const dipatch = useDispatch();
  const style = useSelector(selectStyle);
  const loading = useSelector(selectLoading);

  const handleClickList = () => {
    dipatch(listStyle());
  };
  const handleClickCards = () => {
    dipatch(cardStyle());
  };

  const updateAmount = amountHelper(amount);

  if (loading) {
    return <p>Загрузка...</p>;
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <p style={{}}>Видео по запросу: {request}</p>

          <p style={{ color: "#b0b0b0" }}>{updateAmount}</p>
        </div>
        <div className="listButtons">
          <button onClick={handleClickList}>Список</button>
          <button onClick={handleClickCards}>Карточки</button>
        </div>
      </div>
      <FilterInput />

      <div className={style === "list" ? "video-list" : "video-cards"}>
        {videos.map((item) => (
          <VideoCard
            key={item.id.videoId}
            item={item}
            isList={style === "list"}
          />
        ))}
      </div>
    </>
  );
};

export default VideoList;
