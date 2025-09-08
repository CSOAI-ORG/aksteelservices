import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calculator, Info, CheckCircle } from "lucide-react";

const ServiceCalculator = () => {
  const [formData, setFormData] = useState({
    serviceType: "",
    projectSize: "",
    material: "",
    complexity: "",
    timeframe: "",
    location: "",
    additionalDetails: ""
  });
  
  const [estimate, setEstimate] = useState<{
    basePrice: number;
    totalPrice: number;
    priceRange: string;
    factors: string[];
  } | null>(null);
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });

  const serviceTypes = [
    { value: "steel-fabrication", label: "Steel Fabrication", baseRate: 50 },
    { value: "welding", label: "Welding Services", baseRate: 45 },
    { value: "structural-steel", label: "Structural Steel", baseRate: 65 },
    { value: "steel-beams", label: "Steel Beam Installation", baseRate: 55 },
    { value: "staircases", label: "Steel Staircases", baseRate: 70 },
    { value: "platforms", label: "Industrial Platforms", baseRate: 60 },
    { value: "architectural", label: "Architectural Metalwork", baseRate: 75 },
    { value: "emergency", label: "Emergency Repairs", baseRate: 85 }
  ];

  const projectSizes = [
    { value: "small", label: "Small (1-50 sq ft)", multiplier: 1 },
    { value: "medium", label: "Medium (51-200 sq ft)", multiplier: 1.3 },
    { value: "large", label: "Large (201-500 sq ft)", multiplier: 1.7 },
    { value: "commercial", label: "Commercial (500+ sq ft)", multiplier: 2.2 }
  ];

  const materials = [
    { value: "mild-steel", label: "Mild Steel", multiplier: 1 },
    { value: "stainless-steel", label: "Stainless Steel", multiplier: 1.8 },
    { value: "galvanized", label: "Galvanized Steel", multiplier: 1.4 },
    { value: "aluminum", label: "Aluminum", multiplier: 2.1 }
  ];

  const complexityLevels = [
    { value: "basic", label: "Basic Design", multiplier: 1 },
    { value: "standard", label: "Standard Complexity", multiplier: 1.3 },
    { value: "complex", label: "Complex/Custom", multiplier: 1.8 },
    { value: "precision", label: "High Precision", multiplier: 2.2 }
  ];

  const timeframes = [
    { value: "flexible", label: "Flexible (2-4 weeks)", multiplier: 1 },
    { value: "standard", label: "Standard (1-2 weeks)", multiplier: 1.2 },
    { value: "urgent", label: "Urgent (3-7 days)", multiplier: 1.5 },
    { value: "emergency", label: "Emergency (24-48 hrs)", multiplier: 2.5 }
  ];

  const locations = [
    { value: "kent", label: "Kent", multiplier: 1 },
    { value: "london", label: "London", multiplier: 1.2 },
    { value: "essex", label: "Essex", multiplier: 1.1 },
    { value: "surrey", label: "Surrey", multiplier: 1.15 },
    { value: "other", label: "Other South East", multiplier: 1.3 }
  ];

  const calculateEstimate = () => {
    const service = serviceTypes.find(s => s.value === formData.serviceType);
    const size = projectSizes.find(s => s.value === formData.projectSize);
    const material = materials.find(m => m.value === formData.material);
    const complexity = complexityLevels.find(c => c.value === formData.complexity);
    const timeframe = timeframes.find(t => t.value === formData.timeframe);
    const location = locations.find(l => l.value === formData.location);

    if (!service || !size || !material || !complexity || !timeframe || !location) {
      return;
    }

    const basePrice = service.baseRate * 40; // Base project price
    const totalMultiplier = size.multiplier * material.multiplier * complexity.multiplier * timeframe.multiplier * location.multiplier;
    const totalPrice = Math.round(basePrice * totalMultiplier);
    
    const factors = [];
    if (size.multiplier > 1) factors.push("Project size");
    if (material.multiplier > 1) factors.push("Premium materials");
    if (complexity.multiplier > 1) factors.push("Design complexity");
    if (timeframe.multiplier > 1) factors.push("Urgent timeline");
    if (location.multiplier > 1) factors.push("Location premium");

    const lowRange = Math.round(totalPrice * 0.8);
    const highRange = Math.round(totalPrice * 1.3);

    setEstimate({
      basePrice,
      totalPrice,
      priceRange: `£${lowRange.toLocaleString()} - £${highRange.toLocaleString()}`,
      factors
    });
  };

  const handleSendEstimate = () => {
    if (!estimate) return;
    const subject = encodeURIComponent("New Calculator Estimate - AK Steel Services");
    const body = encodeURIComponent(
      `Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}` +
      `\n\nEstimate Range: ${estimate.priceRange}\nBase Price: £${estimate.basePrice.toLocaleString()}` +
      `\nFactors: ${estimate.factors.join(', ')}` +
      `\n\nSubmitted from: ${window.location.href}`
    );
    window.location.href = `mailto:info@aksteelservices.com?subject=${subject}&body=${body}`;
  };

  const resetCalculator = () => {
    setFormData({
      serviceType: "",
      projectSize: "",
      material: "",
      complexity: "",
      timeframe: "",
      location: "",
      additionalDetails: ""
    });
    setEstimate(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calculator className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl md:text-3xl">Steel Services Cost Calculator</CardTitle>
          </div>
          <p className="text-muted-foreground">
            Get an instant estimate for your steel fabrication project. This tool provides approximate pricing 
            based on your requirements.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Service Type */}
            <div className="space-y-2">
              <Label htmlFor="serviceType">Service Type *</Label>
              <Select 
                value={formData.serviceType} 
                onValueChange={(value) => setFormData({...formData, serviceType: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Project Size */}
            <div className="space-y-2">
              <Label htmlFor="projectSize">Project Size *</Label>
              <Select 
                value={formData.projectSize} 
                onValueChange={(value) => setFormData({...formData, projectSize: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select project size" />
                </SelectTrigger>
                <SelectContent>
                  {projectSizes.map((size) => (
                    <SelectItem key={size.value} value={size.value}>
                      {size.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Material Type */}
            <div className="space-y-2">
              <Label htmlFor="material">Material Type *</Label>
              <Select 
                value={formData.material} 
                onValueChange={(value) => setFormData({...formData, material: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select material" />
                </SelectTrigger>
                <SelectContent>
                  {materials.map((material) => (
                    <SelectItem key={material.value} value={material.value}>
                      {material.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Complexity */}
            <div className="space-y-2">
              <Label htmlFor="complexity">Complexity Level *</Label>
              <Select 
                value={formData.complexity} 
                onValueChange={(value) => setFormData({...formData, complexity: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select complexity" />
                </SelectTrigger>
                <SelectContent>
                  {complexityLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Timeframe */}
            <div className="space-y-2">
              <Label htmlFor="timeframe">Required Timeframe *</Label>
              <Select 
                value={formData.timeframe} 
                onValueChange={(value) => setFormData({...formData, timeframe: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  {timeframes.map((timeframe) => (
                    <SelectItem key={timeframe.value} value={timeframe.value}>
                      {timeframe.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Project Location *</Label>
              <Select 
                value={formData.location} 
                onValueChange={(value) => setFormData({...formData, location: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-2">
            <Label htmlFor="additionalDetails">Additional Project Details (Optional)</Label>
            <Textarea
              value={formData.additionalDetails}
              onChange={(e) => setFormData({...formData, additionalDetails: e.target.value})}
              placeholder="Describe any specific requirements, design details, or special considerations..."
              rows={3}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={calculateEstimate}
              className="flex-1"
              disabled={!formData.serviceType || !formData.projectSize || !formData.material || !formData.complexity || !formData.timeframe || !formData.location}
            >
              <Calculator className="h-4 w-4 mr-2" />
              Calculate Estimate
            </Button>
            <Button variant="outline" onClick={resetCalculator}>
              Reset Calculator
            </Button>
          </div>

          {/* Estimate Results */}
          {estimate && (
            <Card className="bg-accent/10 border-accent">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Your Project Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {estimate.priceRange}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Estimated project cost range
                  </p>
                </div>

                {estimate.factors.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Price factors included:</h4>
                    <div className="flex flex-wrap gap-2">
                      {estimate.factors.map((factor, index) => (
                        <Badge key={index} variant="secondary">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium mb-1">Please note:</p>
                      <ul className="space-y-1 text-xs">
                        <li>• This is an approximate estimate based on typical projects</li>
                        <li>• Final pricing depends on detailed specifications and site conditions</li>
                        <li>• Installation, permits, and additional services may apply</li>
                        <li>• Contact us for a detailed, binding quote</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1" asChild>
                    <a href="tel:07492964836">Call for Detailed Quote</a>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Request Site Visit
                  </Button>
                </div>

                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="calc-name">Your Name</Label>
                    <Input id="calc-name" placeholder="Full name" value={contact.name} onChange={(e) => setContact({...contact, name: e.target.value})} />
                  </div>
                  <div>
                    <Label htmlFor="calc-email">Email</Label>
                    <Input id="calc-email" type="email" placeholder="you@email.com" value={contact.email} onChange={(e) => setContact({...contact, email: e.target.value})} />
                  </div>
                  <div>
                    <Label htmlFor="calc-phone">Phone</Label>
                    <Input id="calc-phone" type="tel" placeholder="01474 550531" value={contact.phone} onChange={(e) => setContact({...contact, phone: e.target.value})} />
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button onClick={handleSendEstimate} disabled={!contact.email && !contact.phone}>
                    Email This Estimate
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCalculator;