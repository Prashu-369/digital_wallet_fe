// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SendMoney = ({ onSendMoney }) => {
//   const [amount, setAmount] = useState("");
//   const [recipient, setRecipient] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const amt = parseFloat(amount);

//     // Reset error message
//     setErrorMessage("");

//     if (!recipient || isNaN(amt) || amt <= 0) {
//       setErrorMessage("Please enter a valid recipient and a positive amount.");
//       return;
//     }

//     try {
//       setIsLoading(true);
//       await onSendMoney(amt, recipient); // Assuming onSendMoney is async
//       alert(`Sent ₹${amt} to ${recipient}`);
//       navigate("/wallet"); // Navigate back to wallet after sending
//     } catch (error) {
//       setErrorMessage("An error occurred while sending money. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow mt-10">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Send Money</h2>
      
//       {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <input
//             type="text"
//             placeholder="Recipient Name or Email"
//             value={recipient}
//             onChange={(e) => setRecipient(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             disabled={isLoading}
//           />
//         </div>

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
//             className={`w-full py-2 rounded ${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
//             disabled={isLoading}
//           >
//             {isLoading ? "Sending..." : "Send Money"}
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

// export default SendMoney;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SendMoney = ({ onSendMoney }) => {
//   const [amount, setAmount] = useState("");
//   const [recipient, setRecipient] = useState("");
//   const [note, setNote] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   // Mock recent contacts (could come from backend later)
//   const contacts = ["alice@example.com", "bob@example.com", "charlie@example.com"];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const amt = parseFloat(amount);

//     setErrorMessage("");
//     setSuccessMessage("");

//     if (!recipient || isNaN(amt) || amt <= 0) {
//       setErrorMessage("Please enter a valid recipient and a positive amount.");
//       return;
//     }

//     try {
//       setIsLoading(true);
//       await onSendMoney(amt, recipient, note); // Assuming async
//       setSuccessMessage(`₹${amt.toFixed(2)} sent to ${recipient}${note ? ` (${note})` : ""}`);
//       setAmount("");
//       setRecipient("");
//       setNote("");
//     } catch (error) {
//       setErrorMessage("An error occurred while sending money. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow mt-10">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Send Money</h2>

//       {errorMessage && <p className="text-red-500 text-center mb-3">{errorMessage}</p>}
//       {successMessage && <p className="text-green-600 text-center mb-3">{successMessage}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Recipient Input */}
//         <div>
//           <input
//             type="text"
//             placeholder="Recipient Name or Email"
//             value={recipient}
//             onChange={(e) => setRecipient(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             disabled={isLoading}
//           />
//           {/* Recent contacts */}
//           <div className="flex gap-2 mt-2 flex-wrap">
//             {contacts.map((c) => (
//               <button
//                 key={c}
//                 type="button"
//                 onClick={() => setRecipient(c)}
//                 className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100"
//                 disabled={isLoading}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>
//         </div>

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

//         {/* Note/Purpose */}
//         <div>
//           <input
//             type="text"
//             placeholder="Add a note (optional)"
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             disabled={isLoading}
//           />
//         </div>

//         {/* Send Button */}
//         <div>
//           <button
//             type="submit"
//             className={`w-full py-2 rounded ${
//               isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
//             }`}
//             disabled={isLoading}
//           >
//             {isLoading ? "Sending..." : "Send Money"}
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

// export default SendMoney;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SendMoney = ({ onSendMoney }) => {
//   const [amount, setAmount] = useState("");
//   const [recipient, setRecipient] = useState("");
//   const [note, setNote] = useState("");
//   const [method, setMethod] = useState("wallet"); // default method
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   // Mock recent contacts (can come from backend later)
//   const contacts = ["alice@example.com", "bob@example.com", "charlie@example.com"];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const amt = parseFloat(amount);

//     setErrorMessage("");
//     setSuccessMessage("");

//     if (!recipient || isNaN(amt) || amt <= 0) {
//       setErrorMessage("Please enter valid details and a positive amount.");
//       return;
//     }

//     try {
//       setIsLoading(true);
//       await onSendMoney(amt, recipient, note, method); // method added
//       setSuccessMessage(
//         `₹${amt.toFixed(2)} sent via ${method.toUpperCase()} to ${recipient}${
//           note ? ` (${note})` : ""
//         }`
//       );
//       setAmount("");
//       setRecipient("");
//       setNote("");
//     } catch (error) {
//       setErrorMessage("An error occurred while sending money. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow mt-10">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Send Money</h2>

