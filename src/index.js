import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCOl1uTuGqQDt_n8QqtC2l4Ue4SBgGxGb0",
  authDomain: "beat-buds-cc1b1.firebaseapp.com",
  databaseURL: "https://beat-buds-cc1b1-default-rtdb.firebaseio.com",
  projectId: "beat-buds-cc1b1",
  storageBucket: "beat-buds-cc1b1.appspot.com",
  messagingSenderId: "277774928024",
  appId: "1:277774928024:web:1b2e1e7a4be08bcd9e68ed"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

