import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 99414 41188", "+91 96770 80928", "+91 63824 86876"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["rithickjilla@gmail.com"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["No.20A, 6th Cross Street", "Railnagar, Kattankolathur"],
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Clock,
      title: "Service Hours",
      details: ["Monday - Sunday", "6:00 AM - 11:00 PM"],
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to place an order or have questions? Contact us today for reliable water supply services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-700"
            >
              <div className={`w-16 h-16 ${info.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                <info.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-center">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-700 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Established local business with trusted reputation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Quality water from certified sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Prompt delivery and reliable service</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Competitive pricing with no hidden charges</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Multiple contact options for your convenience</span>
                </li>
              </ul>
            </div>

            <div className=" hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-700 bg-gradient-to-r from-green-500 to-blue-500 p-8 rounded-2xl text-white text-center flex-1">
              <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
              <p className="mb-6">Call us now for immediate service and delivery</p>
              <a
                href="tel:+919941441188"
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-700"
              >
                Call Now: +91 99414 41188
              </a>
            </div>
          </div>

      </div>
    </section>
  );
};

export default Contact;