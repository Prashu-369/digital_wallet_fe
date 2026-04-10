// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Transactions = ({ transactions }) => {
//   const [filterType, setFilterType] = useState("All");
//   const [filterDate, setFilterDate] = useState("");

//   const filteredTransactions = transactions.filter((transaction) => {
//     const matchesType = filterType === "All" || transaction.type.includes(filterType);
//     const matchesDate = !filterDate || transaction.timestamp.startsWith(filterDate);
//     return matchesType && matchesDate;
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h2 className="text-2xl font-semibold text-gray-700 mb-4">All Transactions</h2>
      
//       <div className="flex space-x-4 mb-4">
//         <select
//           className="p-2 border rounded transition-all duration-300 ease-in-out hover:shadow-md"
//           value={filterType}
//           onChange={(e) => setFilterType(e.target.value)}
//         >
//           <option value="All">All</option>
//           <option value="Sent">Sent</option>
//           <option value="Received">Received</option>
//         </select>
//         <input
//           type="date"
//           className="p-2 border rounded transition-all duration-300 ease-in-out hover:shadow-md"
//           value={filterDate}
//           onChange={(e) => setFilterDate(e.target.value)}
//         />
//       </div>
      
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <ul className="space-y-4">
//           {filteredTransactions.length === 0 ? (
//             <p className="text-gray-500">No transactions found</p>
//           ) : (
//             filteredTransactions.map((transaction, index) => (
//               <motion.li 
//                 key={index} 
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 className="flex justify-between items-center border-b pb-2 hover:bg-gray-100 p-2 rounded-md transition-all"
//               >
//                 <div>
//                   <p className="font-semibold text-gray-700">
//                     {transaction.type} ₹{transaction.amount}
//                   </p>
//                   <p className="text-sm text-gray-500">{transaction.timestamp}</p>
//                 </div>
//                 <div>
//                   {transaction.type.startsWith("Sent") && (
//                     <p className="text-red-600">To: {transaction.to}</p>
//                   )}
//                   {transaction.type.startsWith("Received") && (
//                     <p className="text-green-600">
//                       From: {transaction.from ? transaction.from : "Added to Wallet"}
//                     </p>
//                   )}
//                 </div>
//               </motion.li>
//             ))
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Transactions;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiArrowUp, FiArrowDown, FiPlusCircle } from "react-icons/fi";

// const Transactions = ({ transactions }) => {
//   const [filterType, setFilterType] = useState("All");
//   const [filterDate, setFilterDate] = useState("");

//   const filteredTransactions = transactions.filter((transaction) => {
//     const matchesType = filterType === "All" || transaction.type.includes(filterType);
//     const matchesDate = !filterDate || transaction.timestamp.startsWith(filterDate);
//     return matchesType && matchesDate;
//   });

//   const formatDateTime = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString([], { dateStyle: "short", timeStyle: "short" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h2 className="text-2xl font-semibold text-gray-700 mb-4">Transactions</h2>

//       {/* Filters */}
//       <div className="flex space-x-4 mb-4">
//         <select
//           className="p-2 border rounded transition-all duration-300 ease-in-out hover:shadow-md"
//           value={filterType}
//           onChange={(e) => setFilterType(e.target.value)}
//         >
//           <option value="All">All</option>
//           <option value="Sent">Sent</option>
//           <option value="Received">Received</option>
//         </select>
//         <input
//           type="date"
//           className="p-2 border rounded transition-all duration-300 ease-in-out hover:shadow-md"
//           value={filterDate}
//           onChange={(e) => setFilterDate(e.target.value)}
//         />
//       </div>

//       {/* Transactions List */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <ul className="space-y-4">
//           <AnimatePresence>
//             {filteredTransactions.length === 0 ? (
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="text-gray-500 text-center"
//               >
//                 No transactions found
//               </motion.p>
//             ) : (
//               filteredTransactions.map((transaction, index) => {
//                 let icon, color;
//                 if (transaction.type.startsWith("Sent")) {
//                   icon = <FiArrowUp className="text-red-600 mr-2" />;
//                   color = "text-red-600";
//                 } else if (transaction.type.startsWith("Received")) {
//                   icon = <FiArrowDown className="text-green-600 mr-2" />;
//                   color = "text-green-600";
//                 } else {
//                   icon = <FiPlusCircle className="text-blue-600 mr-2" />;
//                   color = "text-blue-600";
//                 }

