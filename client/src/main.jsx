import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowerRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowerRouter>
    <App />
  </BrowerRouter>,
)
