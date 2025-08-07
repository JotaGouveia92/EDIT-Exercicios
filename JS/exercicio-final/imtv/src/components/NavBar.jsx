import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "16px" }}>
      <NavLink to="./">HomePage</NavLink>
      <div style={{ display: "flex", gap: "16px" }}>
        <NavLink to="./movies">Movies</NavLink>
        <NavLink to="./tv">TV</NavLink>
      </div>
    </nav>
  );
}
export default NavBar;
