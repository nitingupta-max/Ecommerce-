import logo from "../image/catalog/Logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import "../css/navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo-div">
          <div className="hemberger">
            <MenuOpenIcon color="action" style={{ fontSize: "48px" }} />
          </div>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="search-box">
          <div className="select">
            <select className="form-select">
              <option selected>Generic</option>
              <option value="1">Generic</option>
              <option value="2">OTC</option>
              <option value="3">Surgical</option>
              <option value="4">Branded</option>
            </select>
          </div>
          <div className="inp-div-nav">
            <input
              type="text"
              className="input-field"
              placeholder="Search for medicine , distributor etc..."
            />
          </div>
        </div>
        <div className="btn-div">
          <Link to="/ordersummary">
            <button className="btn-cart">
              <div className="div-cart-btn">
                <div>
                  <span style={{ marginRight: "1rem" }}>Cart</span>
                </div>
                <div className="cart_logo_div">
                  <ShoppingCartIcon className="cart" />
                </div>
              </div>
            </button>
          </Link>
          <Link to="/login">
            {" "}
            <button className="btn-login">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
