// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaUtensils, FaBolt, FaShoppingBag, FaFilm, FaExchangeAlt } from 'react-icons/fa';

// const categories = [
//   { name: 'Food', icon: <FaUtensils className="text-red-500" /> },
//   { name: 'Bills', icon: <FaBolt className="text-yellow-500" /> },
//   { name: 'Shopping', icon: <FaShoppingBag className="text-blue-500" /> },
//   { name: 'Entertainment', icon: <FaFilm className="text-purple-500" /> },
//   { name: 'Transfer', icon: <FaExchangeAlt className="text-green-500" /> },
// ];

// const TransactionCategories = () => {
//   return (
//     <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Transaction Categories</h2>
      
//       <ul className="space-y-3">
//         {categories.map((category, index) => (
//           <motion.li
//             key={index}
//             className="flex items-center gap-3 p-3 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {category.icon}
//             <span className="text-gray-700 font-medium">{category.name}</span>
//           </motion.li>
//         ))}
//       </ul>

//       <p className="mt-6 text-center text-gray-600">Select a category to view transactions.</p>
//     </div>
//   );
// };

// export default TransactionCategories;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaBolt, FaShoppingBag, FaFilm, FaExchangeAlt } from 'react-icons/fa';

// Example transactions data
const transactions = [
  { id: 1, type: 'Sent', category: 'Food', amount: 150, date: '2025-09-22' },
  { id: 2, type: 'Received', category: 'Bills', amount: 200, date: '2025-09-21' },
  { id: 3, type: 'Sent', category: 'Shopping', amount: 500, date: '2025-09-20' },
  { id: 4, type: 'Added', category: 'Transfer', amount: 1000, date: '2025-09-19' },
  { id: 5, type: 'Sent', category: 'Entertainment', amount: 300, date: '2025-09-18' },
];

const categories = [
  { name: 'Food', icon: <FaUtensils className="text-red-500" /> },
  { name: 'Bills', icon: <FaBolt className="text-yellow-500" /> },
  { name: 'Shopping', icon: <FaShoppingBag className="text-blue-500" /> },
  { name: 'Entertainment', icon: <FaFilm className="text-purple-500" /> },
  { name: 'Transfer', icon: <FaExchangeAlt className="text-green-500" /> },
];

const TransactionCategories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  useEffect(() => {
    if (activeCategory) {
      setFilteredTransactions(transactions.filter(t => t.category === activeCategory));
    } else {
      setFilteredTransactions(transactions);
    }
  }, [activeCategory]);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Transaction Categories</h2>

      {/* Category Buttons */}
      <ul className="grid grid-cols-2 gap-4 mb-6">
        {categories.map((category, index) => {
          const count = transactions.filter(t => t.category === category.name).length;
          const isActive = activeCategory === category.name;
          return (
            <motion.li
              key={index}
              className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-all ${
                isActive ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(isActive ? null : category.name)}
            >
              <div className="flex items-center gap-3">
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </div>
              <span className="text-sm font-semibold">{count}</span>
            </motion.li>
          );
        })}
      </ul>

      {/* Transactions List */}
      <div>
        {filteredTransactions.length === 0 ? (
          <p className="text-center text-gray-500">No transactions in this category.</p>
        ) : (
          <ul className="space-y-3">
            {filteredTransactions.map((tx) => (
              <motion.li
                key={tx.id}
                className="flex justify-between p-3 rounded-md bg-gray-50 border-l-4 border-blue-500 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <p className="font-semibold">{tx.category}</p>
                  <p className="text-sm text-gray-500">{tx.date}</p>
                </div>
                <div className={`font-medium ${tx.type === 'Sent' ? 'text-red-600' : tx.type === 'Received' ? 'text-green-600' : 'text-blue-600'}`}>
                  {tx.type === 'Sent' ? `- ₹${tx.amount}` : tx.type === 'Received' ? `+ ₹${tx.amount}` : `₹${tx.amount}`}
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TransactionCategories;
