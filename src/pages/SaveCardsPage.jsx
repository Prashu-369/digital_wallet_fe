// import React, { useState } from 'react';

// const SaveCardsPage = () => {
//   const [cards, setCards] = useState([]); 
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cardholderName, setCardholderName] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [error, setError] = useState('');

//   const handleSaveCard = (e) => {
//     e.preventDefault();
//     if (!cardNumber || !expiryDate || !cardholderName || !cvv) {
//       setError('⚠️ Please fill all fields!');
//       return;
//     }
    
//     // Validate card number
//     if (cardNumber.length !== 16 || isNaN(cardNumber)) {
//       setError('⚠️ Card number must be 16 digits.');
//       return;
//     }

//     // Validate CVV
//     if (cvv.length !== 3 || isNaN(cvv)) {
//       setError('⚠️ CVV must be 3 digits.');
//       return;
//     }

//     const newCard = { cardNumber, expiryDate, cardholderName, cvv };
//     setCards([...cards, newCard]);

//     // Reset fields
//     setCardNumber(''); 
//     setExpiryDate(''); 
//     setCardholderName(''); 
//     setCvv(''); 
//     setError('');
//   };

//   const handleDeleteCard = (index) => {
//     const updatedCards = cards.filter((_, cardIndex) => cardIndex !== index);
//     setCards(updatedCards);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg border border-gray-200">
//         <h1 className="text-2xl font-semibold text-center mb-6">💳 Save Your Cards</h1>

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form onSubmit={handleSaveCard}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Cardholder Name</label>
//             <input
//               type="text"
//               value={cardholderName}
//               onChange={(e) => setCardholderName(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700">Card Number</label>
//             <input
//               type="text"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               required
//               maxLength="16"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
//             />
//           </div>

//           <div className="mb-4 flex justify-between">
//             <div className="w-1/2 pr-2">
//               <label className="block text-gray-700">Expiry Date</label>
//               <input
//                 type="month"
//                 value={expiryDate}
//                 onChange={(e) => setExpiryDate(e.target.value)}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
//               />
//             </div>

//             <div className="w-1/2 pl-2">
//               <label className="block text-gray-700">CVV</label>
//               <input
//                 type="text"
//                 value={cvv}
//                 onChange={(e) => setCvv(e.target.value)}
//                 required
//                 maxLength="3"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white rounded-md mt-6 hover:bg-blue-600 transition"
//           >
//             Save Card
//           </button>
//         </form>

//         <h2 className="text-xl font-semibold mt-10 mb-4">💼 Saved Cards</h2>
//         {cards.length === 0 ? (
//           <p className="text-center text-lg text-gray-500">No cards saved yet.</p>
//         ) : (
//           <ul>
//             {cards.map((card, index) => (
//               <li
//                 key={index}
//                 className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center"
//               >
//                 <div>
//                   <h3 className="text-lg font-semibold">{card.cardholderName}</h3>
//                   <p className="text-sm text-gray-500">💳 Ending in {card.cardNumber.slice(-4)}</p>
//                   <p className="text-sm text-gray-500">📅 Expires: {card.expiryDate}</p>
//                 </div>
//                 <button
//                   onClick={() => handleDeleteCard(index)}
//                   className="text-red-500 hover:text-red-600 transition"
//                 >
//                   ❌ Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SaveCardsPage;

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Utility function to detect card type
// const getCardType = (number) => {
//   if (/^4/.test(number)) return 'Visa';
//   if (/^5[1-5]/.test(number)) return 'MasterCard';
//   if (/^3[47]/.test(number)) return 'AMEX';
//   return 'Unknown';
// };

// const SaveCardsPage = () => {
//   const [cards, setCards] = useState([]);
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cardholderName, setCardholderName] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [error, setError] = useState('');
//   const [defaultCardIndex, setDefaultCardIndex] = useState(null);

