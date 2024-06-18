import routes from "../../constants/routes";


export interface MenuItem {
  label: string;
  path: string;
  subItems?: MenuItem[];
}

const menuData: MenuItem[] = [
  {
    label: "Home",
    path: routes.HOME,
  },
  {
    label: "About Us",
    path: routes.ABOUT,
    subItems: [
      { label: "Company History", path: routes.ABOUT_COMPANY_HISTORY },
      { label: "Board of Directors", path: routes.ABOUT_BOARD_OF_DIRECTORS },
      { label: "Managements and Staffs", path: routes.ABOUT_MANAGEMENT_STAFFS },
      { label: "Photo Gallery", path: routes.ABOUT_PHOTO_GALLERY },
    ],
  },
  {
    label: "Services",
    path: routes.SERVICES,
    subItems: [
      { label: "Customer Information", path: routes.SERVICES_CUSTOMER_INFORMATION },
      { label: "FAQs & Electric Saving", path: routes.SERVICES_FAQS },
      { label: "Generation Rates", path: routes.SERVICES_GENERATION_RATES },
    ],
  },
  {
    label: "News & Events",
    path: routes.NEWS,
  },
  {
    label: "Contact Us",
    path: routes.CONTACT,
  },
];

export default menuData;