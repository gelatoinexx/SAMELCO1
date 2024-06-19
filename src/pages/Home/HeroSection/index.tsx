import { Images } from "../../../assets";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import routes from "../../../constants/routes";

export default function () {
  const navigate = useNavigate();

  const navigateToServicesPage = () => {
    navigate({ pathname: routes.SERVICES });
  };

  const navigateToAboutUsPage = () => {
    navigate({ pathname: routes.ABOUT });
  };

  return (
    <div className="relative px-4 md:px-8 mb-12">
      <div className="relative bg-accent-100 rounded-b-3xl lg:rounded-bl-4xl pb-10 py-3 px-8">
        <img
          src={Images.HeroBackground}
          alt="Background Image"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-b-3xl lg:rounded-bl-4xl "
        />
        <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mt-8 lg:mt-0">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-500 mb-2">
              SAMELCO I
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-accent-500 mb-8">
              Samar I Electric Cooperative Inc.
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-10">
              Charging Progress, Connecting Lives, and Illuminating Futures -
              Your Trusted Partner in Sustainable Energy Solutions for a
              Stronger, Brighter Tomorrow.
            </p>
            <div className="flex flex-col md:flex-row">
              <Button
                text="Our Services"
                variant="primary"
                onClick={navigateToServicesPage}
              />
              <Button
                text="Explore more"
                variant="secondary"
                onClick={navigateToAboutUsPage}
              />
            </div>
          </div>
          <div className="md:w-1/2 justify-center block md:flex  mt-5 items-center">
            <div className="flex justify-center items-center lg:w-[35rem] lg:h-[35rem] rounded-full bg-accent-500 lg:border-[2rem] border-[1rem] border-white">
              <div className=" md:w-full ">
                <img
                  src={Images.HeroImage}
                  alt="Illustration"
                  className="w-full h-auto max-w-full max-h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
