import offer_logo from "../image/catalog/demo/banners/Offer.png";
import { Typography } from "@mui/material";
const Offer = () => {
  return (
    <>
      <div className="offer-item">
        <img src={offer_logo} alt="offer_logo" width="60px" height="60px" />

        <div>
          <Typography ml={2}>
            <strong>Micro Labs Ltd Bonus Offer</strong>
          </Typography>
          <Typography mt={1} ml={2}>
            {" "}
            Buy min Qty 100 get 10 Qty as Bonus
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Offer;
