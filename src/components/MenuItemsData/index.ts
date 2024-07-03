import routes from "../../resources/constants/routes";

export interface MenuItem {
  label: string;
  route: string;
  subItems?: MenuItem[];
}

const menuData: MenuItem[] = [
  {
    label: "Home",
    route: routes.HOME,
  },
  {
    label: "About Us",
    route: routes.ABOUT,
    subItems: [
      { label: "Company History", route: routes.ABOUT_COMPANY_HISTORY },
      { label: "Board of Directors", route: routes.ABOUT_BOARD_OF_DIRECTORS },
      {
        label: "Managements and Staffs",
        route: routes.ABOUT_MANAGEMENT_STAFFS,
      },
      { label: "Photo Gallery", route: routes.ABOUT_PHOTO_GALLERY },
    ],
  },
  {
    label: "Services",
    route: routes.SERVICES,
    subItems: [
      {
        label: "Customer Information",
        route: routes.SERVICES_CUSTOMER_INFORMATION,
      },
      { label: "FAQs & Electric Saving", route: routes.SERVICES_FAQS },
      { label: "Generation Rates", route: routes.SERVICES_GENERATION_RATES },
    ],
  },
  {
    label: "News & Events",
    route: routes.NEWS,
  },
  {
    label: "Contact Us",
    route: routes.CONTACT,
  },
];

export default menuData;
