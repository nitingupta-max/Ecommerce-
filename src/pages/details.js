import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Offer from "../components/offer";
import "../css/details.css";
import { Button, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Details = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="medicine-details">
          <div>
            <Typography variant="h4"> Dolo 650mg Tablets 15's</Typography>
            <div className="branded">
              <Typography fontSize={14}>Branded</Typography>
            </div>
            <Typography mt={3} mb={2} variant="h6" color="#818181">
              Best Price* <span style={{ color: "#960018" }}>₹ 27.42</span>
            </Typography>
            <ul>
              <li>Mkt: Micro Labs Ltd.</li>
              <li>Country of Origin : India</li>
              <li>
                Delivery charges if applicable will be applied at checkout
              </li>
            </ul>
          </div>
          <div className="offers-div">
            <Typography variant="h6" mt={2} color="#960018">
              Offers Available
            </Typography>
            <Offer />
            <Offer />
            <Offer />
          </div>
        </div>

        <div className="description">
          <Typography variant="h5" color="#960018">
            Description
          </Typography>
          <Typography mt={2}>
            A key objective is engaging digital marketing customers and allowing
            them to interact with the brand through servicing and delivery of
            digital media. Information is easy to access at a fast rate through
            the use of digital communications. Users with access to the Internet
            can use many digital mediums, such as Facebook, YouTube, Forums, and
            Email etc.<br></br>
            <br></br>
            Through Digital communications it creates a Multi-communication
            channel where information can be quickly exchanged around the world
            by anyone without any regard to whom they are.[28] Social
            segregation plays no part through social mediums due to lack of face
            to face communication and information being wide spread instead to a
            selective audience.
          </Typography>
        </div>

        <div class="available-distributor">
          <Typography variant="h6" color="#960018" ml={4} mb={3}>
            Available Distributors
          </Typography>
          <div className="dist-name">
            <Typography>M/S Recipharam Pharmaservices Pvt. Ltd</Typography>
            <Typography>Rs. 599.00</Typography>
            <div className="count">
              <Button>
                <RemoveIcon />
              </Button>
              <Typography ml={2} mr={2} mt={1}>
                0
              </Typography>
              <Button>
                <AddIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
