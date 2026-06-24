import { Route, Routes } from "react-router";
import "./App.css";
import YouTubeSPA from "./pages/YouTubeSPA";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Registration from "./pages/Registration";
import Favorites from "./components/Favorites";

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
