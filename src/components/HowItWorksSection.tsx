
const steps = [
  {
    number: "01",
    title: "Browse Templates",
    description: "Explore our library of automation templates categorized by department, function, and platform.",
    image: "bg-gradient-to-br from-automation-purple to-automation-indigo"
  },
  {
    number: "02",
    title: "Purchase & Download",
    description: "Select the template that fits your needs and complete your purchase for immediate access.",
    image: "bg-gradient-to-br from-automation-teal to-cyan-500"
  },
  {
    number: "03",
    title: "Customize & Deploy",
    description: "Follow our step-by-step guide to customize the template for your specific requirements.",
    image: "bg-gradient-to-br from-violet-600 to-automation-purple"
  },
  {
    number: "04",
    title: "Automate & Scale",
    description: "Deploy your automation, save time, and scale your business processes efficiently.",
    image: "bg-gradient-to-br from-blue-600 to-automation-teal"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-automation-purple uppercase tracking-wide">
            Simple Process
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            How It Works
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Get started with automation templates in just four simple steps
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`${step.image} h-24 w-24 rounded-full flex items-center justify-center mb-6`}>
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-base text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
