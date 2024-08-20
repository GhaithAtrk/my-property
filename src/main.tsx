import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import BottomNav from './components/BottomNav/page';
import { propertiesData } from './db/fakedata';


const container = document.getElementById('root');
const root = createRoot(container!);

localStorage.setItem("propData", JSON.stringify(propertiesData));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);