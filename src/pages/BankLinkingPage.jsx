// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const BankLinkingPage = () => {
//   const [bankDetails, setBankDetails] = useState([]);
//   const [accountNumber, setAccountNumber] = useState('');
//   const [routingNumber, setRoutingNumber] = useState('');
//   const [bankName, setBankName] = useState('');
//   const [error, setError] = useState('');

//   const handleLinkBank = (e) => {
//     e.preventDefault();

//     if (!accountNumber || !routingNumber || !bankName) {
//       setError('⚠️ Please fill all fields!');
//       return;
//     }
//     if (accountNumber.length < 10 || routingNumber.length < 9) {
//       setError('⚠️ Invalid account or routing number!');
//       return;
//     }

//     const newBankDetails = {
//       bankName,
//       accountNumber: accountNumber.slice(-4), // Mask all but last 4 digits
//       routingNumber: routingNumber.replace(/\d(?=\d{4})/g, '*'), // Mask routing number
//     };

//     setBankDetails([...bankDetails, newBankDetails]);
//     toast.success('✅ Bank account linked successfully!');

//     // Reset form fields
//     setAccountNumber('');
//     setRoutingNumber('');
//     setBankName('');
//     setError('');
//   };

//   const handleDeleteBank = (index) => {
//     const updatedBankDetails = bankDetails.filter((_, bankIndex) => bankIndex !== index);
//     setBankDetails(updatedBankDetails);
//     toast.info('ℹ Bank account removed.');
//   };

//   return (
//     <motion.div
//       className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">🔗 Link Your Bank</h1>

//       {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//       <form onSubmit={handleLinkBank}>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium"> Bank Name</label>
//           <input
//             type="text"
//             value={bankName}
//             onChange={(e) => setBankName(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium"> Account Number</label>
//           <input
//             type="text"
//             value={accountNumber}
//             onChange={(e) => setAccountNumber(e.target.value)}
//             required
//             maxLength="16"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium"> Routing Number</label>
//           <input
//             type="text"
//             value={routingNumber}
//             onChange={(e) => setRoutingNumber(e.target.value)}
//             required
//             maxLength="9"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
//           />
//         </div>

//         <motion.button
//           type="submit"
//           className="w-full py-3 bg-blue-500 text-white rounded-md mt-6 hover:bg-blue-600 transition shadow-md"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//            Link Bank Account
//         </motion.button>
//       </form>

