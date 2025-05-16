import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-orange-500 shadow-md sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-white">The Digital Diner</h1>
        </Link>

        {/* Search Bar */}
        <form 
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-white rounded-full overflow-hidden px-3 flex-1 mx-6"
        >
          <input
            type="text"
            placeholder="Search for food..."
            className="py-2 px-3 w-full focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            type="submit"
            className="text-orange-500 p-2"
          >
            <FaSearch />
          </button>
        </form>

        {/* Navigation */}
        <div className="flex items-center">
          <Link to="/menu" className="text-white mx-3 hover:text-orange-200">
            Menu
          </Link>
          <Link to="/cart" className="text-white mx-3 hover:text-orange-200 relative">
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-orange-500 rounded-full text-xs font-bold w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
      
      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-4">
        <form 
          onSubmit={handleSearch}
          className="flex items-center bg-white rounded-full overflow-hidden px-3"
        >
          <input
            type="text"
            placeholder="Search for food..."
            className="py-2 px-3 w-full focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            type="submit"
            className="text-orange-500 p-2"
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header; 