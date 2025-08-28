import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const GoogleReviews = () => {
  const reviews = [
    {
      name: "John Smith",
      rating: 5,
      date: "2 weeks ago",
      review: "Excellent service from AK Steel Services. Professional team, quality work, and completed on time. Highly recommend for any steel fabrication needs."
    },
    {
      name: "Sarah Johnson", 
      rating: 5,
      date: "1 month ago",
      review: "Outstanding structural steel work for our extension. The team was knowledgeable, efficient, and delivered exactly what we needed."
    },
    {
      name: "Michael Brown",
      rating: 5,
      date: "2 months ago", 
      review: "Emergency welding service was fantastic. Quick response, fair pricing, and solved our problem efficiently. Will definitely use again."
    }
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-6">
            Customer Reviews
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Read genuine reviews from our satisfied customers across Kent and London.
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
          <p className="text-muted-foreground mb-6">
            Join our 1000+ satisfied customers across Kent, London, and South East England
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground">• 150+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;