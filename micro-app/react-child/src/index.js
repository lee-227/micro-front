import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './public-path';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
window.addEventListener('unmount', function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
});
