import React, { StrictMode } from "react";
import { registerSW } from 'virtual:pwa-register';
import ReactDOM from 'react-dom/client'
import App from "./App";
import "./styles/input.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

registerSW();