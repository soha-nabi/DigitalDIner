import { FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const MenuItem = ({ item }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
          <span className="font-bold text-orange-500">₹{item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mt-1 h-12 overflow-hidden">{item.description}</p>
        <button 
          className="mt-3 bg-orange-500 text-white py-2 px-4 rounded-full flex items-center justify-center w-full hover:bg-orange-600 transition duration-300"
          onClick={() => addToCart(item)}
        >
          <FaPlus className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem; 