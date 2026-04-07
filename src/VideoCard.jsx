const VideoCard = ({ item, isList }) => {
  const videoId = item.id.videoId;

  if (isList) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <iframe
          width="320"
          height="180"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
        ></iframe>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            maxWidth: 700,
            gap: 20,
          }}
        >
          <h3>{item.snippet.title}</h3>
          <div style={{ color: "#b0b0b0" }}>{item.snippet.channelTitle}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <iframe
          width="320"
          height="180"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
        ></iframe>
        <div className="text-container">
          <h3>{item.snippet.title}</h3>
          <div style={{ color: "#b0b0b0" }}>{item.snippet.channelTitle}</div>
        </div>
      </div>
    );
  }
};
export default VideoCard;
