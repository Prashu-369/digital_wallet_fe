// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const BillPayments = () => {
//   const [billAmount, setBillAmount] = useState("");
//   const [billType, setBillType] = useState("");
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleBillPayment = () => {
//     if (!billAmount || !billType) {
//       alert("Please select a bill type and enter an amount.");
//       return;
//     }

//     setIsProcessing(true);

//     setTimeout(() => {
//       alert(`✅ Successfully paid ₹${billAmount} for ${billType}!`);
//       setBillAmount("");
//       setBillType("");
//       setIsProcessing(false);
//     }, 2000);
//   };

//   return (
//     <motion.div
//       className="p-6 bg-white shadow-lg rounded-md max-w-md mx-auto mt-10"
//       initial={{ opacity: 0, y: -30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
//         Bill Payments
//       </h2>

//       <div className="mb-4">
//         <label className="block text-gray-600 mb-1">Bill Type</label>
//         <select
//           value={billType}
//           onChange={(e) => setBillType(e.target.value)}
//           className="border rounded p-2 w-full bg-white"
//         >
//           <option value="">Select Bill Type</option>
//           <option value="Electricity">Electricity</option>
//           <option value="Water">Water</option>
//           <option value="Internet">Internet</option>
//           <option value="Gas">Gas</option>
//           <option value="Phone">Phone</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-600 mb-1">Amount (₹)</label>
//         <input
//           type="number"
//           value={billAmount}
//           onChange={(e) => setBillAmount(e.target.value)}
//           className="border rounded p-2 w-full"
//           placeholder="Enter bill amount"
//         />
//       </div>

//       <motion.button
//         onClick={handleBillPayment}
//         className={`w-full text-white py-3 rounded-md transition ${
//           isProcessing ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//         }`}
//         whileTap={{ scale: 0.95 }}
//         disabled={isProcessing}
//       >
//         {isProcessing ? "Processing..." : "Pay Bill"}
//       </motion.button>
//     </motion.div>
//   );
// };

// export default BillPayments;


// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const BillPayments = () => {
//   const [billAmount, setBillAmount] = useState("");
//   const [billType, setBillType] = useState("");
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [recentBills, setRecentBills] = useState([]);

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//     }).format(amount);
//   };

//   const handleBillPayment = () => {
//     if (!billAmount || !billType) {
//       alert("Please select a bill type and enter an amount.");
//       return;
//     }

//     setIsProcessing(true);

//     setTimeout(() => {
//       // Add to recent bills
//       const newBill = {
//         type: billType,
//         amount: billAmount,
//         timestamp: new Date().toLocaleString(),
//         status: "Completed",
//       };
//       setRecentBills([newBill, ...recentBills]);

//       // Reset form
//       setBillAmount("");
//       setBillType("");
//       setIsProcessing(false);
//     }, 2000);
//   };

//   return (
//     <motion.div
//       className="p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto mt-10"
//       initial={{ opacity: 0, y: -30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
//         Pay Your Bills
//       </h2>

//       {/* Bill Form */}
//       <div className="mb-6">
//         <label className="block text-gray-600 mb-2">Bill Type</label>
//         <select
//           value={billType}
//           onChange={(e) => setBillType(e.target.value)}
//           className="border rounded p-2 w-full bg-white"
//         >
//           <option value="">Select Bill Type</option>
//           <option value="Electricity">Electricity</option>
//           <option value="Water">Water</option>
//           <option value="Internet">Internet</option>
//           <option value="Gas">Gas</option>
//           <option value="Phone">Phone</option>
//         </select>
//       </div>

//       <div className="mb-6">
//         <label className="block text-gray-600 mb-2">Amount (₹)</label>
//         <input
//           type="number"
//           min="1"
//           value={billAmount}
//           onChange={(e) => setBillAmount(e.target.value)}
//           className="border rounded p-2 w-full"
//           placeholder="Enter bill amount"
//         />
//       </div>

//       <motion.button
//         onClick={handleBillPayment}
//         disabled={isProcessing}
//         className={`w-full py-3 rounded-md text-white font-medium transition ${
//           isProcessing
//             ? "bg-gray-500 cursor-not-allowed"
//             : "bg-blue-600 hover:bg-blue-700"
//         }`}
//         whileTap={{ scale: 0.95 }}
//       >
//         {isProcessing ? "Processing..." : "Pay Bill"}
//       </motion.button>

//       {/* Recent Bills */}
//       {recentBills.length > 0 && (
//         <div className="mt-8">
//           <h3 className="text-lg font-medium mb-4">Recent Payments</h3>
//           <ul className="space-y-3">
//             {recentBills.map((bill, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center p-3 border rounded-lg shadow-sm"
//               >
//                 <div>
//                   <strong>{bill.type}</strong>: {formatCurrency(bill.amount)}
//                   <br />
//                   <small className="text-gray-500">{bill.timestamp}</small>
//                 </div>
//                 <span
//                   className={`text-sm font-semibold ${
//                     bill.status === "Completed"
//                       ? "text-green-600"
//                       : bill.status === "Pending"
//                       ? "text-yellow-500"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {bill.status}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default BillPayments;


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const BillPayments = ({ user }) => {
  const [billAmount, setBillAmount] = useState("");
  const [billType, setBillType] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [recentBills, setRecentBills] = useState([]);

  // Fetch bills when page loads
  useEffect(() => {
    if (user) {
      fetchBills();
    }
  }, [user]);

  const fetchBills = async () => {
    try {
      const res = await axios.get(`http://localhost:8099/api/bills/user/${user.id}`);
      setRecentBills(res.data);
    } catch (err) {
      console.error("❌ Error fetching bills:", err);
    }
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);

  const handleBillPayment = async () => {
    if (!billAmount || !billType) {
      alert("⚠️ Please select a bill type and enter an amount.");
      return;
    }

    setIsProcessing(true);

    try {
      const newBill = {
        userId: user.id,
        billType: billType,
        amount: parseFloat(billAmount),
      };

      const res = await axios.post("http://localhost:8099/api/bills/add", newBill);

      // Add to recent bills
      setRecentBills([res.data, ...recentBills]);

      // Reset form
      setBillAmount("");
      setBillType("");
    } catch (err) {
      console.error("❌ Error paying bill:", err);
      alert("Failed to process bill payment");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <motion.div
      className="p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto mt-10"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Pay Your Bills
      </h2>

      {/* Bill Form */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Bill Type</label>
        <select
          value={billType}
          onChange={(e) => setBillType(e.target.value)}
          className="border rounded p-2 w-full bg-white"
        >
          <option value="">Select Bill Type</option>
          <option value="Electricity">Electricity</option>
          <option value="Water">Water</option>
          <option value="Internet">Internet</option>
          <option value="Gas">Gas</option>
          <option value="Phone">Phone</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Amount (₹)</label>
        <input
          type="number"
          min="1"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Enter bill amount"
        />
      </div>

      <motion.button
        onClick={handleBillPayment}
        disabled={isProcessing}
        className={`w-full py-3 rounded-md text-white font-medium transition ${
          isProcessing
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        {isProcessing ? "Processing..." : "Pay Bill"}
      </motion.button>

      {/* Recent Bills */}
      {recentBills.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Recent Payments</h3>
          <ul className="space-y-3">
            {recentBills.map((bill, index) => (
              <li
                key={bill.id || index}
                className="flex justify-between items-center p-3 border rounded-lg shadow-sm"
              >
                <div>
                  <strong>{bill.billType}</strong>: {formatCurrency(bill.amount)}
                  <br />
                  <small className="text-gray-500">
                    {bill.timestamp}
                  </small>
                </div>
                <span
                  className={`text-sm font-semibold ${
                    bill.status === "Completed"
                      ? "text-green-600"
                      : bill.status === "Pending"
                      ? "text-yellow-500"
                      : "text-red-600"
                  }`}
                >
                  {bill.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default BillPayments;
