import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EventContextProvider from './components/context/eventContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EventContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </EventContextProvider>
);

