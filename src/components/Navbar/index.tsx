import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Images } from "../../assets";
import menuData, { MenuItem } from "../MenuItemsData";

interface NavLinkProps {
 route: string;
  label: string;
  toggleMenu?: () => void;
  children?: React.ReactNode;
}

const NavLink = (props:NavLinkProps) => {
  const {route, label, toggleMenu, children } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClose = () => {
    setIsOpen(false);
    if (toggleMenu) {
      toggleMenu();
    }
  };
  return (
    <div className="relative">
      <RouterNavLink
        to={route}
        onClick={handleMenuClose}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={({ isActive }) =>
          `px-3 py-2 block text-md font-medium ${
            isActive ? "text-accent-500" : "text-gray-500"
          } hover:text-accent-500`
        }
      >
        {label}
      </RouterNavLink>
      {isOpen && children && (
        <div
          className="relative mb-3 bg-accent-100 lg:absolute -z-1 left-0  lg:bg-white lg:shadow-lg rounded-md lg:border-b-3 lg:border-accent-500  lg:w-[12rem]  w-full "
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="py-1 ">{children}</div>
        </div>
      )}
    </div>
  );
};



export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderMenuItems = (items: MenuItem[], toggleMenu?: () => void) => {
    return items.map((item) => (
      <NavLink
        key={item.label}
       route={item.route}
        label={item.label}
        toggleMenu={toggleMenu}
      >
        {item.subItems && (
          <div className="space-y-4 p-1 lg:w-[12rem]  w-full ">
            {renderMenuItems(item.subItems, toggleMenu)}
          </div>
        )}
      </NavLink>
    ));
  };

  return (
    <nav className="bg-white drop-shadow-md max-w-full sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <RouterNavLink to="/">
              <img
                className="h-14"
                src={Images.SamelcoLogo}
                alt="SAMELCO I Logo"
              />
            </RouterNavLink>
          </div>

          <div className="hidden lg:flex flex-1 justify-end mr-10">
            <div className="flex items-center space-x-4">
              {renderMenuItems(menuData, toggleMobileMenu)}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="mr-4 flex items-center md:ml-6">
              <button className="hover:bg-accent-500 px-3 py-3 text-md font-semibold bg-primary-500 text-white text-center rounded-3xl w-[10rem]">
                Sign In
              </button>
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-accent-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6 lg:block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6 lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } rounded-b-md`}
        id="mobile-menu"
      >
        <div className="px-3 pt-2 pb-5 space-y-1 sm:px-3 justify-center items-center min-h-screen sticky">
          <div className="px-3 pb-3">
            {renderMenuItems(menuData, toggleMobileMenu)}
          </div>

          <div className="block lg:hidden items-center">
            <div className="flex items-center lg:ml-6">
              <button className="hover:bg-accent-500 px-6 py-2 text-md font-semibold bg-primary-500 text-left text-white rounded-xl w-full">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
