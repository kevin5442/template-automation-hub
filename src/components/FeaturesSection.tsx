
import { CheckCircle } from "lucide-react";

const features = [
  {
    name: "Ready-to-deploy templates",
    description: "Our templates are fully tested and ready to deploy in your existing systems with minimal configuration."
  },
  {
    name: "Integration with popular tools",
    description: "Works seamlessly with tools you already use like Zapier, Make, Airtable, Notion, and more."
  },
  {
    name: "Customization friendly",
    description: "All templates can be easily customized to fit your specific business requirements and processes."
  },
  {
    name: "Regular updates",
    description: "All templates receive regular updates to ensure compatibility with the latest platform changes."
  },
  {
    name: "Community-reviewed",
    description: "Our templates are built by experts and reviewed by our community of automation professionals."
  },
  {
    name: "Implementation support",
    description: "Get expert help implementing and customizing your templates whenever you need it."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-automation-purple font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to automate faster
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our automation templates are designed to help you implement proven solutions quickly and efficiently.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-automation-purple" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
