// import React, { useState } from "react";
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate, Link } from "react-router-dom"; // Use Link instead of <a>
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Signup = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       onLogin();
//       navigate("/home");
//     } catch (err) {
//       handleFirebaseError(err.code);
//       console.error("Signup error:", err);
//     }
//   };

//   const handleFirebaseError = (code) => {
//     switch (code) {
//       case "auth/email-already-in-use":
//         setError("This email is already in use. Try logging in.");
//         break;
//       case "auth/weak-password":
//         setError("Password should be at least 6 characters.");
//         break;
//       case "auth/invalid-email":
//         setError("Please enter a valid email address.");
//         break;
//       default:
//         setError("Signup failed. Please try again.");
//     }
//   };

//   return (
//     <motion.div
//       className="flex justify-center items-center min-h-screen bg-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.div
//         className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="space-y-4">
//             {/* Email Input */}
//             <motion.div
//               className="flex items-center border border-gray-300 rounded-md p-3"
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaEnvelope className="text-gray-500 mr-3" />
//               <input
//                 type="email"
//                 id="email"
//                 aria-label="Email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Password Input */}
//             <motion.div
//               className="flex items-center border border-gray-300 rounded-md p-3"
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaLock className="text-gray-500 mr-3" />
//               <input
//                 type="password"
//                 id="password"
//                 aria-label="Password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Confirm Password Input */}
//             <motion.div
//               className="flex items-center border border-gray-300 rounded-md p-3"
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaLock className="text-gray-500 mr-3" />
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 aria-label="Confirm Password"
//                 placeholder="Confirm your password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Error Message */}
//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             {/* Sign Up Button */}
//             <motion.button
//               type="submit"
//               className="w-full py-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Sign Up
//             </motion.button>
//           </div>
//         </form>

//         {/* Login Redirect */}
//         <motion.div
//           className="mt-4 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         >
//           <p className="text-sm">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-500 hover:underline">
//               Login
//             </Link>
//           </p>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Signup;
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import { motion } from "framer-motion";
// import axios from "axios";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8080/api/auth/signup", {
//         username,
//         email,
//         password,
//       });

