import logo from "../image/catalog/Logo.png";
// import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import "../css/navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo-div">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="search-box">
          <div className="select">
            <select className="form-select">
              <option selected>Generic</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              className="input-field"
              placeholder="Search for medicine , distributor etc..."
            />
          </div>
        </div>
        <div className="btn-div">
          <button className="btn-cart">
            <span style={{ marginRight: "1rem" }}>Cart</span>
            <ShoppingCartIcon />
          </button>
          <button className="btn-login">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
