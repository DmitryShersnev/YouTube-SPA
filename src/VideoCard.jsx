import { useState, useEffect } from "react";

const VideoCard = ({ item, isList }) => {
  const videoId = item.id.videoId;
  const apiUrl = import.meta.env.VITE_API_URL2;
  const key = import.meta.env.VITE_API_KEY;
  const [viewCount, setViewCount] = useState(null);

  const fetchViews = async () => {
    try {
      const res = await fetch(
        `${apiUrl}?part=statistics&id=${videoId}&key=${key}`,
      );
      const data = await res.json();

      setViewCount(data.items[0].statistics.viewCount);

      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchViews();
  }, [videoId]);

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
        <div style={{ color: "#b0b0b0" }}>{viewCount} просмотров</div>
      </div>
    </div>
  );
};
export default VideoCard;