//       {errorMessage && <p className="text-red-500 text-center mb-3">{errorMessage}</p>}
//       {successMessage && <p className="text-green-600 text-center mb-3">{successMessage}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Payment Method Selector */}
//         <div className="flex justify-around mb-2">
//           {["wallet", "upi", "bank", "contact"].map((m) => (
//             <button
//               key={m}
//               type="button"
//               onClick={() => {
//                 setMethod(m);
//                 setRecipient("");
//               }}
//               className={`px-3 py-1 rounded ${
//                 method === m ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
//               }`}
//             >
//               {m === "wallet"
//                 ? "Wallet ID"
//                 : m === "upi"
//                 ? "UPI"
//                 : m === "bank"
//                 ? "Bank"
//                 : "Contacts"}
//             </button>
//           ))}
//         </div>

//         {/* Recipient Input Fields based on method */}
//         {method === "wallet" && (
//           <input
//             type="text"
//             placeholder="Enter Wallet Email/ID"
//             value={recipient}
//             onChange={(e) => setRecipient(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             disabled={isLoading}
//           />
//         )}

//         {method === "upi" && (
//           <input
//             type="text"
//             placeholder="Enter UPI ID (e.g. user@upi)"
//             value={recipient}
//             onChange={(e) => setRecipient(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             disabled={isLoading}
//           />
//         )}

//         {method === "bank" && (
//           <div className="space-y-2">
//             <input
//               type="text"
//               placeholder="Account Number"
//               value={recipient}
//               onChange={(e) => setRecipient(e.target.value)}
//               className="w-full border border-gray-300 p-2 rounded"
//               disabled={isLoading}
//             />
//             <input
//               type="text"
//               placeholder="IFSC Code"
//               className="w-full border border-gray-300 p-2 rounded"
//               disabled={isLoading}
//             />
//             <input
//               type="text"
//               placeholder="Account Holder Name"
//               className="w-full border border-gray-300 p-2 rounded"
//               disabled={isLoading}
//             />
//           </div>
//         )}

//         {method === "contact" && (
//           <div className="flex gap-2 flex-wrap">
//             {contacts.map((c) => (
//               <button
//                 key={c}
//                 type="button"
//                 onClick={() => setRecipient(c)}
//                 className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100"
//                 disabled={isLoading}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>
//         )}

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

//         {/* Note/Purpose */}
//         <div>
//           <input
//             type="text"
//             placeholder="Add a note (optional)"
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             disabled={isLoading}
//           />
//         </div>

//         {/* Send Button */}
//         <div>
//           <button
//             type="submit"
//             className={`w-full py-2 rounded ${
//               isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
//             }`}
//             disabled={isLoading}
//           >
//             {isLoading ? "Sending..." : "Send Money"}
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

// export default SendMoney;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const SendMoney = ({ user }) => {
//   const [amount, setAmount] = useState("");
//   const [recipient, setRecipient] = useState("");
//   const [note, setNote] = useState("");
//   const [method, setMethod] = useState("wallet"); // default method
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   // Mock recent contacts (can come from backend later)
//   const contacts = ["alice@example.com", "bob@example.com", "charlie@example.com"];

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const amt = parseFloat(amount);

//   //   setErrorMessage("");
//   //   setSuccessMessage("");

//   //   if (!recipient || isNaN(amt) || amt <= 0) {
//   //     setErrorMessage("Please enter valid details and a positive amount.");
//   //     return;
//   //   }

//   //   try {
//   //     setIsLoading(true);

//   //     // Call backend API
//   //     const res = await axios.post("http://localhost:8088/api/wallet/send", {
//   //       userId: user.id,
//   //       recipient,
//   //       amount: amt,
//   //       note,
//   //       method
//   //     });

//   //     if (res.status === 200) {
//   //       setSuccessMessage(
//   //         `₹${amt.toFixed(2)} sent via ${method.toUpperCase()} to ${recipient}${
//   //           note ? ` (${note})` : ""
//   //         }`
//   //       );
//   //       setAmount("");
//   //       setRecipient("");
//   //       setNote("");
//   //     } else {
//   //       setErrorMessage("Failed to send money. Please try again.");
//   //     }
//   //   } catch (error) {
//   //     console.error(error);
//   //     setErrorMessage("An error occurred while sending money. Please try again.");
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   const amt = parseFloat(amount);

//   setErrorMessage("");
//   setSuccessMessage("");

//   if (!recipient || isNaN(amt) || amt <= 0) {
//     setErrorMessage("Please enter valid details and a positive amount.");
//     return;
//   }

//   try {
//     setIsLoading(true);
//     // Call backend API
//     const response = await fetch("http://localhost:8088/api/wallet/send", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ senderId: user.id, recipientId: recipientUserId, amount: amt }),
//     });
//     const data = await response.json();

//     if (response.ok) {
//       setSuccessMessage(`₹${amt.toFixed(2)} sent successfully!`);
//       onSendMoney(amt, recipient); // Update frontend balance
//       setAmount("");
//       setRecipient("");
//       setNote("");
//     } else {
//       setErrorMessage(data.error || "Error sending money");
//     }
//   } catch (error) {
//     setErrorMessage("An error occurred. Please try again.");
//   } finally {
//     setIsLoading(false);
//   }
// };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow mt-10">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Send Money</h2>