//   // Load saved cards from localStorage
//   useEffect(() => {
//     const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
//     setCards(savedCards);
//     const defaultIndex = JSON.parse(localStorage.getItem('defaultCardIndex'));
//     if (defaultIndex !== null) setDefaultCardIndex(defaultIndex);
//   }, []);

//   // Save cards to localStorage
//   useEffect(() => {
//     localStorage.setItem('cards', JSON.stringify(cards));
//   }, [cards]);

//   useEffect(() => {
//     localStorage.setItem('defaultCardIndex', JSON.stringify(defaultCardIndex));
//   }, [defaultCardIndex]);

//   const formatCardNumber = (number) =>
//     number.replace(/\d(?=\d{4})/g, '*').replace(/(.{4})/g, '$1 ').trim();

//   const handleSaveCard = (e) => {
//     e.preventDefault();

//     if (!cardNumber || !expiryDate || !cardholderName || !cvv) {
//       setError('⚠️ Please fill all fields!');
//       return;
//     }

//     if (cardNumber.length !== 16 || isNaN(cardNumber)) {
//       setError('⚠️ Card number must be 16 digits.');
//       return;
//     }

//     if (cvv.length !== 3 || isNaN(cvv)) {
//       setError('⚠️ CVV must be 3 digits.');
//       return;
//     }

//     // Check if expiry date is in the past
//     const [year, month] = expiryDate.split('-');
//     const expDate = new Date(year, month - 1, 1);
//     const now = new Date();
//     if (expDate < now) {
//       setError('⚠️ Card is expired.');
//       return;
//     }

//     const newCard = {
//       cardNumber: cardNumber.slice(-4),
//       expiryDate,
//       cardholderName,
//       cvv: '***',
//       cardType: getCardType(cardNumber),
//     };

//     setCards([newCard, ...cards]);
//     toast.success('✅ Card saved successfully!');
//     setCardNumber('');
//     setExpiryDate('');
//     setCardholderName('');
//     setCvv('');
//     setError('');
//   };

//   const handleDeleteCard = (index) => {
//     if (!window.confirm('Are you sure you want to delete this card?')) return;
//     const updatedCards = cards.filter((_, i) => i !== index);
//     setCards(updatedCards);
//     if (defaultCardIndex === index) setDefaultCardIndex(null);
//     toast.info('🗑️ Card removed.');
//   };

//   const handleSetDefault = (index) => {
//     setDefaultCardIndex(index);
//     toast.success('⭐ Card set as default.');
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg border border-gray-200">
//         <h1 className="text-2xl font-semibold text-center mb-6">💳 Save Your Cards</h1>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form onSubmit={handleSaveCard}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Cardholder Name</label>
//             <input
//               type="text"
//               value={cardholderName}
//               onChange={(e) => setCardholderName(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700">Card Number</label>
//             <input
//               type="text"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               maxLength="16"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
//             />
//           </div>

//           <div className="mb-4 flex gap-4">
//             <div className="flex-1">
//               <label className="block text-gray-700">Expiry Date</label>
//               <input
//                 type="month"
//                 value={expiryDate}
//                 onChange={(e) => setExpiryDate(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-gray-700">CVV</label>
//               <input
//                 type="password"
//                 value={cvv}
//                 onChange={(e) => setCvv(e.target.value)}
//                 maxLength="3"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600 transition shadow-md"
//           >
//             Save Card
//           </button>
//         </form>

//         <h2 className="text-xl font-semibold mt-8 mb-4">💼 Saved Cards</h2>

