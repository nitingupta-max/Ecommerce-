import login_image from "../image/bg.jpg";
import med_logo from "../image/logo.png";
import "../css/login.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import play_app_icon from "../image/catalog/app.png";
const Login = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="login-body">
        <div className="big-img-div">
          <img src={login_image} alt="login" className="img-login" />
        </div>
        <div className="form-div">
          <img src={med_logo} alt="company_logo" width="300" height="80" />
          <div className="form">
            <Typography variant="h4" mt={8}>
              {" "}
              <strong>Log In</strong>
            </Typography>
            <Typography color="#2D3748" mt={2} mb={4}>
              {" "}
              For Retailers.
            </Typography>
            <div className="div-for-data">
              <div>
                <Typography>
                  <strong>Phone Number</strong>
                </Typography>
                <input placeholder="Phone Number" className="form-data"></input>
              </div>
              <div>
                <Typography>
                  <strong>Password</strong>
                </Typography>
                <input placeholder="Password" className="form-data"></input>
              </div>
            </div>
            <div className="create-acc-div">
              <button className="register-button">Log In</button>
              <Typography mt={2} mb={6}>
                {" "}
                Don’t have an account? <Link to="/signup">Sign up</Link>
              </Typography>
            </div>
          </div>
          <img src={play_app_icon} alt="logo" width="400" height="60" />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Login;
