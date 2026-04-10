// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Wallet = ({ user, balance, transactions }) => {
//   const navigate = useNavigate();

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//     }).format(amount);
//   };

//   return (
//     <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//       {/* User Greeting */}
//       <div className="flex items-center mb-6">
//         <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
//         <h2 className="text-2xl font-semibold">
//           Welcome, <span className="text-blue-600">{user?.email}</span>
//         </h2>
//       </div>

//       {/* Wallet Balance */}
//       <div className="mb-6">
//         <h3 className="text-xl font-medium mb-1">Wallet Balance</h3>
//         <p className="text-3xl font-bold text-green-600">{formatCurrency(balance)}</p>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex gap-4 mb-6">
//         <button
//           onClick={() => navigate('/add')}
//           className="flex-1 bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition"
//         >
//           Add Money
//         </button>
//         <button
//           onClick={() => navigate('/send')}
//           className="flex-1 bg-green-600 text-white py-2 rounded-lg shadow hover:bg-green-700 transition"
//         >
//           Send Money
//         </button>
//       </div>

//       {/* Recent Transactions */}
//       <div>
//         <h3 className="text-lg font-medium mb-2">Recent Transactions</h3>
//         {transactions.length === 0 ? (
//           <div className="text-center text-gray-500">
//             No transactions yet. <br />
//             <button
//               onClick={() => navigate('/send')}
//               className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//             >
//               Start by sending money
//             </button>
//           </div>
//         ) : (
//           <ul className="space-y-4">
//             {transactions.map((txn, index) => (
//               <li key={index} className="border-b pb-4 flex justify-between items-center">
//                 <div>
//                   <strong>{txn.type}</strong>: {formatCurrency(txn.amount)}
//                   <br />
//                   <small className="text-gray-500">{txn.timestamp}</small>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <span className={`text-xs ${txn.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}>
//                     {txn.type === 'Credit' ? 'Received' : 'Sent'}
//                   </span>
//                   <i className={`fas fa-${txn.type === 'Credit' ? 'arrow-down' : 'arrow-up'} text-xl ${txn.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`} />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Wallet;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Wallet = ({ user, balance, transactions }) => {
//   const navigate = useNavigate();
//   const [filter, setFilter] = useState('All');

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//     }).format(amount);
//   };

//   const filteredTransactions = transactions.filter(txn => {
//     if (filter === 'All') return true;
//     return txn.type === filter;
//   });

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Completed': return 'text-green-600';
//       case 'Pending': return 'text-yellow-500';
//       case 'Failed': return 'text-red-600';
//       default: return 'text-gray-500';
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
//       {/* User Profile */}
//       <div className="flex items-center mb-6">
//         <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold text-blue-700 mr-4">
//           {user?.email?.charAt(0).toUpperCase()}
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold">
//             Hello, <span className="text-blue-600">{user?.email}</span>
//           </h2>
//           <p className="text-gray-500 text-sm">Welcome back to your wallet!</p>
//         </div>
//       </div>

//       {/* Wallet Balance */}
//       <div className="mb-6 p-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl text-white shadow-md">
//         <h3 className="text-lg font-medium mb-2">Wallet Balance</h3>
//         <p className="text-3xl font-bold">{formatCurrency(balance)}</p>
//         <small>Available Balance</small>
//       </div>

//       {/* Quick Actions */}
//       <div className="flex gap-4 mb-6">
//         <button
//           onClick={() => navigate('/add')}
//           className="flex-1 bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition"
//         >
//           Add Money
//         </button>
//         <button
//           onClick={() => navigate('/send')}
//           className="flex-1 bg-green-600 text-white py-2 rounded-lg shadow hover:bg-green-700 transition"
//         >
//           Send Money
//         </button>
//         <button
//           onClick={() => navigate('/bill-payments')}
//           className="flex-1 bg-yellow-500 text-white py-2 rounded-lg shadow hover:bg-yellow-600 transition"
//         >
//           Pay Bills
//         </button>


//       </div>

