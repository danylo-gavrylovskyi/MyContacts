import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const isRoot = document.getElementById('root');
if (isRoot) {
  const root = ReactDOM.createRoot(isRoot);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
