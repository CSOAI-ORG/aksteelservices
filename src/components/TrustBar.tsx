import { useEffect, useRef, useState } from "react";
import { Award, Users, Hammer, Clock, Star } from "lucide-react";

const stats = [
  { icon: <Hammer className="h-7 w-7" />, target: 1247, label: "Projects Completed", suffix: "+" },
  { icon: <Users className="h-7 w-7" />, target: 500, label: "Happy Customers", suffix: "+" },
  { icon: <Award className="h-7 w-7" />, target: 20, label: "Years Experience", suffix: "+" },
  { icon: <Clock className="h-7 w-7" />, target: 2, label: "Hour Response Time", suffix: "hr" },
  { icon: <Star className="h-7 w-7" />, target: 5, label: "Star Google Rating", suffix: ".0" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-primary">
      {count}{suffix}
    </div>
  );
};

const TrustBar = () => {
  return (
    <section className="py-14 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Trusted Across Kent & London</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="flex justify-center text-accent">{stat.icon}</div>
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              <p className="text-xs md:text-sm text-secondary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-accent font-semibold">
            ⭐ "We respond to all enquiries within 2 hours — guaranteed"
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
