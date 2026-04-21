import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewHeroSection from "@/components/NewHeroSection";
import ServicesSection from "@/components/ServicesSection";
import QuoteForm from "@/components/QuoteForm";
import TeamSection from "@/components/TeamSection";
import SEOHead from "@/components/SEOHead";
import GoogleReviews from "@/components/GoogleReviews";
import { useAnalytics } from "@/hooks/useAnalytics";
import LazyImage from "@/components/LazyImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCallBar from "@/components/StickyCallBar";
import TrustBar from "@/components/TrustBar";
import UrgencyBanner from "@/components/UrgencyBanner";
import MidPageCTA from "@/components/MidPageCTA";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, MapPin, Home, Building, ClipboardList, Search, Wrench, Factory, Warehouse, HardHat, Layers, Sparkles } from "lucide-react";
import { REAL_PHOTOS } from "@/assets/real-photos";
import { Link } from "react-router-dom";

const Index = () => {
  useAnalytics();
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://aksteelservices.com/#business",
    "name": "AK Steel Services",
    "description": "Professional steel fabrication, structural steel, RSJ beams, and welding services across Kent, London, and South East England. BS EN 1090 certified. Free site surveys.",
    "url": "https://aksteelservices.com",
    "telephone": "+441474550531",
    "email": "info@aksteelservices.com",
    "address": { "@type": "PostalAddress", "streetAddress": "Unit A, Wharf Road", "addressLocality": "Gravesend", "addressRegion": "Kent", "postalCode": "DA12 2RU", "addressCountry": "GB" },
    "geo": { "@type": "GeoCoordinates", "latitude": "51.4416", "longitude": "0.3706" },
    "openingHoursSpecification": [
      {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:30", "closes": "17:00"},
      {"@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "07:00", "closes": "13:00"}
    ],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "bestRating": "5", "reviewCount": "47", "ratingCount": "47" },
    "serviceArea": [
      { "@type": "AdministrativeArea", "name": "Kent" },
      { "@type": "City", "name": "London" },
      { "@type": "AdministrativeArea", "name": "South East England" }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61577360927185",
      "https://www.instagram.com/aksteelservices/"
    ]
  };

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <SEOHead
        title="Steel Fabrication Kent & London | AK Steel Services | Free Quotes"
        description="Professional steel fabrication in Kent & London. BS EN 1090 certified. RSJ beams, structural steel, welding, loft conversions, extensions. Free site surveys. Call 01474 550531."
        keywords="steel fabrication Kent, structural steel London, RSJ beams Kent, steel beam installation, welding services Kent, loft conversion steel beams, house extension steelwork, steel fabricators near me, Gravesend steel"
        schemaData={localBusinessSchema}
      />
      <StickyCallBar />
      <Header />
      
      {/* Hero with slideshow + inline quote form */}
      <NewHeroSection />

      {/* Trust Bar with animated counters */}
      <TrustBar />

      {/* Certifications */}
      <section className="py-8 md:py-10 bg-muted/40 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em]">Accredited & Certified:</p>
            <div className="bg-background rounded-lg p-3 md:p-4 shadow-sm border border-border/50">
              <img 
                src="/images/bs-en-1090-logo.jpg" 
                alt="BS EN 1090 certified — SCCS and UKAS Product Certification" 
                className="h-12 md:h-16 w-auto"
              />
            </div>
            <div className="bg-background rounded-lg p-3 md:p-4 shadow-sm border border-border/50">
              <img 
                src="/images/ukca-logo.png" 
                alt="UKCA — UK Conformity Assessed certification" 
                className="h-12 md:h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Residential & Commercial quick links */}
      <section className="py-14 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">Explore Our Specialisms</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Residential & <span className="text-primary">Commercial</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <Link to="/residential-steel-services" className="group block">
              <div className="relative rounded-2xl overflow-hidden h-72 md:h-80 bg-secondary">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${REAL_PHOTOS.residentialExtension2.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent group-hover:from-secondary/80 transition-colors" />
                <div className="relative z-10 flex flex-col justify-end h-full p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Home className="h-5 w-5 text-accent" />
                    <Badge className="bg-accent text-accent-foreground text-xs">Popular</Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-1">Residential Services</h3>
                  <p className="text-sm text-secondary-foreground/80">Loft conversions, extensions, RSJ beams & more</p>
                  <span className="text-xs text-accent mt-3 font-semibold flex items-center gap-1">
                    Explore services <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/commercial-steel-services" className="group block">
              <div className="relative rounded-2xl overflow-hidden h-72 md:h-80 bg-secondary">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${REAL_PHOTOS.industrialInterior1.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent group-hover:from-secondary/80 transition-colors" />
                <div className="relative z-10 flex flex-col justify-end h-full p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-1">Commercial & Industrial</h3>
                  <p className="text-sm text-secondary-foreground/80">Frameworks, mezzanines, platforms & large-scale projects</p>
                  <span className="text-xs text-accent mt-3 font-semibold flex items-center gap-1">
                    Explore services <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Simple Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From first call to finished installation in 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto stagger-fade-up">
            {[
              { icon: <ClipboardList className="h-7 w-7" />, step: "01", title: "Get In Touch", desc: "Call, email, or fill in our quick quote form" },
              { icon: <Search className="h-7 w-7" />, step: "02", title: "Free Site Survey", desc: "We visit, measure, and provide a detailed quote" },
              { icon: <Wrench className="h-7 w-7" />, step: "03", title: "Fabricate & Install", desc: "Expert fabrication and professional installation" },
            ].map((s, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto">
                  {s.icon}
                </div>
                <p className="text-xs font-bold text-accent uppercase tracking-[0.15em]">Step {s.step}</p>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/how-it-works">See Full Process <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Urgency CTA Banner */}
      <UrgencyBanner />

      {/* Recent Projects */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="secondary" className="mb-4">Recent Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Projects Completed in <span className="text-primary">2024–2025</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of our latest steel fabrication and installation projects across Kent and London.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-fade-up">
            {[
              { src: REAL_PHOTOS.craneConstruction1, loc: "London", title: "Commercial Steel Framework", desc: "Large-scale structural steel installation with crane lifting." },
              { src: REAL_PHOTOS.residentialExtension2, loc: "Kent", title: "Residential Rear Extension", desc: "Steel beam installation for open-plan living space." },
              { src: REAL_PHOTOS.teamInstallingBeam, loc: "Gravesend", title: "RSJ Beam Installation", desc: "Professional RSJ beam fitting for wall removal." },
              { src: REAL_PHOTOS.rooftopCraneOp, loc: "South London", title: "Rooftop Steel Delivery", desc: "Complex crane operation for rooftop steel installation." },
              { src: REAL_PHOTOS.industrialInterior1, loc: "Kent", title: "Industrial Mezzanine", desc: "Warehouse mezzanine floor to double usable space." },
              { src: REAL_PHOTOS.teamCarryingBeam, loc: "Dartford", title: "Loft Conversion Steelwork", desc: "Structural steel beams for loft conversion." },
            ].map((project, i) => (
              <Card key={i} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/60">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <LazyImage 
                    src={project.src.src}
                    alt={project.src.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-secondary-foreground font-semibold text-sm">View Project →</span>
                  </div>
                </div>
                <CardHeader className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1.5">
                    <MapPin className="h-3 w-3" />
                    <span>{project.loc}</span>
                  </div>
                  <CardTitle className="text-base leading-snug">{project.title}</CardTitle>
                  <CardDescription className="text-sm mt-1">{project.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commercial Steel Showcase */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${REAL_PHOTOS.craneConstruction1.src})` }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">Commercial & Industrial</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Heavy-Duty <span className="text-accent">Commercial Steelwork</span>
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              From warehouse mezzanines to industrial frameworks — we deliver large-scale steel projects on time and to spec across Kent, London & the South East.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: <Factory className="h-7 w-7" />, title: "Industrial Frameworks", desc: "Full structural steel frames for factories & plants" },
              { icon: <Warehouse className="h-7 w-7" />, title: "Warehouse Mezzanines", desc: "Double your usable floor space with mezzanine flooring" },
              { icon: <Layers className="h-7 w-7" />, title: "Steel Platforms", desc: "Access platforms, walkways & equipment supports" },
              { icon: <HardHat className="h-7 w-7" />, title: "Site Installation", desc: "Onsite welding, crane lifting & turnkey installation" },
            ].map((item, i) => (
              <div key={i} className="bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 rounded-xl p-6 hover:bg-secondary-foreground/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-secondary-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: <CheckCircle />, label: "BS EN 1090 Certified" },
              { icon: <CheckCircle />, label: "CHAS & CSCS Approved" },
              { icon: <CheckCircle />, label: "Full Public Liability £10M" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-3 justify-center md:justify-start text-sm">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-medium">{b.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/commercial-steel-services">
                Explore Commercial Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AEO/SEO — Work We've Done & Areas We Cover */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1 inline" /> Work We've Completed
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Steel Services We've <span className="text-primary">Delivered Across Kent & London</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hundreds of completed projects — here's the work we specialise in and the areas we cover most often.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Steel Beams & RSJ Installation",
                items: ["RSJ beams Kent & London", "Steel beam installation", "Load-bearing wall removal", "Universal beam supply & fit"],
                link: "/steel-beam-installation",
              },
              {
                title: "Loft Conversions & Extensions",
                items: ["Loft conversion steel beams", "House extension steelwork", "Rear & wrap-around extensions", "Steel building extensions Kent"],
                link: "/loft-conversion-steel-beams",
              },
              {
                title: "Commercial & Structural",
                items: ["Structural steel London", "Steel frame buildings Kent", "Mezzanine floor installation", "Industrial steel platforms"],
                link: "/structural-steel-london",
              },
              {
                title: "Onsite Fabrication & Welding",
                items: ["Onsite steel fabrication", "Mobile welding services", "Emergency steel repair", "Architectural metalwork London"],
                link: "/welding-services",
              },
              {
                title: "Specialist Services",
                items: ["Steel staircase installation", "Crane hire services", "3D modelling & CAD design", "Free site surveys"],
                link: "/three-d-modeling-services",
              },
              {
                title: "Local Areas We Serve",
                items: ["Gravesend, Dartford & Medway", "Bromley, Bexley & Greenwich", "Central & South London", "Surrey & Essex borders"],
                link: "/areas-we-serve",
              },
            ].map((cat, i) => (
              <Card key={i} className="hover:shadow-lg transition-all duration-300 hover:border-primary/30 border-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    {cat.title}
                  </CardTitle>
                  <ul className="space-y-2 mt-3">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <ArrowRight className="h-3 w-3 text-accent mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={cat.link} className="text-sm font-semibold text-primary hover:text-accent inline-flex items-center gap-1 mt-4 transition-colors">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* AEO Quick Answers */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-3">Quick Answers</Badge>
              <h3 className="text-2xl md:text-3xl font-bold">Common Questions About Our Work</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { q: "Do you work on residential and commercial projects?", a: "Yes — we handle everything from single RSJ beams in family homes to full industrial frameworks for warehouses and factories." },
                { q: "Which areas do you cover?", a: "We're based in Gravesend, Kent and cover all of Kent, London, Essex, Surrey and the wider South East." },
                { q: "Are your steel works certified?", a: "All structural work is BS EN 1090 and UKCA certified, with CHAS-approved health & safety standards." },
                { q: "How quickly can you start a project?", a: "Most domestic jobs start within 2–3 weeks of survey. Emergency repairs are available 24/7." },
              ].map((faq, i) => (
                <div key={i} className="bg-muted/40 rounded-xl p-5 border border-border/50">
                  <h4 className="font-bold text-base mb-2 text-foreground">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MidPageCTA serviceName="Steel Fabrication" />
      </div>

      {/* About/Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">Proven Excellence</Badge>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Why Choose <span className="text-primary">AK Steel Services</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in steel fabrication, we have built a reputation 
                for excellence across Kent, London, and the South East.
              </p>
              <div className="grid gap-3">
                {[
                  "Advanced 3D modeling and CAD design",
                  "Fully certified welders and specialists",
                  "Modern equipment and facilities",
                  "Comprehensive insurance and guarantees",
                  "Fast response and flexible scheduling",
                  "Competitive, transparent pricing"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:01474550531">Call for Consultation</a>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              <LazyImage 
                src={REAL_PHOTOS.commercialInterior1.src} 
                alt={REAL_PHOTOS.commercialInterior1.alt}
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div className="grid grid-cols-2 gap-4">
                <LazyImage 
                  src={REAL_PHOTOS.residentialExtension1.src} 
                  alt={REAL_PHOTOS.residentialExtension1.alt}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
                <div className="bg-primary rounded-xl p-6 text-primary-foreground flex flex-col justify-center">
                  <div className="text-2xl font-bold mb-2">Free Quotes</div>
                  <div className="text-sm opacity-90">Get your estimate within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      {/* Full Quote Form */}
      <section id="get-quote" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
