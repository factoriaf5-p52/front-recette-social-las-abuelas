import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { GlobalStyles } from './Global.style';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <GlobalStyles />
      <App />
  </BrowserRouter>
);