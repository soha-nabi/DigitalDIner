import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import menuData from '../data/menuData';

const MenuPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Filter items based on selected category
    if (selectedCategory === 'all') {
      setFilteredItems(menuData.items);
    } else {
      setFilteredItems(menuData.items.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Menu</h1>
      
      {/* Category Tabs */}
      <div className="mb-8 overflow-x-auto whitespace-nowrap py-2">
        <div className="inline-flex rounded-lg bg-gray-100 p-1">
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'all' 
                ? 'bg-orange-500 text-white' 
                : 'text-gray-700 hover:bg-gray-200'
            } transition-colors duration-200`}
            onClick={() => handleCategoryChange('all')}
          >
            All
          </button>
          
          {menuData.categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category.id 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              } transition-colors duration-200`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
      
      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-xl text-gray-600">No items found in this category.</h3>
        </div>
      )}
    </div>
  );
};

export default MenuPage; 