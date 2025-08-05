import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    siteAddress: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };
  return <section className="min-h-screen bg-gradient-subtle flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 w-full">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-alpha-charcoal">Do you know how your sites are performing? </span>
                <span className="text-alpha-charcoal">Stop Flying Blind. </span>
                <span className="text-alpha-purple">Navigate Competitor Pricing with CoPilot</span>
              </h1>
              
              <p className="text-xl text-alpha-text-muted leading-relaxed">
            </p>
            </div>

            {/* Lead Capture Form */}
            <Card className="p-8 shadow-card bg-card border-alpha-gray-light">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-alpha-charcoal mb-2">
                      First Name
                    </label>
                    <Input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleInputChange} placeholder="marco" className="w-full" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-alpha-charcoal mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleInputChange} placeholder="andono sie" className="w-full" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-alpha-charcoal mb-2">
                    Company Name
                  </label>
                  <Input id="company" name="company" type="text" value={formData.company} onChange={handleInputChange} placeholder="Your Company" className="w-full" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-alpha-charcoal mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="marcoas@stanford.edu" className="w-full" required />
                </div>

                <div>
                  <label htmlFor="siteAddress" className="block text-sm font-medium text-alpha-charcoal mb-2">
                    Site Address*
                  </label>
                  <Input id="siteAddress" name="siteAddress" type="text" value={formData.siteAddress} onChange={handleInputChange} placeholder="123 Main St, City, State" className="w-full" required />
                </div>

                <Button type="submit" className="w-full bg-gradient-purple hover:bg-alpha-purple shadow-purple text-lg py-6 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  Generate My Site Report →
                </Button>
              </form>
            </Card>

            {/* Demo CTA Button */}
            <Button variant="outline" size="lg" className="w-full border-alpha-purple text-alpha-purple hover:bg-alpha-purple hover:text-white transition-all duration-300 py-6 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
          </div>

        </div>
      </div>
    </section>;
};
export default HeroSection;