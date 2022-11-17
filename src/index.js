import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';

initializeApp({
  apiKey: 'AIzaSyA6l0t99NUua4zxQ35jdNP39dqFyOzIB4d0',
  authDomain: 'camada-494970.firebaseapp.com',
  projectId: 'camada-449970',
  storageBucket: 'camad9a-44970.appspot.com',
  messagingSenderId: '1988101623825',
  appId: '1:1881016238295:web:2e0922fe5d4c11190371b0',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