//       console.log("Signup response:", response.data);
//       alert("✅ Signup successful!");
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       if (err.response && err.response.data) {
//         setError(err.response.data); // show backend error
//       } else {
//         setError("Signup failed. Please try again.");
//       }
//     }
//   };

//   return (
//     <motion.div
//       className="flex justify-center items-center min-h-screen bg-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.div
//         className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="space-y-4">
//             {/* Username Input */}
//             <motion.div className="flex items-center border border-gray-300 rounded-md p-3" whileHover={{ scale: 1.05 }}>
//               <FaEnvelope className="text-gray-500 mr-3" />
//               <input
//                 type="text"
//                 placeholder="Enter username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Email Input */}
//             <motion.div className="flex items-center border border-gray-300 rounded-md p-3" whileHover={{ scale: 1.05 }}>
//               <FaEnvelope className="text-gray-500 mr-3" />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Password Input */}
//             <motion.div className="flex items-center border border-gray-300 rounded-md p-3" whileHover={{ scale: 1.05 }}>
//               <FaLock className="text-gray-500 mr-3" />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Confirm Password Input */}
//             <motion.div className="flex items-center border border-gray-300 rounded-md p-3" whileHover={{ scale: 1.05 }}>
//               <FaLock className="text-gray-500 mr-3" />
//               <input
//                 type="password"
//                 placeholder="Confirm your password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Error Message */}
//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             {/* Sign Up Button */}
//             <motion.button
//               type="submit"
//               className="w-full py-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Sign Up
//             </motion.button>
//           </div>
//         </form>

//         {/* Login Redirect */}
//         <motion.div className="mt-4 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
//           <p className="text-sm">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-500 hover:underline">
//               Login
//             </Link>
//           </p>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Signup;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Signup = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8088/api/auth/signup", {
//         email,
//         password,
//       });

//       if (response.data.error) {
//         setError(response.data.error);
//       } else {
//         onLogin(); // Optional: update parent login state
//         navigate("/login"); // Redirect to login page after signup
//       }
//     } catch (err) {
//       console.error("Signup error:", err);
//       setError("Signup failed. Please try again.");
//     }
//   };

//   return (
//     <motion.div
//       className="flex justify-center items-center min-h-screen bg-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.div
//         className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="space-y-4">
//             {/* Email Input */}
//             <motion.div className="flex items-center border border-gray-300 rounded-md p-3" whileHover={{ scale: 1.05 }}>
//               <FaEnvelope className="text-gray-500 mr-3" />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Password Input */}
//             <motion.div className="flex items-center border border-gray-300 rounded-md p-3" whileHover={{ scale: 1.05 }}>
//               <FaLock className="text-gray-500 mr-3" />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Confirm Password Input */}
//             <motion.div className="flex items-center border border-gray-300 rounded-md p-3" whileHover={{ scale: 1.05 }}>
//               <FaLock className="text-gray-500 mr-3" />
//               <input
//                 type="password"
//                 placeholder="Confirm your password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Error Message */}
//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             {/* Sign Up Button */}
//             <motion.button
//               type="submit"
//               className="w-full py-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Sign Up
//             </motion.button>
//           </div>
//         </form>

//         {/* Login Redirect */}
//         <motion.div className="mt-4 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
//           <p className="text-sm">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-500 hover:underline">
//               Login
//             </Link>
//           </p>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Signup;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Signup = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     // try {
//     //   const response = await axios.post("http://localhost:8088/api/auth/signup", {
//     //     email,
//     //     password,
//     //   });

//     //   if (response.data.error) {
//     //     setError(response.data.error);
//     //   } else {
//     //     // Optional: show console message
//     //     console.log(response.data.message); // "User registered successfully!"

//     //     // Auto-login: save user info and navigate to home
//     //     const loginResponse = await axios.post("http://localhost:8088/api/auth/login", { email, password });
//     //     if (!loginResponse.data.error) {
//     //       localStorage.setItem("user", JSON.stringify(loginResponse.data.user));
//     //       onLogin(); // update parent login state
//     //       navigate("/home"); // redirect to home page
//     //     }
//     //   }
//     // } catch (err) {
//     //   console.error("Signup error:", err);
//     //   setError("Signup failed. Please try again.");
//     // }
//     try {
//     const response = await axios.post("http://localhost:8088/api/auth/signup", {
//       email,
//       password,
//     });

//     if (response.data.error) {
//       setError(response.data.error); // show backend error
//     } else {
//       onLogin(); 
//       navigate("/login"); 
//     }
//   } catch (err) {
//     console.error("Signup error:", err);

//     // Show exact backend error if available
//     if (err.response && err.response.data && err.response.data.error) {
//       setError(err.response.data.error);
//     } else {
//       setError("Signup failed. Please try again.");
//     }
//   }

//   };

//   return (
//     <motion.div
//       className="flex justify-center items-center min-h-screen bg-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.div
//         className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="space-y-4">
//             {/* Email Input */}
//             <motion.div className="flex items-center border border-gray-300 rounded-md p-3" whileHover={{ scale: 1.05 }}>
//               <FaEnvelope className="text-gray-500 mr-3" />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Password Input */}
//             <motion.div className="flex items-center border border-gray-300 rounded-md p-3" whileHover={{ scale: 1.05 }}>
//               <FaLock className="text-gray-500 mr-3" />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Confirm Password Input */}
//             <motion.div className="flex items-center border border-gray-300 rounded-md p-3" whileHover={{ scale: 1.05 }}>
//               <FaLock className="text-gray-500 mr-3" />
//               <input
//                 type="password"
//                 placeholder="Confirm your password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Error Message */}
//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             {/* Sign Up Button */}
//             <motion.button
//               type="submit"
//               className="w-full py-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Sign Up
//             </motion.button>
//           </div>
//         </form>

//         {/* Login Redirect */}
//         <motion.div className="mt-4 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
//           <p className="text-sm">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-500 hover:underline">
//               Login
//             </Link>
//           </p>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Signup;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Signup = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       // Call backend signup
//       const response = await axios.post("http://localhost:8088/api/auth/signup", {
//         email,
//         password,
//       });

//       if (response.data.error) {
//         setError(response.data.error);
//       } else {
//         // Auto-login after signup
//         const loginResponse = await axios.post("http://localhost:8088/api/auth/login", {
//           email,
//           password,
//         });

//         if (loginResponse.data.token) {
//           // Save JWT and user info
//           localStorage.setItem("token", loginResponse.data.token);
//           localStorage.setItem("user", JSON.stringify(loginResponse.data.user));

//           onLogin(); // update parent login state
//           navigate("/home"); // redirect to home
//         }
//       }
//     } catch (err) {
//       console.error("Signup error:", err);
//       if (err.response && err.response.data && err.response.data.error) {
//         setError(err.response.data.error);
//       } else {
//         setError("Signup failed. Please try again.");
//       }
//     }
//   };

//   return (
//     <motion.div className="flex justify-center items-center min-h-screen bg-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//       <motion.div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="space-y-4">
//             {/* Email */}
//             <motion.div className="flex items-center border border-gray-300 rounded-md p-3" whileHover={{ scale: 1.05 }}>
//               <FaEnvelope className="text-gray-500 mr-3" />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Password */}
//             <motion.div className="flex items-center border border-gray-300 rounded-md p-3" whileHover={{ scale: 1.05 }}>
//               <FaLock className="text-gray-500 mr-3" />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {/* Confirm Password */}
//             <motion.div className="flex items-center border border-gray-300 rounded-md p-3" whileHover={{ scale: 1.05 }}>
//               <FaLock className="text-gray-500 mr-3" />
//               <input
//                 type="password"
//                 placeholder="Confirm your password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </motion.div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <motion.button type="submit" className="w-full py-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               Sign Up
//             </motion.button>
//           </div>
//         </form>

//         <motion.div className="mt-4 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
//           <p className="text-sm">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-500 hover:underline">
//               Login
//             </Link>
//           </p>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Signup = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8099/api/auth/signup", {
        name, phone, email, password
      });

      if (response.data.error) {
        setError(response.data.error);
      } else {
        // Auto-login after signup
        const loginResponse = await axios.post("http://localhost:8099/api/auth/login", { email, password });
        if (loginResponse.data.token) {
          localStorage.setItem("token", loginResponse.data.token);
          localStorage.setItem("user", JSON.stringify(loginResponse.data.user));

          onLogin(); 
          navigate("/home"); 
        }
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.response?.data?.error || "Signup failed. Please try again.");
    }
  };

  return (
    <motion.div className="flex justify-center items-center min-h-screen bg-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <motion.div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-md p-3">
            <FaUser className="mr-3 text-gray-500"/>
            <input type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} required className="w-full focus:outline-none"/>
          </div>
          <div className="flex items-center border border-gray-300 rounded-md p-3">
            <FaPhone className="mr-3 text-gray-500"/>
            <input type="text" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} required className="w-full focus:outline-none"/>
          </div>
          <div className="flex items-center border border-gray-300 rounded-md p-3">
            <FaEnvelope className="mr-3 text-gray-500"/>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full focus:outline-none"/>
          </div>
          <div className="flex items-center border border-gray-300 rounded-md p-3">
            <FaLock className="mr-3 text-gray-500"/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required className="w-full focus:outline-none"/>
          </div>
          <div className="flex items-center border border-gray-300 rounded-md p-3">
            <FaLock className="mr-3 text-gray-500"/>
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required className="w-full focus:outline-none"/>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <motion.button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 mt-4">Sign Up</motion.button>
        </form>
        <p className="text-sm mt-4 text-center">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
      </motion.div>
    </motion.div>
  );
};

export default Signup;
