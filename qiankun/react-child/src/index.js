import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './public-path';

const render = (props) => {
  const container = props.container
    ? props.container.querySelector('#root')
    : document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  render(props);
}

export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(
    props.container
      ? props.container.querySelector('#root')
      : document.getElementById('root')
  );
}

export async function update(props) {
  console.log('update props', props);
}
