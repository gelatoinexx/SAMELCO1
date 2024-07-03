import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Images } from "../../../assets";

export default function ElecTrackOverviewPage() {
  return (
    <div className="relative w-full px-0 lg:px-0 ">
      <img
        src={Images.BackgroundImage}
        alt="Background Image"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-75">

      </div>

      <div className="relative top-0 left-0 w-full h-full py-3 px-8 md:pt-10  md:px-8 items-center">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="md:w-full  lg:mt-5">
            <h2 className="text-2xl md:text-4xl font-bold text-primary-500 mb-5 md:mb-10">
              Stay Powered, Stay Connected: Access Your Electric Bills Anytime,
              Anywhere
            </h2>

            <p className="text-base lg:text-xl text-grey-500 mb-10 text-justify font-medium">
              Experience the simplicity of SAMELCO I ElecTrack for managing your
              electric bills hassle-free. Access your monthly statements from
              any device, at any time. Easily track your payment history for the
              past year and monitor your electricity usage with clear,
              user-friendly charts. Seamlessly handle accounts and explore
              various payment options. SAMELCO I ElecTrack puts you in control
              of your electric bills, wherever you are, ensuring a smooth and
              empowering user experience.
            </p>

            <div className="mb-6">
              <button className="bg-primary-500 hover:bg-accent-600 text-white py-3 px-8 md:py-4 md:w-[15rem] rounded-3xl text-xl md:mr-4 mb-4 flex ">
                <span>Sign Up Now</span>
                <ArrowLongRightIcon className="ml-5 h-6 w-6 text-white" />
              </button>
            </div>
          </div>
          <div className="md:w-full justify-center items-center block  md:flex md:h-full md:ml-10 mt-20">
            <div className=" md:w-full md:h-full  ">
              <img
                src={Images.AppMockup}
                alt="App Mockup"
                className="w-full h-auto max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
