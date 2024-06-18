import { Icons } from "../../../assets";
import LandingHeaderTitle from "../../../components/LandingHeaderTItle";
import FocusAreaCard from "../../../components/OurFocusCard";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function OurFocusSection() {
  const { ref, inView } = useInView({
    threshold: 0.04,
    triggerOnce: false,
    rootMargin: "20% 0px",
  });

  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const focusAreas = [
    {
      title: "Financial",
      description:
        "We manage various financial aspects crucial for its operations and long-term sustainability. This includes budgeting, billing processes for its members, revenue generation from electricity sales, and comprehensive financial planning. The financial stability of SAMELCO 1 is essential to ensure it can maintain and enhance its services while remaining economically viable.",
      icon: Icons.FinancialIcon,
    },
    {
      title: "Technical",
      description:
        "We focus on the technical aspects encompassing the entire infrastructure and technology required to generate, transmit, and distribute electricity to its member-owners. This involves managing power generation facilities, maintaining the electrical grid, implementing technology upgrades for improved efficiency, and ensuring the reliability of the electrical system.",
      icon: Icons.TechnicalIcon,
    },
    {
      title: "Institutional",
      description:
        "Our institutional aspects pertain to its organizational structure, governance, and policies. We operate with a focus on member ownership and participation. Members actively engage in decision-making processes, often through voting for board members who represent their interests. We adhere to its bylaws and regulations.",
      icon: Icons.InstitutionalIcon,
    },
  ];

  return (
    <div className="w-full md:p-5" ref={ref}>
      <div
        className={`flex flex-col text-center items-center md:pl-10 md:pr-10 p-3 ${
          inView || isAtTop
            ? "animate-rise-up"
            : "opacity-0 translate-y-10 transition-all duration-700"
        }`}
      >
        <LandingHeaderTitle title="+ Our Focus +" subtitle="What We Focus On" />

        <p className="text-justify md:text-center text-base lg:text-xl text-grey-400 p-2">
          SAMAR I Electric Cooperative, Inc. focuses on three crucial areas to
          ensure the long-term sustainability and effectiveness of our
          operations: financial management, technical infrastructure, and
          institutional governance.
        </p>
      </div>

      <div
        className={`p-6 md:pl-10 md:pr-10 md:pb-10 w-full ${
          inView
            ? "animate-rise-up"
            : "opacity-0 translate-y-10 transition-all duration-700"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {focusAreas.map((area, index) => (
            <FocusAreaCard
              key={index}
              title={area.title}
              description={area.description}
              icon={area.icon}
              className={`${
                index === 2
                  ? "md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-self-auto"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
