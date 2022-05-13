//style
import "./Navbar.css";
//components

//Router
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/foodMenus">FoodMenus</NavLink>
      <NavLink to="/bonuses">Bonuses</NavLink>
      <NavLink to="/toOrder">ToOrder</NavLink>
    </div>
  );
}

export default Navbar;