//         <AnimatePresence>
//           {cards.length === 0 ? (
//             <p className="text-center text-lg text-gray-500">No cards saved yet.</p>
//           ) : (
//             <ul>
//               {cards.map((card, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className={`mb-4 p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center border-l-4 ${
//                     defaultCardIndex === index
//                       ? 'border-yellow-500'
//                       : 'border-blue-500'
//                   }`}
//                 >
//                   <div>
//                     <h3 className="text-lg font-semibold">
//                       {card.cardholderName} {card.cardType !== 'Unknown' && `(${card.cardType})`}
//                     </h3>
//                     <p className="text-sm text-gray-500">💳 {formatCardNumber(card.cardNumber)}</p>
//                     <p className="text-sm text-gray-500">📅 Expires: {card.expiryDate}</p>
//                     <p className="text-sm text-gray-500">🔒 CVV: {card.cvv}</p>
//                   </div>
//                   <div className="flex flex-col gap-1 items-end">
//                     {defaultCardIndex !== index && (
//                       <button
//                         onClick={() => handleSetDefault(index)}
//                         className="text-yellow-500 hover:text-yellow-600 font-semibold"
//                       >
//                         ⭐ Set Default
//                       </button>
//                     )}
//                     <button
//                       onClick={() => handleDeleteCard(index)}
//                       className="text-red-500 hover:text-red-600 transition"
//                     >
//                       ❌ Delete
//                     </button>
//                   </div>
//                 </motion.li>
//               ))}
//             </ul>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default SaveCardsPage;


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';

// // Utility function to detect card type
// const getCardType = (number) => {
//   if (/^4/.test(number)) return 'Visa';
//   if (/^5[1-5]/.test(number)) return 'MasterCard';
//   if (/^3[47]/.test(number)) return 'AMEX';
//   return 'Unknown';
// };

// const SaveCardsPage = ({ user }) => {
//   const [cards, setCards] = useState([]);
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cardholderName, setCardholderName] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [error, setError] = useState('');
//   const [defaultCardId, setDefaultCardId] = useState(null);

//   useEffect(() => {
//     if (!user) return;
//     fetchCards();
//   }, [user]);

//   const fetchCards = async () => {
//     try {
//       const res = await axios.get(`http://localhost:8088/api/cards/user/${user.id}`);
//       setCards(res.data);
//       const defaultCard = res.data.find((c) => c.isDefault);
//       if (defaultCard) setDefaultCardId(defaultCard.id);
//     } catch (err) {
//       console.error('Error fetching cards:', err);
//     }
//   };

//   const formatCardNumber = (number) =>
//     number.replace(/\d(?=\d{4})/g, '*').replace(/(.{4})/g, '$1 ').trim();

//   const handleSaveCard = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!cardNumber || !expiryDate || !cardholderName || !cvv) {
//       setError('⚠️ Please fill all fields!');
//       return;
//     }
//     if (cardNumber.length !== 16 || isNaN(cardNumber)) {
//       setError('⚠️ Card number must be 16 digits.');
//       return;
//     }
//     if (cvv.length !== 3 || isNaN(cvv)) {
//       setError('⚠️ CVV must be 3 digits.');
//       return;
//     }
//     const [year, month] = expiryDate.split('-');
//     const expDate = new Date(year, month - 1, 1);
//     if (expDate < new Date()) {
//       setError('⚠️ Card is expired.');
//       return;
//     }

//     const newCard = {
//       userId: user.id,
//       cardNumber: cardNumber.slice(-4),
//       expiryDate,
//       cardholderName,
//       cvv: '***',
//       cardType: getCardType(cardNumber),
//       isDefault: false,
//     };

//     try {
//       const res = await axios.post('http://localhost:8088/api/cards/add', newCard);
//       setCards([res.data, ...cards]);
//       toast.success('✅ Card saved successfully!');
//       setCardNumber('');
//       setExpiryDate('');
//       setCardholderName('');
//       setCvv('');
//     } catch (err) {
//       console.error('Error saving card:', err);
//       toast.error('Failed to save card.');
//     }
//   };

//   const handleDeleteCard = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this card?')) return;
//     try {
//       await axios.delete(`http://localhost:8088/api/cards/${id}`);
//       setCards(cards.filter((c) => c.id !== id));
//       if (defaultCardId === id) setDefaultCardId(null);
//       toast.info('🗑️ Card removed.');
//     } catch (err) {
//       console.error('Error deleting card:', err);
//       toast.error('Failed to delete card.');
//     }
//   };

