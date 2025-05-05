
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const templates = [
  {
    id: 1,
    title: "Customer Onboarding Automation",
    description: "Streamline your customer onboarding process with automated email sequences, document collection, and task assignments.",
    category: "Customer Success",
    popularity: "Best Seller",
    price: "$99",
    image: "bg-gradient-to-br from-blue-600 to-indigo-600"
  },
  {
    id: 2,
    title: "Invoice Processing Workflow",
    description: "Automate invoice approvals, payment tracking, and accounting system synchronization.",
    category: "Finance",
    popularity: "New",
    price: "$129",
    image: "bg-gradient-to-br from-purple-600 to-pink-600"
  },
  {
    id: 3,
    title: "HR Employee Onboarding",
    description: "Automate document distribution, training assignments, and access provisioning for new employees.",
    category: "Human Resources",
    popularity: "Popular",
    price: "$149",
    image: "bg-gradient-to-br from-teal-500 to-emerald-500"
  }
];

const FeaturedTemplates = () => {
  return (
    <section id="templates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-automation-purple uppercase tracking-wide">Templates Library</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Popular Automation Templates
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Pre-built workflows that save you time and eliminate repetitive tasks
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className={`h-40 ${template.image} flex items-center justify-center`}>
                <div className="h-16 w-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{template.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500 mt-1">{template.category}</CardDescription>
                  </div>
                  <Badge className={template.popularity === "Best Seller" ? "bg-automation-purple" : 
                                   template.popularity === "New" ? "bg-automation-teal" : 
                                   "bg-automation-indigo"}>
                    {template.popularity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{template.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-gray-100 pt-4">
                <div className="font-bold text-lg">{template.price}</div>
                <Button size="sm" className="bg-automation-purple hover:bg-automation-indigo">
                  Preview
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-automation-purple hover:bg-automation-indigo">
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemplates;
