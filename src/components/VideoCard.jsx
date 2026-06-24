import { useState, useEffect } from "react";
import { fetchViews } from "../api/fetchViews";
import { amountHelper } from "../helpers/amountHelper";

const VideoCard = ({ item, isList }) => {
  const videoId = item.id.videoId;
  const apiUrl = import.meta.env.VITE_API_URL2;
  const key = import.meta.env.VITE_API_KEY;

  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    const getViewCount = async () => {
      const views = await fetchViews(apiUrl, videoId, key);
      setViewCount(views);
    };

    getViewCount();
  }, [videoId]);

  const updateViews = amountHelper(viewCount);

  const containerStyle = isList
    ? { display: "flex", alignItems: "center", gap: "16px" }
    : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      };
  const textContainerStyle = isList
    ? {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        maxWidth: 700,
        gap: 20,
      }
    : { marginTop: 10, maxWidth: 300 };

  return (
    <div style={containerStyle}>
      <iframe
        width="320"
        height="180"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>
      <div style={textContainerStyle}>
        <h3>{item.snippet.title}</h3>
        <div style={{ color: "#b0b0b0" }}>{item.snippet.channelTitle}</div>
        <div style={{ color: "#b0b0b0" }}>{updateViews} просмотров</div>
      </div>
    </div>
  );
};
export default VideoCard;
