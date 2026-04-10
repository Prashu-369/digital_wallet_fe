// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AddMoney = ({ onAddMoney }) => {
//   const [amount, setAmount] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const amt = parseFloat(amount);

//     // Reset error message
//     setErrorMessage("");

//     if (isNaN(amt) || amt <= 0) {
//       setErrorMessage("Please enter a valid amount.");
//       return;
//     }

//     try {
//       setIsLoading(true);
//       await onAddMoney(amt); // Assuming onAddMoney is async
//       alert(`Added ₹${amt.toFixed(2)} to your wallet`);
//       navigate("/wallet");
//     } catch (error) {
//       setErrorMessage("An error occurred while adding money. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow mt-10">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Add Money</h2>
      
//       {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <input
//             type="number"
//             placeholder="Amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             disabled={isLoading}
//           />
//         </div>

//         <div>
//           <button
//             type="submit"
//             className={`w-full py-2 rounded ${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"}`}
//             disabled={isLoading}
//           >
//             {isLoading ? "Adding..." : "Add Money"}
//           </button>
//         </div>

//         <div>
//           <button
//             type="button"
//             onClick={() => navigate("/wallet")}
//             className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
//           >
//             Back to Wallet
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddMoney;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AddMoney = ({ onAddMoney }) => {
//   const [amount, setAmount] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("card");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const quickAmounts = [100, 500, 1000, 2000];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const amt = parseFloat(amount);

//     setErrorMessage("");
//     setSuccessMessage("");

//     if (isNaN(amt) || amt <= 0) {
//       setErrorMessage("Please enter a valid amount.");
//       return;
//     }

//     try {
//       setIsLoading(true);
//       await onAddMoney(amt, paymentMethod); // Assuming async
//       setSuccessMessage(`₹${amt.toFixed(2)} added successfully via ${paymentMethod.toUpperCase()}!`);
//       setAmount("");
//     } catch (error) {
//       setErrorMessage("An error occurred while adding money. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow mt-10">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Add Money</h2>

//       {errorMessage && <p className="text-red-500 text-center mb-3">{errorMessage}</p>}
//       {successMessage && <p className="text-green-600 text-center mb-3">{successMessage}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Amount Input */}
//         <div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             disabled={isLoading}
//           />
//         </div>

//         {/* Quick Amount Buttons */}
//         <div className="flex gap-2 flex-wrap">
//           {quickAmounts.map((amt) => (
//             <button
//               key={amt}
//               type="button"
//               onClick={() => setAmount(amt)}
//               className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100"
//               disabled={isLoading}
//             >
//               ₹{amt}
//             </button>
//           ))}
//         </div>

//         {/* Payment Method */}
//         <div>
//           <label className="block mb-1 text-gray-600 font-medium">Payment Method</label>
//           <select
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             disabled={isLoading}
//           >
//             <option value="card">Credit/Debit Card</option>
//             <option value="upi">UPI</option>
//             <option value="netbanking">Net Banking</option>
//           </select>
//         </div>

//         {/* Submit */}
//         <div>
//           <button
//             type="submit"
//             className={`w-full py-2 rounded ${
//               isLoading
//                 ? "bg-gray-400 cursor-not-allowed text-white"
//                 : "bg-green-600 text-white hover:bg-green-700"
//             }`}
//             disabled={isLoading}
//           >
//             {isLoading ? "Processing..." : "Add Money"}
//           </button>
//         </div>

//         {/* Back Button */}
//         <div>
//           <button
//             type="button"
//             onClick={() => navigate("/wallet")}
//             className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
//           >
//             Back to Wallet
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddMoney;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AddMoney = ({ user }) => {
//   const [amount, setAmount] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("card");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const quickAmounts = [100, 500, 1000, 2000];

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const amt = parseFloat(amount);

//   //   setErrorMessage("");
//   //   setSuccessMessage("");

//   //   if (isNaN(amt) || amt <= 0) {
//   //     setErrorMessage("Please enter a valid amount.");
//   //     return;
//   //   }

//   //   try {
//   //     setIsLoading(true);
//   //     // Call backend API
//   //     const res = await axios.post("http://localhost:8088/api/wallet/add", {
//   //       userId: user.id,
//   //       amount: amt,
//   //       method: paymentMethod
//   //     });

//   //     if (res.status === 200) {
//   //       setSuccessMessage(`₹${amt.toFixed(2)} added successfully via ${paymentMethod.toUpperCase()}!`);
//   //       setAmount("");
//   //     } else {
//   //       setErrorMessage("Failed to add money. Please try again.");
//   //     }
//   //   } catch (error) {
//   //     console.error(error);
//   //     setErrorMessage("An error occurred while adding money. Please try again.");
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

  
//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   const amt = parseFloat(amount);

//   setErrorMessage("");
//   setSuccessMessage("");

//   if (isNaN(amt) || amt <= 0) {
//     setErrorMessage("Please enter a valid amount.");
//     return;
//   }

//   try {
//     setIsLoading(true);
//     // Call backend API
//     const response = await fetch("http://localhost:8088/api/wallet/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ userId: user.id, amount: amt }),
//     });
//     const data = await response.json();

//     if (response.ok) {
//       setSuccessMessage(`₹${amt.toFixed(2)} added successfully!`);
//       onAddMoney(amt); // Update frontend balance
//       setAmount("");
//     } else {
//       setErrorMessage(data.error || "Error adding money");
//     }
//   } catch (error) {
//     setErrorMessage("An error occurred. Please try again.");
//   } finally {
//     setIsLoading(false);
//   }
// };


//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow mt-10">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Add Money</h2>

//       {errorMessage && <p className="text-red-500 text-center mb-3">{errorMessage}</p>}
//       {successMessage && <p className="text-green-600 text-center mb-3">{successMessage}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Amount Input */}
//         <div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             disabled={isLoading}
//           />
//         </div>

//         {/* Quick Amount Buttons */}
//         <div className="flex gap-2 flex-wrap">
//           {quickAmounts.map((amt) => (
//             <button
//               key={amt}
//               type="button"
//               onClick={() => setAmount(amt)}
//               className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100"
//               disabled={isLoading}
//             >
//               ₹{amt}
//             </button>
//           ))}
//         </div>

//         {/* Payment Method */}
//         <div>
//           <label className="block mb-1 text-gray-600 font-medium">Payment Method</label>
//           <select
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             disabled={isLoading}
//           >
//             <option value="card">Credit/Debit Card</option>
//             <option value="upi">UPI</option>
//             <option value="netbanking">Net Banking</option>
//           </select>
//         </div>

//         {/* Submit */}
//         <div>
//           <button
//             type="submit"
//             className={`w-full py-2 rounded ${
//               isLoading
//                 ? "bg-gray-400 cursor-not-allowed text-white"
//                 : "bg-green-600 text-white hover:bg-green-700"
//             }`}
//             disabled={isLoading}
//           >
//             {isLoading ? "Processing..." : "Add Money"}
//           </button>
//         </div>

//         {/* Back Button */}
//         <div>
//           <button
//             type="button"
//             onClick={() => navigate("/wallet")}
//             className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
//           >
//             Back to Wallet
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddMoney;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMoney = ({ user }) => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const quickAmounts = [100, 500, 1000, 2000];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);

    setErrorMessage("");
    setSuccessMessage("");

    if (isNaN(amt) || amt <= 0) {
      setErrorMessage("Please enter a valid amount.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8099/api/wallet/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, amount: amt }),
      });
      if (!response.ok) throw new Error("Failed to add money");
      const data = await response.json();
      setSuccessMessage(`₹${amt.toFixed(2)} added successfully via ${paymentMethod.toUpperCase()}!`);
      setAmount("");
    } catch (error) {
      setErrorMessage("An error occurred while adding money. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Money</h2>
      {errorMessage && <p className="text-red-500 text-center mb-3">{errorMessage}</p>}
      {successMessage && <p className="text-green-600 text-center mb-3">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            disabled={isLoading}
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {quickAmounts.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => setAmount(amt)}
              className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100"
              disabled={isLoading}
            >
              ₹{amt}
            </button>
          ))}
        </div>

        <div>
          <label className="block mb-1 text-gray-600 font-medium">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            disabled={isLoading}
          >
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Net Banking</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className={`w-full py-2 rounded ${isLoading ? "bg-gray-400 cursor-not-allowed text-white" : "bg-green-600 text-white hover:bg-green-700"}`}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Add Money"}
          </button>
        </div>

        <div>
          <button
            type="button"
            onClick={() => navigate("/wallet")}
            className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
          >
            Back to Wallet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMoney;
