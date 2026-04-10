// import React, { useState } from "react";
// import { FiEdit, FiCamera } from "react-icons/fi";
// import { motion } from "framer-motion";

// const Profile = () => {
//   const [name, setName] = useState("Your Name");
//   const [phone, setPhone] = useState("1234567890");
//   const [email, setEmail] = useState("youremail@example.com");
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileImage, setProfileImage] = useState(null);

//   const handleSave = () => {
//     setIsEditing(false);
//     alert("Profile updated successfully!");
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setProfileImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <motion.div
//       className="max-w-md mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
//         Profile
//       </h2>

//       {/* Profile Picture Upload */}
//       <div className="relative w-24 h-24 mx-auto mb-4">
//         <img
//           src={profileImage || "https://via.placeholder.com/100"}
//           alt="Profile"
//           className="w-24 h-24 object-cover rounded-full border-4 border-blue-600"
//         />
//         <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer">
//           <FiCamera className="text-xl" />
//           <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//         </label>
//       </div>

//       <FiEdit
//         className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 cursor-pointer text-xl"
//         onClick={() => setIsEditing(true)}
//       />

//       {/* Name Field */}
//       <div className="mb-4">
//         <label className="block text-gray-700 dark:text-gray-300">Name:</label>
//         {isEditing ? (
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
//           />
//         ) : (
//           <p className="text-gray-800 dark:text-white">{name}</p>
//         )}
//       </div>

//       {/* Phone Field */}
//       <div className="mb-4">
//         <label className="block text-gray-700 dark:text-gray-300">Phone:</label>
//         {isEditing ? (
//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
//           />
//         ) : (
//           <p className="text-gray-800 dark:text-white">{phone}</p>
//         )}
//       </div>

//       {/* Email Field */}
//       <div className="mb-4">
//         <label className="block text-gray-700 dark:text-gray-300">Email:</label>
//         {isEditing ? (
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
//           />
//         ) : (
//           <p className="text-gray-800 dark:text-white">{email}</p>
//         )}
//       </div>

//       {/* Save Button */}
//       {isEditing && (
//         <motion.button
//           onClick={handleSave}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full mt-4"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Save
//         </motion.button>
//       )}
//     </motion.div>
//   );
// };

// export default Profile;


// import React, { useState } from "react";
// import { FiEdit, FiCamera, FiTrash2 } from "react-icons/fi";
// import { motion } from "framer-motion";

// const Profile = () => {
//   const [name, setName] = useState("Your Name");
//   const [phone, setPhone] = useState("1234567890");
//   const [email, setEmail] = useState("youremail@example.com");
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileImage, setProfileImage] = useState(null);
//   const [message, setMessage] = useState("");

//   const handleSave = () => {
//     // Basic validation
//     if (!name.trim()) {
//       setMessage("Name cannot be empty.");
//       return;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//       setMessage("Phone number must be 10 digits.");
//       return;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setMessage("Please enter a valid email.");
//       return;
//     }

//     setIsEditing(false);
//     setMessage("Profile updated successfully!");
//     setTimeout(() => setMessage(""), 3000); // remove message after 3s
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setProfileImage(URL.createObjectURL(file));
//     }
//   };

//   const removeImage = () => {
//     setProfileImage(null);
//   };

//   return (
//     <motion.div
//       className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md relative"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
//         Profile
//       </h2>

//       {/* Profile Picture */}
//       <div className="relative w-24 h-24 mx-auto mb-4">
//         <img
//           src={profileImage || "https://via.placeholder.com/100"}
//           alt="Profile"
//           className="w-24 h-24 object-cover rounded-full border-4 border-blue-600"
//         />
//         <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer">
//           <FiCamera className="text-xl" />
//           <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//         </label>
//         {profileImage && (
//           <button
//             onClick={removeImage}
//             className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
//           >
//             <FiTrash2 />
//           </button>
//         )}
//       </div>

//       {/* Edit Icon */}
//       <FiEdit
//         className="absolute top-4 right-4 text-gray-600 cursor-pointer text-xl"
//         onClick={() => setIsEditing(true)}
//       />

