// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { auth } from './firebase';
// import { signOut } from 'firebase/auth';

// import Login from './components/Login';
// import Signup from './components/Signup';
// import Wallet from './components/Wallet';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';

// import Home from './pages/Home';
// import TalkPay from './pages/TalkPay';
// import SendMoney from './pages/SendMoney';
// import AddMoney from './pages/AddMoney';
// import Profile from './pages/Profile';
// import Transactions from './pages/Transactions';
// import BillPayments from './pages/BillPayments';
// import QRCodePayments from './pages/QRCodePayments';
// import TransactionCategories from './pages/TransactionCategories';
// import MultiCurrency from './pages/MultiCurrency';
// import Rewards from './pages/Rewards';
// import SaveCardsPage from './pages/SaveCardsPage';
// import BillSplitterPage from './pages/BillSplitterPage';
// import BillSplitResultsPage from './pages/BillSplitResultsPage';
// import PaymentHistoryPage from './pages/PaymentHistoryPage';
// import BankLinkingPage from './pages/BankLinkingPage';
// import TransactionHistory from './pages/TransactionHistory';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [balance, setBalance] = useState(1000);
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleLogin = () => setUser(auth.currentUser);
//   const handleLogout = async () => {
//     await signOut(auth);
//     setUser(null);
//   };

//   const handleAddMoney = (amount) => {
//     setBalance(prev => prev + amount);
//     setTransactions(prev => [
//       { type: 'Added', amount, timestamp: new Date().toLocaleString() },
//       ...prev,
//     ]);
//   };

//   const handleSendMoney = (amount, recipient) => {
//     if (amount > balance) {
//       alert("Insufficient Balance!");
//       return;
//     }
//     setBalance(prev => prev - amount);
//     setTransactions(prev => [
//       { type: `Sent to ${recipient}`, amount, timestamp: new Date().toLocaleString() },
//       ...prev,
//     ]);
//   };

//   if (loading) return <div className="h-screen flex justify-center items-center">Loading...</div>;

//   return (
//     <Router>
//       <Routes>
//         {!user ? (
//           <>
//             <Route path="/login" element={<AuthScreen><Login onLogin={handleLogin} /></AuthScreen>} />
//             <Route path="/signup" element={<AuthScreen><Signup onLogin={handleLogin} /></AuthScreen>} />
//             <Route path="*" element={<Navigate to="/login" replace />} />
//           </>
//         ) : (
//           <Route path="*" element={
//             <Dashboard
//               user={user}
//               onLogout={handleLogout}
//               balance={balance}
//               transactions={transactions}
//               onAddMoney={handleAddMoney}
//               onSendMoney={handleSendMoney}
//             />
//           } />
//         )}
//       </Routes>
//     </Router>
//   );
// };

// const AuthScreen = ({ children }) => (
//   <div className="h-screen flex justify-center items-center bg-white">{children}</div>
// );

// const Dashboard = ({ user, onLogout, balance, transactions, onAddMoney, onSendMoney }) => (
//   <div className="min-h-screen bg-gray-100 flex">
//     <Sidebar />
//     <div className="flex-1 flex flex-col">
//       <Navbar onLogout={onLogout} />
//       <div className="p-6">
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" replace />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/talkpay" element={<TalkPay />} />
//           <Route path="/wallet" element={<Wallet user={user} balance={balance} transactions={transactions} />} />
//           <Route path="/send" element={<SendMoney onSendMoney={onSendMoney} />} />
//           <Route path="/add" element={<AddMoney onAddMoney={onAddMoney} />} />
//           <Route path="/profile" element={<Profile user={user} />} />
//           <Route path="/transactions" element={<Transactions transactions={transactions} />} />
//           <Route path="/bill-payments" element={<BillPayments />} />
//           <Route path="/qr-payments" element={<QRCodePayments />} />
//           <Route path="/categories" element={<TransactionCategories />} />
//           <Route path="/multi-currency" element={<MultiCurrency />} />
//           <Route path="/rewards" element={<Rewards />} />
//           <Route path="/save-cards" element={<SaveCardsPage />} />
//           <Route path="/bill-splitter" element={<BillSplitterPage />} />
//           <Route path="/bill-split-results" element={<BillSplitResultsPage />} />
//           <Route path="/payment-history" element={<PaymentHistoryPage transactions={transactions} />} />
//           <Route path="/bank-link" element={<BankLinkingPage />} />
//           <Route path="/transaction-history" element={<TransactionHistory />} />
//         </Routes>
//       </div>
//     </div>
//   </div>
// );

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// import Login from './components/Login';
// import Signup from './components/Signup';
// import Wallet from './components/Wallet';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';

