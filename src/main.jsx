import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import QrCodeGenerator from "./Components/QrCodeGenerator/QrCodeGenerator";
import Navigation from './Components/Navigation/Navigation';
import QrCodeScanner from "./Components/QrCodeScanner/QrCodeScanner";
import { BrowserRouter } from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
