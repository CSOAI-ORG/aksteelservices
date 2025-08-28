import React from "react";

interface BrandLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ width = 160, height = 40, className = "", ...props }) => {
  return (
    <div 
      className={`flex items-center font-bold text-primary ${className}`} 
      style={{ width, height }}
      {...props}
    >
      <span className="text-2xl font-extrabold text-primary">AK</span>
      <span className="text-2xl font-bold text-accent ml-1">Steel</span>
      <span className="text-2xl font-bold text-primary ml-1">Services</span>
    </div>
  );
};

export default BrandLogo;
