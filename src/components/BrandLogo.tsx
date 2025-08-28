import React from "react";

interface BrandLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ width = 160, height = 40, className = "", ...props }) => {
  return (
    <img
      src="/lovable-uploads/c4f0e49b-33a3-413a-8c0c-19ec3eb40e59.png"
      alt="AK Steel Services logo"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      loading="eager"
      decoding="async"
      {...props}
    />
  );
};

export default BrandLogo;
