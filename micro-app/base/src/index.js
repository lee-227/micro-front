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
microApp.start({
  plugins: {
    modules: {
      // appName即应用的name值
      ['vue-child']: [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(
                /(from|import)(\s*['"])(\/vue\/)/g,
                (all) => {
                  return all.replace('/vue/', 'http://localhost:3002/vue/');
                }
              );
            }
            return code;
          },
        },
      ],
    },
  },
});
