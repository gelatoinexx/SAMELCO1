import { LightBulbIcon } from "@heroicons/react/24/outline";
import CustomerServiceCard from "../../../components/CustomerServiceCard";
import LandingHeaderTitle from "../../../components/LandingHeaderTItle";
import {
  ArrowClockwise,
  Megaphone,
  PencilSimpleLine,
  Receipt,
  UserCheck,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import routes from "../../../resources/constants/routes";

export default function CustomerServiceSection() {
  const ListOfCustomerServices = [
    {
      title: "Applying for new connection",
      icon: <PencilSimpleLine className="h-16 w-16 text-white" />,
      onClick: () => handleCardClick(routes.SERVICES_CUSTOMER_INFORMATION),


    },
    {
      title: "Replacement of Damage Meter",
      icon: <ArrowClockwise className="h-16 w-16 text-white" />,
      bgColor: "primary",
      onClick: () => handleCardClick(routes.SERVICES_CUSTOMER_INFORMATION),

    },
    {
      title: "Payment Channels",
      icon: <Receipt className="h-16 w-16 text-white" />,
      onClick: () => handleCardClick(routes.SERVICES_CUSTOMER_INFORMATION),

    },

    {
      title: "MCO Access",
      bgColor: "primary",
      icon: <UserCheck className="h-16 w-16 text-white" />,
    },

    {
      title: "Announcements",
      icon: <Megaphone className="h-16 w-16 text-white" />,
      onClick: () => handleCardClick(routes.NEWS),

    },
    {
      title: " FAQs, Rates and Electricity Saving Tips",
      bgColor: "primary",
      icon: <LightBulbIcon className="h-16 w-16 text-white" />,
      onClick: () => handleCardClick(routes.SERVICES_FAQS),
    },
  ];

  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate({ pathname: `${path}` });
    console.log("clicked");
  };

  return (
    <div className="lg:p-10 p-5 w-full justify-center items-center">
      <div className="lg:ml-20 md:ml-10">
        <LandingHeaderTitle
          title={"+ Customer Service +"}
          subtitle={"How can we assist you?"}
        />
      </div>

      <div className=" lg:pl-10 lg:pr-10 lg:pb-10 w-full  P-3 mt-10 md:pl-8 md:pr-8 ">
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-6 justify-center">
          {ListOfCustomerServices.map((service, index) => (
            <CustomerServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              bgColor={service.bgColor}
              onClick={service.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
