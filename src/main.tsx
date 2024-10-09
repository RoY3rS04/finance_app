import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Hi } from './Hi';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hi msg="FinanceApp"></Hi>
  </StrictMode>
)