//       {/* Transaction Filters */}
//       <div className="flex gap-3 mb-4">
//         {['All', 'Credit', 'Debit'].map((type) => (
//           <button
//             key={type}
//             onClick={() => setFilter(type)}
//             className={`px-3 py-1 rounded-full border ${filter === type ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} transition`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       {/* Recent Transactions */}
//       <div>
//         <h3 className="text-lg font-medium mb-2">Recent Transactions</h3>
//         {filteredTransactions.length === 0 ? (
//           <div className="text-center text-gray-500">
//             No transactions found.
//             <br />
//             <button
//               onClick={() => navigate('/send')}
//               className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//             >
//               Start by sending money
//             </button>
//           </div>
//         ) : (
//           <ul className="space-y-4">
//             {filteredTransactions.map((txn, index) => (
//               <li key={index} className="border-b pb-4 flex justify-between items-center">
//                 <div>
//                   <strong>{txn.type}</strong>: {formatCurrency(txn.amount)}
//                   <br />
//                   <small className="text-gray-500">{txn.timestamp}</small>
//                 </div>
//                 <div className="flex flex-col items-end">
//                   <span className={`text-xs ${txn.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}>
//                     {txn.type === 'Credit' ? 'Received' : 'Sent'}
//                   </span>
//                   <span className={`text-xs mt-1 ${getStatusColor(txn.status)}`}>
//                     {txn.status}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Security & Offers */}
//       <div className="mt-6 flex flex-col gap-3">
//         <button
//           onClick={() => alert('Wallet locked!')}
//           className="bg-red-600 text-white py-2 rounded shadow hover:bg-red-700 transition"
//         >
//           Lock Wallet
//         </button>
//         <div className="p-4 bg-gray-100 rounded">
//           <h4 className="font-medium mb-2">Offers & Promotions</h4>
//           <p className="text-gray-600 text-sm">No new offers right now. Check back later!</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Wallet;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Wallet = ({ user }) => {
//   const navigate = useNavigate();
//   const [balance, setBalance] = useState(0);
//   const [transactions, setTransactions] = useState([]);
//   const [filter, setFilter] = useState('All');

//   // useEffect(() => {
//   //   const fetchWallet = async () => {
//   //     try {
//   //       const res = await axios.get(`http://localhost:8088/api/wallet/${user.id}`);
//   //       setBalance(res.data.balance);
//   //       setTransactions(res.data.transactions.reverse());
//   //     } catch (err) {
//   //       console.error('Error fetching wallet:', err);
//   //     }
//   //   };
//   //   fetchWallet();
//   // }, [user.id]);
//   useEffect(() => {
//   const fetchWallet = async () => {
//     try {
//       const res = await fetch(`http://localhost:8088/api/wallet/${user.id}`);
//       const data = await res.json();
//       if (res.ok) {
//         setBalance(data.balance);
//         setTransactions(data.transactions);
//       }
//     } catch (err) {
//       console.log("Error fetching wallet", err);
//     }
//   };

//   fetchWallet();
// }, [user.id]);


//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//     }).format(amount);
//   };

//   const filteredTransactions = transactions.filter(txn => {
//     if (filter === 'All') return true;
//     return txn.type === filter;
//   });

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Completed': return 'text-green-600';
//       case 'Pending': return 'text-yellow-500';
//       case 'Failed': return 'text-red-600';
//       default: return 'text-gray-500';
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
//       {/* User Profile */}
//       <div className="flex items-center mb-6">
//         <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold text-blue-700 mr-4">
//           {user?.email?.charAt(0).toUpperCase()}
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold">
//             Hello, <span className="text-blue-600">{user?.email}</span>
//           </h2>
//           <p className="text-gray-500 text-sm">Welcome back to your wallet!</p>
//         </div>
//       </div>

//       {/* Wallet Balance */}
//       <div className="mb-6 p-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl text-white shadow-md">
//         <h3 className="text-lg font-medium mb-2">Wallet Balance</h3>
//         <p className="text-3xl font-bold">{formatCurrency(balance)}</p>
//         <small>Available Balance</small>
//       </div>

//       {/* Quick Actions */}
//       <div className="flex gap-4 mb-6">
//         <button
//           onClick={() => navigate('/add')}
//           className="flex-1 bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition"
//         >
//           Add Money
//         </button>
//         <button
//           onClick={() => navigate('/send')}
//           className="flex-1 bg-green-600 text-white py-2 rounded-lg shadow hover:bg-green-700 transition"
//         >
//           Send Money
//         </button>
//         <button
//           onClick={() => navigate('/bill-payments')}
//           className="flex-1 bg-yellow-500 text-white py-2 rounded-lg shadow hover:bg-yellow-600 transition"
//         >
//           Pay Bills
//         </button>
//       </div>

