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
import { Download, ExternalLink, ShieldCheck, CheckCircle } from "lucide-react";
import { certificates, accreditationLogos, certificationHighlights } from "@/lib/certificates";

const Certificates = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <SEOHead
        title="Certifications & Accreditations | AK Steel Services"
        description="View AK Steel Services accreditations including BS EN 1090 Factory Production Control and UKCA. Download our latest certificates."
        keywords="AK Steel certificates, BS EN 1090, UKCA, factory production control, steel fabrication accreditation"
      />
      <Header />
      <Breadcrumbs />
      <InnerPageHero
        badge="Qualified & Certified"
        title={<>Our <span className="text-accent">Certifications</span></>}
        description="We're a fully accredited steel fabricator. Browse and download our current certifications below."
        variant="gradient"
      />

      {/* Accreditation logos */}
      <section className="py-12 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {accreditationLogos.map((logo) => (
              <a
                key={logo.name}
                href={certificates[0]?.pdfUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background rounded-lg p-4 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                aria-label={`Open ${logo.name} certificate`}
              >
                <img src={logo.image} alt={logo.alt} className="h-14 md:h-20 w-auto" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate cards */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="secondary" className="mb-4">Verified Documents</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Current <span className="text-primary">Certificates</span>
            </h2>
            <p className="text-muted-foreground">
              Click any certificate to view or download the full PDF.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certificates.map((cert) => (
              <Card key={cert.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="block bg-muted">
                  <img
                    src={cert.previewImage}
                    alt={`${cert.title} preview`}
                    className="w-full h-auto object-contain max-h-[420px]"
                  />
                </a>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">{cert.standard}</Badge>
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{cert.scope}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><span className="font-semibold">Reference:</span> {cert.reference}</div>
                    <div><span className="font-semibold">Issuer:</span> {cert.issuer}</div>
                    <div><span className="font-semibold">Issued:</span> {cert.issuedOn}</div>
                    <div><span className="font-semibold">Expires:</span> {cert.expiresOn}</div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Button asChild variant="hero" size="sm">
                      <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-2" /> Download PDF
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Verify
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Our <span className="text-primary">Accreditations</span> Matter
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certificationHighlights.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border/50">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
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