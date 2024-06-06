import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Auth0ProviderWithNavigator from './auth/Auth0ProviderWithNavigator'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Router>
    <Auth0ProviderWithNavigator>
      <AppRoutes />
    </Auth0ProviderWithNavigator>
   </Router>
  </React.StrictMode>,
)
