import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Albana Janjeva",
      rating: 5,
      date: "2 months ago",
      review:
        "Adi was very knowledgeable and reliable, we worked with him for our home renovation. He was very quick to respond, efficient and delivered our steel incredibly quickly! Would highly recommend him - we are using him again for another project!",
    },
    {
      name: "Sarah Thompson",
      rating: 5,
      date: "3 weeks ago",
      review: "Excellent service from start to finish. The team installed structural steel beams for our extension and the quality was outstanding. Very professional and completed on time!",
    },
    {
      name: "M Matbouei",
      rating: 5,
      date: "2 years ago",
      review: "Professional and fast services at competitive price!",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-muted/30" aria-label="Google reviews from real customers">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-6">
            Google Reviews (Real Customers)
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Verified feedback from Google for AK Steel Services Limited.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                  <Quote className="h-5 w-5 text-primary opacity-50" />
                </div>
                <CardTitle className="text-lg">{review.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex items-center gap-1">{renderStars(5)}</div>
            <span className="font-semibold">5.0/5</span>
            <span className="text-muted-foreground">• 3 Google reviews</span>
          </div>
          <p className="text-xs text-muted-foreground">AK STEEL SERVICES LIMITED • Unit A Wharf Rd, Gravesend DA12 2RU, United Kingdom</p>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;