//       {/* Form Fields */}
//       <div className="space-y-4">
//         <div>
//           <label className="block text-gray-700 mb-1">Name:</label>
//           {isEditing ? (
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           ) : (
//             <p className="text-gray-800">{name}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-gray-700 mb-1">Phone:</label>
//           {isEditing ? (
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           ) : (
//             <p className="text-gray-800">{phone}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-gray-700 mb-1">Email:</label>
//           {isEditing ? (
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           ) : (
//             <p className="text-gray-800">{email}</p>
//           )}
//         </div>
//       </div>

//       {/* Message */}
//       {message && <p className="text-green-600 text-center mt-3">{message}</p>}

//       {/* Save / Edit Buttons */}
//       {isEditing && (
//         <motion.button
//           onClick={handleSave}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full mt-4"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Save
//         </motion.button>
//       )}
//       {!isEditing && (
//         <button
//           onClick={() => setIsEditing(true)}
//           className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md w-full mt-4 hover:bg-gray-300"
//         >
//           Edit Profile
//         </button>
//       )}
//     </motion.div>
//   );
// };

// export default Profile;


// import React, { useState, useEffect } from "react";
// import { FiEdit, FiCamera, FiTrash2 } from "react-icons/fi";
// import { motion } from "framer-motion";

// const Profile = ({ user }) => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileImage, setProfileImage] = useState(null);
//   const [message, setMessage] = useState("");

//   // Update profile info when user changes (login/signup)
//   useEffect(() => {
//     if (user) {
//       setName(user.name || "Your Name");
//       setEmail(user.email || "youremail@example.com");
//       setPhone(user.phone || "1234567890");
//       setProfileImage(user.profileImage || null);
//     }
//   }, [user]);

//   const handleSave = () => {
//     if (!name.trim()) {
//       setMessage("Name cannot be empty.");
//       return;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//       setMessage("Phone number must be 10 digits.");
//       return;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setMessage("Please enter a valid email.");
//       return;
//     }

//     setIsEditing(false);
//     setMessage("Profile updated successfully!");
//     setTimeout(() => setMessage(""), 3000);

//     // Optional: persist changes in localStorage
//     const updatedUser = { ...user, name, email, phone, profileImage };
//     localStorage.setItem("user", JSON.stringify(updatedUser));
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//     }
//   };

//   const removeImage = () => {
//     setProfileImage(null);
//   };

//   return (
//     <motion.div
//       className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md relative"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Profile</h2>

//       {/* Profile Picture */}
//       <div className="relative w-24 h-24 mx-auto mb-4">
//         <img
//           src={profileImage || "https://via.placeholder.com/100"}
//           alt="Profile"
//           className="w-24 h-24 object-cover rounded-full border-4 border-blue-600"
//         />
//         <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer">
//           <FiCamera className="text-xl" />
//           <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//         </label>
//         {profileImage && (
//           <button
//             onClick={removeImage}
//             className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
//           >
//             <FiTrash2 />
//           </button>
//         )}
//       </div>

//       {/* Edit Icon */}
//       <FiEdit
//         className="absolute top-4 right-4 text-gray-600 cursor-pointer text-xl"
//         onClick={() => setIsEditing(true)}
//       />

//       {/* Form Fields */}
//       <div className="space-y-4">
//         <div>
//           <label className="block text-gray-700 mb-1">Name:</label>
//           {isEditing ? (
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           ) : (
//             <p className="text-gray-800">{name}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-gray-700 mb-1">Phone:</label>
//           {isEditing ? (
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           ) : (
//             <p className="text-gray-800">{phone}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-gray-700 mb-1">Email:</label>
//           {isEditing ? (
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           ) : (
//             <p className="text-gray-800">{email}</p>
//           )}
//         </div>
//       </div>

//       {message && <p className="text-green-600 text-center mt-3">{message}</p>}

//       {isEditing && (
//         <motion.button
//           onClick={handleSave}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full mt-4"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Save
//         </motion.button>
//       )}
//       {!isEditing && (
//         <button
//           onClick={() => setIsEditing(true)}
//           className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md w-full mt-4 hover:bg-gray-300"
//         >
//           Edit Profile
//         </button>
//       )}
//     </motion.div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { FiEdit, FiCamera, FiTrash2 } from "react-icons/fi";
// import { motion } from "framer-motion";
// import axios from "axios";

// const Profile = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [profileImage, setProfileImage] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [message, setMessage] = useState("");

//   const token = localStorage.getItem("token");

//   // Fetch user profile on mount
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get("http://localhost:8088/api/user/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const data = response.data;
//         setName(data.name || "");
//         setPhone(data.phone || "");
//         setEmail(data.email || "");
//         setProfileImage(data.profileImage || null);
//       } catch (err) {
//         console.error("Failed to fetch profile:", err);
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   // Handle image upload
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) setProfileImage(file);
//   };

//   // Remove profile image
//   const removeImage = () => setProfileImage(null);

//   // Save profile changes
//   const handleSave = async () => {
//     if (!name.trim()) {
//       setMessage("Name cannot be empty.");
//       return;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//       setMessage("Phone number must be 10 digits.");
//       return;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setMessage("Please enter a valid email.");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("phone", phone);
//       formData.append("email", email);
//       if (profileImage instanceof File) formData.append("profileImage", profileImage);

//       await axios.put("http://localhost:8088/api/user/profile", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setMessage("Profile updated successfully!");
//       setIsEditing(false);

//       // Optionally update user in localStorage
//       const savedUser = JSON.parse(localStorage.getItem("user"));
//       savedUser.name = name;
//       savedUser.phone = phone;
//       savedUser.profileImage = profileImage instanceof File ? URL.createObjectURL(profileImage) : profileImage;
//       localStorage.setItem("user", JSON.stringify(savedUser));

//       setTimeout(() => setMessage(""), 3000);
//     } catch (err) {
//       console.error("Failed to update profile:", err);
//       setMessage("Failed to update profile. Try again.");
//     }
//   };

//   return (
//     <motion.div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md relative"
//       initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Profile</h2>

//       {/* Profile Picture */}
//       <div className="relative w-24 h-24 mx-auto mb-4">
//         <img
//           src={profileImage ? (profileImage instanceof File ? URL.createObjectURL(profileImage) : profileImage) : "https://via.placeholder.com/100"}
//           alt="Profile"
//           className="w-24 h-24 object-cover rounded-full border-4 border-blue-600"
//         />
//         <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer">
//           <FiCamera className="text-xl" />
//           <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//         </label>
//         {profileImage && (
//           <button onClick={removeImage} className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600">
//             <FiTrash2 />
//           </button>
//         )}
//       </div>

//       {/* Edit Icon */}
//       <FiEdit className="absolute top-4 right-4 text-gray-600 cursor-pointer text-xl" onClick={() => setIsEditing(true)} />

//       {/* Form Fields */}
//       <div className="space-y-4">
//         <div>
//           <label className="block text-gray-700 mb-1">Name:</label>
//           {isEditing ? <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded-md" /> : <p className="text-gray-800">{name}</p>}
//         </div>
//         <div>
//           <label className="block text-gray-700 mb-1">Phone:</label>
//           {isEditing ? <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded-md" /> : <p className="text-gray-800">{phone}</p>}
//         </div>
//         <div>
//           <label className="block text-gray-700 mb-1">Email:</label>
//           <p className="text-gray-800">{email}</p> {/* Usually email should not be editable */}
//         </div>
//       </div>

//       {message && <p className="text-green-600 text-center mt-3">{message}</p>}

//       {isEditing && (
//         <motion.button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full mt-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           Save
//         </motion.button>
//       )}
//       {!isEditing && (
//         <button onClick={() => setIsEditing(true)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md w-full mt-4 hover:bg-gray-300">
//           Edit Profile
//         </button>
//       )}
//     </motion.div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { FiEdit, FiCamera, FiTrash2 } from "react-icons/fi";
// import { motion } from "framer-motion";
// import axios from "axios";

// const Profile = ({ user, onUpdateUser }) => {
//   const [name, setName] = useState(user?.name || "Your Name");
//   const [phone, setPhone] = useState(user?.phone || "1234567890");
//   const [email, setEmail] = useState(user?.email || "youremail@example.com");
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileImage, setProfileImage] = useState(null);
//   const [message, setMessage] = useState("");

