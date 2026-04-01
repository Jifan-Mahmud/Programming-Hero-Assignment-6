import React from 'react';
import ProductCard from './ProductCard';
import CartList from './CartList';
import productsData from '../data/products.json';

const MainSection = ({ activeTab, setActiveTab, cart, addToCart, removeFromCart, proceedToCheckout }) => {
  
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto min-h-screen">
      <div className="flex justify-center items-center mb-12">
        <div className="bg-gray-100 p-1 rounded-xl inline-flex text-sm font-medium">
          <button 
            onClick={() => setActiveTab('products')}
            className={`px-8 py-3 rounded-lg transition-all ${activeTab === 'products' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveTab('cart')}
            className={`px-8 py-3 rounded-lg transition-all ${activeTab === 'cart' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {activeTab === 'products' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
              isAdded={cart.some(item => item.id === product.id)}
            />
          ))}
        </div>
      ) : (
        <CartList 
          cart={cart} 
          onRemove={removeFromCart} 
          onCheckout={proceedToCheckout}
        />
      )}
    </section>
  );
};

export default MainSection;
