import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { Home, Privacy, ReleaseNotes, Contact, About } from './pages'
import { BrowserRouter, Routes, Route } from "react-router";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<Home />}/>
      <Route path="privacy" element={<Privacy />}/>
      <Route path="release-notes" element={<ReleaseNotes />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="about" element={<About />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
