
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/727535f9-15c2-463c-b8da-b34caf61e857.png" 
              alt="ToyToyFish Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in creating joyful childhood memories through 
              educational and screen-free play experiences.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="h-4 w-4 text-red-400" />
              <span>Spreading joy since 2025</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors" onClick={() => window.open('https://wa.me/919521766111?text=I%20want%20to%20know%20more%20about%20STEM%20Kits%20in%20ToyToyFish', '_blank')}>STEM Kits</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors" onClick={() => window.open('https://wa.me/919521766111?text=I%20want%20to%20know%20more%20about%20Board%20Games%20in%20ToyToyFish', '_blank')}>Board Games</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors" onClick={() => window.open('https://wa.me/919521766111?text=I%20want%20to%20know%20more%20about%20Action%20Figures%20in%20ToyToyFish', '_blank')}>Action Figures</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors" onClick={() => window.open('https://wa.me/919521766111?text=I%20want%20to%20know%20more%20about%20Role-Play%20Sets%20in%20ToyToyFish', '_blank')}>Role-Play Sets</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors" onClick={() => window.open('https://wa.me/919521766111?text=I%20want%20to%20know%20more%20about%20Gift%20Cards%20in%20ToyToyFish', '_blank')}>Gift Cards</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-red-400 flex-shrink-0" />
                <span className="text-sm">2nd Floor, Gaur City Mall, Greater Noida</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-sm">+919521766111</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">Connect@toytoyfish.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 ToyToyFish. All rights reserved. | Made with ❤️ for children aged 0-12
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
