
import { useState, useRef, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import defaultFallback from "@/assets/structural-steel-construction.jpg";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

const LazyImage = ({ src, alt, className, fallback, ...props }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={cn("relative", className)}>
      {!isLoaded && (
        <Skeleton
          className="w-full h-full absolute inset-0 animate-none pointer-events-none"
          aria-hidden="true"
        />
      )}
      
        {isInView && (
          (() => {
            const VERSION = '3';
            const withVersion = (url: string) => (url.includes('?') ? `${url}&v=${VERSION}` : `${url}?v=${VERSION}`);
            const finalSrc = hasError ? withVersion(fallback || defaultFallback) : withVersion(src);
            return (
              <img
                src={finalSrc}
                alt={alt}
                onLoad={handleLoad}
                onError={handleError}
                className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                loading="lazy"
                {...props}
              />
            );
          })()
        )}
    </div>
  );
};

export default LazyImage;
