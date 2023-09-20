import React from 'react';
import ReactDOM from 'react-dom/client';
import DBooster from './app/index';
import App from './components/App';
import 'bootstrap-icons/font/bootstrap-icons.css';

document.addEventListener(DBooster.initEventName, (e) => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  );
});

document.addEventListener(DBooster.startEventName, (e) => DBooster.init());
