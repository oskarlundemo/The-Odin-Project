import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {GarmentProvider} from "../context/GarmentProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <GarmentProvider>
              <App/>
          </GarmentProvider>
      </BrowserRouter>
  </StrictMode>,
)