//   const handleSetDefault = async (id) => {
//     try {
//       await axios.put(`http://localhost:8088/api/cards/default/${id}`);
//       setDefaultCardId(id);
//       // Refresh cards to update default
//       fetchCards();
//       toast.success('⭐ Card set as default.');
//     } catch (err) {
//       console.error('Error setting default:', err);
//       toast.error('Failed to set default card.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg border border-gray-200">
//         <h1 className="text-2xl font-semibold text-center mb-6">💳 Save Your Cards</h1>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form onSubmit={handleSaveCard}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Cardholder Name</label>
//             <input
//               type="text"
//               value={cardholderName}
//               onChange={(e) => setCardholderName(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700">Card Number</label>
//             <input
//               type="text"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               maxLength="16"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
//             />
//           </div>

//           <div className="mb-4 flex gap-4">
//             <div className="flex-1">
//               <label className="block text-gray-700">Expiry Date</label>
//               <input
//                 type="month"
//                 value={expiryDate}
//                 onChange={(e) => setExpiryDate(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-gray-700">CVV</label>
//               <input
//                 type="password"
//                 value={cvv}
//                 onChange={(e) => setCvv(e.target.value)}
//                 maxLength="3"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600 transition shadow-md"
//           >
//             Save Card
//           </button>
//         </form>

//         <h2 className="text-xl font-semibold mt-8 mb-4">💼 Saved Cards</h2>

//         <AnimatePresence>
//           {cards.length === 0 ? (
//             <p className="text-center text-lg text-gray-500">No cards saved yet.</p>
//           ) : (
//             <ul>
//               {cards.map((card) => (
//                 <motion.li
//                   key={card.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className={`mb-4 p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center border-l-4 ${
//                     defaultCardId === card.id ? 'border-yellow-500' : 'border-blue-500'
//                   }`}
//                 >
//                   <div>
//                     <h3 className="text-lg font-semibold">
//                       {card.cardholderName} {card.cardType !== 'Unknown' && `(${card.cardType})`}
//                     </h3>
//                     <p className="text-sm text-gray-500">💳 {formatCardNumber(card.cardNumber)}</p>
//                     <p className="text-sm text-gray-500">📅 Expires: {card.expiryDate}</p>
//                     <p className="text-sm text-gray-500">🔒 CVV: {card.cvv}</p>
//                   </div>
//                   <div className="flex flex-col gap-1 items-end">
//                     {defaultCardId !== card.id && (
//                       <button
//                         onClick={() => handleSetDefault(card.id)}
//                         className="text-yellow-500 hover:text-yellow-600 font-semibold"
//                       >
//                         ⭐ Set Default
//                       </button>
//                     )}
//                     <button
//                       onClick={() => handleDeleteCard(card.id)}
//                       className="text-red-500 hover:text-red-600 transition"
//                     >
//                       ❌ Delete
//                     </button>
//                   </div>
//                 </motion.li>
//               ))}
//             </ul>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default SaveCardsPage;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

// Utility function to detect card type
const getCardType = (number) => {
  if (/^4/.test(number)) return 'Visa';
  if (/^5[1-5]/.test(number)) return 'MasterCard';
  if (/^3[47]/.test(number)) return 'AMEX';
  return 'Unknown';
};

