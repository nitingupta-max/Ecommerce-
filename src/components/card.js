import { Typography, Button } from "@mui/material";
import "./card.css";

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

        <Button variant="contained" fullwidth>
          Buy Now
        </Button>
      </div>
    </>
  );
};
export default Card;
