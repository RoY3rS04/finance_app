import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Hi } from './Hi';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './Layout/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout></AppLayout>,
    children: [
      {
        index: true,
        element: <Hi msg='FinanceApp'></Hi>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
