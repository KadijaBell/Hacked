import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorker.unregister();


