import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import microApp from '@micro-zoe/micro-app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactChild } from './ReactChild';
import { VueChild } from './VueChild';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'react',
        element: <ReactChild />,
      },
      {
        path: 'vue',
        element: <VueChild />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);
microApp.start();
