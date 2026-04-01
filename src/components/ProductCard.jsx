import { Check } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, isAdded }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
      
      {/* Decorative gradient blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center p-2 mb-2">
          <img src={new URL(`../assets/products/${product.icon}`, import.meta.url).href} alt={product.name} className="w-full h-full object-contain" />
        </div>
        {product.tag && (
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
            product.tagType === 'best-seller' ? 'bg-yellow-100 text-yellow-700' :
            product.tagType === 'new' ? 'bg-purple-100 text-purple-700' :
            product.tagType === 'hot' ? 'bg-red-100 text-red-700' :
            'bg-blue-100 text-blue-700'
          }`}>
            {product.tag}
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-6 flex-grow">{product.description}</p>
      
      <div className="mb-6 flex items-end gap-1">
        <span className="text-3xl font-bold text-gray-900">${product.price}</span>
        <span className="text-gray-500 font-medium mb-1">/{product.period}</span>
      </div>
      
      <div className="space-y-3 mb-6">
        {product.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <div className="min-w-4 w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
              <Check size={10} strokeWidth={3} />
            </div>
            {feature}
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => onAddToCart(product)}
        disabled={isAdded}
        className={`w-full py-3 rounded-xl font-semibold transition-all shadow-md ${
          isAdded 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none' 
            : 'bg-purple-600 hover:bg-purple-700 text-white'
        }`}
      >
        {isAdded ? 'Added to Cart' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;
