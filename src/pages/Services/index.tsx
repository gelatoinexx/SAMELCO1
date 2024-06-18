import Navbar from "../../components/Navbar";
import CustomerServiceSection from "../Home/CustomerService";
import ElecTrackOverviewPage from "../Home/ElecTrackOverview";

export default function Services(){
    return(
        <div className="w-full">
            <Navbar />
            <CustomerServiceSection />
            <ElecTrackOverviewPage />
        </div>
    )
}