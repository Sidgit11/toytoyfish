
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";

const LocationContact = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            Visit Our <span className="text-orange-500">Store</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Gaur City Mall, Noida. Come explore our wonderful 
            collection of toys in person!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      ToyToyFish<br />
                      2nd Floor, Gaur City Mall<br />
                      Greater Noida, UP, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Store Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Sunday: 10:00 AM - 10:00 PM</p>
                      <p className="text-sm text-green-600 font-medium">Open Daily</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Contact</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Phone: +919521766111</p>
                      <p>Email: Connect@toytoyfish.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open('https://g.co/kgs/RNztmt5', '_blank')}
                >
                  <Navigation className="mr-2 h-5 w-5" />
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-8 shadow-xl">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <MapPin className="h-12 w-12 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Easy to Find!
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We're conveniently located on the 2nd floor of Gaur City Mall, Greater Noida. 
                  Plenty of parking available and easily accessible by metro and bus.
                </p>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Nearby Landmarks:</strong>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Next to Baggit store</li>
                    <li>• Near fire exit</li>
                    <li>• Close to Mr DIY Store</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationContact;
