import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';

//método que renderiza a página: 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);