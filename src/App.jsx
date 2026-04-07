import { Route, Routes } from "react-router";
import "./App.css";
import YouTubeSPA from "./YouTubeSPA";
import Login from "./auth/Login";
import PrivateRoute from "./auth/PrivateRoute";
import Registration from "./auth/Registration";
import Favorites from "./Favorites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<YouTubeSPA />} />
        </Route>
        <Route path="/registration" element={<Registration />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
