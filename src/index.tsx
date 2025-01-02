import React from 'react';
import ReactDOM from 'react-dom/client';
import { Frame, AppProvider as PolarisProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TaskFeLayout from './pages/TaskFeLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <PolarisProvider i18n={translations}>
  <React.StrictMode>
    <TaskFeLayout />
  </React.StrictMode>
  </PolarisProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
