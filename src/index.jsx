 src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles (Tailwind CSS)
import App from './App'; // Import App.jsx
import { BrowserRouter } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css'; // Global styles (Tailwind CSS)
// import App from './App'; // Import App.jsx
// import { HashRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <HashRouter>
//     <App />
//   </HashRouter>
// );