//   // Update state if user prop changes
//   useEffect(() => {
//     if (user) {
//       setName(user.name || "Your Name");
//       setPhone(user.phone || "1234567890");
//       setEmail(user.email || "youremail@example.com");
//     }
//   }, [user]);

//   const handleSave = async () => {
//     // Basic validation
//     if (!name.trim()) {
//       setMessage("Name cannot be empty.");
//       return;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//       setMessage("Phone number must be 10 digits.");
//       return;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setMessage("Please enter a valid email.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const userId = user.id;

//       const response = await axios.put(
//         `http://localhost:8088/api/auth/profile/${userId}`,
//         { name, phone, email },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data.user) {
//         setIsEditing(false);
//         setMessage("Profile updated successfully!");
//         localStorage.setItem("user", JSON.stringify(response.data.user));

//         // Notify parent component
//         if (onUpdateUser) onUpdateUser(response.data.user);
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("Failed to update profile.");
//     }
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setProfileImage(URL.createObjectURL(file));
//     }
//   };

//   const removeImage = () => {
//     setProfileImage(null);
//   };

//   return (
//     <motion.div
//       className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md relative"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
//         Profile
//       </h2>

//       {/* Profile Picture */}
//       <div className="relative w-24 h-24 mx-auto mb-4">
//         <img
//           src={profileImage || "https://via.placeholder.com/100"}
//           alt="Profile"
//           className="w-24 h-24 object-cover rounded-full border-4 border-blue-600"
//         />
//         <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer">
//           <FiCamera className="text-xl" />
//           <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//         </label>
//         {profileImage && (
//           <button
//             onClick={removeImage}
//             className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
//           >
//             <FiTrash2 />
//           </button>
//         )}
//       </div>

