//style
import "./Navbar.css";
//components
import logo from "../assets/images/logo.svg";
import Searchbar from "./Searchbar";
//Router
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="head-navbar">
      <div className="container">
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
              <NavLink to="/foodMenus">Food Menus</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/bonuses">Bonuses</NavLink>
            </li>
            <li className="order">
              <NavLink to="/toOrder">To Order</NavLink>
            </li>
          </ul>
          <Searchbar />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
