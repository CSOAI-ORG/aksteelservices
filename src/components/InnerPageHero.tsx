import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

interface InnerPageHeroProps {
  badge?: string;
  title: ReactNode;
  description?: string;
  variant?: "gradient" | "dark" | "light";
  children?: ReactNode;
}

const InnerPageHero = ({ badge, title, description, variant = "gradient", children }: InnerPageHeroProps) => {
  const bgClasses = {
    gradient: "bg-gradient-to-br from-primary to-secondary text-primary-foreground",
    dark: "bg-secondary text-secondary-foreground",
    light: "bg-gradient-to-br from-primary/5 via-background to-secondary/5 text-foreground",
  };

  return (
    <section className={`py-16 md:py-20 ${bgClasses[variant]}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <Badge variant="secondary" className="mb-4">
              {badge}
            </Badge>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-[1.1] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className={`text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto ${variant === "light" ? "text-muted-foreground" : "opacity-90"}`}>
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default InnerPageHero;
