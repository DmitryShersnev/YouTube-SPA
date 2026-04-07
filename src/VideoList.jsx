import { useSelector } from "react-redux";
import {
  selectRequest,
  selectVideos,
  selectLoading,
} from "./redux/InputSearchSlice";
import VideoCard from "./VideoCard";
import { useDispatch } from "react-redux";

import { selectStyle } from "./redux/StylesSlice";

import { listStyle, cardStyle } from "./redux/StylesSlice";

const VideoList = () => {
  const videos = useSelector(selectVideos);
  const request = useSelector(selectRequest);
  const dipatch = useDispatch();
  const style = useSelector(selectStyle);
  const loading = useSelector(selectLoading);

  const handleClickList = () => {
    dipatch(listStyle());
  };
  const handleClickCards = () => {
    dipatch(cardStyle());
  };

  return loading ? (
    <p>Загрузка...</p>
  ) : (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={{}}>Видео по запросу: {request}</p>
        <div className="listButtons">
          <button onClick={handleClickList}>Список</button>
          <button onClick={handleClickCards}>Карточки</button>
        </div>
      </div>

      {style === "list" ? (
        <div className="video-list">
          {videos.map((item) => (
            <VideoCard key={item.id.videoId} item={item} isList={true} />
          ))}
        </div>
      ) : (
        <div className="video-cards">
          {videos.map((item) => (
            <VideoCard key={item.id.videoId} item={item} isList={false} />
          ))}
        </div>
      )}
    </>
  );
};

export default VideoList;
