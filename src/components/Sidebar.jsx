// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaWallet,
//   FaUser,
//   FaExchangeAlt,
//   FaPaperPlane,
//   FaPlus,
//   FaReceipt,
//   FaQrcode,
//   FaTags,
//   FaGlobe,
//   FaTrophy,
//   FaHome,
//   FaBars, // Only keeping the hamburger menu
// } from "react-icons/fa";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <motion.div
//       initial={{ x: -200, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className={`bg-gradient-to-b from-blue-700 to-indigo-800 ${
//         isOpen ? "w-64" : "w-20"
//       } p-6 min-h-screen shadow-xl flex flex-col relative transition-all duration-300`}
//     >
//       {/* Toggle Button - Only Hamburger Menu (No Close Button) */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="absolute top-5 right-[-15px] bg-white text-blue-700 p-2 rounded-full shadow-md focus:outline-none transition-transform"
//       >
//         <FaBars />
//       </button>

//       {/* Logo & Branding */}
//       <motion.h2
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//         className="text-white text-2xl font-bold mb-8 flex items-center justify-center"
//       >
//         🎙️ {isOpen && "TalkPay Wallet"}
//       </motion.h2>

//       {/* Menu Items */}
//       <ul className="space-y-4">
//         <SidebarItem to="/home" icon={<FaHome />} label="Home" isOpen={isOpen} />
//         <SidebarItem to="/wallet" icon={<FaWallet />} label="Wallet" isOpen={isOpen} />
//         <SidebarItem to="/profile" icon={<FaUser />} label="Profile" isOpen={isOpen} />
//         <SidebarItem to="/transactions" icon={<FaExchangeAlt />} label="Transactions" isOpen={isOpen} />
//         <SidebarItem to="/send" icon={<FaPaperPlane />} label="Send Money" isOpen={isOpen} />
//         <SidebarItem to="/add" icon={<FaPlus />} label="Add Money" isOpen={isOpen} />
//         <SidebarItem to="/bill-payments" icon={<FaReceipt />} label="Bill Payments" isOpen={isOpen} />
//         <SidebarItem to="/qr-payments" icon={<FaQrcode />} label="QR Code Payments" isOpen={isOpen} />
//         <SidebarItem to="/categories" icon={<FaTags />} label="Transaction Categories" isOpen={isOpen} />
//         <SidebarItem to="/multi-currency" icon={<FaGlobe />} label="Multi-Currency" isOpen={isOpen} />
//         <SidebarItem to="/rewards" icon={<FaTrophy />} label="Rewards" isOpen={isOpen} />
//       </ul>
//     </motion.div>
//   );
// };

// // Sidebar Item Component
// const SidebarItem = ({ to, icon, label, isOpen }) => (
//   <motion.li
//     whileHover={{ scale: 1.05 }}
//     className="text-white hover:bg-blue-500 px-4 py-2 rounded-md transition duration-200 flex items-center"
//   >
//     <Link to={to} className="flex items-center gap-3 w-full">
//       {icon}
//       {isOpen && <span>{label}</span>}
//     </Link>
//   </motion.li>
// );

// export default Sidebar;


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaWallet,
  FaUser,
  FaExchangeAlt,
  FaPaperPlane,
  FaPlus,
  FaReceipt,
  FaQrcode,
  FaTags,
  FaGlobe,
  FaTrophy,
  FaHome,
  FaBars,
} from "react-icons/fa";

const Sidebar = ({ pendingBills = 2, unreadRewards = 3 }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { to: "/home", label: "Home", icon: <FaHome /> },
    { to: "/wallet", label: "Wallet", icon: <FaWallet />, highlight: true },
    { to: "/profile", label: "Profile", icon: <FaUser /> },
    { to: "/transactions", label: "Transactions", icon: <FaExchangeAlt /> },
    { to: "/send", label: "Send Money", icon: <FaPaperPlane />, highlight: true },
    { to: "/add", label: "Add Money", icon: <FaPlus />, highlight: true },
    { to: "/bill-payments", label: "Bill Payments", icon: <FaReceipt />, highlight: true, badge: pendingBills },
    { to: "/qr-payments", label: "QR Code Payments", icon: <FaQrcode /> },
    { to: "/categories", label: "Transaction Categories", icon: <FaTags /> },
    { to: "/multi-currency", label: "Multi-Currency", icon: <FaGlobe /> },
    { to: "/rewards", label: "Rewards", icon: <FaTrophy />, badge: unreadRewards },
  ];

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-b from-blue-700 to-indigo-800 ${
        isOpen ? "w-64" : "w-20"
      } p-6 min-h-screen shadow-xl flex flex-col relative transition-all duration-300`}
    >
      {/* Hamburger Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-5 right-[-15px] bg-white text-blue-700 p-2 rounded-full shadow-md focus:outline-none transition-transform"
      >
        <FaBars />
      </button>

      {/* Logo */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-white text-2xl font-bold mb-8 flex items-center justify-center"
      >
        🎙️ {isOpen && "TalkPay Wallet"}
      </motion.h2>

      {/* Menu Items */}
      <ul className="space-y-4">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.to;
          return (
            <SidebarItem
              key={index}
              to={item.to}
              icon={item.icon}
              label={item.label}
              isOpen={isOpen}
              highlight={item.highlight}
              badge={item.badge}
              active={isActive}
            />
          );
        })}
      </ul>
    </motion.div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ to, icon, label, isOpen, highlight, badge, active }) => (
  <motion.li
    whileHover={{ scale: 1.05 }}
    className={`text-white px-4 py-2 rounded-md transition duration-200 flex items-center ${
      active ? "bg-blue-600 shadow-lg" : ""
    }`}
  >
    <Link to={to} className="flex items-center gap-3 w-full relative">
      <span
        className={`text-xl ${
          highlight && !active ? "text-white" : "text-white"
        }`}
      >
        {icon}
      </span>
      {isOpen && <span>{label}</span>}
      {badge && badge > 0 && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  </motion.li>
);

export default Sidebar;
