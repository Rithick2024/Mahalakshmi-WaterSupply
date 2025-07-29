import { CheckCircle } from 'lucide-react';
import shop1 from '/shop-in.jpg';
import shop2 from '/shop-close.jpg';

const Products = () => {
  const products = [
    {
      name: "20L Water Can",
      image: "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Pure drinking water", "BIS certified", "Sealed & sanitized", "Home delivery"],
      price: "Contact for pricing"
    },
    {
      name: "10L Water Can",
      image: "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Compact size", "Perfect for office", "Quality assured", "Regular supply"],
      price: "Contact for pricing"
    },
    {
      name: "Bulk Supply",
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["For events & functions", "Wholesale rates", "Timely delivery", "Custom quantities"],
      price: "Special rates available"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Water Products</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a range of water can sizes to meet your specific needs, from personal use to bulk requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-700"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>

                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-blue-600">{product.price}</span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-700">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shop to Let Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">🏪 Shop Space Available for Rent</h3>
          <p className="text-xl mb-6">Prime location in Railnagar, Kattankolathur - Perfect for retail business</p>
          <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-700">
            Inquire Now
          </button>
        </div>

        {/* Two Images Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src={shop1}
            alt="Promo 1"
            className="w-full h-72 object-cover rounded-2xl shadow-lg"
          />
          <img
            src={shop2}
            alt="Promo 2"
            className="w-full h-72 object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Products;