// import Home from './pages/Home';
// import TalkPay from './pages/TalkPay';
// import SendMoney from './pages/SendMoney';
// import AddMoney from './pages/AddMoney';
// import Profile from './pages/Profile';
// import Transactions from './pages/Transactions';
// import BillPayments from './pages/BillPayments';
// import QRCodePayments from './pages/QRCodePayments';
// import TransactionCategories from './pages/TransactionCategories';
// import MultiCurrency from './pages/MultiCurrency';
// import Rewards from './pages/Rewards';
// import SaveCardsPage from './pages/SaveCardsPage';
// import BillSplitterPage from './pages/BillSplitterPage';
// import BillSplitResultsPage from './pages/BillSplitResultsPage';
// import PaymentHistoryPage from './pages/PaymentHistoryPage';
// import BankLinkingPage from './pages/BankLinkingPage';
// import TransactionHistory from './pages/TransactionHistory';

// const App = () => {
//   // Initialize user from localStorage (JWT login)
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem("user");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   const [balance, setBalance] = useState(1000);
//   const [transactions, setTransactions] = useState([]);

//   const handleLogin = () => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) setUser(JSON.parse(savedUser));
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   const handleAddMoney = (amount) => {
//     setBalance(prev => prev + amount);
//     setTransactions(prev => [
//       { type: 'Added', amount, timestamp: new Date().toLocaleString() },
//       ...prev,
//     ]);
//   };

//   const handleSendMoney = (amount, recipient) => {
//     if (amount > balance) {
//       alert("Insufficient Balance!");
//       return;
//     }
//     setBalance(prev => prev - amount);
//     setTransactions(prev => [
//       { type: `Sent to ${recipient}`, amount, timestamp: new Date().toLocaleString() },
//       ...prev,
//     ]);
//   };

//   return (
//     <Router>
//       <Routes>
//         {!user ? (
//           <>
//             <Route path="/login" element={<AuthScreen><Login onLogin={handleLogin} /></AuthScreen>} />
//             <Route path="/signup" element={<AuthScreen><Signup onLogin={handleLogin} /></AuthScreen>} />
//             <Route path="*" element={<Navigate to="/login" replace />} />
//           </>
//         ) : (
//           <Route path="*" element={
//             <Dashboard
//               user={user}
//               onLogout={handleLogout}
//               balance={balance}
//               transactions={transactions}
//               onAddMoney={handleAddMoney}
//               onSendMoney={handleSendMoney}
//             />
//           } />
//         )}
//       </Routes>
//     </Router>
//   );
// };

// const AuthScreen = ({ children }) => (
//   <div className="h-screen flex justify-center items-center bg-white">{children}</div>
// );

// const Dashboard = ({ user, onLogout, balance, transactions, onAddMoney, onSendMoney }) => (
//   <div className="min-h-screen bg-gray-100 flex">
//     <Sidebar />
//     <div className="flex-1 flex flex-col">
//       <Navbar onLogout={onLogout} />
//       <div className="p-6">
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" replace />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/talkpay" element={<TalkPay />} />
//           <Route path="/wallet" element={<Wallet user={user} balance={balance} transactions={transactions} />} />
//           <Route path="/send" element={<SendMoney onSendMoney={onSendMoney} />} />
//           <Route path="/add" element={<AddMoney onAddMoney={onAddMoney} />} />
//           <Route path="/profile" element={<Profile user={user} />} />
//           <Route path="/transactions" element={<Transactions transactions={transactions} />} />
//           <Route path="/bill-payments" element={<BillPayments />} />
//           <Route path="/qr-payments" element={<QRCodePayments />} />
//           <Route path="/categories" element={<TransactionCategories />} />
//           <Route path="/multi-currency" element={<MultiCurrency />} />
//           <Route path="/rewards" element={<Rewards />} />
//           <Route path="/save-cards" element={<SaveCardsPage />} />
//           <Route path="/bill-splitter" element={<BillSplitterPage />} />
//           <Route path="/bill-split-results" element={<BillSplitResultsPage />} />
//           <Route path="/payment-history" element={<PaymentHistoryPage transactions={transactions} />} />
//           <Route path="/bank-link" element={<BankLinkingPage />} />
//           <Route path="/transaction-history" element={<TransactionHistory />} />
//         </Routes>
//       </div>
//     </div>
//   </div>
// );

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// import Login from './components/Login';
// import Signup from './components/Signup';
// import Wallet from './components/Wallet';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';

// import Home from './pages/Home';
// import TalkPay from './pages/TalkPay';
// import SendMoney from './pages/SendMoney';
// import AddMoney from './pages/AddMoney';
// import Profile from './pages/Profile';
// import Transactions from './pages/Transactions';
// import BillPayments from './pages/BillPayments';
// import QRCodePayments from './pages/QRCodePayments';
// import TransactionCategories from './pages/TransactionCategories';
// import MultiCurrency from './pages/MultiCurrency';
// import Rewards from './pages/Rewards';
// import SaveCardsPage from './pages/SaveCardsPage';
// import BillSplitterPage from './pages/BillSplitterPage';
// import BillSplitResultsPage from './pages/BillSplitResultsPage';
// //import PaymentHistoryPage from './pages/PaymentHistoryPage';
// import BankLinkingPage from './pages/BankLinkingPage';
// //import TransactionHistory from './pages/TransactionHistory';

// const App = () => {
//   // Initialize user from localStorage (JWT login)
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem("user");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   const [balance, setBalance] = useState(1000);
//   const [transactions, setTransactions] = useState([]);

//   // Login handler
//   const handleLogin = () => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) setUser(JSON.parse(savedUser));
//   };

//   // Logout handler
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   // Add money
//   const handleAddMoney = (amount) => {
//     setBalance(prev => prev + amount);
//     setTransactions(prev => [
//       { type: 'Added', amount, timestamp: new Date().toLocaleString() },
//       ...prev,
//     ]);
//   };

//   // Send money
//   const handleSendMoney = (amount, recipient) => {
//     if (amount > balance) {
//       alert("Insufficient Balance!");
//       return;
//     }
//     setBalance(prev => prev - amount);
//     setTransactions(prev => [
//       { type: `Sent to ${recipient}`, amount, timestamp: new Date().toLocaleString() },
//       ...prev,
//     ]);
//   };

//   return (
//     <Router>
//       <Routes>
//         {!user ? (
//           <>
//             <Route path="/login" element={<AuthScreen><Login onLogin={handleLogin} /></AuthScreen>} />
//             <Route path="/signup" element={<AuthScreen><Signup onLogin={handleLogin} /></AuthScreen>} />
//             <Route path="*" element={<Navigate to="/login" replace />} />
//           </>
//         ) : (
//           <Route path="*" element={
//             <Dashboard
//               user={user}
//               setUser={setUser} // Pass setter for profile updates
//               onLogout={handleLogout}
//               balance={balance}
//               transactions={transactions}
//               onAddMoney={handleAddMoney}
//               onSendMoney={handleSendMoney}
//             />
//           } />
//         )}
//       </Routes>
//     </Router>
//   );
// };

// // Auth wrapper
// const AuthScreen = ({ children }) => (
//   <div className="h-screen flex justify-center items-center bg-white">{children}</div>
// );

// // Dashboard layout
// const Dashboard = ({ user, setUser, onLogout, balance, transactions, onAddMoney, onSendMoney }) => (
//   <div className="min-h-screen bg-gray-100 flex">
//     <Sidebar />
//     <div className="flex-1 flex flex-col">
//       <Navbar onLogout={onLogout} />
//       <div className="p-6">
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" replace />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/talkpay" element={<TalkPay />} />
//           <Route path="/wallet" element={<Wallet user={user} balance={balance} transactions={transactions} />} />
//           <Route path="/send" element={<SendMoney onSendMoney={onSendMoney} />} />
//           <Route path="/add" element={<AddMoney onAddMoney={onAddMoney} />} />
//           <Route path="/profile" element={
//             <Profile
//               user={user}
//               onUpdateUser={(updatedUser) => {
//                 setUser(updatedUser);
//                 localStorage.setItem("user", JSON.stringify(updatedUser));
//               }}
//             />
//           } />
//           <Route path="/transactions" element={<Transactions transactions={transactions} />} />
//           <Route path="/bill-payments" element={<BillPayments />} />
//           <Route path="/qr-payments" element={<QRCodePayments />} />
//           <Route path="/categories" element={<TransactionCategories />} />
//           <Route path="/multi-currency" element={<MultiCurrency />} />
//           <Route path="/rewards" element={<Rewards />} />
//           <Route path="/save-cards" element={<SaveCardsPage />} />
//           <Route path="/bill-splitter" element={<BillSplitterPage />} />
//           <Route path="/bill-split-results" element={<BillSplitResultsPage />} />
          
//           <Route path="/bank-link" element={<BankLinkingPage />} />
          
//         </Routes>
//       </div>
//     </div>
//   </div>
// );

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import { HashRouter as Router } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Wallet from './components/Wallet';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import TalkPay from './pages/TalkPay';
import SendMoney from './pages/SendMoney';
import AddMoney from './pages/AddMoney';
import Profile from './pages/Profile';
import Transactions from './pages/Transactions';
import BillPayments from './pages/BillPayments';
import QRCodePayments from './pages/QRCodePayments';
import TransactionCategories from './pages/TransactionCategories';
import MultiCurrency from './pages/MultiCurrency';
import Rewards from './pages/Rewards';
import SaveCardsPage from './pages/SaveCardsPage';
import BillSplitterPage from './pages/BillSplitterPage';
import BillSplitResultsPage from './pages/BillSplitResultsPage';
//import PaymentHistoryPage from './pages/PaymentHistoryPage';
import BankLinkingPage from './pages/BankLinkingPage';
//import TransactionHistory from './pages/TransactionHistory';

const App = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  // Fetch wallet from backend
  const fetchWallet = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8088/api/wallet/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch wallet");
      const data = await response.json();
      setBalance(data.balance);
      setTransactions(data.transactions);
    } catch (error) {
      console.error("Error fetching wallet", error);
    }
  };

  useEffect(() => {
    if (user) fetchWallet(user.id);
  }, [user]);

  const handleLogin = () => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleAddMoney = async (amount) => {
    try {
      const response = await fetch("http://localhost:8088/api/wallet/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, amount }),
      });
      if (!response.ok) throw new Error("Failed to add money");
      const data = await response.json();
      // Update state
      setBalance(prev => prev + data.transaction.amount);
      setTransactions(prev => [data.transaction, ...prev]);
    } catch (error) {
      console.error(error);
      alert("Failed to add money.");
    }
  };

  const handleSendMoney = async (amount, recipientId) => {
    try {
      const response = await fetch("http://localhost:8088/api/wallet/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senderId: user.id, recipientId, amount }),
      });
      if (!response.ok) throw new Error("Failed to send money");
      const data = await response.json();
      // Update state
      setBalance(prev => prev - data.transaction.amount);
      setTransactions(prev => [data.transaction, ...prev]);
    } catch (error) {
      console.error(error);
      alert("Failed to send money.");
    }
  };

  return (
    <Router>
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<AuthScreen><Login onLogin={handleLogin} /></AuthScreen>} />
            <Route path="/signup" element={<AuthScreen><Signup onLogin={handleLogin} /></AuthScreen>} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <Route path="*" element={
            <Dashboard
              user={user}
              setUser={setUser}
              onLogout={handleLogout}
              balance={balance}
              transactions={transactions}
              onAddMoney={handleAddMoney}
              onSendMoney={handleSendMoney}
            />
          } />
        )}
      </Routes>
    </Router>
  );
};