//       {/* Edit Icon */}
//       <FiEdit
//         className="absolute top-4 right-4 text-gray-600 cursor-pointer text-xl"
//         onClick={() => setIsEditing(true)}
//       />

//       {/* Form Fields */}
//       <div className="space-y-4">
//         <div>
//           <label className="block text-gray-700 mb-1">Name:</label>
//           {isEditing ? (
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           ) : (
//             <p className="text-gray-800">{name}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-gray-700 mb-1">Phone:</label>
//           {isEditing ? (
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           ) : (
//             <p className="text-gray-800">{phone}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-gray-700 mb-1">Email:</label>
//           {isEditing ? (
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           ) : (
//             <p className="text-gray-800">{email}</p>
//           )}
//         </div>
//       </div>

//       {/* Message */}
//       {message && <p className="text-green-600 text-center mt-3">{message}</p>}

//       {/* Save / Edit Buttons */}
//       {isEditing && (
//         <motion.button
//           onClick={handleSave}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full mt-4"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Save
//         </motion.button>
//       )}
//       {!isEditing && (
//         <button
//           onClick={() => setIsEditing(true)}
//           className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md w-full mt-4 hover:bg-gray-300"
//         >
//           Edit Profile
//         </button>
//       )}
//     </motion.div>
//   );
// };

// export default Profile;


// import React, { useState, useEffect } from "react";
// import { FiEdit, FiCamera, FiTrash2 } from "react-icons/fi";
// import { motion } from "framer-motion";
// import axios from "axios";

// const Profile = ({ user, onUpdateUser }) => {
//   const [name, setName] = useState(user?.name || "");
//   const [phone, setPhone] = useState(user?.phone || "");
//   const [email, setEmail] = useState(user?.email || "");
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileImage, setProfileImage] = useState(null);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (user) {
//       setName(user.name || "");
//       setPhone(user.phone || "");
//       setEmail(user.email || "");
//     }
//   }, [user]);

//   const handleSave = async () => {
//     if (!name.trim() || !/^\d{10}$/.test(phone) || !/^\S+@\S+\.\S+$/.test(email)) {
//       setMessage("Please fill valid details.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const userId = user.id;

//       const response = await axios.put(
//         `http://localhost:8088/api/auth/profile/${userId}`,
//         { name, phone, email },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data.user) {
//         setIsEditing(false);
//         setMessage("Profile updated successfully!");
//         localStorage.setItem("user", JSON.stringify(response.data.user));
//         if (onUpdateUser) onUpdateUser(response.data.user);
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("Failed to update profile.");
//     }
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) setProfileImage(URL.createObjectURL(file));
//   };
//   const removeImage = () => setProfileImage(null);

