// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { MdCheckCircle } from "react-icons/md";

// const QRCodePayments = () => {
//   const [qrCodeData, setQrCodeData] = useState("");
//   const [scanned, setScanned] = useState(false);

//   const handleQRCodePayment = () => {
//     if (qrCodeData.trim()) {
//       alert(`✅ Payment successful for QR code: ${qrCodeData}`);
//       setQrCodeData("");
//       setScanned(false);
//     } else {
//       alert("⚠️ Please scan a valid QR code!");
//     }
//   };

//   const handleScan = (e) => {
//     setQrCodeData(e.target.value);
//     setScanned(true);
//   };

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-md max-w-md mx-auto mt-10">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-700">QR Code Payments</h2>
      
//       <motion.div
//         className="mb-4"
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <label className="block text-gray-600 mb-1">Scan QR Code</label>
//         <input
//           type="text"
//           value={qrCodeData}
//           onChange={handleScan}
//           className="border rounded-md p-3 w-full text-gray-800"
//           placeholder="Enter scanned QR code data"
//         />
//       </motion.div>

//       {scanned && qrCodeData && (
//         <motion.div
//           className="p-3 bg-green-100 text-green-800 rounded-md flex items-center mt-2"
//           initial={{ opacity: 0, y: -5 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           <MdCheckCircle className="text-green-600 mr-2 text-xl" />
//           <span className="font-medium">{qrCodeData}</span>
//         </motion.div>
//       )}

//       <motion.button
//         onClick={handleQRCodePayment}
//         className="bg-blue-600 text-white px-4 py-3 rounded-md mt-4 w-full hover:bg-blue-700 transition-all"
//         whileTap={{ scale: 0.95 }}
//       >
//         Make Payment
//       </motion.button>
//     </div>
//   );
// };

// export default QRCodePayments;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MdCheckCircle } from "react-icons/md";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const QRCodePayments = () => {
//   const [qrCodeData, setQrCodeData] = useState("");
//   const [scanned, setScanned] = useState(false);
//   const [transactions, setTransactions] = useState([]);

//   const handleScan = (e) => {
//     setQrCodeData(e.target.value);
//     setScanned(true);
//   };

//   const handleQRCodePayment = () => {
//     if (!qrCodeData.trim()) {
//       toast.error("⚠️ Please scan a valid QR code!");
//       return;
//     }

//     toast.success(`✅ Payment successful for QR: ${qrCodeData}`);
//     setTransactions([{ code: qrCodeData, date: new Date() }, ...transactions]);
//     setQrCodeData("");
//     setScanned(false);
//   };

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-md max-w-md mx-auto mt-10">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-700">QR Code Payments</h2>
      
//       <motion.div
//         className="mb-4"
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <label className="block text-gray-600 mb-1">Scan QR Code</label>
//         <input
//           type="text"
//           value={qrCodeData}
//           onChange={handleScan}
//           className="border rounded-md p-3 w-full text-gray-800"
//           placeholder="Enter scanned QR code data"
//         />
//       </motion.div>

//       <AnimatePresence>
//         {scanned && qrCodeData && (
//           <motion.div
//             className="p-3 bg-green-100 text-green-800 rounded-md flex items-center mt-2"
//             initial={{ opacity: 0, y: -5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <MdCheckCircle className="text-green-600 mr-2 text-xl" />
//             <span className="font-medium">{qrCodeData}</span>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.button
//         onClick={handleQRCodePayment}
//         className={`bg-blue-600 text-white px-4 py-3 rounded-md mt-4 w-full transition-all ${
//           !scanned ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
//         }`}
//         whileTap={{ scale: scanned ? 0.95 : 1 }}
//         disabled={!scanned}
//       >
//         Make Payment
//       </motion.button>

//       {/* Recent Transactions */}
//       {transactions.length > 0 && (
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2">Recent Transactions</h3>
//           <ul className="space-y-2">
//             {transactions.map((tx, idx) => (
//               <li key={idx} className="p-2 bg-gray-100 rounded flex justify-between text-sm">
//                 <span>{tx.code}</span>
//                 <span className="text-gray-500">{tx.date.toLocaleString()}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QRCodePayments;

import React, { useState } from "react";

const QRCodePayments = () => {
  const [qrCodeData, setQrCodeData] = useState("");

  return (
    <div className="p-6 bg-white shadow-lg rounded-md max-w-md mx-auto mt-10 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">QR Code Payments</h2>
      <input
        type="text"
        value={qrCodeData}
        onChange={(e) => setQrCodeData(e.target.value)}
        placeholder="Enter QR code"
        className="border rounded-md p-3 w-full mb-4 text-gray-800"
      />
      <button
        className="bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-all w-full"
      >
        Make Payment
      </button>
      <p className="text-gray-500 mt-4 text-sm">
        This is a simplified dummy page.
      </p>
    </div>
  );
};

export default QRCodePayments;
