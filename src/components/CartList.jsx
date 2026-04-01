
import { Trash2 } from 'lucide-react';

const CartList = ({ cart, onRemove, onCheckout }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50 rounded-2xl border border-gray-100 border-dashed">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Trash2 size={40} className="text-gray-300" />
        </div>
        <h3 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h3>
        <p className="text-gray-500 max-w-md">Looks like you haven't added any premium tools to your workflow yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Selected Products</h2>
          <span className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-sm">
            {cart.length} item{cart.length > 1 ? 's' : ''}
          </span>
        </div>
        
        <div className="divide-y divide-gray-100">
          {cart.map((item) => (
            <div key={item.id} className="p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-16 h-16 bg-white border border-gray-100 rounded-xl p-3 flex-shrink-0">
                  <img src={new URL(`../assets/products/${item.icon}`, import.meta.url).href} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="uppercase text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">{item.period}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto mt-4 sm:mt-0">
                <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                <button 
                  onClick={() => onRemove(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors flex items-center justify-center border border-red-100 sm:border-transparent"
                  title="Remove from cart"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-500 text-sm">Total Selected Products</p>
            <p className="text-3xl font-extrabold text-gray-900">${total}</p>
          </div>
          <button 
            onClick={onCheckout}
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
