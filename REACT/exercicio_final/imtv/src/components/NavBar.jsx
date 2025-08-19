import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <NavLink to="./" className="navlink">
          HomePage
        </NavLink>
        <NavLink to="./movies" className="navlink">
          Movies
        </NavLink>
        <NavLink to="./tv" className="navlink">
          TV
        </NavLink>
      </nav>
    </div>
  );
}
export default NavBar;