const AuthScreen = ({ children }) => (
  <div className="h-screen flex justify-center items-center bg-white">{children}</div>
);

const Dashboard = ({ user, setUser, onLogout, balance, transactions, onAddMoney, onSendMoney }) => (
  <div className="min-h-screen bg-gray-100 flex">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Navbar onLogout={onLogout} />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/talkpay" element={<TalkPay />} />
          <Route path="/wallet" element={<Wallet user={user} balance={balance} transactions={transactions} />} />
          <Route path="/send" element={<SendMoney user={user} onSendMoney={onSendMoney} />} />
          <Route path="/add" element={<AddMoney user={user} onAddMoney={onAddMoney} />} />
          <Route path="/profile" element={<Profile user={user} onUpdateUser={(updatedUser) => {
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
          }} />} />
          <Route path="/transactions" element={<Transactions user={user} />} />
          <Route path="/bill-payments" element={<BillPayments user={user} />} />
          <Route path="/qr-payments" element={<QRCodePayments />} />
          <Route path="/categories" element={<TransactionCategories />} />
          <Route path="/multi-currency" element={<MultiCurrency />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/save-cards" element={<SaveCardsPage user={user} />}/>

          <Route path="/bill-splitter" element={<BillSplitterPage />} />
          <Route path="/bill-split-results" element={<BillSplitResultsPage />} />
          <Route path="/bank-link" element={<BankLinkingPage user={user} />} />

        </Routes>
      </div>
    </div>
  </div>
);

export default App;
