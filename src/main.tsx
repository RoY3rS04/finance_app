import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './Layout/AppLayout';
import Analysis from './Pages/Analysis';
import OriginApplication from './Pages/Origin_Application';
import FinancialStatements from './Pages/FinancialStatements';
import Ratios from './Pages/Ratios';
/*import { AppLayout } from './Layout/AppLayout';
import Dashboard from './Pages/Dashboard';
import Companies from './Pages/Companies';
import Files from './Pages/Files';
import Ratios from './Pages/Ratios';
import Reports from './Pages/Reports';
import Trends from './Pages/Trends';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout></AppLayout>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>
      },
      {
        path: '/companies',
        element: <Companies></Companies>
      },
      {
        path: '/files',
        element: <Files></Files>
      }, 
      {
        path: 'ratios',
        element: <Ratios></Ratios>
      },
      {
        path: 'reports',
        element: <Reports></Reports>
      },
      {
        path: 'trends',
        element: <Trends></Trends>
      }
    ]
  }
]);*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout></AppLayout>,
    children: [
      {
        index: true,
        element: <FinancialStatements></FinancialStatements>
      },
      {
        path: '/ratios',
        element: <Ratios></Ratios>
      },
      {
        path: '/analysis',
        element: <Analysis></Analysis>
      },
      {
        path: '/origin_application',
        element: <OriginApplication></OriginApplication>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
