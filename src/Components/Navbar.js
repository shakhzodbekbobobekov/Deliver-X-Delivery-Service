//style
import "./Navbar.css";
//components
import logo from "../assets/images/logo.svg";
//Router
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__box-img">
        <NavLink to="/">
          <img src={logo} alt="navbar logo" />
        </NavLink>
      </div>

      <ul>
        <li className="crimson-li">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/foodMenus">FoodMenus</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/bonuses">Bonuses</NavLink>
        </li>
        <li>
          <NavLink to="/toOrder">ToOrder</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

/* <div className="navbar-logo">
          <NavLink to="/">
            <img src={logo} alt="navbar logo" />
          </NavLink>
        </div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/foodMenus">FoodMenus</NavLink>
        <NavLink to="/bonuses">Bonuses</NavLink>
        <NavLink to="/toOrder">ToOrder</NavLink> */
