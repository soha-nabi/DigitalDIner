import { Link } from 'react-router-dom';
import menuData from '../data/menuData';

const HomePage = () => {
  // Select random featured items from each category
  const featuredItems = menuData.categories.map(category => {
    const categoryItems = menuData.items.filter(item => item.category === category.id);
    const randomIndex = Math.floor(Math.random() * categoryItems.length);
    return categoryItems[randomIndex] || null;
  }).filter(item => item !== null);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-orange-100 rounded-xl overflow-hidden shadow-lg mb-10">
        <div className="md:flex">
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Delicious Food, Delivered To Your Door
            </h1>
            <p className="text-gray-600 mb-6">
              Order your favorite meals online and enjoy a contactless delivery experience.
            </p>
            <Link 
              to="/menu" 
              className="bg-orange-500 text-white py-3 px-6 rounded-full inline-block w-max font-medium hover:bg-orange-600 transition duration-300"
            >
              Explore Menu
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format" 
              alt="Delicious Food" 
              className="w-full h-64 object-cover md:h-full"
            />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {menuData.categories.map(category => (
            <Link 
              key={category.id} 
              to={`/menu?category=${category.id}`} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 text-center">
                <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Explore {category.name.toLowerCase()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Items Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map(item => (
            <Link 
              key={item.id} 
              to="/menu" 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-orange-500">₹{item.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-500">{
                    menuData.categories.find(c => c.id === item.category)?.name
                  }</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 