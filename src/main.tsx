import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Privacy from './pages/Privacy.tsx'
import Release from './pages/Release.tsx'
import Contact from './pages/Contact.tsx'
import About from './pages/About.tsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from './MainContent.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainContent /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/release", element: <Release /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
