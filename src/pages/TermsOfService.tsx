import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Mail, Phone } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-glow text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <FileText className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl opacity-90">
                Terms and conditions for our steel fabrication services
              </p>
              <p className="text-sm opacity-80 mt-4">
                Last updated: {new Date().toLocaleDateString('en-GB')}
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              <Card>
                <CardHeader>
                  <CardTitle>1. Agreement to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    By engaging AK Steel Services for fabrication, installation, or related services, 
                    you agree to be bound by these terms and conditions. These terms apply to all quotes, 
                    contracts, and work performed by our company.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Services Provided</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">AK Steel Services provides:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Steel fabrication and manufacturing</li>
                    <li>Structural steelwork installation</li>
                    <li>Welding and repair services</li>
                    <li>Architectural metalwork</li>
                    <li>Design and engineering consultation</li>
                    <li>Emergency repair services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Quotes and Pricing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Quote Validity</h4>
                    <p className="text-muted-foreground">
                      Written quotes are valid for 30 days unless otherwise specified. 
                      Prices may be subject to change due to material cost fluctuations or specification changes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Additional Work</h4>
                    <p className="text-muted-foreground">
                      Any work beyond the original scope requires written approval and may incur additional charges. 
                      We will provide estimates for additional work before proceeding.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Payment Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Payment terms are typically 30 days from invoice date</li>
                    <li>Large projects may require staged payments or deposits</li>
                    <li>Late payment charges may apply after 30 days</li>
                    <li>We reserve the right to suspend work for overdue payments</li>
                    <li>Final payment is due before completion and handover</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Materials and Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We use materials conforming to British Standards unless otherwise specified. 
                    All steel is sourced from certified suppliers with full traceability. 
                    Client-supplied materials are used at client's risk and are not covered by our material warranty.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Delivery and Installation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Timescales</h4>
                    <p className="text-muted-foreground">
                      Delivery dates are estimates and subject to material availability, weather conditions, 
                      and site access. We will notify clients of any significant delays.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Site Conditions</h4>
                    <p className="text-muted-foreground">
                      Client must provide safe access, suitable lifting facilities, and comply with 
                      health and safety requirements. Additional charges may apply for difficult access.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Warranties and Guarantees</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Workmanship Warranty</h4>
                    <p className="text-muted-foreground">
                      We provide a 12-month warranty on workmanship from completion date. 
                      This covers defects in fabrication and installation under normal use conditions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Material Warranty</h4>
                    <p className="text-muted-foreground">
                      Materials are covered by manufacturer warranties. We will assist with warranty claims 
                      but are not liable for material defects beyond replacement or repair.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our liability is limited to the contract value. We are not liable for consequential 
                    or indirect losses, delays, or damages beyond our control. All work is covered by 
                    our professional indemnity and public liability insurance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Health and Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We comply with all relevant health and safety regulations including CDM 2015. 
                    Site-specific risk assessments and method statements are provided for all installation work. 
                    Client must ensure safe working conditions and inform us of any site hazards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Design drawings and calculations remain our intellectual property unless specifically 
                    transferred. Clients may use designs for the specific project but not for replication 
                    or other purposes without written consent.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>11. Termination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Either party may terminate the contract with written notice. Client is liable for 
                    work completed and materials ordered. We reserve the right to terminate for 
                    non-payment or breach of contract terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>12. Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These terms are governed by English law. Any disputes will be resolved through 
                    the courts of England and Wales. We encourage resolution through discussion 
                    before formal proceedings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>13. Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For questions about these terms or your project, contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>info@aksteelservices.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>01474 550531</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      
    </div>
  );
};

export default TermsOfService;