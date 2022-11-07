import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/app-entry';
import './ui/styles/index.scss';
import './ui/styles/app.css';
import 'virtual:fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
