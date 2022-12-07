import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Footer from "../components/footer";
function Home() {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <Navbar />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default Home;
