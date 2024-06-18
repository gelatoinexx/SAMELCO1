import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import News from "./pages/News";
import Services from "./pages/Services";
import CustomerInformation from "./pages/Services/CustomerInformation";
import FAQS from "./pages/Services/FAQS";
import Rates from "./pages/Services/Rates";
import BoardOfDirectors from "./pages/AboutUs/BoardOfDirectors";
import CompanyHistory from "./pages/AboutUs/CompanyHistory";
import ManagementStaffs from "./pages/AboutUs/Management&Staffs";
import PhotoGallery from "./pages/AboutUs/PhotoGallery";
import routes from "./constants/routes";

function App() {
  return (
    <Router>
      <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.ABOUT} element={<AboutUs />} />
      <Route path={routes.ABOUT_COMPANY_HISTORY} element={<CompanyHistory />} />
      <Route path={routes.ABOUT_BOARD_OF_DIRECTORS} element={<BoardOfDirectors />} />
      <Route path={routes.ABOUT_MANAGEMENT_STAFFS} element={<ManagementStaffs />} />
      <Route path={routes.ABOUT_PHOTO_GALLERY} element={<PhotoGallery />} />
      <Route path={routes.CONTACT} element={<ContactUs />} />
      <Route path={routes.NEWS} element={<News />} />
      <Route path={routes.SERVICES} element={<Services />} />
      <Route path={routes.SERVICES_CUSTOMER_INFORMATION} element={<CustomerInformation />} />
      <Route path={routes.SERVICES_FAQS} element={<FAQS />} />
      <Route path={routes.SERVICES_GENERATION_RATES} element={<Rates />} />
      </Routes>
    </Router>
  );
}
export default App;
