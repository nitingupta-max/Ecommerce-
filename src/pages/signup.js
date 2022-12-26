import login_image from "../image/bg.jpg";
import med_logo from "../image/logo.png";
import "../css/login.css";
import "../css/signup.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import play_app_icon from "../image/catalog/app.png";
import { useState } from "react";
const Signup = () => {
  const [data, setData] = useState({
    typeOfBusiness: "",
    ownerName: "",
    businessAddress: "",
    pincode: "",
    city: "",
    area: "",
    state: "",
    phoneNumber: "",
    email: "",
    password: "",
    pharmacistPhoneNumber: "",
    drugsLicenseNumber: "",
    drugsLicense: "",
    gstInNumber: "",
    gstCertificate: "",
    panNumber: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  // const [error, setError] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const url = "https://phnebook.heroku.com/api/users";
  //     const { data: res } = await axios.post(url, data);
  //     navigate("/login");
  //     console.log(res.message);
  //   } catch (error) {
  //     if (
  //       error.response &&
  //       error.response.status >= 400 &&
  //       error.response.status <= 500
  //     ) {
  //       setError(error.response.data.message);
  //     }
  //   }
  // };

  return (
    <>
      {/* <Navbar /> */}
      <div className="signup-body">
        <div className="big-img-div">
          <img src={login_image} alt="login" className="img-login" />
        </div>
        <div className="form-div">
          <img src={med_logo} alt="company_logo" width="300" height="80" />
          <div className="form">
            <Typography variant="h4" mt={8}>
              {" "}
              <strong>Create Account</strong>
            </Typography>
            <Typography color="#2D3748" mb={4}>
              {" "}
              For Retailers.
            </Typography>

            <div className="div-4-data">
              <div>
                <Typography>
                  <strong>Type of Business</strong>
                </Typography>
                <input
                  placeholder="Type of Business"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="typeOfBusiness"
                  onChange={handleChange}
                  value={data.typeOfBusiness}
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>Type of Business</strong>
                </Typography>
                <input
                  placeholder="Type of Business"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="typeOfBusiness"
                  onChange={handleChange}
                  value={data.typeOfBusiness}
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>Owner Name</strong>
                </Typography>
                <input
                  placeholder="Owner Name"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="ownerName"
                  onChange={handleChange}
                  value={data.ownerName}
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>Business Address</strong>
                </Typography>
                <input
                  placeholder="Business Address"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="businessAddress"
                  onChange={handleChange}
                  value={data.businessAddress}
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>Pincode</strong>
                </Typography>
                <input
                  placeholder="Pincode"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="pincode"
                  onChange={handleChange}
                  value={data.pincode}
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>City</strong>
                </Typography>
                <input
                  placeholder="City"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="city"
                  onChange={handleChange}
                  value={data.city}
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>Area</strong>
                </Typography>
                <input
                  placeholder="Area"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="area"
                  onChange={handleChange}
                  value={data.area}
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>Select State</strong>
                </Typography>
                <input
                  placeholder="Select State"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="state"
                  onChange={handleChange}
                  value={data.state}
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>Phone Number</strong>
                </Typography>
                <input
                  placeholder="Phone Number"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={data.phoneNumber}
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>Email</strong>
                </Typography>
                <input
                  placeholder="Password"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>Password</strong>
                </Typography>
                <input
                  placeholder="Password"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>Confirm Password</strong>
                </Typography>
                <input
                  placeholder="Confirm Password"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="confirmpassword"
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>Confirm Password</strong>
                </Typography>
                <input
                  placeholder="Confirm Password"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="confirmpassword"
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>Pharmacist Phone No. 1</strong>
                </Typography>
                <input
                  placeholder="Pharmacist Phone No. 1"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="pharmaNUmber"
                  onChange={handleChange}
                  value={data.pharmacistPhoneNumber}
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>Add Drug License number</strong>
                </Typography>
                <input
                  placeholder="Add Drug License number"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="licenseNumber"
                  onChange={handleChange}
                  value={data.drugsLicenseNumber}
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>Upload Drug License</strong>
                </Typography>
                <input
                  type="file"
                  id="file-upload"
                  name="file-upload"
                  className="form-data"
                  autoComplete="off"
                  onChange={handleChange}
                  value={data.drugsLicense}
                />
                {/* <input placeholder="Password" className="form-data"></input> */}
              </div>
              <div>
                <Typography>
                  <strong>GSTIN Number</strong>
                </Typography>
                <input
                  placeholder="GSTIN Number"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="gstinnumber"
                  onChange={handleChange}
                  value={data.gstInNumber}
                ></input>
              </div>
              <div>
                <Typography>
                  <strong>GSTIN Number</strong>
                </Typography>
                <input
                  type="file"
                  id="file-upload"
                  name="file-upload"
                  className="form-data"
                  autoComplete="off"
                  onChange={handleChange}
                  value={data.gstCertificate}
                />
              </div>
              <div>
                <Typography>
                  <strong>Pan Number</strong>
                </Typography>
                <input
                  placeholder="Pan Number"
                  className="form-data"
                  type="text"
                  autoComplete="off"
                  name="panNumber"
                  onChange={handleChange}
                  value={data.panNumber}
                ></input>
              </div>
            </div>

            <div className="create-acc-div">
              <button className="register-button">Create Account</button>
              <Typography mt={2} mb={6}>
                {" "}
                Already have an account? <Link to="/login">Log In</Link>
              </Typography>
              <img src={play_app_icon} alt="logo" className="play_app_icon" />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Signup;
