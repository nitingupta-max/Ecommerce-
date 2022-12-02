import Home from "./pages/home";
import Products from "./pages/products";
import Details from "./pages/details";
import TermsCondition from "./pages/terms_condition";
import PrivacyPolicy from "./pages/privacy_policy";
import OrderSummary from "./pages/order_Summary";
import ContactUs from "./pages/contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/details" exact element={<Details />} />
        <Route path="/termscondition" exact element={<TermsCondition />} />
        <Route path="/privacy" exact element={<PrivacyPolicy />} />
        <Route path="/ordersummary" exact element={<OrderSummary />} />
        <Route path="/contactus" exact element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
