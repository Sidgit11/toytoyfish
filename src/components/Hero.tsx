
import { Button } from "@/components/ui/button";
import { MapPin, Star, Gift, Clock } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-orange-50 to-green-50 min-h-screen flex items-center overflow-hidden">
      {/* Floating toy elements for decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-red-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-yellow-400 rotate-45 animate-pulse opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-10 h-10 bg-green-400 rounded-full animate-bounce delay-300 opacity-60"></div>
        <div className="absolute bottom-20 right-32 w-7 h-7 bg-purple-400 rotate-12 animate-pulse delay-500 opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex justify-center lg:justify-start">
                <img 
                  src="/lovable-uploads/727535f9-15c2-463c-b8da-b34caf61e857.png" 
                  alt="ToyToyFish Logo" 
                  className="h-20 lg:h-24 w-auto"
                />
              </div>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Premier Toy Store in Gaur City Mall
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                Discover curated educational toys, STEM kits, and screen-free activities 
                for children aged <span className="font-bold text-blue-600">0-12</span>. 
                Replace screen time with creative play!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://wa.me/919521766111?text=Hi%20can%20you%20share%20more%20about%20ToyToyFish', '_blank')}
              >
                <Gift className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
                onClick={() => window.open('https://g.co/kgs/RNztmt5', '_blank')}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Visit Store
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4 text-red-500" />
                <span>Gaur City Mall, Noida</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-4 w-4 text-green-500" />
                <span>Open Daily</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-6 shadow-lg transform -rotate-6 hover:-rotate-3 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-100 rounded-xl p-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-400 rounded-full"></div>
                  </div>
                  <div className="bg-yellow-100 rounded-xl p-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-yellow-400 rotate-45"></div>
                  </div>
                  <div className="bg-green-100 rounded-xl p-4 flex items-center justify-center">
                    <div className="w-10 h-4 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-purple-100 rounded-xl p-4 flex items-center justify-center">
                    <div className="w-6 h-10 bg-purple-400 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
