import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClientContextProvider } from './context/ClientsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClientContextProvider>
      <App />
    </ClientContextProvider>
  </React.StrictMode>
);