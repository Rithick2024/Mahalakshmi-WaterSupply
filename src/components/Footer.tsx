import { Droplets, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-full">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Mahalakshmi</h3>
                <p className="text-blue-400">Can Water Supply</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your trusted partner for pure, safe, and reliable water can supply services. 
              Serving Kattankolathur and surrounding areas with dedication and quality.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">No.20A, 6th Cross Street, Railnagar, Kattankolathur</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">rithickjilla@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-700">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-700">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-blue-400 transition-colors duration-700">Products</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-700">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Numbers</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+919941441188" className="text-gray-300 hover:text-blue-400 transition-colors duration-700">
                  +91 99414 41188
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+919677080928" className="text-gray-300 hover:text-blue-400 transition-colors duration-700">
                  +91 96770 80928
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+916382486876" className="text-gray-300 hover:text-blue-400 transition-colors duration-700">
                  +91 63824 86876
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Mahalakshmi Can Water Supply. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Service Hours: Monday - Sunday, 6:00 AM - 11:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;