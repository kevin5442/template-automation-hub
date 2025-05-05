
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Basic",
    description: "Perfect for individuals and small teams",
    price: "49",
    billing: "per template",
    features: [
      "Single template download",
      "60-day access to updates",
      "Basic email support",
      "Documentation included",
      "Use on 1 project"
    ],
    cta: "Purchase Template",
    featured: false
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "199",
    billing: "per month",
    features: [
      "Access to all templates",
      "Unlimited updates",
      "Priority email support",
      "Video implementation guides",
      "Use on unlimited projects",
      "Monthly new templates"
    ],
    cta: "Start 14-Day Trial",
    featured: true
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "499",
    billing: "per month",
    features: [
      "All Professional features",
      "Custom template requests",
      "Dedicated support manager",
      "Implementation assistance",
      "Team training sessions",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    featured: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-automation-purple uppercase tracking-wide">
            Pricing
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Choose your plan
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Simple, transparent pricing that scales with your needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`flex flex-col h-full ${
                plan.featured 
                  ? "border-automation-purple shadow-xl shadow-automation-purple/10 relative z-10 scale-105" 
                  : "border-gray-200"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 translate-y-[-50%] left-0 right-0 mx-auto w-fit">
                  <div className="bg-automation-purple text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-500 mt-2">{plan.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-5xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="ml-1 text-xl font-medium text-gray-500">{plan.billing}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-automation-purple flex-shrink-0 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full py-6 ${
                    plan.featured 
                      ? "bg-automation-purple hover:bg-automation-indigo"
                      : "bg-white border-2 border-automation-purple text-automation-purple hover:bg-automation-purple hover:text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Need a custom solution? <a href="#" className="text-automation-purple font-medium">Contact us</a> to discuss your specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
