import { Typography } from "@mui/material";
import "../css/card.css";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="card">
        <Typography variant="h6">
          Dolo 650mg Tablet<br></br>15'S
        </Typography>
        <Typography mt={4}>Mkt: Micro Labs Ltd</Typography>

        <Typography mt={3} mb={2} variant="h6">
          Best Price* <span style={{ color: "#960018" }}>₹ 27.42</span>
        </Typography>

        <Link to="/ordersummary">
          {" "}
          <button className="buy-now-btn"> Buy Now</button>
        </Link>
      </div>
    </>
  );
};
export default Card;
