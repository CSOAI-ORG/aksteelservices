import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export interface AEOFaq {
  q: string;
  a: string;
}

interface AEOFaqSectionProps {
  /** Page-specific FAQs to display as quick-answer cards */
  faqs: AEOFaq[];
  /** Section heading */
  heading?: string;
  /** Optional eyebrow/badge text */
  eyebrow?: string;
  /** Optional intro paragraph */
  intro?: string;
  /** Optional background variant */
  variant?: "background" | "muted";
}

const AEOFaqSection = ({
  faqs,
  heading = "Quick Answers About Our Work",
  eyebrow = "Quick Answers",
  intro,
  variant = "background",
}: AEOFaqSectionProps) => {
  const bg = variant === "muted" ? "bg-muted/30" : "bg-background";

  return (
    <section className={`py-16 md:py-20 ${bg}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-3">
            <Sparkles className="h-3 w-3 mr-1 inline" /> {eyebrow}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
          {intro && <p className="text-muted-foreground">{intro}</p>}
        </div>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-muted/40 rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-bold text-base mb-2 text-foreground">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AEOFaqSection;
