import hero from "../image/cache/catalog/demo/banners/Main-Banner-2-1903x600.jpg";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import imgage1 from "../image/catalog/demo/banners/Cms-Banner-01.png";
import imgage2 from "../image/catalog/demo/banners/Cms-Banner-02.png";
import imgage3 from "../image/catalog/demo/banners/Cms-Banner-03.png";
import easy_to_order from "../image/catalog/demo/banners/2.png";
import fast_delivery from "../image/catalog/demo/banners/3.png";
import best_quality from "../image/catalog/demo/banners/1.png";
import outSourcing from "../image/catalog/demo/banners/Outsourcing.png";
import google from "../image/google.png";
import app from "../image/app.png";
import mobile from "../image/catalog/mobile.png";

import Card from "./card";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import "../css/body.css";
const Body = () => {
  return (
    <>
      <div className="hero-div">
        <img src={hero} alt="hero_image" className="hero-img" />
      </div>
      <div className="mid-div">
        <Typography variant="h4" color="#972a1a">
          Categories
        </Typography>
        <Typography variant="h5" color="#6c6a6b">
          Get Best Deals in All Categories
        </Typography>
        <div className="img-div">
          <img src={imgage1} className="banner" alt="img" />
          <img src={imgage2} className="banner" alt="img" />
          <img src={imgage3} className="banner" alt="img" />
        </div>
      </div>
      <div className="color">
        <Typography
          pt={4}
          variant="h4"
          style={{ color: "white", marginLeft: "15rem" }}
        >
          Newly Launched - Upto 70% Off
        </Typography>
      </div>
      <div className="newly-launched">
        <button className="btn-left">
          <ChevronLeftIcon style={{ color: "white" }} />
        </button>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <Card /> */}
      </div>
      <div className="color">
        <Typography
          pt={4}
          variant="h4"
          style={{ color: "white", marginLeft: "15rem" }}
        >
          Best Selling Products
        </Typography>
      </div>
      <div className="best-selling">
        <button className="btn-left">
          <ChevronLeftIcon style={{ color: "white" }} />
        </button>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <Card /> */}
      </div>

      <div className="last-div">
        <Typography variant="h6" style={{ color: "#972a1a" }}>
          WHAT WE SERVE
        </Typography>
        <Typography variant="h4" style={{ fontWeigth: "bolder" }}>
          <strong>
            {" "}
            Your Favourite Medicine <br></br>Supply Partner
          </strong>
        </Typography>
        <div className="serve-div">
          <div className="easy_to_order">
            <img src={easy_to_order} alt="img" />
            <br></br>
            <Typography variant="h5">Easy to Order</Typography>
            <Typography style={{ fontSize: "16px", color: "#545554" }} mt={2}>
              lorem ipsum lorem ipsum lorem ipsum<br></br>lorem ipsum lorem
              ipsum
            </Typography>
          </div>
          <div className="fast_delivery">
            <img src={fast_delivery} alt="img" />
            <br></br>
            <Typography variant="h5"> Fast Delivery</Typography>
            <Typography style={{ fontSize: "16px", color: "#545554" }} mt={2}>
              lorem ipsum lorem ipsum lorem ipsum<br></br>lorem ipsum lorem
              ipsum
            </Typography>
          </div>
          <div className="best_quality">
            <img src={best_quality} alt="img" />
            <br></br>
            <Typography variant="h5"> Best Quality</Typography>
            <Typography style={{ fontSize: "16px", color: "#545554" }} mt={2}>
              lorem ipsum lorem ipsum lorem ipsum<br></br>lorem ipsum lorem
              ipsum
            </Typography>
          </div>
        </div>
      </div>
      <div className="register-div">
        <Typography variant="h2" style={{ color: "white" }}>
          We Deliver value <br></br>through colaboration
        </Typography>
        <img src={outSourcing} alt="img" />
        <button className="register-btn">
          {" "}
          <Typography variant="h5">REGISTER AS DISTRIBUTOR</Typography>
        </button>
      </div>

      <div className="promotion">
        <div>
          <Typography variant="h5" style={{ color: "white" }}>
            One-Stop Solution To Your Medicine Supply Chain <br></br>
            Download The Med-Daily Mobile App
          </Typography>
          <img src={google} alt="logo" className="download" />
          <img src={app} alt="logo" className="download" />
        </div>
        <div className="mobile-img">
          <img src={mobile} alt="mobile_img" />
        </div>
      </div>
    </>
  );
};

export default Body;
