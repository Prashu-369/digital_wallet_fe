import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: "/.", // Ensures correct relative paths
//   //base: "/DigitalWallet_FE/",
//   root: "./",
//   publicDir: "public", // Ensures `index.html` is correctly located
// });

export default defineConfig({
  base: '/Digital_wallet_fe/',  // <-- your GitHub repo name
  plugins: [react()],
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: '/DigitalWallet_FE/'  // <-- your repo name
// })
