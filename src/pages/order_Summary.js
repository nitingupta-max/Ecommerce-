import { Typography, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import google from "../image/google.png";
import app from "../image/app.png";
import mobile from "../image/phone.svg";
import "../css/order_summary.css";
import Offer from "../components/offer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const OrderSummary = () => {
  return (
    <>
      <Navbar />
      <Typography variant="h3" style={{ margin: "4% 10%" }}>
        Order Summary
      </Typography>
      <div className="med-details-div">
        <div className="medicine-quantity">
          <div className="title-div">
            <Typography>Product</Typography>
            <Typography>Price</Typography>
            <Typography>Quantity</Typography>
          </div>
          <hr></hr>
          <div className="title-div">
            <Typography>Dolo 650mg Tablet 15'S</Typography>
            <Typography> ₹ 27.42</Typography>
            <div className="count">
              <Button>
                <RemoveIcon />
              </Button>
              <Typography ml={2} mr={2} mt={1}>
                100
              </Typography>
              <Button>
                <AddIcon />
              </Button>
            </div>
          </div>
          <hr></hr>
          <div className="title-div">
            <Typography>Dolo 650mg Tablet 15'S</Typography>
            <Typography> ₹ 27.42</Typography>
            <div className="count">
              <Button>
                <RemoveIcon />
              </Button>
              <Typography ml={2} mr={2} mt={1}>
                100
              </Typography>
              <Button>
                <AddIcon />
              </Button>
            </div>
          </div>
          <hr></hr>
          <div className="title-div">
            <Typography>Dolo 650mg Tablet 15'S</Typography>
            <Typography> ₹ 27.42</Typography>
            <div className="count">
              <Button>
                <RemoveIcon />
              </Button>
              <Typography ml={2} mr={2} mt={1}>
                100
              </Typography>
              <Button>
                <AddIcon />
              </Button>
            </div>
          </div>{" "}
          <hr></hr>
          <div className="title-div">
            <Typography>Dolo 650mg Tablet 15'S</Typography>
            <Typography> ₹ 27.42</Typography>
            <div className="count">
              <Button>
                <RemoveIcon />
              </Button>
              <Typography ml={2} mr={2} mt={1}>
                100
              </Typography>
              <Button>
                <AddIcon />
              </Button>
            </div>
          </div>
          <Button>+Add more items</Button>
          <div className="bill-details">
            <Typography variant="h5" mt={4}>
              <strong>Bill Details</strong>
            </Typography>
            <Typography mt={1}>Item Total</Typography>
            <Typography mt={1}>Delivery Fee</Typography>
            <Typography mt={1}>Taxes and charges</Typography>
            <hr></hr>
            <Typography mt={1}>
              <strong> Order Total </strong>
            </Typography>
            <button className="proceed-btn"> Proceed</button>
          </div>
        </div>

        <div className="offers-div">
          <Offer />
          <Offer />
          <Offer />
        </div>
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
      <Footer />
    </>
  );
};

export default OrderSummary;
