import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheck, FaHome } from 'react-icons/fa';

const ConfirmationPage = () => {
  const [orderData, setOrderData] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Retrieve the order data from sessionStorage
    const storedOrderData = sessionStorage.getItem('orderData');
    
    if (storedOrderData) {
      setOrderData(JSON.parse(storedOrderData));
    } else {
      // If no order data exists, redirect to homepage
      navigate('/');
    }
  }, [navigate]);
  
  if (!orderData) {
    return null; // Or a loading indicator
  }
  
  const { customer, total, items, paymentMethod, orderDate } = orderData;
  
  // Generate a random order ID
  const orderId = `OD${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <FaCheck className="text-green-500 text-3xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">
            Thank you for your order. We'll have your delicious food delivered soon.
          </p>
        </div>
        
        <div className="border rounded-lg p-6 mb-6">
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Order #{orderId}</h2>
              <p className="text-gray-500 text-sm">
                {new Date(orderDate).toLocaleDateString()} at {new Date(orderDate).toLocaleTimeString()}
              </p>
            </div>
            <div className="bg-orange-100 text-orange-800 py-1 px-3 rounded-full text-sm font-medium">
              {paymentMethod === 'cash' ? 'Cash on Delivery' : 
               paymentMethod === 'card' ? 'Paid by Card' : 'Paid by UPI'}
            </div>
          </div>
          
          <div className="border-t border-b py-4 my-4">
            <h3 className="font-medium text-gray-800 mb-2">Order Summary</h3>
            <ul className="space-y-2">
              {items.map(item => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.quantity} x {item.name}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold text-gray-800 mt-4 pt-4 border-t">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Delivery Information</h3>
            <p className="text-gray-600">{customer.name}</p>
            <p className="text-gray-600">{customer.phone}</p>
            <p className="text-gray-600">{customer.email}</p>
            <p className="text-gray-600">{customer.address}</p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            A confirmation email has been sent to {customer.email}
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-orange-500 text-white py-3 px-6 rounded-full font-medium hover:bg-orange-600 transition duration-300"
          >
            <FaHome className="mr-2" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage; 