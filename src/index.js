import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';

ReactDOM.render(
  <React.StrictMode>
    <Counter />
=======

ReactDOM.render(
  <React.StrictMode>
    <App />
>>>>>>> 6ac37dfab2716d8a2c2d679c55f54d7f1bb74f45
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
