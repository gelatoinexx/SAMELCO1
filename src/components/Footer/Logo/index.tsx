import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
  onClick?: () => void; // Use onClick instead of onclick
}

const Logo: React.FC<LogoProps> = ({ src, onClick, alt }) => {
  return <img src={src} alt={alt} onClick={onClick} className="h-16 lg:h-24 filter grayscale hover:filter-none transition duration-300 cursor-pointer" />;
};

export default Logo;
