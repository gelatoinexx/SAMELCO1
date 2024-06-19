import { Images } from "../../../assets";
import LandingHeaderTitle from "../../../components/LandingHeaderTItle";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import routes from "../../../constants/routes";

export default function HistorySection() {
  const navigate = useNavigate();

  const handleHistoryButtonClick = () => {
    navigate({ pathname: routes.ABOUT });
  };

  return (
    <div className="relative w-full px-0 lg:px-0 mb-15">
      <img
        src={Images.HistorySectionBg}
        alt="Background Image"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-200 to-white-600 bg-opacity-75"></div>

      <div className="relative top-0 left-0 w-full h-full py-3 px-8 md:pt-14  md:px-8 items-center">
        <div className="mt-5 mb-5 text-center md:mb-0">
          <LandingHeaderTitle
            title="+ Our History +"
            subtitle="How it Started"
          />
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row  items-center justify-center mb-10">
          <div className="lg:w-1/2 w-full  justify-center items-center  flex h-full">
            <div className="w-full  md:mt-8 md:mb-5">
              <img
                src={Images.SamelcoPic}
                alt="App Mockup"
                className="w-full h-auto max-w-full object-cover "
              />
            </div>
          </div>

          <div className="lg:w-1/2  w-full lg:ml-20">
            <div className="flex flex-row items-center mt-5  mb-5  md:mb-6">
              <InformationCircleIcon className="w-8 h-8 text-grey-500" />
              <h1 className="text-2xl md:text-3xl ml-2 font-bold">Overview</h1>
            </div>

            <p className="text-lg lg:text-xl text-grey-600 mb-12 font-medium text-justify ">
              Samar I Electric Cooperative, Inc. (SAMELCO I) was incorporated
              with the National Electrification Commission on February 27, 1974.
              It started actual operation three months later, on May 27, 1974.
              Its initial membership numbered 800 members, all coming from the
              defunct Calbayog Electric Plant, whose system was taken over by
              the newly organized electric cooperative created under RA 6038 as
              amended by PD 269. It has two 2 units of CAT fuel-run generators
              at its power plant in Brgy. Capoocan, Calbayog City, as the sole
              source of power supply. During these periods, SAMELCO I offices
              were housed on a 0.6-hectare lot in Brgy. Capoocan is where the
              power plant was located. In 1980, it eventually transferred to its
              new headquarters, sprawled on a 3–4-hectare lot located in Brgy.
              Carayman, about 5 kilometers south of the City of Calbayog, is
              situated along the Maharlika Highway, fronting a seashore turned
              into an open beach resort.
            </p>

            <div className="">
              <Button
                text="See More"
                variant="primary"
                icon={<ArrowLongRightIcon className="h-6 w-6 text-white" />}
                onClick={handleHistoryButtonClick}
                className="md:py-4 md:w-1/2 text-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