//       {errorMessage && <p className="text-red-500 text-center mb-3">{errorMessage}</p>}
//       {successMessage && <p className="text-green-600 text-center mb-3">{successMessage}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Payment Method Selector */}
//         <div className="flex justify-around mb-2">
//           {["wallet", "upi", "bank", "contact"].map((m) => (
//             <button
//               key={m}
//               type="button"
//               onClick={() => {
//                 setMethod(m);
//                 setRecipient("");
//               }}
//               className={`px-3 py-1 rounded ${
//                 method === m ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
//               }`}
//             >
//               {m === "wallet"
//                 ? "Wallet ID"
//                 : m === "upi"
//                 ? "UPI"
//                 : m === "bank"
//                 ? "Bank"
//                 : "Contacts"}
//             </button>
//           ))}
//         </div>

//         {/* Recipient Input Fields based on method */}
//         {method === "wallet" && (
//           <input
//             type="text"
//             placeholder="Enter Wallet Email/ID"
//             value={recipient}
//             onChange={(e) => setRecipient(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             disabled={isLoading}
//           />
//         )}

//         {method === "upi" && (
//           <input
//             type="text"
//             placeholder="Enter UPI ID (e.g. user@upi)"
//             value={recipient}
//             onChange={(e) => setRecipient(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             disabled={isLoading}
//           />
//         )}

//         {method === "bank" && (
//           <div className="space-y-2">
//             <input
//               type="text"
//               placeholder="Account Number"
//               value={recipient}
//               onChange={(e) => setRecipient(e.target.value)}
//               className="w-full border border-gray-300 p-2 rounded"
//               disabled={isLoading}
//             />
//             <input
//               type="text"
//               placeholder="IFSC Code"
//               className="w-full border border-gray-300 p-2 rounded"
//               disabled={isLoading}
//             />
//             <input
//               type="text"
//               placeholder="Account Holder Name"
//               className="w-full border border-gray-300 p-2 rounded"
//               disabled={isLoading}
//             />
//           </div>
//         )}

//         {method === "contact" && (
//           <div className="flex gap-2 flex-wrap">
//             {contacts.map((c) => (
//               <button
//                 key={c}
//                 type="button"
//                 onClick={() => setRecipient(c)}
//                 className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100"
//                 disabled={isLoading}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>
//         )}

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

//         {/* Note/Purpose */}
//         <div>
//           <input
//             type="text"
//             placeholder="Add a note (optional)"
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             disabled={isLoading}
//           />
//         </div>

//         {/* Send Button */}
//         <div>
//           <button
//             type="submit"
//             className={`w-full py-2 rounded ${
//               isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
//             }`}
//             disabled={isLoading}
//           >
//             {isLoading ? "Sending..." : "Send Money"}
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

// export default SendMoney;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SendMoney = ({ user }) => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [note, setNote] = useState("");
  const [method, setMethod] = useState("wallet");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const contacts = ["alice@example.com", "bob@example.com", "charlie@example.com"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);

    setErrorMessage("");
    setSuccessMessage("");

    if (!recipient || isNaN(amt) || amt <= 0) {
      setErrorMessage("Please enter valid details and a positive amount.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8099/api/wallet/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          senderId: user.id,
          recipientId: 1, // replace with actual recipient ID mapping
          amount: amt,
        }),
      });
      if (!response.ok) throw new Error("Failed to send money");
      const data = await response.json();
      setSuccessMessage(`₹${amt.toFixed(2)} sent successfully!`);
      setAmount("");
      setRecipient("");
      setNote("");
    } catch (error) {
      setErrorMessage("An error occurred while sending money. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Send Money</h2>
      {errorMessage && <p className="text-red-500 text-center mb-3">{errorMessage}</p>}
      {successMessage && <p className="text-green-600 text-center mb-3">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-around mb-2">
          {["wallet", "upi", "bank", "contact"].map((m) => (
            <button key={m} type="button" onClick={() => { setMethod(m); setRecipient(""); }}
              className={`px-3 py-1 rounded ${method === m ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}>
              {m === "wallet" ? "Wallet ID" : m === "upi" ? "UPI" : m === "bank" ? "Bank" : "Contacts"}
            </button>
          ))}
        </div>

        {method === "wallet" && (
          <input type="text" placeholder="Enter Wallet Email/ID" value={recipient} onChange={(e) => setRecipient(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded" disabled={isLoading} />
        )}

        <div>
          <input type="number" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded" disabled={isLoading} />
        </div>

        <div>
          <input type="text" placeholder="Add a note (optional)" value={note} onChange={(e) => setNote(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded" disabled={isLoading} />
        </div>

        <div>
          <button type="submit" className={`w-full py-2 rounded ${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`} disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Money"}
          </button>
        </div>

        <div>
          <button type="button" onClick={() => navigate("/wallet")} className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300">
            Back to Wallet
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMoney;
