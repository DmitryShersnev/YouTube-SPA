import { useNavigate, NavLink } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className="header">
        <div className="header_linsk">
          <NavLink to="/">Поиск</NavLink>
          <NavLink to="/favorites">Избранное</NavLink>
        </div>
        <button onClick={handleClick}>Разлогинится</button>
      </div>
    </>
  );
};
export default Header;
