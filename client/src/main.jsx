import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
  <AuthProvider>
    <App />
    <Toaster/>
    </AuthProvider>
  </Router>
  </StrictMode>,
)
