import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Login from './paginas/login/Login';

//método que renderiza a página: 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);