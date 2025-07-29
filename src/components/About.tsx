import { Shield, Clock, Users, Award } from 'lucide-react';
import image from '/can-water.jpg';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Pure & Safe",
      description: "100% pure and safe drinking water, quality tested and certified"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Fast and reliable delivery service to your doorstep"
    },
    {
      icon: Users,
      title: "Trusted Service",
      description: "Serving the community with dedication and trust for years"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Premium quality water cans with proper sanitization"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Mahalakshmi Can Water Supply</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Kattankolathur, we are your trusted water supply partner, 
            committed to providing pure, safe, and reliable water can services to homes and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={image}
              alt="Water delivery service" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Excellence</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Mahalakshmi Can Water Supply, we understand the importance of clean, safe drinking water 
              for your family and business. Our commitment goes beyond just delivery – we ensure every 
              drop meets the highest quality standards.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Quality tested water from trusted sources</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Properly sanitized and sealed containers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Reliable delivery schedule</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Competitive pricing and excellent service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-700"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">{feature.title}</h4>
              <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;