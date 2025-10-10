import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AllReviews from "@/components/AllReviews";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const Reviews = () => {
  return (
    <>
      <SEOHead
        title="Customer Reviews | AK Steel Services - 5.0★ Rated Steel Fabrication"
        description="Read verified Google reviews from our satisfied customers across Kent, London, and South East England. See why AK Steel Services maintains a perfect 5.0-star rating for steel fabrication, structural steel, and welding services."
        keywords="AK Steel reviews, steel fabrication reviews Kent, structural steel reviews London, customer testimonials, Google reviews steel services, rated steel company, trusted steel fabrication"
        canonicalUrl="https://www.aksteelservices.com/reviews"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <Breadcrumbs />
        <AllReviews />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Reviews;
