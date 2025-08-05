import { Button } from "@/components/ui/button";
import { MapPin, BarChart3, Settings, Calendar } from "lucide-react";

const HowItWorksSection = () => {

  return (
    <section className="py-20 bg-alpha-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-16">
            How AlphaGrid Works
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Steps */}
            <div className="order-1 lg:order-1 space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-purple rounded-lg flex items-center justify-center shadow-purple">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Enter Your Site Address
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Start by providing a location—we'll scan the surrounding charging landscape automatically.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-purple rounded-lg flex items-center justify-center shadow-purple">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Instant Competitive Insights
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Benchmark against nearby networks. Understand where you're overperforming—or leaving money on the table.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-purple rounded-lg flex items-center justify-center shadow-purple">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Personalized Strategy Suggestions
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We build tailored pricing strategies that adapt to your site's performance. Set guardrails and constraints with ease.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-purple rounded-lg flex items-center justify-center shadow-purple">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Book a Demo to Learn More
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    See how AlphaGrid can work across all your sites. Let's walk through the data and align with your goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="order-2 lg:order-2">
              <img 
                src="/placeholder.svg" 
                alt="AlphaGrid Analytics Dashboard" 
                className="bg-gradient-to-br from-alpha-purple/20 to-blue-500/20 rounded-2xl p-8 border border-alpha-purple/30 w-full h-auto"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-gradient-purple hover:bg-alpha-purple shadow-purple text-lg px-12 py-6 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;