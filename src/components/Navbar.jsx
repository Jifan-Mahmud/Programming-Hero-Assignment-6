
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick, onHomeClick }) => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div 
        className="text-2xl font-bold cursor-pointer flex items-center gap-2"
        onClick={onHomeClick}
      >
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm">
          D
        </div>
        <span className="text-purple-700">DigiTools</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-purple-600">Products</a>
        <a href="#" className="hover:text-purple-600">Features</a>
        <a href="#" className="hover:text-purple-600">Pricing</a>
        <a href="#" className="hover:text-purple-600">Testimonials</a>
        <a href="#" className="hover:text-purple-600">FAQ</a>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={onCartClick}
          className="relative text-gray-600 hover:text-purple-600 transition-colors"
        >
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              {cartCount}
            </span>
          )}
        </button>
        
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-gray-600 hover:text-purple-600">Login</button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
