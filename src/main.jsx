// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routers } from './routers/index.jsx';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routers />
  </StrictMode>
)