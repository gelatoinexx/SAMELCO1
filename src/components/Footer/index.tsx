import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { Images } from "../../assets";
import Logo from "./Logo";

export default function Footer() {
  const logos = [
    { src: Images.Doe, alt: "DOE Logo" },
    { src: Images.Frecor8, alt: "Frecor8 Logo" },
    { src: Images.Ngcp, alt: "NGCP Logo" },
    { src: Images.Psam, alt: "PSALM Logo" },
    { src: Images.Erc, alt: "ERC Logo" },
    { src: Images.Wesm, alt: "WESM Logo" },
    { src: Images.Nea, alt: "NEA Logo" },
  ];

  return (
    <footer className="bg-primary-500 text-white w-full">
      <div className="w-full pt-10 items-center justify-center">
        <div>
          <div className="flex-wrap justify-center items-center">
            <div className="flex flex-wrap space-y-2 md:flex-col-7 justify-center space-x-2 p-2 md:space-x-8 items-center mb-9">
              {logos.map((logo, index) => (
                <Logo key={index} src={logo.src} alt={logo.alt} />
              ))}
            </div>
            <hr className="w-full border-t border-white" />
          </div>
        </div>

        <div className="w-full">
          <div className="container mx-auto py-3 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center md:text-left py-4">
              <div className="md:col-span-2 p-5">
                <img
                  src={Images.SamelcoLogo2}
                  alt="SAMELCO I Logo"
                  className="h-16 md:h-25 mb-8 logo"
                />
                <p className="text-lg text-justify mb-10">
                  SAMELCO I is a non-stock, non-profit electric cooperative
                  existing under the laws of the Philippines. It is authorized
                  to distribute and provide electricity services to its
                  members-consumers in the Municipalities of Gandara,
                  Matuguinao, San Jorge, Sta. Margarita, Tarangnan, Pagsanghan,
                  and the City of Calbayog, all in the province of Samar.
                </p>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <FacebookLogo className="h-10 w-10 text-white" />
                  <TwitterLogo className="h-10 w-10 text-white" />
                  <InstagramLogo className="h-10 w-10 text-white" />
                  <LinkedinLogo className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="md:col-span-2 lg:p-10 w-full">
                <h2 className="font-bold text-2xl text-accent-500 mb-2">
                  Get In Touch With Us
                </h2>
                <h1 className="font-bold text-lg mb-4">Contact Numbers</h1>
                <ul className="list-none leading-6">
                  <li>MSD - (+63) 9173102881</li>
                  <li>Billing - (+63) 9173103505</li>
                  <li>Capoocan - (+63) 9175600760</li>
                  <li>Palanas Cara - (+63) 9175660764</li>
                  <li>San Agustin:</li>
                  <li>Globe - (+63) 9173102377</li>
                  <li>Smart - (+63) 9184559642</li>
                </ul>
                <h1 className="font-bold text-lg mt-7">Email Address</h1>
                <p>samelco_1@yahoo.com</p>
              </div>
              <div className="md:col-span-1 lg:col-span-1 lg:p-10">
                <h2 className="font-bold text-lg mb-2">Office Address</h2>
                <p>SAMELCO-1 Compound Brgy.</p>
                <p>Carayman, Calbayog City,</p>
                <p>Samar 6710 PHILIPPINES</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-accent-500 text-black text-sm md:text-md font-semi-bold p-2 md:p-5 w-full text-left">
          <p>
            Copyright © 2024 Samar 1 Electric Cooperative, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
