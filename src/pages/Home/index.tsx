import CustomerServiceSection from "./CustomerService";
import ElecTrackOverviewPage from "./ElecTrackOverview";
import HeroSection from "./HeroSection";
import HistorySection from "./HistorySection";
import Navbar from "../../components/Navbar";
import OurFocusSection from "./OurFocusSection";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />

      <OurFocusSection />

      <HistorySection />

      <CustomerServiceSection />

      <ElecTrackOverviewPage />

      <Footer />

      <ScrollToTopButton />
    </div>
  );
}
