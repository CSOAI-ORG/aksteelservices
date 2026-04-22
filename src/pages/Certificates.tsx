import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerPageHero from "@/components/InnerPageHero";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCallBar from "@/components/StickyCallBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  CheckCircle,
  Award,
  Calendar,
  FileCheck,
  Building2,
  Phone,
} from "lucide-react";
import {
  certificates,
  accreditationLogos,
  certificationHighlights,
  certificationStats,
} from "@/lib/certificates";
import { Link } from "react-router-dom";

const Certificates = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <SEOHead
        title="Certifications & Accreditations | AK Steel Services"
        description="View AK Steel Services accreditations including BS EN 1090 Factory Production Control and UKCA marking."
        keywords="AK Steel certificates, BS EN 1090, UKCA, factory production control, steel fabrication accreditation"
      />
      <Header />
      <Breadcrumbs />
      <InnerPageHero
        badge="Fully Accredited & Independently Audited"
        title={
          <>
            Certified <span className="text-accent">Steel Fabrication</span> You Can Trust
          </>
        }
        description="BS EN 1090 + UKCA certified — the legal standard for structural steel in the UK. View our current certificates below."
        variant="gradient"
      />

      {/* Stats strip */}
      <section className="py-10 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certificationStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-wide opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation logos */}
      <section className="py-12 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-6 font-semibold">
            Officially Recognised Accreditations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {accreditationLogos.map((logo) => (
              <div
                key={logo.name}
                className="bg-background rounded-lg p-4 shadow-sm border border-border/50"
              >
                <img src={logo.image} alt={logo.alt} className="h-14 md:h-20 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate cards */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="secondary" className="mb-4">
              <FileCheck className="h-3.5 w-3.5 mr-1.5" />
              Verified Documents
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Current <span className="text-primary">Certificates</span>
            </h2>
            <p className="text-muted-foreground">
              View our current accreditations below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certificates.map((cert) => (
              <Card
                key={cert.title}
                className="overflow-hidden hover:shadow-xl transition-shadow border-2 hover:border-primary/30"
              >
                <div className="block bg-muted relative">
                  <img
                    src={cert.previewImage}
                    alt={`${cert.title} preview`}
                    className="w-full h-auto object-contain max-h-[420px]"
                  />
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Valid until {cert.expiresOn.split(" ").slice(-1)[0]}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">{cert.standard}</Badge>
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.scope}</p>

                  <div className="grid grid-cols-2 gap-3 text-sm bg-muted/40 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-xs uppercase text-muted-foreground">Reference</div>
                        <div>{cert.reference}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-xs uppercase text-muted-foreground">Issuer</div>
                        <div>{cert.issuer}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-xs uppercase text-muted-foreground">Issued</div>
                        <div>{cert.issuedOn}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-xs uppercase text-muted-foreground">Expires</div>
                        <div>{cert.expiresOn}</div>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Highlights — what this means for you */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">
              <Award className="h-3.5 w-3.5 mr-1.5" />
              Why It Matters
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What Our <span className="text-primary">Accreditations</span> Mean For You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choosing a certified fabricator protects your project, your engineer's sign-off, and your
              insurance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {certificationHighlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="bg-primary/10 rounded-lg p-2.5 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Certified Steel For Your Project?
          </h2>
          <p className="opacity-90 mb-6 max-w-xl mx-auto">
            Get a free quote from a fully accredited BS EN 1090 + UKCA fabricator. Building control
            ready, insurance approved.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <a href="tel:+447777034269">
                <Phone className="h-4 w-4 mr-2" /> Call 07777 034269
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <StickyCallBar />
    </div>
  );
};

export default Certificates;
