import { useState } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-full">
              <Droplets className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Mahalakshmi</h1>
              <p className="text-sm text-blue-600">Can Water Supply</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-700">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-700">About</a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors duration-700">Products</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-700">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-700">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-700">About</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors duration-700">Products</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-700">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;