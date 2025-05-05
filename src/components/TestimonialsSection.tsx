
const testimonials = [
  {
    content: "These automation templates saved our team countless hours of work. The onboarding template helped us standardize our process and improve customer satisfaction by 30%.",
    author: "Sarah Johnson",
    role: "Customer Success Manager",
    company: "TechCorp Inc.",
    image: "bg-gray-300"
  },
  {
    content: "I was skeptical at first, but these templates are incredibly well-designed. We implemented the invoice processing workflow and reduced our processing time by 70%.",
    author: "Michael Chen",
    role: "Finance Director",
    company: "Global Solutions",
    image: "bg-gray-300"
  },
  {
    content: "The HR onboarding template transformed how we bring new employees into our company. What used to take days now happens automatically with better consistency.",
    author: "Emily Rodriguez",
    role: "HR Director",
    company: "Innovate Partners",
    image: "bg-gray-300"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-automation-purple uppercase tracking-wide">
            Testimonials
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Trusted by businesses worldwide
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            See what our customers are saying about our automation templates
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="h-full flex flex-col">
                <div className="flex-grow">
                  <svg className="h-8 w-8 text-automation-purple mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1.646 13.825 2.228 20.354c3.213-4.112 6.359-6.175 9.918-6.617-1.171 3.332-3.643 5.662-7.106 6.768C9.516 28.136 19.073 32 19.073 32c-4.743-7.963-3.86-13.788-.967-18.169 1.896.147 3.739-.341 5.045-1.235-1.252 3.492-4.129 6.007-7.689 6.796C22.285 22.939 26.678 25.605 30 32c6.19-11.824-.877-20.271-4.614-25.033-.667 3.04-2.439 5.904-5.257 7.727 1.59-3.64 1.024-7.598-1.492-10.694C15.467 7.165 12.448 5.469 9.352 4z" />
                  </svg>
                  <p className="text-gray-700 mb-4">{testimonial.content}</p>
                </div>
                <div className="flex items-center mt-4">
                  <div className={`${testimonial.image} h-12 w-12 rounded-full flex-shrink-0`}></div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
