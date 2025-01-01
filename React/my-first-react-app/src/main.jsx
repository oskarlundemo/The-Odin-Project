import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Greeting, Animals, App} from './Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Animals />
      <App />
  </StrictMode>,
)
