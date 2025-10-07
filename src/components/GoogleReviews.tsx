import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ExternalLink } from "lucide-react";

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

  const googleBusinessUrl = "https://share.google/OpKJ8vWxyiiAlbKoR";

  const GoogleLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  return (
    <section className="py-20 bg-muted/30" aria-label="Google reviews from real customers">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-6 inline-flex items-center gap-2">
            <GoogleLogo />
            Google Reviews (Real Customers)
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Verified feedback from Google for AK Steel Services Limited.
          </p>
          <Button 
            variant="outline" 
            asChild
            className="inline-flex items-center gap-2"
          >
            <a 
              href={googleBusinessUrl}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GoogleLogo />
              View on Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
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
          <a 
            href={googleBusinessUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <GoogleLogo />
              <div className="flex items-center gap-1">{renderStars(5)}</div>
              <span className="font-semibold">5.0/5</span>
              <span className="text-muted-foreground">• 2 Google reviews</span>
            </div>
          </a>
          <p className="text-xs text-muted-foreground">AK STEEL SERVICES LIMITED • Unit A Wharf Rd, Gravesend DA12 2RU, United Kingdom</p>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;