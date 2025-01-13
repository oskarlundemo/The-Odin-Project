import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Header} from "./components/Header.jsx";
import {Main} from "./components/Main.jsx";
import {AppProvider} from "../context/AppProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppProvider>
          <App>
              <Header/>
              <Main/>
          </App>
      </AppProvider>
  </StrictMode>,
)
