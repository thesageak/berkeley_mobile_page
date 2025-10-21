import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Privacy from './Privacy.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from './MainContent.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainContent /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/release", element: <App /> },
      { path: "/contact", element: <App /> },
      { path: "/about", element: <App /> },

    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
