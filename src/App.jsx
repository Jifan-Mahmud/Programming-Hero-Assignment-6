import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import MainSection from './components/MainSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`Added ${product.name} to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const removeFromCart = (productId) => {
    const product = cart.find(item => item.id === productId);
    setCart(cart.filter(item => item.id !== productId));
    if (product) {
       toast.error(`Removed ${product.name} from cart`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const proceedToCheckout = () => {
    if (cart.length === 0) return;
    setCart([]);
    setActiveTab('products');
    toast.info('Checkout Successful! Cart cleared.', {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-purple-200 selection:text-purple-900">
      <Navbar 
        cartCount={cart.length} 
        onCartClick={() => setActiveTab('cart')}
        onHomeClick={() => setActiveTab('products')}
      />
      
      {activeTab === 'products' && (
        <>
          <Banner />
          <Stats />
        </>
      )}

      <MainSection 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        proceedToCheckout={proceedToCheckout}
      />
      
      {activeTab === 'products' && (
        <>
          <Steps />
          <Pricing />
        </>
      )}

      <Footer />
      
      <ToastContainer />
    </div>
  );
}

export default App;

