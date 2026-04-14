import InputSearch from "./InputSearch";
import VideoList from "./VideoList";
import { selectDone } from "./redux/InputSearchSlice";
import { useSelector } from "react-redux";
import Header from "./Header";

const YouTubeSPA = () => {
  const done = useSelector(selectDone);

  return (
    <>
      <Header />
      <InputSearch />

      {done && <VideoList />}
    </>
  );
};

export default YouTubeSPA;
