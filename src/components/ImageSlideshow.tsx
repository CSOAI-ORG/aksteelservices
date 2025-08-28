import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import LazyImage from "@/components/LazyImage";
import Autoplay from "embla-carousel-autoplay";

// Import real project images
import largeFramework1 from "@/assets/large-steel-framework-1.jpg";
import largeFramework2 from "@/assets/large-steel-framework-2.jpg";
import largeFramework3 from "@/assets/large-steel-framework-3.jpg";
import largeFramework4 from "@/assets/large-steel-framework-4.jpg";
import industrialWarehouse1 from "@/assets/industrial-warehouse-1.jpg";

const slideImages = [
  {
    src: largeFramework1,
    alt: "Large steel framework construction project",
    title: "Industrial Steel Construction",
    subtitle: "Expert steel fabrication for commercial projects"
  },
  {
    src: largeFramework2,
    alt: "Steel beam installation for commercial building",
    title: "Commercial Steel Installation",
    subtitle: "Professional structural steel services"
  },
  {
    src: largeFramework3,
    alt: "Large scale steel fabrication project",
    title: "Structural Steel Fabrication",
    subtitle: "Custom steel solutions for every project"
  },
  {
    src: largeFramework4,
    alt: "Industrial steel construction framework",
    title: "Heavy Industrial Projects",
    subtitle: "Reliable steel construction across Kent & London"
  },
  {
    src: industrialWarehouse1,
    alt: "Industrial warehouse steel construction",
    title: "Warehouse & Industrial",
    subtitle: "Complete steel fabrication and installation"
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
            <CarouselItem key={index} className="h-full relative">
              <div className="relative h-full w-full">
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