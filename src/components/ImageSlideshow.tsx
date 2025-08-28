import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import Autoplay from "embla-carousel-autoplay";

// Import real project images from AK Steel Services
import heroSteelFabrication from "@/assets/hero-steel-fabrication.jpg";
import structuralSteelConstruction from "@/assets/structural-steel-construction.jpg";
import interiorStructuralWork from "@/assets/interior-structural-work.jpg";
import industrialWarehouse1 from "@/assets/industrial-warehouse-1.jpg";
import industrialWarehouse2 from "@/assets/industrial-warehouse-2.jpg";
import largeFramework1 from "@/assets/large-steel-framework-1.jpg";
import largeFramework2 from "@/assets/large-steel-framework-2.jpg";
import residentialExtension from "@/assets/residential-extension.jpg";
import rearExtensionSteel from "@/assets/rear-extension-steel-frame.jpg";
import weldingServices from "@/assets/welding-services.jpg";

const slideImages = [
  {
    src: heroSteelFabrication,
    alt: "AK Steel Services - Professional steel fabrication workshop with advanced equipment",
    title: "Expert Steel Fabrication",
    subtitle: "30+ years of excellence in Kent & London"
  },
  {
    src: structuralSteelConstruction,
    alt: "AK Steel Services - Structural steel construction showing beam installation",
    title: "Structural Steel Solutions",
    subtitle: "Professional installation & certification"
  },
  {
    src: interiorStructuralWork,
    alt: "AK Steel Services - Interior structural steel work with exposed beams",
    title: "Residential & Commercial",
    subtitle: "Custom steel solutions for every project"
  },
  {
    src: industrialWarehouse1,
    alt: "AK Steel Services - Industrial warehouse steel framework construction",
    title: "Industrial Projects",
    subtitle: "Heavy-duty steel construction across the South East"
  },
  {
    src: industrialWarehouse2,
    alt: "AK Steel Services - Large industrial warehouse steel construction project",
    title: "Large Scale Projects",
    subtitle: "Complex steel structures for industrial clients"
  },
  {
    src: largeFramework1,
    alt: "AK Steel Services - Large steel framework construction with multiple levels",
    title: "Multi-Level Construction",
    subtitle: "Advanced steel framework solutions"
  },
  {
    src: residentialExtension,
    alt: "AK Steel Services - Residential extension steel framework in Kent",
    title: "Home Extensions",
    subtitle: "Quality steel solutions for residential projects"
  },
  {
    src: rearExtensionSteel,
    alt: "AK Steel Services - Rear extension steel frame installation in Kent",
    title: "Building Extensions",
    subtitle: "Steel frame extensions for homes & businesses"
  },
  {
    src: weldingServices,
    alt: "AK Steel Services - Professional welding work on steel components",
    title: "Welding Services",
    subtitle: "Expert welding for all steel projects"
  },
  {
    src: largeFramework2,
    alt: "AK Steel Services - Large scale steel framework under construction",
    title: "Heavy Construction",
    subtitle: "Robust steel solutions for major projects"
  }
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
                  loading="eager"
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