//                 return (
//                   <motion.li
//                     key={index}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.3, delay: index * 0.05 }}
//                     className="flex justify-between items-center border-b pb-2 hover:bg-gray-50 p-2 rounded-md transition-all shadow-sm"
//                   >
//                     <div className="flex items-center">
//                       {icon}
//                       <div>
//                         <p className={`font-semibold ${color}`}>
//                           {transaction.type} ₹{transaction.amount}
//                         </p>
//                         <p className="text-sm text-gray-500">{formatDateTime(transaction.timestamp)}</p>
//                       </div>
//                     </div>
//                     <div className="text-right text-sm">
//                       {transaction.type.startsWith("Sent") && <p className="text-red-600">To: {transaction.to}</p>}
//                       {transaction.type.startsWith("Received") && (
//                         <p className="text-green-600">
//                           From: {transaction.from ? transaction.from : "Wallet Top-up"}
//                         </p>
//                       )}
//                     </div>
//                   </motion.li>
//                 );
//               })
//             )}
//           </AnimatePresence>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Transactions;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiArrowUp, FiArrowDown, FiPlusCircle } from "react-icons/fi";

// const Transactions = ({ transactions }) => {
//   const [filterType, setFilterType] = useState("All");
//   const [filterDate, setFilterDate] = useState("");

//   // Helper: format timestamp to readable date & time
//   const formatDateTime = (timestamp) => {
//     const date = new Date(timestamp);
//     if (isNaN(date)) return "Invalid Date";
//     return date.toLocaleString([], { dateStyle: "short", timeStyle: "short" });
//   };

//   // Filter transactions by type and date
//   const filteredTransactions = transactions.filter((transaction) => {
//     const matchesType = filterType === "All" || transaction.type.includes(filterType);

//     let matchesDate = true;
//     if (filterDate) {
//       const transactionDate = new Date(transaction.timestamp);
//       const filter = new Date(filterDate);
//       matchesDate =
//         transactionDate.getFullYear() === filter.getFullYear() &&
//         transactionDate.getMonth() === filter.getMonth() &&
//         transactionDate.getDate() === filter.getDate();
//     }

//     return matchesType && matchesDate;
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h2 className="text-2xl font-semibold text-gray-700 mb-4">Transactions</h2>

//       {/* Filters */}
//       <div className="flex space-x-4 mb-4">
//         <select
//           className="p-2 border rounded transition-all duration-300 ease-in-out hover:shadow-md"
//           value={filterType}
//           onChange={(e) => setFilterType(e.target.value)}
//         >
//           <option value="All">All</option>
//           <option value="Sent">Sent</option>
//           <option value="Received">Received</option>
//         </select>
//         <input
//           type="date"
//           className="p-2 border rounded transition-all duration-300 ease-in-out hover:shadow-md"
//           value={filterDate}
//           onChange={(e) => setFilterDate(e.target.value)}
//         />
//       </div>

//       {/* Transactions List */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <ul className="space-y-4">
//           <AnimatePresence>
//             {filteredTransactions.length === 0 ? (
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="text-gray-500 text-center"
//               >
//                 No transactions found
//               </motion.p>
//             ) : (
//               filteredTransactions.map((transaction, index) => {
//                 let icon, color;
//                 if (transaction.type.startsWith("Sent")) {
//                   icon = <FiArrowUp className="text-red-600 mr-2" />;
//                   color = "text-red-600";
//                 } else if (transaction.type.startsWith("Received")) {
//                   icon = <FiArrowDown className="text-green-600 mr-2" />;
//                   color = "text-green-600";
//                 } else {
//                   icon = <FiPlusCircle className="text-blue-600 mr-2" />;
//                   color = "text-blue-600";
//                 }

//                 return (
//                   <motion.li
//                     key={index}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.3, delay: index * 0.05 }}
//                     className="flex justify-between items-center border-b pb-2 hover:bg-gray-50 p-2 rounded-md transition-all shadow-sm"
//                   >
//                     <div className="flex items-center">
//                       {icon}
//                       <div>
//                         <p className={`font-semibold ${color}`}>
//                           {transaction.type} ₹{transaction.amount}
//                         </p>
//                         <p className="text-sm text-gray-500">{formatDateTime(transaction.timestamp)}</p>
//                       </div>
//                     </div>
//                     <div className="text-right text-sm">
//                       {transaction.type.startsWith("Sent") && (
//                         <p className="text-red-600">To: {transaction.to}</p>
//                       )}
//                       {transaction.type.startsWith("Received") && (
//                         <p className="text-green-600">
//                           From: {transaction.from ? transaction.from : "Wallet Top-up"}
//                         </p>
//                       )}
//                     </div>
//                   </motion.li>
//                 );
//               })
//             )}
//           </AnimatePresence>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Transactions;


// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Transactions = ({ transactions }) => {
//   const [filterType, setFilterType] = useState("All");
//   const [filterDate, setFilterDate] = useState("");

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//     }).format(amount);
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Completed":
//         return "text-green-600";
//       case "Pending":
//         return "text-yellow-500";
//       case "Failed":
//         return "text-red-600";
//       default:
//         return "text-gray-500";
//     }
//   };

