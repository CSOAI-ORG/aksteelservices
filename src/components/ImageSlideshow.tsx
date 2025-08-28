import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import Autoplay from "embla-carousel-autoplay";
import fallbackImage from "@/assets/structural-steel-construction.jpg";

// Import real project images from AK Steel Services
import { REAL_PHOTOS } from "@/assets/real-photos";

const slideImages = [
  {
    src: REAL_PHOTOS.commercialInterior1.src,
    alt: REAL_PHOTOS.commercialInterior1.alt,
    title: "Expert Steel Fabrication",
    subtitle: "30+ years of excellence in Kent & London",
  },
  {
    src: REAL_PHOTOS.roofStructure1.src,
    alt: REAL_PHOTOS.roofStructure1.alt,
    title: "Structural Steel Solutions",
    subtitle: "Professional installation & certification",
  },
  {
    src: REAL_PHOTOS.industrialInterior1.src,
    alt: REAL_PHOTOS.industrialInterior1.alt,
    title: "Industrial Projects",
    subtitle: "Heavy-duty steel construction across the South East",
  },
  {
    src: REAL_PHOTOS.roofStructure2.src,
    alt: REAL_PHOTOS.roofStructure2.alt,
    title: "Complex Roof Structures",
    subtitle: "Precision roof steelwork and rafters",
  },
  {
    src: REAL_PHOTOS.residentialExtension1.src,
    alt: REAL_PHOTOS.residentialExtension1.alt,
    title: "Residential Extensions",
    subtitle: "Quality steel solutions for homes",
  },
  {
    src: REAL_PHOTOS.residentialExtension2.src,
    alt: REAL_PHOTOS.residentialExtension2.alt,
    title: "Building Extensions",
    subtitle: "Seamless residential steel installations",
  },
];

interface ImageSlideshowProps {
  className?: string;
}

const ImageSlideshow = ({ className }: ImageSlideshowProps) => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className={cn("relative h-[100svh] w-full overflow-hidden", className)}>
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {slideImages.map((slide, index) => (
            <CarouselItem key={index} className="relative min-h-[100svh]">
              <div className="relative min-h-[100svh] w-full">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  onError={(e) => {
                    e.currentTarget.src = fallbackImage;
                    e.currentTarget.alt = "AK Steel Services — structural steel construction";
                  }}
                />
                
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white max-w-4xl px-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 text-shadow">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation arrows */}
        <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        
        {/* Dots indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slideImages.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                current === index 
                  ? "bg-white scale-110" 
                  : "bg-white/50 hover:bg-white/75"
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlideshow;