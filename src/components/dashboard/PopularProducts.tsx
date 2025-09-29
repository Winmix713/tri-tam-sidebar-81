
import React from 'react';
import { MoreVertical } from 'lucide-react';

interface PopularProductsProps {
  theme: 'light' | 'dark';
}

const PopularProducts: React.FC<PopularProductsProps> = ({ theme }) => {
  const cardBg = theme === 'dark' 
    ? 'bg-[#282828] border-[#363636]' 
    : 'bg-white border-[#e8e8e8]';
  
  const textColor = theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#1e1e1e]';
  const secondaryText = theme === 'dark' ? 'text-[#a8a8a8]' : 'text-[#666666]';

  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$299', status: 'Active', color: 'bg-green-100 text-green-800' },
    { id: 2, name: 'Smart Watch', price: '$399', status: 'Active', color: 'bg-green-100 text-green-800' },
    { id: 3, name: 'Laptop Stand', price: '$89', status: 'Offline', color: 'bg-red-100 text-red-800' },
    { id: 4, name: 'USB-C Hub', price: '$59', status: 'Active', color: 'bg-green-100 text-green-800' },
    { id: 5, name: 'Bluetooth Speaker', price: '$149', status: 'Active', color: 'bg-green-100 text-green-800' },
  ];

  return (
    <div className={`${cardBg} border rounded-[20px] p-6`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-semibold ${textColor}`}>Popular Products</h3>
        <MoreVertical className={`w-5 h-5 ${secondaryText} cursor-pointer`} />
      </div>
      
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-3 hover:bg-opacity-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${theme === 'dark' ? 'bg-[#363636]' : 'bg-gray-100'} rounded-lg flex items-center justify-center`}>
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded"></div>
              </div>
              <div>
                <div className={`font-medium ${textColor} text-sm`}>{product.name}</div>
                <div className={`text-xs ${secondaryText}`}>{product.price}</div>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              theme === 'dark' 
                ? product.status === 'Active' 
                  ? 'bg-green-900 text-green-300' 
                  : 'bg-red-900 text-red-300'
                : product.color
            }`}>
              {product.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
