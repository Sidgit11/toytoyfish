
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Gamepad2, Users, Car, BookOpen, Brain } from "lucide-react";

const categories = [
  {
    icon: Brain,
    title: "STEM Kits",
    description: "Educational science & technology kits that make learning fun",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Gamepad2,
    title: "Board Games",
    description: "Classic and modern games for family bonding time",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Users,
    title: "Action Figures",
    description: "Superhero and character figures for imaginative play",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50"
  },
  {
    icon: Zap,
    title: "Role-Play Sets",
    description: "Costumes and props to spark creativity and storytelling",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Car,
    title: "RC Cars",
    description: "Remote control vehicles for outdoor and indoor fun",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: BookOpen,
    title: "Activity Books",
    description: "Engaging books with puzzles, coloring, and learning activities",
    color: "from-teal-500 to-blue-500",
    bgColor: "bg-teal-50"
  }
];

const ProductCategories = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-800">Our Toy</span>
            <span className="text-orange-500"> Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully curated toys designed to educate, entertain, and inspire creativity 
            while providing screen-free alternatives for modern families.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <CardContent className={`p-8 ${category.bgColor} relative`}>
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {category.description}
                  </p>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
