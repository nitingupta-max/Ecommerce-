import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "../css/products.css";
import { Typography } from "@mui/material";
import product_image from "../image/catalog/demo/banners/product.png";
import Card from "../components/card";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="product-div">
        <div className="search-section">
          <div className="categories">
            <Typography variant="h6">Categories</Typography>
            <hr></hr>
            <Typography mt={2}>Generic</Typography>
            <hr></hr>
            <Typography mt={2}>Branded</Typography>
            <hr></hr>
            <Typography mt={2}>OTC</Typography>
          </div>
          <div className="distributor">
            <Typography variant="h6">Distributor</Typography>
            <hr></hr>
            <input
              placeholder="Distributor"
              className="distributor-input"
            ></input>
          </div>
          <div className="price">
            <Typography variant="h6">Rate</Typography>
            <hr></hr>

            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1, mt: 5 }}
              alignItems="center"
            >
              <CurrencyRupeeIcon fontSize="16px" /> 1
              <Slider aria-label="Volume" />
              <CurrencyRupeeIcon fontSize="16px" /> 5000
            </Stack>
          </div>
          <div className="apply-div">
            <button className="apply-btn">Apply</button>
          </div>
        </div>
        <div className="brand-medicine">
          <img src={product_image} className="brand-img" alt="product_image" />
          <div className="filter">
            <Typography mt={4}>Showing 20 of 11823</Typography>
            <div className="select-filter">
              {/* <Typography>Sort By : </Typography> */}
              <select className="form-select">
                <option selected>Sort By</option>
                <option value="1">Price Low to High</option>
                <option value="2">Price High to Low</option>
                {/* <option value="3">Three</option> */}
              </select>
            </div>
          </div>
          <div className="medicine-list">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