//       <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">🔗 Linked Bank Accounts</h2>
//       {bankDetails.length === 0 ? (
//         <p className="text-center text-lg text-gray-500">No bank accounts linked yet.</p>
//       ) : (
//         <motion.div>
//           <ul>
//             {bankDetails.map((bank, index) => (
//               <motion.li
//                 key={index}
//                 className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center border-l-4 border-blue-500"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div>
//                   <h3 className="text-lg font-semibold">{bank.bankName}</h3>
//                   <p className="text-sm text-gray-500"> Account: ****{bank.accountNumber}</p>
//                   <p className="text-sm text-gray-500"> Routing: {bank.routingNumber}</p>
//                 </div>
//                 <motion.button
//                   onClick={() => handleDeleteBank(index)}
//                   className="text-red-500 hover:text-red-600 transition"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                    Delete
//                 </motion.button>
//               </motion.li>
//             ))}
//           </ul>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default BankLinkingPage;
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const BankLinkingPage = () => {
//   const [bankDetails, setBankDetails] = useState([]);
//   const [accountNumber, setAccountNumber] = useState('');
//   const [routingNumber, setRoutingNumber] = useState('');
//   const [bankName, setBankName] = useState('');
//   const [accountType, setAccountType] = useState('Checking');
//   const [error, setError] = useState('');

//   // Load saved banks from localStorage on mount
//   useEffect(() => {
//     const savedBanks = JSON.parse(localStorage.getItem('bankDetails')) || [];
//     setBankDetails(savedBanks);
//   }, []);

//   // Save banks to localStorage whenever bankDetails changes
//   useEffect(() => {
//     localStorage.setItem('bankDetails', JSON.stringify(bankDetails));
//   }, [bankDetails]);

//   // Masking utility functions
//   const maskAccount = (num) => num.slice(-4).padStart(num.length, '*');
//   const maskRouting = (num) => num.replace(/\d(?=\d{4})/g, '*');

//   const handleLinkBank = (e) => {
//     e.preventDefault();

//     if (!accountNumber || !routingNumber || !bankName) {
//       setError('⚠️ Please fill all fields!');
//       return;
//     }
//     if (accountNumber.length < 10 || routingNumber.length < 9) {
//       setError('⚠️ Invalid account or routing number!');
//       return;
//     }

//     const newBank = {
//       bankName,
//       accountNumber: accountNumber.slice(-4),
//       routingNumber: routingNumber.slice(-4),
//       accountType,
//     };

//     setBankDetails([newBank, ...bankDetails]);
//     toast.success('✅ Bank account linked successfully!');

//     // Reset form
//     setAccountNumber('');
//     setRoutingNumber('');
//     setBankName('');
//     setAccountType('Checking');
//     setError('');
//   };

//   const handleDeleteBank = (index) => {
//     const confirmDelete = window.confirm(
//       `Are you sure you want to delete ${bankDetails[index].bankName}?`
//     );
//     if (!confirmDelete) return;

//     const updatedBanks = bankDetails.filter((_, i) => i !== index);
//     setBankDetails(updatedBanks);
//     toast.info('ℹ Bank account removed.');
//   };

//   return (
//     <motion.div
//       className="max-w-4xl mx-auto mt-10 p-6 sm:p-8 bg-white rounded-xl shadow-xl"
//       initial={{ opacity: 0, y: -30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
//         🔗 Link Your Bank Account
//       </h1>

//       {error && (
//         <p className="text-center text-red-500 mb-4 font-medium">{error}</p>
//       )}

//       <form onSubmit={handleLinkBank} className="space-y-4">
//         <InputField
//           label="Bank Name"
//           value={bankName}
//           onChange={setBankName}
//           placeholder="Enter bank name"
//         />
//         <InputField
//           label="Account Number"
//           value={accountNumber}
//           onChange={setAccountNumber}
//           placeholder="Enter account number"
//           maxLength={16}
//         />
//         <InputField
//           label="Routing Number"
//           value={routingNumber}
//           onChange={setRoutingNumber}
//           placeholder="Enter routing number"
//           maxLength={9}
//         />

//         <div>
//           <label className="block text-gray-700 font-medium mb-1">Account Type</label>
//           <select
//             value={accountType}
//             onChange={(e) => setAccountType(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
//           >
//             <option value="Checking">Checking</option>
//             <option value="Savings">Savings</option>
//             <option value="Business">Business</option>
//           </select>
//         </div>

//         <motion.button
//           type="submit"
//           className="w-full py-3 bg-blue-600 text-white rounded-md font-medium shadow-lg hover:bg-blue-700 transition"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Link Bank Account
//         </motion.button>
//       </form>

//       <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
//         🔗 Linked Bank Accounts
//       </h2>

//       {bankDetails.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">
//           No bank accounts linked yet.
//         </p>
//       ) : (
//         <motion.ul className="space-y-4">
//           {bankDetails.map((bank, index) => (
//             <motion.li
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-gray-50 rounded-xl shadow-md p-4 flex justify-between items-center border-l-4 border-blue-500 hover:shadow-lg transition"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold">{bank.bankName}</h3>
//                 <p className="text-sm text-gray-600">
//                   Account: {maskAccount(bank.accountNumber)}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   Routing: {maskRouting(bank.routingNumber)}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   Type: {bank.accountType}
//                 </p>
//               </div>
//               <motion.button
//                 onClick={() => handleDeleteBank(index)}
//                 className="text-red-500 hover:text-red-600 font-semibold"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 Delete
//               </motion.button>
//             </motion.li>
//           ))}
//         </motion.ul>
//       )}
//     </motion.div>
//   );
// };

// // Reusable input field
// const InputField = ({ label, value, onChange, placeholder, maxLength }) => (
//   <div>
//     <label className="block text-gray-700 font-medium mb-1">{label}</label>
//     <input
//       type="text"
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder}
//       maxLength={maxLength}
//       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
//     />
//   </div>
// );

