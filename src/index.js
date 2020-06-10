import React from 'react'; // siempre se importan
import ReactDOM from 'react-dom'; // para web
import './index.css'; // funciona gracias a webpack
import App from './App'; // esto significa q importamos app
import * as serviceWorker from './serviceWorker'; // para aquellas apps que simulan datos de manera local
// los datos se guardan de manera offline sin datos

// renderizamos la aplicacion que escribimos anteriormente
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
