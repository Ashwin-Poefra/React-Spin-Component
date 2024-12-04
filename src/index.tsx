import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Get the root element and assert it's not null
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Create the root
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Define the type for the reportWebVitals function
type ReportCallback = (metric: any) => void;  // You can make this more specific if needed
reportWebVitals(console.log);

export type { ReportCallback };