//       {/* Transaction Filters */}
//       <div className="flex gap-3 mb-4">
//         {['All', 'Credit', 'Debit'].map((type) => (
//           <button
//             key={type}
//             onClick={() => setFilter(type)}
//             className={`px-3 py-1 rounded-full border ${filter === type ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} transition`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       {/* Recent Transactions */}
//       <div>
//         <h3 className="text-lg font-medium mb-2">Recent Transactions</h3>
//         {filteredTransactions.length === 0 ? (
//           <div className="text-center text-gray-500">
//             No transactions found.
//             <br />
//             <button
//               onClick={() => navigate('/send')}
//               className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//             >
//               Start by sending money
//             </button>
//           </div>
//         ) : (
//           <ul className="space-y-4">
//             {filteredTransactions.map((txn, index) => (
//               <li key={index} className="border-b pb-4 flex justify-between items-center">
//                 <div>
//                   <strong>{txn.type}</strong>: {formatCurrency(txn.amount)}
//                   <br />
//                   <small className="text-gray-500">{txn.timestamp}</small>
//                 </div>
//                 <div className="flex flex-col items-end">
//                   <span className={`text-xs ${txn.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}>
//                     {txn.type === 'Credit' ? 'Received' : 'Sent'}
//                   </span>
//                   <span className={`text-xs mt-1 ${getStatusColor(txn.status)}`}>
//                     {txn.status}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Security & Offers */}
//       <div className="mt-6 flex flex-col gap-3">
//         <button
//           onClick={() => alert('Wallet locked!')}
//           className="bg-red-600 text-white py-2 rounded shadow hover:bg-red-700 transition"
//         >
//           Lock Wallet
//         </button>
//         <div className="p-4 bg-gray-100 rounded">
//           <h4 className="font-medium mb-2">Offers & Promotions</h4>
//           <p className="text-gray-600 text-sm">No new offers right now. Check back later!</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Wallet;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Wallet = ({ user }) => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('All');

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-600';
      case 'Pending': return 'text-yellow-500';
      case 'Failed': return 'text-red-600';
      default: return 'text-gray-500';
    }
  };

  const fetchWallet = async () => {
    try {
      const response = await fetch(`http://localhost:8099/api/wallet/${user.id}`);
      if (!response.ok) throw new Error("Failed to fetch wallet");
      const data = await response.json();
      setBalance(data.balance);
      setTransactions(data.transactions);
    } catch (error) {
      console.error("Error fetching wallet", error);
    }
  };

  useEffect(() => {
    fetchWallet();
  }, []);

  const filteredTransactions = transactions.filter(txn => {
    if (filter === 'All') return true;
    return txn.type === filter;
  });

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      {/* User Profile */}
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold text-blue-700 mr-4">
          {user?.email?.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="text-2xl font-semibold">
            Hello, <span className="text-blue-600">{user?.email}</span>
          </h2>
          <p className="text-gray-500 text-sm">Welcome back to your wallet!</p>
        </div>
      </div>

      {/* Wallet Balance */}
      <div className="mb-6 p-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl text-white shadow-md">
        <h3 className="text-lg font-medium mb-2">Wallet Balance</h3>
        <p className="text-3xl font-bold">{formatCurrency(balance)}</p>
        <small>Available Balance</small>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4 mb-6">
        <button onClick={() => navigate('/add')} className="flex-1 bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition">Add Money</button>
        <button onClick={() => navigate('/send')} className="flex-1 bg-green-600 text-white py-2 rounded-lg shadow hover:bg-green-700 transition">Send Money</button>
        <button onClick={() => navigate('/bill-payments')} className="flex-1 bg-yellow-500 text-white py-2 rounded-lg shadow hover:bg-yellow-600 transition">Pay Bills</button>
      </div>

      {/* Transaction Filters */}
      <div className="flex gap-3 mb-4">
        {['All', 'Credit', 'Debit'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 rounded-full border ${filter === type ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} transition`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Recent Transactions */}
      <div>
        <h3 className="text-lg font-medium mb-2">Recent Transactions</h3>
        {filteredTransactions.length === 0 ? (
          <div className="text-center text-gray-500">
            No transactions found.
            <br />
            <button onClick={() => navigate('/send')} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Start by sending money</button>
          </div>
        ) : (
          <ul className="space-y-4">
            {filteredTransactions.map((txn, index) => (
              <li key={index} className="border-b pb-4 flex justify-between items-center">
                <div>
                  <strong>{txn.type}</strong>: {formatCurrency(txn.amount)}
                  <br />
                  <small className="text-gray-500">{txn.timestamp}</small>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`text-xs ${txn.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}>
                    {txn.type === 'Credit' ? 'Received' : 'Sent'}
                  </span>
                  <span className={`text-xs mt-1 ${getStatusColor(txn.status)}`}>{txn.status}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Security & Offers */}
      <div className="mt-6 flex flex-col gap-3">
        <button onClick={() => alert('Wallet locked!')} className="bg-red-600 text-white py-2 rounded shadow hover:bg-red-700 transition">Lock Wallet</button>
        <div className="p-4 bg-gray-100 rounded">
          <h4 className="font-medium mb-2">Offers & Promotions</h4>
          <p className="text-gray-600 text-sm">No new offers right now. Check back later!</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
