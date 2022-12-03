import { Typography } from "@mui/material";
import contact_image from "../image/contact.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "../css/contact.css";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="image-privacy-div">
        <img
          src={contact_image}
          alt="privacy_img"
          width="100%"
          height="400"
          className="privacy-img"
        />
        <div className="centered">
          <Typography variant="h2"> Contact Us</Typography>
          <Typography variant="h4" mt={1}>
            {" "}
            Communication is the lifeline of any relationship
          </Typography>
        </div>
      </div>

      <div className="contact-details">
        <div className="phone-div">
          <div>
            <PhoneAndroidIcon color="#0A7621" />
            <Typography mt={2} mb={2}>
              Phone
            </Typography>
            <Typography>+91 9080786896</Typography>
          </div>
        </div>
        <div class="vl"></div>
        <div className="phone-div">
          <div>
            <LocationOnIcon />
            <Typography mt={2} mb={2}>
              Address
            </Typography>
            <Typography>Lorem ipsum Lorem Ipsum B-91 LG</Typography>
          </div>
        </div>
        <div class="vl"></div>
        <div className="email-div">
          <EmailIcon />
          <Typography mt={2} mb={2}>
            Email
          </Typography>
          <Typography>meddaily@gmail.com</Typography>
        </div>
      </div>
      <div className="get-in-touch">
        <Typography variant="h3" mb={2}>
          Get in Touch
        </Typography>
        <div className="map-contact">
          <div>
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                fullwidth
              >
                {/* Child components, such as markers, info windows, etc. */}
                <></>
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="form-div">
            <input className="inp-field" placeholder="First Name"></input>
            <input className="inp-field" placeholder="Last Name"></input>
            <input className="inp-field" placeholder="Email"></input>
            <input className="inp-field" placeholder="Phone No."></input>
            <textarea className="inp-field" placeholder="Message"></textarea>
            <button className="req-btn">Request Info</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
