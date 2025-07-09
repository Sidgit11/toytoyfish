
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Quality Toys",
    description: "All our toys meet international safety standards and are thoroughly tested for quality assurance.",
    color: "text-green-600"
  },
  {
    icon: Heart,
    title: "Family-Friendly Prices",
    description: "Premium toys at affordable prices, making quality play accessible to every family.",
    color: "text-red-500"
  },
  {
    icon: Award,
    title: "Educational Focus",
    description: "Every toy is selected for its educational value, promoting learning through play.",
    color: "text-blue-600"
  },
  {
    icon: Clock,
    title: "Screen-Free Fun",
    description: "Alternatives to digital entertainment that encourage physical activity and creativity.",
    color: "text-purple-600"
  }
];

const WhyChooseUs = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            Why Choose <span className="text-blue-600">ToyToyFish</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a toy store - we're partners in your child's development 
            and your family's joy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-white/50"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
