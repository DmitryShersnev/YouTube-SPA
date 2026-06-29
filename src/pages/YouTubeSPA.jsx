import InputSearch from "../components/InputSearch";
import VideoList from "../components/VideoList";
import { selectDone } from "../redux/slices/InputSearchSlice";
import { useSelector } from "react-redux";
import Header from "../components/Header";

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
