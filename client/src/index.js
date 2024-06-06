import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import success from './components/Success.js';
import cancel from './components/Cancel.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


