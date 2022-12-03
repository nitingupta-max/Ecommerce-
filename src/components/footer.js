import Typography from "@mui/material/Typography";
import "../css/footer.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import footer_logo from "../image/catalog/demo/banners/footer-logo.png";
const Footer = () => {
  return (
    <>
      <div className="footer-cover">
        <div className="footer">
          <div className="div-1">
            <Typography variant="h5">Med-Daily</Typography>
            <Typography style={{ color: "#565555" }} mt={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              <br></br>
              <br></br>
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora.
            </Typography>
          </div>
          <div className="div-2">
            <Typography variant="h5" style={{ color: "#972a1a" }}>
              Company
            </Typography>
            <Typography variant="h5" mt={3}>
              Business Partnership
            </Typography>
            <Typography variant="h5" mt={2}>
              Privacy Policy
            </Typography>
            <Typography variant="h5" mt={2}>
              Terms & Condition
            </Typography>
            <Typography variant="h5" mt={2}>
              Return Policy
            </Typography>
          </div>
          <div className="div-3">
            <Typography variant="h5" style={{ color: "#972a1a" }}>
              Connect
            </Typography>
            <Typography variant="h5" mt={3}>
              <LocalPhoneIcon /> +91 8979694367
            </Typography>
            <Typography variant="h5" mt={2}>
              <EmailIcon /> info@Meddaily.in
            </Typography>
            <Typography variant="h5" mt={2} style={{ color: "#972a1a" }}>
              Social Media
            </Typography>
            <br></br>
            <FacebookIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="copy-right">
          <div>
            <img src={footer_logo} alt="footer_logo" />
          </div>
          <div>Terms & Conditions</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