//   return (
//     <motion.div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold text-center mb-4">Profile</h2>
//       <div className="relative w-24 h-24 mx-auto mb-4">
//         <img src={profileImage || "https://via.placeholder.com/100"} alt="Profile" className="w-24 h-24 rounded-full border-4 border-blue-600"/>
//         <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer">
//           <FiCamera />
//           <input type="file" className="hidden" onChange={handleImageUpload}/>
//         </label>
//         {profileImage && <button onClick={removeImage} className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"><FiTrash2/></button>}
//       </div>

//       <FiEdit className="absolute top-4 right-4 cursor-pointer" onClick={()=>setIsEditing(true)}/>

//       <div className="space-y-4">
//         <div>
//           <label>Name:</label>
//           {isEditing ? <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-2 border rounded-md"/> : <p>{name}</p>}
//         </div>
//         <div>
//           <label>Phone:</label>
//           {isEditing ? <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="w-full p-2 border rounded-md"/> : <p>{phone}</p>}
//         </div>
//         <div>
//           <label>Email:</label>
//           {isEditing ? <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 border rounded-md"/> : <p>{email}</p>}
//         </div>
//       </div>

//       {message && <p className="text-green-600 text-center mt-3">{message}</p>}

//       {isEditing && <button onClick={handleSave} className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md">Save</button>}
//       {!isEditing && <button onClick={()=>setIsEditing(true)} className="w-full mt-4 bg-gray-200 py-2 rounded-md">Edit Profile</button>}
//     </motion.div>
//   );
// };

// export default Profile;


// import React, { useState, useEffect } from "react";
// import { FiEdit, FiCamera, FiTrash2 } from "react-icons/fi";
// import { motion } from "framer-motion";
// import axios from "axios";

// const Profile = ({ user, onUpdateUser }) => {
//   const [name, setName] = useState(user.name || "");
//   const [phone, setPhone] = useState(user.phone || "");
//   const [email, setEmail] = useState(user.email || "");
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileImage, setProfileImage] = useState(user.profileImage || null);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Sync with updated user
//     setName(user.name || "");
//     setPhone(user.phone || "");
//     setEmail(user.email || "");
//     setProfileImage(user.profileImage || null);
//   }, [user]);

//   const handleSave = async () => {
//     // Basic validation
//     if (!name.trim()) {
//       setMessage("Name cannot be empty.");
//       return;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//       setMessage("Phone number must be 10 digits.");
//       return;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setMessage("Please enter a valid email.");
//       return;
//     }

//     try {
//       // Update user on backend
//       const response = await axios.put(`http://localhost:8088/api/user/${user.id}`, {
//         name,
//         phone,
//         email,
//         profileImage,
//       });

//       if (response.data.user) {
//         onUpdateUser(response.data.user); // update App.jsx state & localStorage
//         setMessage("Profile updated successfully!");
//         setIsEditing(false);
//         setTimeout(() => setMessage(""), 3000);
//       }
//     } catch (err) {
//       console.error("Profile update error:", err);
//       setMessage("Failed to update profile.");
//     }
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setProfileImage(url);
//     }
//   };