const SaveCardsPage = ({ user }) => {
  const [cards, setCards] = useState([]);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');
  const [defaultCardId, setDefaultCardId] = useState(null);

  useEffect(() => {
    if (!user) return;
    fetchCards();
  }, [user]);

  const fetchCards = async () => {
    try {
      const res = await axios.get(`http://localhost:8099/api/cards/user/${user.id}`);
      setCards(res.data);
      const defaultCard = res.data.find((c) => c.isDefault);
      if (defaultCard) setDefaultCardId(defaultCard.id);
    } catch (err) {
      console.error('Error fetching cards:', err);
    }
  };

  const formatCardNumber = (number) =>
    number.replace(/\d(?=\d{4})/g, '*').replace(/(.{4})/g, '$1 ').trim();

  const handleSaveCard = async (e) => {
    e.preventDefault();
    setError('');

    if (!cardNumber || !expiryDate || !cardholderName || !cvv) {
      setError('⚠️ Please fill all fields!');
      return;
    }
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      setError('⚠️ Card number must be 16 digits.');
      return;
    }
    if (cvv.length !== 3 || isNaN(cvv)) {
      setError('⚠️ CVV must be 3 digits.');
      return;
    }
    const [year, month] = expiryDate.split('-');
    const expDate = new Date(year, month - 1, 1);
    if (expDate < new Date()) {
      setError('⚠️ Card is expired.');
      return;
    }

    const newCard = {
      userId: user.id,
      cardNumber: cardNumber.slice(-4),
      expiryDate,
      cardholderName,
      cvv: '***',
      cardType: getCardType(cardNumber),
      isDefault: false,
    };

    try {
      const res = await axios.post('http://localhost:8099/api/cards/add', newCard);
      setCards([res.data, ...cards]);
      toast.success('✅ Card saved successfully!');
      setCardNumber('');
      setExpiryDate('');
      setCardholderName('');
      setCvv('');
    } catch (err) {
      console.error('Error saving card:', err);
      toast.error('Failed to save card.');
    }
  };

  const handleDeleteCard = async (id) => {
    if (!window.confirm('Are you sure you want to delete this card?')) return;
    try {
      await axios.delete(`http://localhost:8099/api/cards/${id}`);
      setCards(cards.filter((c) => c.id !== id));
      if (defaultCardId === id) setDefaultCardId(null);
      toast.info('🗑️ Card removed.');
    } catch (err) {
      console.error('Error deleting card:', err);
      toast.error('Failed to delete card.');
    }
  };

  const handleSetDefault = async (id) => {
    try {
      await axios.put(`http://localhost:8099/api/cards/default/${id}?userId=${user.id}`);
      setDefaultCardId(id);
      fetchCards();
      toast.success('⭐ Card set as default.');
    } catch (err) {
      console.error('Error setting default:', err);
      toast.error('Failed to set default card.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-2xl font-semibold text-center mb-6">💳 Save Your Cards</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSaveCard}>
          <div className="mb-4">
            <label className="block text-gray-700">Cardholder Name</label>
            <input
              type="text"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength="16"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700">Expiry Date</label>
              <input
                type="month"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">CVV</label>
              <input
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:ring focus:ring-blue-200"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600 transition shadow-md"
          >
            Save Card
          </button>
        </form>

        <h2 className="text-xl font-semibold mt-8 mb-4">💼 Saved Cards</h2>

        <AnimatePresence>
          {cards.length === 0 ? (
            <p className="text-center text-lg text-gray-500">No cards saved yet.</p>
          ) : (
            <ul>
              {cards.map((card) => (
                <motion.li
                  key={card.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-4 p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center border-l-4 ${
                    defaultCardId === card.id ? 'border-yellow-500' : 'border-blue-500'
                  }`}
                >
                  <div>
                    <h3 className="text-lg font-semibold">
                      {card.cardholderName} {card.cardType !== 'Unknown' && `(${card.cardType})`}
                    </h3>
                    <p className="text-sm text-gray-500">💳 {formatCardNumber(card.cardNumber)}</p>
                    <p className="text-sm text-gray-500">📅 Expires: {card.expiryDate}</p>
                    <p className="text-sm text-gray-500">🔒 CVV: {card.cvv}</p>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    {defaultCardId !== card.id && (
                      <button
                        onClick={() => handleSetDefault(card.id)}
                        className="text-yellow-500 hover:text-yellow-600 font-semibold"
                      >
                        ⭐ Set Default
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteCard(card.id)}
                      className="text-red-500 hover:text-red-600 transition"
                    >
                      ❌ Delete
                    </button>
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SaveCardsPage;