// export default BankLinkingPage;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const BankLinkingPage = ({ user }) => {
  const [bankDetails, setBankDetails] = useState([]);
  const [accountNumber, setAccountNumber] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountType, setAccountType] = useState('Checking');
  const [error, setError] = useState('');

  // Load banks from backend on mount
  useEffect(() => {
    if (!user) return;
    fetchBanks();
  }, [user]);

  const fetchBanks = async () => {
    try {
      const response = await axios.get(`http://localhost:8088/api/bank/${user.id}`);
      setBankDetails(response.data);
    } catch (err) {
      console.error("Error fetching banks:", err);
      toast.error('Failed to load linked banks.');
    }
  };

  const maskAccount = (num) => num.slice(-4).padStart(num.length, '*');
  const maskRouting = (num) => num.replace(/\d(?=\d{4})/g, '*');

  // const handleLinkBank = async (e) => {
  //   e.preventDefault();

  //   if (!accountNumber || !routingNumber || !bankName) {
  //     setError('⚠️ Please fill all fields!');
  //     return;
  //   }
  //   if (accountNumber.length < 10 || routingNumber.length < 9) {
  //     setError('⚠️ Invalid account or routing number!');
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(`http://localhost:8088/api/bank/add`, {
  //       userId: user.id,
  //       bankName,
  //       accountNumber,
  //       routingNumber,
  //       accountType,
  //     });

  //     setBankDetails([response.data, ...bankDetails]);
  //     toast.success('✅ Bank account linked successfully!');

  //     // Reset form
  //     setAccountNumber('');
  //     setRoutingNumber('');
  //     setBankName('');
  //     setAccountType('Checking');
  //     setError('');
  //   } catch (err) {
  //     console.error("Error linking bank:", err);
  //     toast.error('Failed to link bank account.');
  //   }
  // };
  const handleLinkBank = async (e) => {
  e.preventDefault();

  if (!user) {
    toast.error("User not logged in!");
    return;
  }

  if (!accountNumber || !routingNumber || !bankName) {
    setError('⚠️ Please fill all fields!');
    return;
  }
  if (accountNumber.length < 10 || routingNumber.length < 9) {
    setError('⚠️ Invalid account or routing number!');
    return;
  }

  try {
    const response = await axios.post(`http://localhost:8099/api/bank/add`, {
      userId: user.id,
      bankName,
      accountNumber,
      routingNumber,
      accountType,
    });

    setBankDetails([response.data, ...bankDetails]);
    toast.success('✅ Bank account linked successfully!');

    // Reset form
    setAccountNumber('');
    setRoutingNumber('');
    setBankName('');
    setAccountType('Checking');
    setError('');
  } catch (err) {
    console.error("Error linking bank:", err);
    toast.error('Failed to link bank account.');
  }
};

  
  const handleDeleteBank = async (bankId) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete this bank?`);
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8099/api/bank/delete/${bankId}`);
      setBankDetails(bankDetails.filter(b => b.id !== bankId));
      toast.info('ℹ Bank account removed.');
    } catch (err) {
      console.error("Error deleting bank:", err);
      toast.error('Failed to delete bank account.');
    }
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto mt-10 p-6 sm:p-8 bg-white rounded-xl shadow-xl"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        🔗 Link Your Bank Account
      </h1>

      {error && <p className="text-center text-red-500 mb-4 font-medium">{error}</p>}

      <form onSubmit={handleLinkBank} className="space-y-4">
        <InputField label="Bank Name" value={bankName} onChange={setBankName} placeholder="Enter bank name" />
        <InputField label="Account Number" value={accountNumber} onChange={setAccountNumber} placeholder="Enter account number" maxLength={16} />
        <InputField label="Routing Number" value={routingNumber} onChange={setRoutingNumber} placeholder="Enter routing number" maxLength={9} />

        <div>
          <label className="block text-gray-700 font-medium mb-1">Account Type</label>
          <select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          >
            <option value="Checking">Checking</option>
            <option value="Savings">Savings</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <motion.button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md font-medium shadow-lg hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Link Bank Account
        </motion.button>
      </form>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
        🔗 Linked Bank Accounts
      </h2>

      {bankDetails.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No bank accounts linked yet.</p>
      ) : (
        <motion.ul className="space-y-4">
          {bankDetails.map((bank, index) => (
            <motion.li
              key={bank.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl shadow-md p-4 flex justify-between items-center border-l-4 border-blue-500 hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-lg font-semibold">{bank.bankName}</h3>
                <p className="text-sm text-gray-600">Account: {maskAccount(bank.accountNumber)}</p>
                <p className="text-sm text-gray-600">Routing: {maskRouting(bank.routingNumber)}</p>
                <p className="text-sm text-gray-500">Type: {bank.accountType}</p>
              </div>
              <motion.button
                onClick={() => handleDeleteBank(bank.id)}
                className="text-red-500 hover:text-red-600 font-semibold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Delete
              </motion.button>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

// Reusable input field
const InputField = ({ label, value, onChange, placeholder, maxLength }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
    />
  </div>
);

export default BankLinkingPage;
