import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import AppLv1 from './AppLv1.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLv1 />
  </StrictMode>,
)
