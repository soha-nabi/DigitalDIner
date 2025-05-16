import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <div className="bg-white rounded-lg shadow-md p-10 max-w-lg mx-auto">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2037/2037957.png" 
            alt="Empty Cart" 
            className="w-32 h-32 mx-auto mb-6 opacity-50"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link 
            to="/menu" 
            className="bg-orange-500 text-white py-3 px-6 rounded-full inline-block font-medium hover:bg-orange-600 transition duration-300"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
      
      <div className="lg:flex lg:gap-6">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="py-4 flex flex-col sm:flex-row sm:items-center">
                  <div className="sm:flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-20 w-20 object-cover rounded"
                    />
                  </div>
                  
                  <div className="flex-grow sm:mr-4">
                    <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <div className="font-bold text-orange-500 mt-1">₹{item.price.toFixed(2)}</div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 sm:mt-0">
                    <div className="flex items-center border border-gray-300 rounded-full">
                      <button 
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <FaMinus size={12} />
                      </button>
                      
                      <span className="w-8 text-center">{item.quantity}</span>
                      
                      <button 
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                    
                    <button 
                      className="ml-4 text-red-500 hover:text-red-700"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 flex justify-between">
              <button 
                className="text-red-500 hover:text-red-700 text-sm font-medium"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              
              <Link 
                to="/menu" 
                className="text-orange-500 hover:text-orange-700 text-sm font-medium"
              >
                Add More Items
              </Link>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>₹40.00</span>
              </div>
              
              <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-bold text-gray-800">
                <span>Total</span>
                <span>₹{(cartTotal + 40).toFixed(2)}</span>
              </div>
            </div>
            
            <button 
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-full font-medium hover:bg-orange-600 transition duration-300"
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 