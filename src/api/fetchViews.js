export const fetchViews = async (apiUrl, videoId, key) => {
  try {
    const res = await fetch(
      `${apiUrl}?part=statistics&id=${videoId}&key=${key}`,
    );
    const data = await res.json();

    return data.items[0].statistics.viewCount;
  } catch (error) {
    console.log(error);
  }
};