//   const filteredTransactions = transactions.filter((transaction) => {
//     const matchesType =
//       filterType === "All" || transaction.type.includes(filterType);
//     const matchesDate =
//       !filterDate || transaction.timestamp.startsWith(filterDate);
//     return matchesType && matchesDate;
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h2 className="text-2xl font-semibold text-gray-700 mb-4">
//         Transaction History
//       </h2>

//       {/* Filters */}
//       <div className="flex flex-col md:flex-row md:space-x-4 mb-4 space-y-2 md:space-y-0">
//         <select
//           className="p-2 border rounded transition-all duration-300 ease-in-out hover:shadow-md"
//           value={filterType}
//           onChange={(e) => setFilterType(e.target.value)}
//         >
//           <option value="All">All</option>
//           <option value="Sent">Sent</option>
//           <option value="Received">Received</option>
//           <option value="Added">Added Money</option>
//           <option value="Bill Payment">Bill Payments</option>
//         </select>
//         <input
//           type="date"
//           className="p-2 border rounded transition-all duration-300 ease-in-out hover:shadow-md"
//           value={filterDate}
//           onChange={(e) => setFilterDate(e.target.value)}
//         />
//       </div>

//       {/* Transaction List */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <ul className="space-y-4">
//           {filteredTransactions.length === 0 ? (
//             <p className="text-gray-500">No transactions found</p>
//           ) : (
//             filteredTransactions.map((transaction, index) => (
//               <motion.li
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.05 }}
//                 className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-2 hover:bg-gray-100 p-2 rounded-md transition-all"
//               >
//                 <div className="flex flex-col">
//                   <p className="font-semibold text-gray-700">{transaction.type}</p>
//                   <p className="text-sm text-gray-500">{transaction.timestamp}</p>
//                 </div>
//                 <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-2 md:mt-0">
//                   {/* Recipient / Source */}
//                   {transaction.to && (
//                     <p className="text-red-600 text-sm">To: {transaction.to}</p>
//                   )}
//                   {transaction.from && (
//                     <p className="text-green-600 text-sm">From: {transaction.from}</p>
//                   )}
//                   {!transaction.from && !transaction.to && transaction.type === "Added" && (
//                     <p className="text-green-600 text-sm">Added to Wallet</p>
//                   )}
//                   {/* Amount */}
//                   <p
//                     className={`font-semibold text-sm ${
//                       transaction.type.startsWith("Sent") || transaction.type === "Bill Payment"
//                         ? "text-red-600"
//                         : "text-green-600"
//                     }`}
//                   >
//                     {formatCurrency(transaction.amount)}
//                   </p>
//                   {/* Status */}
//                   {transaction.status && (
//                     <span className={`text-xs ${getStatusColor(transaction.status)}`}>
//                       {transaction.status}
//                     </span>
//                   )}
//                 </div>
//               </motion.li>
//             ))
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Transactions;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Transactions = ({ user }) => {
  const [transactions, setTransactions] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [filterDate, setFilterDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!user) return;
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`http://localhost:8099/api/wallet/${user.id}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setTransactions(data.transactions || []);
      } catch (err) {
        console.error("Error fetching transactions:", err);
        setError("Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user]);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(amount);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "text-green-600";
      case "Pending": return "text-yellow-500";
      case "Failed": return "text-red-600";
      default: return "text-gray-500";
    }
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesType = filterType === "All" || transaction.type.includes(filterType);
    const matchesDate = !filterDate || transaction.timestamp.startsWith(filterDate);
    return matchesType && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Transaction History</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:space-x-4 mb-4 space-y-2 md:space-y-0">
        <select
          className="p-2 border rounded hover:shadow-md"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Sent">Sent</option>
          <option value="Received">Received</option>
          <option value="Added">Added Money</option>
          <option value="Bill Payment">Bill Payments</option>
        </select>
        <input
          type="date"
          className="p-2 border rounded hover:shadow-md"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading transactions...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="space-y-4">
            {filteredTransactions.length === 0 ? (
              <p className="text-gray-500">No transactions found</p>
            ) : (
              filteredTransactions.map((transaction, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-2 hover:bg-gray-100 p-2 rounded-md transition-all"
                >
                  <div className="flex flex-col">
                    <p className="font-semibold text-gray-700">{transaction.type}</p>
                    <p className="text-sm text-gray-500">{transaction.timestamp}</p>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-2 md:mt-0">
                    {transaction.recipient && (
                      <p className="text-red-600 text-sm">To: {transaction.recipient}</p>
                    )}
                    {!transaction.recipient && transaction.type === "Added" && (
                      <p className="text-green-600 text-sm">Added to Wallet</p>
                    )}
                    <p
                      className={`font-semibold text-sm ${
                        transaction.type.startsWith("Sent") || transaction.type === "Bill Payment"
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {formatCurrency(transaction.amount)}
                    </p>
                    {transaction.status && (
                      <span className={`text-xs ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    )}
                  </div>
                </motion.li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Transactions;
