import React, { useState } from "react";
import logoSvg from "@/assets/ak-steel-logo.svg";

interface BrandLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ width = 160, height = 40, className = "", ...props }) => {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className={`font-bold text-primary ${className}`} style={{ width, height, display: 'flex', alignItems: 'center' }}>
        AK <span className="text-secondary ml-1">Steel Services</span>
      </div>
    );
  }

  return (
    <img
      src={logoSvg}
      alt="AK Steel Services logo"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      loading="eager"
      decoding="async"
      onError={() => setErrored(true)}
      {...props}
    />
  );
};

export default BrandLogo;
