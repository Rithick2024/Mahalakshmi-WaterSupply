import { Phone, Mail, MapPin } from 'lucide-react';
import image from '/shop-out.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-40 w-8 h-8 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="mb-6">
              <a href='https://g.co/kgs/E6FJbcH' target='_blank' className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
                🏪 Shop TOLET Available!
              </a>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Pure Water</span>
              <span className="block text-cyan-300">Supply Solutions</span>
            </h1>
            
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Your trusted partner for clean, safe, and reliable water can supply services in Kattankolathur and surrounding areas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-700 shadow-lg">
                Order Now
              </button>
              <a href='https://g.co/kgs/E6FJbcH' target='_blank' className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-700">
                Learn More
              </a>
            </div>

            {/* Quick contact info */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 99414 41188</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>rithickjilla@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 transform hover:scale-105 transition-transform duration-500">
              <img 
                src={image}
                alt="Water supply service" 
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-cyan-400 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Phone className="h-6 w-6" />
            </div>
            <a href='https://g.co/kgs/E6FJbcH' target='_blank' className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-pulse">
              <MapPin className="h-6 w-6 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* Wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,69.3C672,64,768,64,864,69.3C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V64Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;