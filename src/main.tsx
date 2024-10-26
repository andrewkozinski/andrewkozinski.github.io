import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resume from './routes/Resume.tsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectTo = params.get('redirect');
    if (redirectTo) {
      navigate(redirectTo);
    }
  }, [navigate]);

  return null;
};


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
