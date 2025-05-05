
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-automation-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to start automating?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Join thousands of businesses that are saving time and money with our automation templates. Get started today and transform how your business operates.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-automation-blue hover:bg-gray-100">
                Browse Templates
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-automation-blue">
                Schedule Demo
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-white bg-opacity-5 rounded-lg p-8 backdrop-filter backdrop-blur-sm border border-white border-opacity-10">
              <div className="text-center">
                <h3 className="text-xl font-medium text-white mb-2">Subscribe to our newsletter</h3>
                <p className="text-gray-300">Get the latest templates and automation tips delivered to your inbox</p>
                <form className="mt-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-automation-purple"
                      required
                    />
                    <Button type="submit" className="bg-automation-purple hover:bg-automation-indigo text-white sm:flex-shrink-0">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-gray-400 text-sm mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
