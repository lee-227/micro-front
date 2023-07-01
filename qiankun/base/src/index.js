import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { registerMicroApps, start } from 'qiankun';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerMicroApps([
  {
    name: 'react app',
    entry: '//localhost:7001',
    container: '#app-container',
    activeRule: '/react',
  },
  {
    name: 'vue app',
    entry: '//localhost:7002',
    container: '#app-container',
    activeRule: '/vue',
  },
]);

start({
  sandbox: {
    experimentalStyleIsolation: true
  }
});