//   const removeImage = () => setProfileImage(null);

//   return (
//     <motion.div
//       className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md relative"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
//         Profile
//       </h2>

//       {/* Profile Picture */}
//       <div className="relative w-24 h-24 mx-auto mb-4">
//         <img
//           src={profileImage || "https://via.placeholder.com/100"}
//           alt="Profile"
//           className="w-24 h-24 object-cover rounded-full border-4 border-blue-600"
//         />
//         <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer">
//           <FiCamera className="text-xl" />
//           <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//         </label>
//         {profileImage && (
//           <button
//             onClick={removeImage}
//             className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
//           >
//             <FiTrash2 />
//           </button>
//         )}
//       </div>

//       {/* Edit Icon */}
//       <FiEdit
//         className="absolute top-4 right-4 text-gray-600 cursor-pointer text-xl"
//         onClick={() => setIsEditing(true)}
//       />

//       {/* Form Fields */}
//       <div className="space-y-4">
//         <div>
//           <label className="block text-gray-700 mb-1">Name:</label>
//           {isEditing ? (
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           ) : (
//             <p className="text-gray-800">{name}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-gray-700 mb-1">Phone:</label>
//           {isEditing ? (
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           ) : (
//             <p className="text-gray-800">{phone}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-gray-700 mb-1">Email:</label>
//           {isEditing ? (
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           ) : (
//             <p className="text-gray-800">{email}</p>
//           )}
//         </div>
//       </div>

//       {/* Message */}
//       {message && <p className="text-green-600 text-center mt-3">{message}</p>}

//       {/* Save / Edit Buttons */}
//       {isEditing && (
//         <motion.button
//           onClick={handleSave}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full mt-4"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Save
//         </motion.button>
//       )}
//       {!isEditing && (
//         <button
//           onClick={() => setIsEditing(true)}
//           className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md w-full mt-4 hover:bg-gray-300"
//         >
//           Edit Profile
//         </button>
//       )}
//     </motion.div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { motion } from "framer-motion";
import axios from "axios";

const Profile = ({ user, onUpdateUser }) => {
  const [name, setName] = useState(user.name || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [email, setEmail] = useState(user.email || "");
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setName(user.name || "");
    setPhone(user.phone || "");
    setEmail(user.email || "");
  }, [user]);

  const handleSave = async () => {
    if (!name.trim()) {
      setMessage("Name cannot be empty.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setMessage("Phone number must be 10 digits.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:8099/api/user/${user.id}`, {
        name,
        phone,
        email,
      });

      if (response.data.user) {
        onUpdateUser(response.data.user);
        setMessage("Profile updated successfully!");
        setIsEditing(false);
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (err) {
      console.error("Profile update error:", err);
      setMessage("Failed to update profile.");
    }
  };

  const getInitial = () => {
    if (name) return name.charAt(0).toUpperCase();
    if (email) return email.charAt(0).toUpperCase();
    return "?";
  };

  return (
    <motion.div
      className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
        Profile
      </h2>

      {/* Circle with initial */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-700">
        {getInitial()}
      </div>

      {/* Edit Icon */}
      <FiEdit
        className="absolute top-4 right-4 text-gray-600 cursor-pointer text-xl"
        onClick={() => setIsEditing(true)}
      />

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Name:</label>
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          ) : (
            <p className="text-gray-800">{name}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Phone:</label>
          {isEditing ? (
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          ) : (
            <p className="text-gray-800">{phone}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email:</label>
          {isEditing ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          ) : (
            <p className="text-gray-800">{email}</p>
          )}
        </div>
      </div>

      {/* Message */}
      {message && <p className="text-green-600 text-center mt-3">{message}</p>}

      {/* Save / Edit Buttons */}
      {isEditing ? (
        <motion.button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full mt-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Save
        </motion.button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md w-full mt-4 hover:bg-gray-300"
        >
          Edit Profile
        </button>
      )}
    </motion.div>
  );
};

export default Profile;
