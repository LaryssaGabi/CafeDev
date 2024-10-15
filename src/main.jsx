import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1200
});

import GlobalStyle from './styles/globalStyles'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>,
)
