import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [borderAngle, setBorderAngle] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsVisible(scrollPosition > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollListener = () => {
      handleScroll();
      setBorderAngle((prevAngle) => (prevAngle + 2) % 360);
    };
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <button
      className={`fixed md:bottom-10 md:right-10 bottom-5 right-5 bg-primary-500 text-white hover:bg-accent-500 p-3 rounded-full shadow-md transition-all duration-300 ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full border-3 border-dashed border-accent-500 rounded-full`}
        style={{
          transform: `rotate(${borderAngle}deg)`,
        }}
      />
      <ArrowUpIcon className="h-6 w-6 font-extrabold relative z-10" />
    </button>
  );
};

export default ScrollToTopButton;